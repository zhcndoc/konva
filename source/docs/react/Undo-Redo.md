title: 如何在 React 中实现画布的撤销/重做功能？
layout: react_page
---

要在 `React` 中实现撤销/重做功能，您无需使用 `Konva` 的序列化和反序列化方法。

您只需保存应用程序中所有状态更改的历史记录。有很多方法可以做到这一点。如果使用不可变结构，可能会更简单。

说明：尝试移动方块。然后撤销/重做您的操作。

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/react-demos/undo_redo?hidenavigation=1&view=split&fontsize=10" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>