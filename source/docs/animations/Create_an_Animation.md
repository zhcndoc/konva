title: HTML5 Canvas Konva 动画教程
---


要使用 Konva 创建自定义动画，我们可以使用 `Konva.Animation` 构造函数，该构造函数接受两个参数：必需的更新函数和一个可选的图层或图层数组，每个动画帧都会更新这些图层。动画函数接收一个 `frame` 对象，该对象包含一个 `time` 属性，它是动画运行的毫秒数，`timeDiff` 属性是自上一个帧以来经过的毫秒数，以及一个 `frameRate` 属性，它是当前的帧率（每秒帧数）。

更新函数绝不应该重绘舞台或图层，因为动画引擎会智能地为我们处理这些。更新函数只应包含更新节点属性的逻辑，例如 `position`、`rotation`、`scale`、`width`、`height`、`radius`、`colors` 等。一旦动画创建完成，我们可以随时使用 `start()` 方法启动它。

有关属性和方法的完整列表，请查看 [Konva.Animation 文档](/api/Konva.Animation.html)。

## HTML5 Canvas Konva 动画模板

```
<script>
  var anim = new Konva.Animation(function(frame) {
    var time = frame.time,
        timeDiff = frame.timeDiff,
        frameRate = frame.frameRate;

    // 更新内容
  }, layer);

  anim.start();
</script>
```