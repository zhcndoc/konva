title: HTML5 Canvas 形状组
---

要将多个形状组合在一起，我们可以实例化一个 `Konva.Group()` 对象，然后使用 `add()` 方法将形状添加到其中。在我们想要同时变换多个形状时，将形状分组在一起是非常方便的，例如，如果我们想要一次移动、旋转或缩放多个形状。组还可以添加到其他组中，以创建更复杂的节点树。有关属性和方法的完整列表，请查看 [Konva.Group 文档](/api/Konva.Group.html)。

{% iframe /downloads/code/groups_and_layers/Groups.html %}

{% include_code Konva Groups Demo groups_and_layers/Groups.html %}