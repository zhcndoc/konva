---
title: 如何在 SvelteKit 中使用 svelte-konva?
sidebar_label: SvelteKit
hide_table_of_contents: true
slug: SvelteKit.html
description: "了解如何通过浏览器检查或动态导入在 SvelteKit SSR 和预渲染中使用 svelte-konva。"
---

一般情况下，svelte-konva 是一个仅限客户端的库。在使用 SvelteKit 时，如果在预渲染和服务器端渲染（SSR）组件中使用 svelte-konva/Konva 功能，需要特别小心。预渲染和 SSR 在 Node.js 环境中进行。如果你在这种环境下使用任何 svelte-konva 功能，服务器端会抛出错误：

> 错误：svelte-konva：该库只能在浏览器环境中使用，但当前在服务器环境中使用。

有多种解决这个问题的方法：

### 将 svelte-konva 组件包裹在浏览器环境检查中

一个粗略的解决方案是将所有 svelte-konva 代码包裹在 SvelteKit 的浏览器环境检查中。只建议在项目较小时使用，因为大量 if 块会很快变得混乱。对于较大的项目，请使用下面介绍的动态导入方法。

```html
<script>
  import { browser } from "$app/environment";
  import { Stage, Layer, Rect } from "svelte-konva";
</script>

{#if browser}
<Stage width="{1000}" height="{1000}">
  <Layer>
    <Rect x="{100}" y="{100}" width="{400}" height="{200}" fill="blue" />
  </Layer>
</Stage>
{/if}
```

### 动态导入你的 svelte-konva 画布：

一个更好的方法是在客户端动态导入你的 svelte-konva 画布。假设你有一个包含各种 svelte-konva 组件的 Svelte 组件：

_MyCanvas.svelte_

```html
<script>
  import { Stage, Layer, Rect } from "svelte-konva";
  import OtherComponentUsingSvelteKonva from "./OtherComponentUsingSvelteKonva.svelte";

  const rectangleConfig = {
    /*...*/
  };
</script>

<Stage width="{1000}" height="{1000}">
  <Layer>
    <Rect {...rectangleConfig} />

    <OtherComponentUsingSvelteKonva />
  </Layer>
</Stage>
```

要在 SvelteKit 的预渲染/SSR 页面中使用此组件，您可以在 `onMount()` 中动态导入它，并在定义后使用 `<svelte:component>` 渲染：

_+page.svelte_

```html
<script>
  import { browser } from "$app/environment";

  let MyCanvas;
  // typescript:
  // let MyCanvas: typeof MyCanvasComponent;

  onMount(async () => {
    // 在 onMount() 中动态导入封装所有 svelte-konva 功能的画布组件
    MyCanvas = (await import('$lib/MyCanvas.svelte')).default;
  });
</script>

<div>
  <p>这是我的华丽的服务器端渲染（或预渲染）页面。</p>

  <!-- 使用动态导入的 svelte-konva 画布组件，使用 svelte:component 块，您可以按常规传递任何组件属性 -->
  <svelte:component this={MyCanvas} someProp="SomeString" />
</div>
```

### 使用 vite 动态导入 svelte-konva：

<iframe loading="lazy" src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/sveltekit?file=/src/routes/%2Bpage.svelte" style={{width: '100%', height:'800px', border: '0px', borderRadius: '4px', overflow: 'hidden'}} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
