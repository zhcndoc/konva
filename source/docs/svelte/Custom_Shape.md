title: 如何使用 Svelte 绘制自定义画布形状？
layout: svelte_page

---

要使用 `svelte-konva` 创建自定义形状，我们应该使用 `Shape` 组件。

在创建自定义形状时，我们需要定义一个绘制函数，该函数接收一个 Konva.Canvas 渲染器。

我们可以使用渲染器访问 HTML5 Canvas 上下文，并使用像 `context.fillStrokeShape(shape)` 这样的特殊方法，它可以自动处理填充、描边和应用阴影。

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/custom_shape?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>