---
title: 使用 Svelte 和 Konva 保存和加载画布
sidebar_label: 保存和加载
hide_table_of_contents: true
slug: Save_Load.html
description: "学习如何通过序列化您的应用状态而不是 Konva 内部内容，在 Svelte 中配合 Konva 保存和加载画布状态。"
---

原生 Konva 可以使用 `node.toJSON()` 序列化节点树及其可序列化属性。可以使用 `Konva.Node.create(json)` [（参见演示）](/docs/data_and_serialization/Simple_Load.html) 恢复它们。图像、事件处理程序和自定义绘制函数需要单独恢复。

使用 svelte-konva 时，应保存应用状态。状态必须包含 stage 所需的数据。不要保存 Konva 内部内容和节点。

该演示会将 JSON 数据保存到 `localStorage` 并从中读取。您也可以使用其他存储方式。

<iframe loading="lazy" src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/save_load?file=/src/App.svelte" style={{width: '100%', height:'800px', border: '0px', borderRadius: '4px', overflow: 'hidden'}} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
