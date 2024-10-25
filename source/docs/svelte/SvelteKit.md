title: 如何在 SvelteKit 中使用 svelte-konva？
layout: svelte_page

---

一般来说，svelte-konva 是一个仅限客户端的库。在使用 SvelteKit 时，如果在预渲染和服务器端渲染（SSR）组件中使用 svelte-konva/Konva 功能，需要特别注意。预渲染和 SSR 发生在 Node.js 环境中，这导致 Konva 需要 [canvas](https://www.npmjs.com/package/canvas) 库，因为 Konva 也可以在 Node.js 环境中使用。当您在这种情况下使用 svelte-konva 时，您可能会遇到以下错误：

> 错误：无法找到模块 'canvas'

解决此问题有多种方法：

### 安装 canvas：

最简单的解决方案是安装 canvas：

```npm
npm i canvas
```

这将满足 Konva 的 canvas 依赖，您可以在预渲染和 SSR SvelteKit 页面中使用 svelte-konva 组件。不过这个解决方案稍显麻烦，因为您现在安装了一个并不真正需要的包，这增加了不必要的开销。或者，使用以下解决方案之一：

### 动态导入您的 svelte-konva 画布：

一个更好的方法是在客户端动态导入您的 svelte-konva 画布。假设您有一个 Svelte 组件，其中包含您的画布以及各种 svelte-konva 组件：

_MyCanvas.svelte_

```html
<script>
  import { Stage, Layer, Rect } from 'svelte-konva';
  import OtherComponentUsingSvelteKonva from './OtherComponentUsingSvelteKonva.svelte';

  const rectangleConfig = {
    /*...*/
  };
</script>

<Stage config={{ width: 1000, height: 1000 }}>
  <Layer>
    <Rect bind:config={rectangleConfig} />

    <OtherComponentUsingSvelteKonva />
  </Layer>
</Stage>
```

要在 SvelteKit 的预渲染/SSR 页面中使用此组件，您可以在 `onMount()` 中动态导入它，并使用 `<svelte:component>` 渲染它：

_+page.svelte_

```html
<script>
  import { onMount } from 'svelte';
  // typescript:
  // import type MyCanvasComponent from '$lib/MyCanvas.svelte';

  let MyCanvas;
  // typescript:
  // let MyCanvas: typeof MyCanvasComponent;

  onMount(async () => {
    // 在 onMount() 中动态导入您的画布组件，以封装所有 svelte-konva 功能
    MyCanvas = (await import('$lib/MyCanvas.svelte')).default;
  });
</script>

<div>
  <p>这是我华丽的服务器端渲染（或预渲染）页面。</p>

  <!-- 使用动态导入的 svelte-konva 画布组件，您可以像往常一样传递任何组件属性 -->
  <svelte:component this={MyCanvas} someProp="SomeString" />
</div>
```

### 使用 vite 动态导入 svelte-konva：

[vite-plugin-iso-import](https://www.npmjs.com/package/vite-plugin-iso-import) 允许您进行仅限客户端的导入，而无需上述 `onMount()` 中的手动方法。请遵循 [README](https://www.npmjs.com/package/vite-plugin-iso-import) 中的安装说明，然后您可以像这样动态导入您的组件：

_+page.svelte_

```html
<script>
  import MyCanvasComponent from '$lib/MyCanvas.svelte?client'; // 仅限客户端的导入

  // 如果页面在 SSR 中渲染，则将组件变量设置为 null，否则使用仅限客户端的导入
  let MyCanvas = import.meta.env.SSR ? null : MyCanvasComponent;
</script>

<div>
  <p>这是我华丽的服务器端渲染（或预渲染）页面。</p>

  <!-- 使用动态导入的 svelte-konva 画布组件，您可以像往常一样传递任何组件属性 -->
  <svelte:component this={MyCanvas} someProp="SomeString" />
</div>
```

目前，vite-plugin-iso-import 无法自动修复 TypeScript 中 .svelte 文件内部的智能感知。请查阅 [README](https://www.npmjs.com/package/vite-plugin-iso-import) 以获取此问题的解决方法。或者查看下面的演示。

说明：此 SvelteKit 应用中可用的每个页面以不同的方式呈现，包含一个 `svelte-konva` 画布。展示了两种动态导入方法。在预渲染页面上使用 `onMount()` 进行动态加载，并在 SSR 页面上使用 [vite-plugin-iso-import](https://www.npmjs.com/package/vite-plugin-iso-import) 进行动态加载。尝试检查每次导航时发出的网络请求，以了解 SvelteKit 中不同渲染方法的差异。

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/sveltekit?file=/src/routes/%2Bpage.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>