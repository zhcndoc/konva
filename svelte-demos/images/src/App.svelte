<script>
    import { onMount } from "svelte";
    import { Stage, Layer, Image } from "svelte-konva";

    let image = $state(null);

    onMount(() => {
        const img = document.createElement("img");
        img.src = "https://konvajs.org/assets/yoda.jpg";
        img.onload = () => {
            image = img;
        };
    });
</script>

<Stage width={window.innerWidth} height={window.innerHeight}>
    <Layer>
        <Image {image} />
    </Layer>
</Stage>
