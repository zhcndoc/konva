<script>
    import { Stage, Layer, Rect } from "svelte-konva";

    function handleClick(e) {
        window.alert(`Clicked on rectangle: ${e.type}`);
    }
</script>

<Stage width={window.innerWidth} height={window.innerHeight}>
    <Layer>
        <Rect
            x={100}
            y={100}
            width={400}
            height={200}
            fill="blue"
            onpointerclick={handleClick}
        />
    </Layer>
</Stage>
