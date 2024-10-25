title: 将 HTML5 Canvas Stage 保存为 JSON 字符串
---

## 如何将 canvas 导出为 JSON？

要使用 Konva 将舞台保存为 JSON 字符串，我们可以使用 `toJSON()` 方法，该方法将 Konva 节点树序列化为可以保存到 Web 存储或离线数据库的文本。我们还可以序列化其他节点，包括图层、组和形状。

**`toJSON()` 方法无法保存滤镜、图像和事件监听器。因此它只适用于非常小的应用。对于更复杂的情况，请阅读 [最佳实践](/docs/data_and_serialization/Best_Practices.html)**

{% iframe /downloads/code/data_and_serialization/Serialize_a_Stage.html %}

{% include_code Konva 保存舞台演示 data_and_serialization/Serialize_a_Stage.html %}