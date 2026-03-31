---
title: 如何在 Svelte 中缓存画布形状
sidebar_label: 缓存
hide_table_of_contents: true
slug: Cache.html
description: "学习如何在 Svelte 中使用 svelte-konva 缓存画布形状，通过 node.cache() 提高渲染性能。"
---

如果你想在 Svelte 应用中缓存一个节点，你需要能够访问 Konva 节点并使用 `node.cache()` 函数。

要访问节点，你可以使用组件实例的 `node` 属性。请参阅 [Konva 节点](/docs/svelte/Konva_Node.html) 以获取更多信息。

**说明：尝试拖动整个舞台。然后尝试使用缓存的组再次操作。**

你应该会看到性能有了显著提升。

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/new/svelte-demos/cache?file=/src/App.svelte" style={{width: '100%', height:'800px', border: '0px', borderRadius: '4px', overflow: 'hidden'}} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
