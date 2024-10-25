title: 如何在 Vue 中缓存画布形状
layout: vue_page

---

如果你想在 `vue` 应用中缓存一个节点，你需要访问 Konva 节点并使用 `node.cache()` 函数。

要访问一个节点，你可以使用引用和 `component.getNode()` 方法：

**说明：尝试拖动整个舞台。然后再尝试使用缓存组。**

你应该会看到性能有显著改善。

```javascript
// 在模板中:
<v-group ref="group">
// 在代码中的后面部分:
this.$refs.group.getNode().cache();
```

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/vue-demos/cache?hidenavigation=1&view=preview&fontsize=10&file=/src/App.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>