title: 如何在 React 和 Konva 中应用画布动画？
layout: react_page
---

Konva 本身有两种动画方法：[Tween](/docs/tweens/Linear_Easing.html) 和 [Animation](/docs/animations/Rotation.html)。你可以手动将它们应用到节点上。

对于简单的用例，我们建议使用 `node.to()` 方法。对于更复杂的动画，请查看 [复杂的 react-konva 动画示例](/docs/react/Complex_Animations.html)。

该示例使用 [refs API](/docs/react/Access_Konva_Nodes.html) 直接访问形状实例。

说明：尝试移动一个矩形。

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/react-demos/simple_animations?hidenavigation=1&view=split&fontsize=10" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>