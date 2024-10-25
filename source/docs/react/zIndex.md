title: 如何在 React 中改变节点的 zIndex？
layout: react_page
---

## 如何在 `react-konva` 中改变 zIndex 和重新排序组件？

当你直接使用 `Konva` 时，有许多方法可以改变节点的顺序，比如 `node.zIndex(5)`、`node.moveToTop()` 等等。[教程](/docs/groups_and_layers/Layering.html)。

但是，在使用 React 框架时，建议不要使用这些方法。

`react-konva` 尝试严格按照你在 `render()` 中描述的顺序来处理节点。因此，代替手动改变 zIndex，你只需正确更新应用的状态，以便 `render()` 方法返回正确的顺序。

不要在你的画布组件中使用 `zIndex`。

如果你想暂时将一个节点移动到另一个容器中，例如当你想显示一个覆盖层时，可以查看 [Canvas Portal 演示](/docs/react/Canvas_Portal.html)。

说明：尝试拖动一个圆形。看看它是如何移动到顶部的。我们通过操作状态来实现这一点，从而使 `render()` 方法返回正确的顺序。


<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/react-demos/zIndex?hidenavigation=1&view=split&fontsize=10" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>