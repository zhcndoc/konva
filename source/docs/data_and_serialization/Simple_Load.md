title: 使用 JSON 字符串加载场景
---

要使用 Konva 反序列化 JSON 字符串，我们可以使用 `Konva.Node.create()` 方法，该方法从 JSON 字符串创建一个节点。如果我们想要反序列化一个舞台节点，我们还可以传入一个可选的 `container` 参数。

**该方法适用于非常小的应用程序。对于更复杂的情况，请查看 [复杂加载](/docs/data_and_serialization/Complex_Load.html) 或者更好的是 [最佳实践](/docs/data_and_serialization/Best_Practices.html)**

{% iframe /downloads/code/data_and_serialization/Simple_Load.html %}

{% include_code Konva Simple Load Demo data_and_serialization/Simple_Load.html %}