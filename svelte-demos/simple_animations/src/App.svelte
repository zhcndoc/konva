<script>
    import { Stage, Layer, Rect, RegularPolygon } from "svelte-konva";
    import Konva from "konva";
    import { tick, onMount } from "svelte";

    let stage;
    let rect;
    let hexagon;

    onMount(async () => {
        const amplitude = 100;
        const period = 5000; // ms

        // Wait for all handles to become defined
        await tick();

        const centerX = stage.handle().getWidth() / 2;

        // example of Konva.Animation
        const anim = new Konva.Animation(function (frame) {
            hexagon.handle.setX(
                amplitude * Math.sin((frame.time * 2 * Math.PI) / period) +
                    centerX,
            );
        }, hexagon.handle.getLayer());

        anim.start();
    });

    function changeSize(e) {
        // to() is a method of `Konva.Node` instances
        e.target.to({
            scaleX: Math.random() + 0.8,
            scaleY: Math.random() + 0.8,
            duration: 0.2,
        });
    }
</script>

<Stage width={window.innerWidth} height={window.innerHeight} bind:this={stage}>
    <Layer>
        <Rect
            width={50}
            height={50}
            fill="green"
            draggable
            bind:this={rect}
            ondragstart={changeSize}
            ondragend={changeSize}
        />
        <RegularPolygon
            x={200}
            y={200}
            sides={6}
            radius={20}
            fill="red"
            stroke={"black"}
            strokeWidth={4}
            bind:this={hexagon}
        />
    </Layer>
</Stage>
