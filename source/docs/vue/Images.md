title: 如何在 Vue 中在画布上绘制图像？
layout: vue_page

---

对于图像，你需要手动创建原生的 `window.Image` 实例或 `canvas` 元素，并将其用作 `v-image` 组件的图像属性。

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/vue-demos/images?hidenavigation=1&view=preview&fontsize=10&file=/src/App.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>