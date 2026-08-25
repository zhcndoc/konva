---
title: 如何使用 Svelte 缓存画布形状
sidebar_label: 缓存
hide_table_of_contents: true
slug: Cache.html
description: "了解如何在 Svelte 中使用 svelte-konva 缓存画布形状，通过 node.cache() 提升渲染性能。"
---

如果你想在 Svelte 应用中缓存节点，则需要访问 Konva 节点并使用 `node.cache()` 函数。

要访问节点，可以使用组件实例的 `node` 属性。有关更多信息，请参阅 [Konva Node](/docs/svelte/Konva_Node.html)。

**说明：尝试拖动整个舞台。然后再试试缓存的组。**

你应该会看到性能大幅提升。

<iframe loading="lazy" src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/cache?file=/src/App.svelte" style={{width: '100%', height:'800px', border: '0px', borderRadius: '4px', overflow: 'hidden'}} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
