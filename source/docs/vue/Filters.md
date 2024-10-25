title: 如何使用 Vue 和 Konva 应用画布滤镜？
layout: vue_page

---

要应用滤镜，您需要手动缓存 `Konva.Node`。您可以在 `created()` 方法中做到这一点。
每当您更新它们的样式时，可能需要在 `updated()` 中重新缓存节点。

说明：点击矩形以查看更改

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/vue-demos/filters?hidenavigation=1&view=preview&fontsize=10&file=/src/App.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>