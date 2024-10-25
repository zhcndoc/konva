title: 如何使用 Vue 绘制自定义画布形状？
layout: vue_page

---

要使用 `vue-konva` 创建自定义形状，我们应该使用 `v-shape` 组件。

在创建自定义形状时，我们需要定义一个绘图函数，该函数会传入一个 Konva.Canvas 渲染器。

我们可以使用渲染器来访问 HTML5 Canvas 上下文，并使用像 `context.fillStrokeShape(shape)` 这样的特殊方法，该方法会自动处理填充、描边和应用阴影。

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/vue-demos/custom_shape?hidenavigation=1&view=preview&fontsize=10&file=/src/App.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>