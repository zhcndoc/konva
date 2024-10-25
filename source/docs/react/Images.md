title: 如何在画布上使用 React 绘制图像？
layout: react_page
---

如果你查看图像 [教程](/docs/shapes/Image.html) 和 [API 文档](/api/Konva.Image.html)，你会看到需要使用 `window.Image` 实例作为 `Konva.Image` 的 `image` 属性。因此，你需要手动创建和下载它。

此外，你可以使用全新的 react 钩子 [use-image](https://github.com/konvajs/use-image) 来处理图像加载，或者你可以使用 React 的生命周期方法来创建自己的自定义组件。

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/react-demos/images?hidenavigation=1&view=split&fontsize=10" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>