<script>
    import { onMount } from "svelte";
    import { Stage, Layer, Group, Star } from "svelte-konva";

    let group = $state();
    let shouldCache = $state(false);

    const list = $state([]);

    onMount(() => {
        for (let n = 0; n < 500; n++) {
            list.push({
                id: n.toString(),
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotation: Math.random() * 180,
                scale: Math.random(),
            });
        }
    });

    $effect(() => {
        if (group) {
            if (shouldCache) {
                group.handle.cache();
            } else {
                group.handle.clearCache();
            }
        }
    });
</script>

<div>
    <Stage width={window.innerWidth} height={window.innerHeight} draggable>
        <Layer>
            <Group bind:this={group}>
                {#each list as item}
                    <Star
                        x={item.x}
                        y={item.y}
                        rotation={item.rotation}
                        id={item.id}
                        numPoints={5}
                        innerRadius={30}
                        outerRadius={50}
                        fill="#89b717"
                        opacity={0.8}
                        shadowColor="black"
                        shadowBlur={10}
                        shadowOpacity={0.6}
                        scaleX={item.scale}
                        scaleY={item.scale}
                    />
                {/each}
            </Group>
        </Layer>
    </Stage>

    <div class="cache">
        <input type="checkbox" bind:checked={shouldCache} /> cache shapes
    </div>
</div>

<style>
    .cache {
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
