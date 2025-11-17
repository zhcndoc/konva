<script>
    import { onMount } from "svelte";
    import { Stage, Layer, Label, Tag, Text, Circle } from "svelte-konva";

    let circles = $state([]);

    const COLORS = [
        "black",
        "green",
        "blue",
        "red",
        "yellow",
        "magenta",
        "cyan",
        "purple",
        "orange",
        "pink",
    ];

    onMount(() => {
        for (let i = 0; i < 10; i++) {
            circles[i] = {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                radius: 60 * Math.random() + 20,
                fill: COLORS[i],
                name: COLORS[i],
            };
        }
    });

    let labelConfig = $state({
        x: 0,
        y: 0,
        opacity: 0.8,
        visible: false,
    });

    let labelText = $state("");

    function handleMouseEnter(e) {
        const target = e.target;

        let hoveredElementPos = target.getPosition();
        let hoveredElementRadius = target.attrs.radius;
        let hoveredElementName = target.attrs.name;

        labelConfig.x = hoveredElementPos.x;
        labelConfig.y = hoveredElementPos.y - hoveredElementRadius;

        labelText = hoveredElementName;

        labelConfig.visible = true;
    }

    function handleMouseLeave() {
        labelConfig.visible = false;
    }
</script>

<Stage width={window.innerWidth} height={window.innerHeight}>
    <Layer>
        {#each circles as config}
            <Circle
                {...config}
                onmouseenter={handleMouseEnter}
                onmouseleave={handleMouseLeave}
            />
        {/each}

        <Label {...labelConfig}>
            <Tag
                fill="black"
                ,
                pointerDirection="down"
                pointerWidth={10}
                pointerHeight={10}
                lineJoin="round"
                shadowColor="black"
                shadowBlur={10}
                shadowOffsetX={10}
                shadowOffsetY={10}
                shadowOpacity={0.5}
            />
            <Text text={labelText} fontSize={18} padding={5} fill="white" />
        </Label>
    </Layer>
</Stage>
