title: 如何在 Svelte 中缓存画布形状
layout: svelte_page

---

如果您想在 Svelte 应用中缓存一个节点，您需要访问 Konva 节点并使用 `node.cache()` 函数。

要获取对节点的访问，您可以使用 `handle` 属性。有关更多信息，请参见 [Konva Node](/docs/svelte/Konva_Node.html)。

**指示：尝试拖动整个舞台。然后再尝试缓存的组。**

您应该会看到更好的性能。

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/cache?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>