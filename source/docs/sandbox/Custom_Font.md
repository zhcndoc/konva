title: 如何在 HTML5 画布上使用自定义字体？
layout: demo_page
---

## 如何在 HTML5 画布上绘制外部字体？

如果你想在 `Konva.Text` 中使用自定义字体，你只需：
1. 将字体样式添加到你的页面
2. 将 `fontFamily` 属性设置为所需的字体。

但这里有一个重要的事情。当你为 DOM 元素（如 `div` 或 `span`）设置字体时，浏览器会在字体加载后自动更新那些元素。但对于画布文本，这种方式并不适用。你需要重新绘制画布。

要检测字体是否已加载，你可以使用类似 [FontObserver](https://fontfaceobserver.com/) 的东西。

但为了演示，我将使用更简单的字体加载检测。这种方法在许多字体上效果很好，而且文件大小要小得多。

还有一种更简单的解决方案是使用 `setTimeout` 延迟后重新绘制，但这并不能保证字体已加载。

{% iframe /downloads/code/sandbox/Custom_Font.html %}

{% include_code Konva 自定义字体 sandbox/Custom_Font.html %}