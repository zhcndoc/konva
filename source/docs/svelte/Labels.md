title: 使用 Svelte 创建标签
layout: svelte_page

---

在 Konva 中创建标签是一个多步骤的过程，因为一个 Label 实例需要包含 Tag 和 Text 实例才能正常工作。在 svelte-konva 中，Tag 和 Text 组件可以很容易地嵌套在 Label 组件内部，以自动创建一个正确的标签，而不必手动连接这些组件。

将鼠标悬停在圆圈上以显示工具提示，

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/labels?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>