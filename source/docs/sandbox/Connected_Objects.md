title: 用 Konva 连接对象 HTML5 画布
layout: demo_page
---

## 如何用线或箭头连接两个对象？

`Konva` 不能自动用线连接两个对象并更新其位置。您需要手动更新线的位置。通常，当用户拖动其中一个连接的对象时，我们需要更新线的位置。在简单的情况下，可以这样做：

```javascript
const obj1 = new Konva.Circle({ ...obj1Props })
const obj2 = new Konva.Circle({ ...obj2Props });

const line = new Konva.Line({ ...lineProps });

obj1.on('dragmove', updateLine);
obj2.on('dragmove', updateLine);

function updateLine() {
  line.points([obj1.x(), obj1.y(), obj2.x(), obj2.y]);
  layer.batchDraw();
}
```

但在这个演示中，我将创建一个更复杂的案例，其中包含应用程序的状态和多个连接的对象。

**指令：尝试拖动一个圆**。

{% iframe /downloads/code/sandbox/Connected_Objects.html %}

{% include_code Konva 20000 Nodes Demo sandbox/Connected_Objects.html %}