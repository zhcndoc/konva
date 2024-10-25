title: HTML5 Canvas 如何避免内存泄漏的技巧
---

### 删除图形

有两个非常相似的方法 `remove()` 和 `destroy()`。如果您需要完全删除一个节点，您应该使用 `destroy()`。`destroy()` 方法会删除 KonvaJS 引擎中对节点的所有引用。如果您打算重用一个节点，您应该使用 `remove()`，然后稍后可以将其重新添加到任何容器中。


### 切换动画

当您使用 `Konva.Tween` 实例时，在使用后必须销毁它。

```javascript
var tween = new Konva.Tween({
    node : circle,
    x : 0,
    duration : 0.5,
    onFinish : function() {
        // 从 Konva 中移除所有引用
        tween.destroy();
    }
});
tween.play();
```

或者，如果您不需要重用该动画，您可以使用新的 `to()` 方法：
```javascript
// 动画将在完成时自动启动并销毁
circle.to({
    x : 0,
    duration : 0.5
});
```