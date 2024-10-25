title: 如何在 Svelte 和 Konva 中应用画布滤镜？
layout: svelte_page

---

要应用滤镜，您需要手动缓存 `Konva.Node`。您可以在 `onMount()` 方法中进行初始化。

如果您动态更改节点的样式，则需要手动重新缓存它们，以便更改在画布上生效。这可以在更改后直接通过调用受影响节点的 `cache()` 方法来完成（如演示中所示），或者在 `afterUpdate()` 方法中进行，以便在组件每次状态更改时自动重新缓存节点。

指示：悬停在矩形上以查看更改

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/filters?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
