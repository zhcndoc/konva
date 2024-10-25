title: 使用 Vue 和 Konva 保存和加载画布
layout: vue_page

---

## 如何使用 Vue 序列化和反序列化 Konva 阶段？

纯 `Konva` 有一个特殊机制来使用 `node.toJSON()` 和 `Node.create(json)` 函数保存/加载完整的画布阶段。
[查看演示](/docs/data_and_serialization/Simple_Load.html)。

但是如果您正在使用 `vue-konva`，我们不建议使用这些方法。在 `vue-konva` 中，您应该在 Vue 组件中定义应用程序的状态。该状态映射到带有模板的节点。要保存/加载完整的阶段，您只需保存/加载应用程序的状态，您**不需要保存 Konva 的内部和节点**。

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/vue-demos/save-load?hidenavigation=1&view=preview&fontsize=10&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
