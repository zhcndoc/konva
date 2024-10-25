title: HTML5 Canvas 到数据 URL 教程
---

## 如何将画布内容导出为图片？

要获得使用 `Konva` 的舞台数据 URL，我们可以使用 `toDataURL()` 方法，该方法需要 `Stage` 的回调函数（对于其他节点不需要回调）。
此外，我们还可以传入一个 MIME 类型，例如 image/jpeg，以及一个介于 0 和 1 之间的质量值。
我们还可以获取特定节点的数据 URL，包括图层、组和形状。

*注意：`toDataURL()` 方法要求绘制到画布上的任何图像都托管在与执行代码的同一域的 web 服务器上。
如果不满足此条件，将抛出 SECURITY_ERR 异常。*

说明：拖动并放置矩形，然后单击保存按钮以获取复合数据 URL，并在新窗口中打开生成的图像

{% iframe /downloads/code/data_and_serialization/Stage_Data_URL.html %}

{% include_code Konva Stage Data URL Demo data_and_serialization/Stage_Data_URL.html %}