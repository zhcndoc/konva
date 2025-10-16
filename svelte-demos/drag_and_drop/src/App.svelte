<script>
    import { Stage, Layer, Text } from "svelte-konva";

    let isDragging = $state(false);
</script>

<Stage width={window.innerWidth} height={window.innerHeight}>
    <Layer>
        <Text
            text="Draggable Text"
            x={50}
            y={50}
            fill={isDragging ? "green" : "black"}
            draggable
            ondragstart={() => (isDragging = true)}
            ondragend={() => (isDragging = false)}
        />
    </Layer>
</Stage>
