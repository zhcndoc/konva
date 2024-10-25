title: 如何使用 React 绘制自定义形状？
layout: react_page
---

要使用 `react-konva` 创建自定义形状，我们应该使用 `Shape` 组件。

在创建自定义形状时，我们需要定义一个绘制函数，该函数会传递给 Konva.Canvas 渲染器。

我们可以使用渲染器来访问 HTML5 Canvas 上下文，并使用如 `context.fillStrokeShape(shape)` 的特殊方法，该方法自动处理填充、描边和应用阴影。

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/react-demos/custom_shape?hidenavigation=1&view=split&fontsize=10" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>