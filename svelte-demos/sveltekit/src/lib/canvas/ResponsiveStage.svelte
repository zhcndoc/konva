<script lang="ts">
    import Stage from 'svelte-konva/Stage.svelte';
    import { onMount, type Snippet } from 'svelte';
    import type { KonvaEventHooks } from 'svelte-konva';

    type Props = {
        children: Snippet;
        stage?: ReturnType<typeof Stage> | undefined;
        container?: HTMLDivElement;
        width?: number;
        height?: number;
    } & KonvaEventHooks;

    let {
        children,
        stage = $bindable(),
        container = $bindable(),
        width = $bindable(),
        height = $bindable(),
        onpointerdblclick,
        onpointerdown,
        onpointerup,
        onpointermove,
        onmouseout
    }: Props = $props();

    const STAGE_BASE_WIDTH = 1000; // Base width of the stage used to calculate the required scale at any container width to make sure that the examples are all appropriately scaled on each window size

    let config = $state({
        width: STAGE_BASE_WIDTH,
        height: 1000,
        scaleX: 1,
        scaleY: 1
    });

    function updateStageSize() {
        if (!container) {
            return;
        }

        // Subtract 2 px because of 2px border of div container
        config.width = container.offsetWidth - 2;
        config.height = container.offsetHeight - 2;
        let scale = config.width / STAGE_BASE_WIDTH;
        config.scaleX = scale;
        config.scaleY = scale;

        width = config.width;
        height = config.height;
    }

    onMount(() => {
        window.addEventListener('resize', updateStageSize);

        updateStageSize();
    });
</script>

<div bind:this={container} style="max-height: 30vh; width: 100%;">
    <Stage
        {...config}
        divWrapperProps={{ style: 'border: solid grey 1px;' }}
        bind:this={stage}
        {onpointerdblclick}
        {onpointerdown}
        {onpointerup}
        {onpointermove}
        {onmouseout}
    >
        {@render children()}
    </Stage>
</div>