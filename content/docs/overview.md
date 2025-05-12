---
sidebar_position: 2
title: Konva 框架概述
sidebar_label: 概述
slug: overview.html
---

## 什么是 Konva？

Konva 是一个 HTML5 Canvas JavaScript 框架，通过为桌面和移动应用启用画布交互性，扩展了 2d 上下文。

Konva 支持高性能动画、过渡、节点嵌套、分层、滤镜、缓存、桌面和移动应用的事件处理，以及更多功能。

## 它是如何工作的？

一切从包含若干用户图层（`Konva.Layer`）的 `Konva.Stage` 开始。

每个图层有两个 `<canvas>` 渲染器：场景渲染器和命中图渲染器。场景渲染器是你看到的画面，而命中图渲染器是一个特殊的隐藏画布，用于高性能事件检测。

每个图层可以包含形状、形状组或其他组的组合。舞台、图层、组和形状是虚拟节点，类似于 HTML 页面中的 DOM 节点。

下面是一个节点层级示例：

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

所有节点都可以被样式化和变换。虽然 `Konva` 内置了矩形、圆形、图像、精灵、文本、线条、多边形、正多边形、路径、星形等预制形状，
你也可以通过实例化 Shape 类并创建绘制函数来创建自定义形状。

一旦设置了带有图层和形状的舞台，
你便可以绑定事件监听器、变换节点、运行动画、
应用滤镜等等。

最简代码示例：

```js
// 首先需要创建舞台
var stage = new Konva.Stage({
  container: 'container', // 容器 <div> 的 id
  width: 500,
  height: 500,
});

// 然后创建图层
var layer = new Konva.Layer();

// 创建形状
var circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4,
});

// 将形状添加到图层
layer.add(circle);

// 将图层添加到舞台
stage.add(layer);
```

效果：

![Minimal code demo](/assets/overview-circle.png)

## 基本形状

Konva.js 支持的形状包括：[Rect](/docs/shapes/Rect.html), [Circle](/docs/shapes/Circle.html), [Ellipse](/docs/shapes/Ellipse.html), [Line](/docs/shapes/Line_-_Simple_Line.html), [Polygon](/docs/shapes/Line_-_Polygon.html), [Spline](/docs/shapes/Line_-_Spline.html), [Blob](/docs/shapes/Line_-_Blob.html), [Image](/docs/shapes/Image.html), [Text](/docs/shapes/Text.html), [TextPath](/docs/shapes/TextPath.html), [Star](/docs/shapes/Star.html), [Label](/docs/shapes/Label.html), [SVG Path](/docs/shapes/Path.html), [RegularPolygon](/docs/shapes/RegularPolygon.html)。
此外，你也可以创建[自定义形状](/docs/shapes/Custom.html):

```js
var triangle = new Konva.Shape({
  sceneFunc: function (context) {
    context.beginPath();
    context.moveTo(20, 50);
    context.lineTo(220, 80);
    context.quadraticCurveTo(150, 100, 260, 170);
    context.closePath();

    // Konva.js 特殊方法
    context.fillStrokeShape(this);
  },
  fill: '#00D2FF',
  stroke: 'black',
  strokeWidth: 4,
});
```

![Custom shape](/assets/overview-custom.png)

## 样式

每个形状支持以下样式属性：

- 填充。纯色，渐变或图像
- 描边（颜色、宽度）
- 阴影（颜色、偏移、透明度、模糊）
- 透明度

```js
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
  opacity: 0.5,
});
```

![Styles](/assets/overview-styles.png)

## 事件

使用 `Konva`，你可以轻松监听用户输入事件（`click`、`dblclick`、`mouseover`、`tap`、`dbltap`、`touchstart` 等），
属性变更事件（`scaleXChange`、`fillChange`）和拖放事件（`dragstart`、`dragmove`、`dragend`）。

```js
circle.on('mouseout touchend', function () {
  console.log('用户输入');
});

circle.on('xChange', function () {
  console.log('位置改变');
});

circle.on('dragend', function () {
  console.log('拖拽结束');
});
```

查看[示例](/docs/events/Binding_Events.html)。

## 拖放（DRAG AND DROP）

`Konva` 内置拖拽支持。目前尚无 `drop` 事件（`drop`、`dragenter`、`dragleave`、`dragover`），
但可以通过[框架自定义实现](/docs/drag_and_drop/Drop_Events.html)。

启用拖拽只需设置属性 `draggable = true`。

```
shape.draggable('true');
```

然后你可以订阅拖拽事件并设置[移动限制](/docs/drag_and_drop/Complex_Drag_and_Drop.html)。

## 滤镜

`Konva` 提供多种滤镜：模糊、反转、噪点等。查看全部滤镜请见[滤镜 API](/api/Konva.Filters.html)。

示例：

![Filter](/assets/overview-filter.png)

## 动画

你可以通过两种方式创建动画：

1. 使用 `Konva.Animation` [演示](/docs/animations/Moving.html)：

```js
var anim = new Konva.Animation(function (frame) {
  var time = frame.time,
    timeDiff = frame.timeDiff,
    frameRate = frame.frameRate;
  // 更新内容
}, layer);
anim.start();
```

2. 使用 `Konva.Tween` [演示](/docs/tweens/Linear_Easing.html)：

```js
var tween = new Konva.Tween({
  node: rect,
  duration: 1,
  x: 140,
  rotation: Math.PI * 2,
  opacity: 1,
  strokeWidth: 6,
});
tween.play();

// 或更简洁写法：
circle.to({
  duration: 1,
  fill: 'green',
});
```

## 选择器

在构建大型应用时，搜索元素非常有用。
`Konva` 帮助你通过选择器查找元素。你可以使用 `find()` 方法（返回集合）或 `findOne()` 方法（返回集合中的第一个元素）。

```js
var circle = new Konva.Circle({
  radius: 10,
  fill: 'red',
  id: 'face',
  name: 'red circle',
});
layer.add(circle);

// 然后尝试搜索

// 按类型查找
layer.find('Circle'); // 返回所有圆形数组

// 按 id 查找
layer.findOne('#face');

// 按名称查找（类似 CSS 类）
layer.find('.red');
```

## 序列化与反序列化

所有创建的对象都可以保存为 JSON，你可以保存到服务器或本地存储。

```js
var json = stage.toJSON();
```

你也可以从 JSON 恢复对象：

```js
var json =
  '{"attrs":{"width":578,"height":200},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":100,"y":100,"sides":6,"radius":70,"fill":"red","stroke":"black","strokeWidth":4},"className":"RegularPolygon"}]}]}';

var stage = Konva.Node.create(json, 'container');
```

## 性能

`Konva` 提供大量工具以提升应用速度。最重要的方法：

1. 缓存允许你将元素绘制到缓冲画布，然后从该画布绘制元素。对于复杂节点如带阴影和描边的文本或形状，这能显著提高性能。

```js
shape.cache();
```

[演示](/docs/performance/Shape_Caching.html)

2. 分层。框架支持多个 `<canvas>` 元素，你可以按需放置对象。
   比如应用有复杂背景和多个移动形状，你可以为背景使用一个图层，为形状使用另一个图层。
   在更新形状时无需更新背景画布。[演示](/docs/performance/Layer_Management.html)

所有可用的性能技巧请见：
[https://konvajs.org/docs/performance/All_Performance_Tips.html](/docs/performance/All_Performance_Tips.html)