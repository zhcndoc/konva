title: HTML5 Canvas 画布多事件绑定教程

---

要将多个事件绑定到一个处理程序，我们可以使用 `on()` 方法，并传入一个由空格分隔的字符串，包含多个事件类型。

```js
shape.on('mouseover mousedown mouseup', function (e) {
  console.log('事件: ' + e.type);
});
```

说明：在圆形上进行鼠标悬停、鼠标按下和鼠标抬起，以观察绑定到圆形的函数为每个事件执行。

{% iframe /downloads/code/events/Multi_Event.html %}

{% include_code Konva Multi_Event Demo events/Multi_Event.html %}