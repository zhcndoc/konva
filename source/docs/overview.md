title: Konva 框架概述
---

## 什么是 Konva？

Konva 是一个 HTML5 Canvas 的 JavaScript 框架，扩展了 2D 上下文，通过为桌面和移动应用程序启用画布交互性。

Konva 使高性能动画、过渡、节点嵌套、分层、过滤、缓存、事件处理等功能在桌面和移动应用程序中得以实现，还有更多功能。

## 它是如何工作的？

一切都从 `Konva.Stage` 开始，它包含多个用户层（`Konva.Layer`）。

每个层都有两个 `<canvas>` 渲染器：场景渲染器和击中图形渲染器。场景渲染器是你可以看到的部分，而击中图形渲染器是一个特殊的隐藏画布，用于高性能事件检测。

每个层可以包含形状、形状组或其他组的组。舞台、层、组和形状是虚拟节点，类似于 HTML 页面的 DOM 节点。

以下是一个节点层次结构示例：

```
                   Stage
                     |
              +------+------+
              |             |
            Layer         Layer
              |             |
        +-----+-----+     Shape
        |           |
      Group       Group
        |           |
        +       +---+---+
        |       |       |
     Shape   Group    Shape
                |
                +
                |
              Shape
```

所有节点都可以被样式化和变换。虽然 `Konva` 提供了预构建的形状，例如矩形、圆形、图像、精灵、文本、线条、多边形、正多边形、路径、星形等，
你还可以通过实例化 Shape 类并创建绘制函数来自定义形状。

一旦你设置了一个包含层和形状的舞台，
你可以绑定事件监听器、变换节点、运行动画、
应用过滤器，等等。

最简单的代码示例：

```javascript
// 首先我们需要创建一个舞台
var stage = new Konva.Stage({
  container: 'container',   // 容器 <div> 的 ID
  width: 500,
  height: 500
});

// 然后创建层
var layer = new Konva.Layer();

// 创建我们的形状
var circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4
});

// 将形状添加到层中
layer.add(circle);

// 将层添加到舞台中
stage.add(layer);

// 绘制图像
layer.draw();
```
结果：
![最简单的代码示例](/assets/overview-circle.png)

## 基本形状

Konva.js 支持的形状有：[矩形](/docs/shapes/Rect.html)、[圆](/docs/shapes/Circle.html)、[椭圆](/docs/shapes/Ellipse.html)、[线](/docs/shapes/Line_-_Simple_Line.html)、[多边形](/docs/shapes/Line_-_Polygon.html)、[样条](/docs/shapes/Line_-_Spline.html)、[Blob](/docs/shapes/Line_-_Blob.html)、[图像](/docs/shapes/Image.html)、[文本](/docs/shapes/Text.html)、[文本路径](/docs/shapes/TextPath.html)、[星形](/docs/shapes/Star.html)、[标签](/docs/shapes/Label.html)、[SVG 路径](/docs/shapes/Path.html)、[正多边形](/docs/shapes/RegularPolygon.html)。
你还可以创建 [自定义形状](/docs/shapes/Custom.html)：

```
var triangle = new Konva.Shape({
      sceneFunc: function(context) {
        context.beginPath();
        context.moveTo(20, 50);
        context.lineTo(220, 80);
        context.quadraticCurveTo(150, 100, 260, 170);
        context.closePath();

        // 特殊的 Konva.js 方法
        context.fillStrokeShape(this);
      },
      fill: '#00D2FF',
      stroke: 'black',
      strokeWidth: 4
});
```
![自定义形状](/assets/overview-custom.png)

## 样式

每个形状支持以下样式属性：
* 填充：实色、渐变或图像
* 描边（颜色、宽度）
* 阴影（颜色、偏移、透明度、模糊）
* 透明度

```
var pentagon = new Konva.RegularPolygon({
    x: stage.width() / 2,
    y: stage.height() / 2,
    sides: 5,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    shadowOffsetX: 20,
    shadowOffsetY: 25,
    shadowBlur: 40,
    opacity: 0.5
});
```
![样式](/assets/overview-styles.png)

## 事件

使用 `Konva`，你可以轻松监听用户输入事件（`click`，`dblclick`，`mouseover`，`tap`，`dbltap`，`touchstart` 等），
属性更改事件（`scaleXChange`，`fillChange`）和拖放事件（`dragstart`，`dragmove`，`dragend`）。

```
circle.on('mouseout touchend', function() {
    console.log('用户输入');
});

circle.on('xChange', function() {
    console.log('位置改变');
});

circle.on('dragend', function() {
    console.log('拖动停止');
});
```
请参见 [工作示例](/docs/events/Binding_Events.html)。

## 拖放

`Konva` 具有内置的拖动支持。没有 `drop` 事件，使用 `dragenter`、`dragleave` 和 `dragover`。

通过框架实现 `drop` 事件非常简单 [查看文档](/docs/drag_and_drop/Drop_Events.html)。

要启用拖放，只需设置属性 draggable = true。

```js
shape.draggable('true');
```

然后你可以订阅拖放事件并设置 [移动限制](/docs/drag_and_drop/Complex_Drag_and_Drop.html)。

## 过滤器

`Konva` 有几种过滤器：模糊、反转、噪音等。有关所有可用过滤器，请参见 [Filters API](/api/Konva.Filters.html)。

示例：
![过滤器](/assets/overview-filter.png)

## 动画

你可以通过两种方式创建动画：

1. 通过 `Konva.Animation` [演示](/docs/animations/Moving.html)：
```
var anim = new Konva.Animation(function(frame) {
    var time = frame.time,
        timeDiff = frame.timeDiff,
        frameRate = frame.frameRate;
    // 更新内容
}, layer);
anim.start();
```

2. 通过 `Konva.Tween` [演示](/docs/tweens/Linear_Easing.html)：
```
var tween = new Konva.Tween({
        node: rect,
        duration: 1,
        x: 140,
        rotation: Math.PI * 2,
        opacity: 1,
        strokeWidth: 6
});
tween.play();

// 或者新的更简短的方法：
circle.to({
    duration: 1,
    fill: 'green'
});
```

## 选择器

在构建大型应用程序时，使用元素搜索是非常有用的。
`Konva` 帮助你通过选择器找到元素。你可以使用 `find()` 方法（返回集合）或 `findOne()` 方法（返回集合的第一个元素）。
```
var circle = new Konva.Circle({
        radius: 10,
        fill: 'red',
        id: 'face',
        name: 'red circle'
});
layer.add(circle);

// 然后尝试搜索

// 按类型查找
layer.find('Circle'); // 返回所有圆形的数组

// 按 ID 查找
layer.findOne('#face');

// 按名称查找（像 CSS 类）
layer.find('.red')
```

## 序列化和反序列化

所有创建的对象可以保存为 JSON。你可以将其保存到服务器或本地存储。
```
var json = stage.toJSON();
```
你也可以从 JSON 恢复对象：
```
var json = '{"attrs":{"width":578,"height":200},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":100,"y":100,"sides":6,"radius":70,"fill":"red","stroke":"black","strokeWidth":4},"className":"RegularPolygon"}]}]}';

var stage = Konva.Node.create(json, 'container');
```

## 性能

`Konva` 拥有许多工具来提高应用程序的速度。最重要的方法：

1. 缓存允许你将元素绘制到缓冲画布中。然后从画布中绘制元素。这可以大大提高复杂节点（如文本或带有阴影和描边的形状）的性能。
```
shape.cache();
```
[演示](/docs/performance/Shape_Caching.html)

2. 分层。由于框架支持多个 `<canvas>` 元素，因此你可以根据需要放置对象。
例如，你的应用程序由复杂背景和几个移动形状组成。你可以将一个层用于背景，另一个层用于形状。
在更新形状时，你不需要更新背景画布。 [演示](/docs/performance/Layer_Management.html)

你可以在这里找到所有可用的性能提示：
[https://konvajs.org/docs/performance/All_Performance_Tips.html](/docs/performance/All_Performance_Tips.html)