title: 使用 Vue 进行拖放画布形状
layout: vue_page

---

要为画布上的任何节点启用拖放功能，只需将 `draggable: true` 属性传递到组件中。

当你拖放形状时，建议将其位置保存到你的应用程序存储中。你可以使用 `dragmove` 和 `dragend` 事件来实现这一点。

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/vue-demos/drag_and_drop?hidenavigation=1&view=preview&fontsize=10&file=/src/App.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>