title: 如何使用 zIndex 设置节点的正确顺序？
---


## 什么是节点的 zIndex？

您可以通过以下方式获取/设置节点的 zIndex：

```javascript
// 获取
const zIndex = shape.zIndex();

// 设置
shape.zIndex(1);
```

zIndex 只是节点在其父节点子数组中的索引。请不要将 Konva 中的 `zIndex` 与 CSS 中的 `z-index` 混淆。

```javascript
const group = new Konva.Group();

const circle = new Konva.Circle({});

group.add(circle);

// 它将记录 0。
console.log(circle.zIndex());  

// 下一行将不起作用。因为该组只有一个子元素
circle.zIndex(1);  

// 仍然记录 0
console.log(circle.zIndex());  

// 对于任何节点，该等式将成立：
console.log(circle.zIndex() === circle.getParent().children.indexOf(circle))
```


您不能使用 `zIndex` 来设置节点的绝对位置，就像我们在 CSS 中那样。  
Konva 是按照节点树中定义的严格顺序绘制节点的。

让我们做一个示例。我将创建一个包含两个组的图层。第一个组有两个形状（黑色矩形和红色圆形）。第二个组有一个形状（绿色矩形）。

{% iframe /downloads/code/groups_and_layers/zIndex.html %}

<details><summary>显示源代码！</summary>
<p>
{% include_code Konva ZIndex demo groups_and_layers/zIndex.html %}
</p>
</details>

红色圆形的 `zIndex` 是什么？它是 `1`（第一个组的子元素数组中的第二个元素）。  
绿色矩形的 `zIndex` 是什么？它是 `0`。

红色圆形的 `zIndex` 高于绿色矩形。但是为什么我们看到绿色矩形在红色圆形上面？如上所述，Konva 是按照树的严格顺序进行绘制的。  
所以首先，它将绘制第一个组的所有子元素。然后在该图像上，它将绘制第二个组的所有子元素（如果图层中有更多元素，则依此类推）。

如何让红色圆形在绿色矩形上面绘制？您可以将它移动到第二组中。或者您可以将它移动到图层中，并确保它的 zIndex 大于先前组的 zIndex。