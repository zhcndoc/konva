title: 如何在画布上使用 Konva 绘制 SVG 图像
layout: demo_page

---

## 如何在画布上显示 SVG 图像？

浏览器并不总是能够将 `*.svg` 图像绘制到画布上。然而，现在的情况有所改善，如果您想要使用 `Konva` 渲染矢量图像，您现在有几种可用的选项：

### 选项 1：使用 Konva.Image

在大多数情况下，您可以像使用其他图像（例如 `*.png` 或 `*.jpg`）一样使用 `*.svg` 图像。您可以使用 [Konva.Image](/docs/shapes/Image.html) 形状。

```js
Konva.Image.fromURL('/image.svg', (image) => {
  layer.add(image);
});
```

这种方法在许多情况下都能很好地工作，但并不是完全跨浏览器兼容。例如，有些 SVG 在 Firefox 浏览器中可能不可见（[对此情况有解决方法](https://github.com/konvajs/konva/issues/677#issuecomment-504596837)）。

### 选项 2：使用 Konva.Path

使用 [Konva.Path](/docs/shapes/Path.html)。这种方法适用于简单的路径形状。如果您有一个包含多个路径的大型 SVG，您可能需要手动将其分割成几个 `Konva.Path` 形状。

### 选项 3：使用外部库将 SVG 渲染到画布上

使用外部库（例如 [canvg](https://github.com/canvg/canvg)）将 SVG 绘制到 `<canvas>` 元素中。然后使用该画布用于 [Konva.Image](/docs/shapes/Image.html)。

这种方法已经在至少一个大型生产应用中经过测试，证明了其可靠性和渲染精度。

### 演示

下面是一个演示，展示了原生绘制和使用库的绘制方式。

{% iframe /downloads/code/sandbox/SVG_On_Canvas.html %}

{% include_code Konva GIF demo sandbox/SVG_On_Canvas.html %}