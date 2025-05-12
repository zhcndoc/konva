---
title: 如何使用 Svelte 和 Konva 调整画布形状的大小和旋转？
sidebar_label: 变换器
hide_table_of_contents: true
slug: Transformer.html
---

您可以通过使用 svelte-konva 变换器组件来使用变换器工具。通常，这种方法需要与原生 Konva API 进行一些交互。您可以通过手动将形状的句柄附加到变换器来将形状附加到变换器，使用 `nodes()` 函数。svelte-konva 还会在 `transformend` 时自动保持您的配置与 Konva 节点同步。有关更多详细信息，请参阅 [绑定](/docs/svelte/Bindings.html) 文档页面。

有关选择和变换功能的更详细示例，请参见 svelte-konva 仓库中的 [示例](https://github.com/konvajs/svelte-konva/blob/master/src/routes/examples/transform/Transform.svelte)。

**说明：** 单击形状以选择它。

<iframe 
  src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/transformer?file=/src/App.svelte" 
  style={{
    width: "100%",
    height: "800px",
    border: 0,
    borderRadius: "4px",
    overflow: "hidden"
  }}
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>