<script>
    import { onMount } from "svelte";
    import { Stage, Layer, Circle } from "svelte-konva";
    import Konva from "konva";

    const items = $state([]);

    onMount(() => {
        for (let i = 0; i < 10; i++) {
            items.push({
                component: null,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                radius: 50,
                id: i.toString(),
                fill: Konva.Util.getRandomColor(),
                draggable: true,
            });
        }
    });

    function handleDragstart(e) {
        const dragItemId = e.target.id();
        const item = items.find((i) => i.id === dragItemId);

        // move dragged element to the top using Konva functions
        item.component.handle.moveToTop();
    }
</script>

<Stage width={window.innerWidth} height={window.innerHeight}>
    <Layer>
        {#each items as config}
            <Circle
                {...config}
                bind:this={config.component}
                ondragstart={handleDragstart}
            />
        {/each}
    </Layer>
</Stage>
