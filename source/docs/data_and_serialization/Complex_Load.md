title: 从 JSON 加载 HTML5 Canvas 阶段的教程
---

## 如何从 JSON 导入画布？

为了加载一个原本包含图像和事件绑定的复杂舞台，我们需要使用 `Konva.Node.create()` 创建一个舞台节点，然后借助选择器使用 `find()` 方法设置图像和事件处理程序。图像和事件处理程序必须手动设置，因为它们是不可序列化的。

**该方法适用于小型应用程序。对于更复杂的情况，请查看 [最佳实践](/docs/data_and_serialization/Best_Practices.html)**

{% iframe /downloads/code/data_and_serialization/Complex_Load.html %}

{% include_code Konva Load Complex Stage Demo data_and_serialization/Complex_Load.html %}