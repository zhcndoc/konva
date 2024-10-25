title: HTML5 Canvas 自定义滤镜教程
---


## 如何为 Konva 节点应用自定义滤镜？

这个示例演示了如何使用 `Konva` 框架中的自定义滤镜。

`Filter` 是一个函数，它的输入是画布的 ImageData，并且应该对其进行修改。

```javascript
function Filter(imageData) {
  // 对图像数据进行处理
  imageData.data[0] = 0;
}
```

有关所有可用滤镜，请访问 [滤镜文档](/api/Konva.Filters.html)。

还可以查看 [图像边框示例](/docs/sandbox/Image_Border.html) 以了解自定义滤镜的示例。

**在这个示例中，我们将移除图像中的所有透明度。**

{% iframe /downloads/code/filters/Custom_Filter.html %}

{% include_code Konva 自定义滤镜图像示例 filters/Custom_Filter.html %}