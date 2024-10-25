title: 使用 Vue 绘制画布形状
layout: vue_page

---

所有的 `vue-konva` 组件都对应于具有前缀 'v-' 的同名 Konva 组件。所有适用于 Konva 对象的参数都可以作为配置添加到相应的 `vue-konva` 组件的 prop 中。

核心形状包括： `v-rect`、`v-circle`、`v-ellipse`、`v-line`、`v-image`、`v-text`、`v-text-path`、`v-star`、`v-label`、`v-path`、`v-regular-polygon`。您还可以创建 [自定义形状](/docs/vue/Custom_Shape.html)。

要获取有关 Konva 的更多信息，您可以阅读 [Konva 概述](/docs/overview.html)。

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/vue-demos/shapes?hidenavigation=1&view=preview&fontsize=10&file=/src/App.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>