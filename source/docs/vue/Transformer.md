title: 如何使用 vue 和 konva 调整画布形状的大小和旋转？
layout: vue_page

---

目前还没有好的纯声明式“vue方式”来使用 Transformer 工具。
但你仍然可以通过对 Konva 节点进行一些小的手动操作来使用它。
这样就能正常工作。

想法：你需要创建 `Konva.Transformer` 节点，并手动将其附加到所需节点。

说明：点击形状以选择它。

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/vue-demos/transformer?hidenavigation=1&view=preview&fontsize=10&file=/src/App.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>