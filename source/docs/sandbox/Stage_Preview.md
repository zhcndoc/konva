title: 如何使用 Konva 在画布上预览大型舞台？
layout: demo_page
---

## 需要生成小型画布预览吗？

生成小型预览的方法有很多。`Konva` 并未提供自动生成预览的方法。但我们可以使用 `Konva` 方法手动生成预览区域。

我们将展示两种选项 - 克隆和使用图像。在大型应用中，从应用的状态生成预览会更好。

### 从主舞台克隆节点。

我们可以直接克隆舞台或图层，并根据主画布区域的状态更新其内部节点。

同时，简化预览中的形状是有意义的。例如，隐藏文本，移除轮廓和阴影等。

**说明：尝试拖动一个圆形。看看预览是如何更新的。双击以添加新形状。**

{% iframe /downloads/code/sandbox/Stage_Preview_Clone.html %}

{% include_code sandbox/Stage_Preview_Clone.html %}


### 使用图像预览

或者我们可以将舞台导出为图像并将其用作预览。

出于性能原因，我们并不在每个 `dragmove` 事件中更新预览。

{% iframe /downloads/code/sandbox/Stage_Preview_Image.html %}

{% include_code sandbox/Stage_Preview_Image.html %}