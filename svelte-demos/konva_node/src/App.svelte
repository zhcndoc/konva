<script>
    import { Stage, Layer, Text, Circle } from "svelte-konva";

    // Will be holding the svelte-konva component reference of the circle
    let circle;

    function pulseShape(shape) {
        // use Konva node methods to animate a shape
        shape.to({
            scaleX: 1.5,
            scaleY: 1.5,
            onFinish: () => {
                shape.to({
                    scaleX: 1,
                    scaleY: 1,
                });
            },
        });
    }

    function handleStageClick() {
        // Now access the konva node using the handle property
        pulseShape(circle.handle);
    }

    function handleCircleClick(e) {
        // another way to access Konva nodes is to just use the event target
        pulseShape(e.target);
        // prevent bubbling of the click event to the stage
        e.cancelBubble = true;
    }
</script>

<Stage
    width={window.innerWidth}
    height={window.innerHeight}
    onclick={handleStageClick}
    ontap={handleStageClick}
>
    <Layer>
        <Text x={10} y={10} text="Click on any place to see an animation" />

        <Circle
            x={window.innerWidth / 2}
            y={window.innerHeight / 2}
            radius={80}
            fill="red"
            onclick={handleCircleClick}
            ontap={handleCircleClick}
            ondblclick={handleCircleClick}
            bind:this={circle}
        />
    </Layer>
</Stage>
