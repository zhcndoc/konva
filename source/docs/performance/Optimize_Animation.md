title: HTML5 Canvas 优化动画性能提示
---

如果你的动画有帧没有任何更新（没有节点被更改），你可以在动画函数中 `return false`。

在这种情况下，Konva 将不会更新图层。

{% iframe /downloads/code/performance/Optimize_Animation.html %}

{% include_code Konva Optimize Animation Demo performance/Optimize_Animation.html %}