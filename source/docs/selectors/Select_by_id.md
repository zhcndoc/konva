title: HTML5 Canvas 按 id 选择形状教程
---

要使用 Konva 按 id 选择形状，我们可以使用 `find()` 方法和 # 选择器。
`find()` 方法始终返回一个元素数组，即使我们期待它返回一个元素。
如果你只需要一个元素，可以使用 `findOne()` 方法。
`find()` 方法适用于任何节点，包括舞台、图层、组和形状。

说明：按下 "激活矩形" 按钮以按 id 选择矩形并执行过渡。你也可以拖放矩形。

{% iframe /downloads/code/selectors/Select_by_id.html %}

{% include_code Konva 按 id 选择形状演示 selectors/Select_by_id.html %}