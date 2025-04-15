<script>
    import { Stage, Layer, Rect, Transformer } from "svelte-konva";
    import Konva from "konva";

    const rectangles = $state([
        {
            rotation: 0,
            x: 10,
            y: 10,
            width: 100,
            height: 100,
            scaleX: 1,
            scaleY: 1,
            fill: "red",
            name: "rect1",
            draggable: true,
        },
        {
            rotation: 0,
            x: 150,
            y: 150,
            width: 100,
            height: 100,
            scaleX: 1,
            scaleY: 1,
            fill: "green",
            name: "rect2",
            draggable: true,
        },
    ]);

    let transformer;
    let selectedShapeName = "";

    function handleStageMouseDown(e) {
        const target = e.target;
        // clicked on stage - clear selection
        if (target === target.getStage()) {
            selectedShapeName = "";
            updateTransformer();
            return;
        }

        // clicked on transformer - do nothing
        const clickedOnTransformer =
            target.getParent().className === "Transformer";
        if (clickedOnTransformer) {
            return;
        }

        // find clicked rect by its name
        const name = target.name();
        const rect = rectangles.find((r) => r.name === name);
        if (rect) {
            selectedShapeName = name;
        } else {
            selectedShapeName = "";
        }

        updateTransformer();
    }

    function handleTransformEnd() {
        // find element in our state
        const rect = rectangles.find((r) => r.name === selectedShapeName);

        // change fill
        rect.fill = Konva.Util.getRandomColor();
    }

    function updateTransformer() {
        if (!transformer) return;

        // here we need to manually attach or detach Transformer node
        const stage = transformer.handle.getStage();

        const selectedNode = stage.findOne("." + selectedShapeName);

        // do nothing if selected node is already attached
        if (selectedNode === transformer.handle.node()) {
            return;
        }

        if (selectedNode) {
            // attach to another node
            transformer.handle.nodes([selectedNode]);
        } else {
            // remove transformer
            transformer.handle.nodes([]);
        }
    }
</script>

<Stage
    width={window.innerWidth}
    height={window.innerHeight}
    onmousedown={handleStageMouseDown}
    ontouchstart={handleStageMouseDown}
>
    <Layer>
        {#each rectangles as rectangle}
            <Rect {...rectangle} ontransformend={handleTransformEnd} />
        {/each}
        <Transformer bind:this={transformer} />
    </Layer>
</Stage>
