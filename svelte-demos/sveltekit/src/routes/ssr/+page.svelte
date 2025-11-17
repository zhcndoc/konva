<script lang="ts">
	import { browser } from "$app/environment";
	import Counter from "../Counter.svelte";
	import type KonvaCanvas from "$lib/canvas/KonvaCanvas.svelte";

	// Only import the component on the client-side (browser = true) otherwise return an empty promise
	const MyCanvas: Promise<typeof KonvaCanvas> = browser
		? import("$lib/canvas/KonvaCanvas.svelte").then((module) => module.default)
		: new Promise(() => {});

	let count = $state(10);
</script>

<svelte:head>
	<title>SSR</title>
	<meta name="description" content="svelte-konva in SSR pages" />
</svelte:head>

<section>
	<h2>change the counter or drag the stars for party mode 🥳</h2>

	<p>
		this page is server side rendered with svelte-konva being dynamically
		imported using <a
			href="https://www.npmjs.com/package/vite-plugin-iso-import"
		>
			vite-plugin-iso-import
		</a>
	</p>

	<Counter bind:count />

	<!-- Use your dynamically imported svelte-konva canvas component once it becomes defined, you can pass any component props as usual -->
	{#await MyCanvas}
		<p>Loading...</p>
	{:then Component}
		<Component starCount={count} />
	{:catch error}
		<p>Something went wrong: {error.message}</p>
	{/await}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
