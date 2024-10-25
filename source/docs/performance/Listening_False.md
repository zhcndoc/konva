## 标题: 禁用监听形状提示

您可以将 `listening(false)` 设置为形状，以从命中图中移除它。这意味着该形状将在命中检测中不可见（尽管在画布上可见），因此它不会触发任何鼠标或触摸的交互。同时，这样的节点将在 `container.getIntersection()` 和 `container.getAllIntersections()` 方法中被忽略。

将 `listening(false)` 设置为节点将提高性能。

例如，我们有一个按钮（组），包含一个矩形和文本。我们需要监听按钮的点击事件。在这种情况下，我们可以将文本从命中图中移除，仅监听矩形的点击事件。

{% iframe /downloads/code/performance/Listening_False.html %}

{% include_code Konva 禁用监听形状示例 performance/Listening_False.html %}