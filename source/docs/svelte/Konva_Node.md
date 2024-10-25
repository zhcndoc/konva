title: 访问 Konva 节点
layout: svelte_page

---

在某些情况下，您可能需要直接访问 svelte-konva 组件的底层 Konva 节点。您可以通过绑定组件的 `handle` 属性或在 Konva 事件的有效负载中访问它来实现。

**注意：** 节点最初是未定义的，并在组件挂载后的一次 tick 中变为定义。如果您想在组件挂载后直接访问该节点，则需要在 handle 属性变为定义之前等待 Svelte 的 `tick()`。

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/konva_node?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>