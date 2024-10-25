title: 如何在 react-konva 中使用传送门？
layout: react_page

---

## react-konva 如何控制 zIndex？

`react-konva` 严格按照您在渲染中定义的元素顺序进行处理。有关更多信息，请查看 [zIndex 演示](/docs/react/zIndex.html)。

## 使用 `react-konva` 将节点移动到另一个容器中是否可能？

目前 `react-konva` 不支持 `React.createPortal` API。

但我们可以使用 [react-konva-utils 包](https://github.com/konvajs/react-konva-utils) 中的 `<Portal />` 组件。

这样的传送门在您想要将节点临时移动到另一个容器时非常有用。常见用例包括：

1. 将拖动的形状移动到另一个图层以提高性能
2. 在其他元素上方显示一个元素，但仍然将其深深保持在组件树中

**说明：尝试拖动一个矩形。您会看到它在顶部是可见的，但在渲染中它仍然是第一个元素。**

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/react-demos/canvas_portal?hidenavigation=1&view=split&fontsize=10" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>