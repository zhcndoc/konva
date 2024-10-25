title: HTML5 Canvas 线连接教程
---

要设置 Konva 中形状的线连接，我们可以在实例化形状时设置 `lineJoin` 属性，或者使用 `lineJoin()` 方法。

`lineJoin` 属性可以设置为 `miter`、`bevel` 或 `round`。除非另有说明，默认的线连接为 `miter`。

说明：鼠标悬停在三角形上以更改线连接样式。

{% iframe /downloads/code/styling/Line_Join.html %}

{% include_code Konva 线连接演示 styling/Line_Join.html %}