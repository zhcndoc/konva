title: 如何在 Vue 中更改节点的 zIndex？
layout: vue_page

---

## 如何在 `vue-konva` 中更改 zIndex 和重新排序组件？

当您直接使用 `Konva` 时，有许多方法可以更改节点的顺序，例如 `node.zIndex(5)`、`node.moveToTop()` 等。 [教程](/docs/groups_and_layers/Layering.html)。

但是，在使用 `vue` 框架时，不建议使用这些方法。

`vue-konva` 尝试严格按照您在 `<template>` 中描述的节点顺序。因此，您只需正确更新应用程序的数据，以便 `<template>` 中的组件保持正确的顺序，而不是手动更改 `zIndex`。

不要为您的画布组件使用 `zIndex`。

说明：尝试拖动一个圆形。看看它是如何到达顶部的。我们通过操纵应用程序的数据来完成这项工作，以便 `<template>` 中的圆形保持正确的顺序。

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/vue-demos/zIndex?hidenavigation=1&view=preview&fontsize=10&file=/src/App.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>