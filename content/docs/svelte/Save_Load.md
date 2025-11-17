---
title: 使用 Svelte 和 Konva 保存和加载画布
sidebar_label: 保存和加载
hide_table_of_contents: true
slug: Save_Load.html
---

原生 Konva 具有特殊机制，可以使用 `node.toJSON()` 和 `node.create(json)` 函数保存/加载整个画布舞台 [(查看演示)](/docs/data_and_serialization/Simple_Load.html)。

在使用 svelte-konva 时，不推荐使用这种方法。在 svelte-konva 中，您应该保存应用程序的状态，这也类似于所需的完整舞台数据。因此不需要保存任何 Konva 内部内容和节点。

演示将数据作为 JSON 保存和从 localstorage 检索，但您可以自由使用任何您喜欢的保存方式。

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/new/svelte-demos/save_load?file=/src/App.svelte" style={{width: '100%', height:'800px', border: '0px', borderRadius: '4px', overflow: 'hidden'}} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>