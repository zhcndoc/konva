title: HTML5 Canvas Konva 性能优化技巧列表

---

## HTML5 Canvas Konva 性能优化技巧列表

不想花时间处理性能问题？请求一个[性能评审](https://lavrton.com/consulting)。

### 为什么这很重要

HTML5 canvas 在其功能上是高效的，而 `Konva` 内部有许多旨在提供卓越性能的特性。然而，当你的项目开始变得复杂，或者当你在舞台上有很多形状时，必然会对性能产生一些负面影响。

### 优化目标

这里的优化关注两个一般原则：

* 尽量减少计算：所有计算都需要时间来完成。每个单独计算可能只需在极短的时间内完成，但代码、Konva、JavaScript 和底层层次造成的成千上万或数百万次计算，加起来就会给人眼睛带来更明显的观察效果，如果那个超级流畅的动画或效果实际上是颠簸的。

* **尽量减少绘制**：这是重要的，因为所有绘制都有性能成本。成本可以分为两类：首先是绘制的计算，如上述所述，其次是将绘制从内存移动到屏幕。根据情况，可能还会有中间的离屏合成或逐像素处理。因此，规则是尽量少绘制。

### 舞台

1. 优化舞台大小 - 遵循“尽量少绘制”规则，尽量避免创建一个大型舞台，因为将所有这些字节从内存移动到屏幕会产生负面影响。这里有一些建议[这里](/docs/sandbox/Canvas_Scrolling.html)提供了处理超级舞台问题的替代方法！

2. 在移动设备上设置视口 - 缩放图像将导致显著的性能损失，因此对于移动应用程序，请设置视口：`<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">` 这将避免不必要的缩放你的 Konva 输出。

3. 在 Retina 设备上使用 `Konva.pixelRatio = 1` - Konva 自动处理像素比例的调整，以便在所有设备上呈现清晰的绘图。但如果你在 Retina 设备上遇到差的性能，请设置 `Konva.pixelRatio = 1` 以减少 Konva 必须做的缩放工作。此设置可能在某些情况下影响输出质量，因此请确保结果质量符合你的要求。

### 层

1. [层管理](/docs/performance/Layer_Management.html) - 从内部来看，每个 Konva 层都是一个独立的 HTML5 canvas 元素，这提供了一些有用的功能，包括仅刷新已更改的层，从而避免刷新整个舞台的性能成本。不过，强大机器的责任重大，每个层都有增量性能开销，因此我们应将层的数量保持在最低限度。

2. 使用 `layer.listening(false)` - Konva 在我们绘制的所有形状上提供鼠标和触摸事件监听器。但为每个监听器带来的性能成本是不可低估的，对于有许多形状的层，Konva 必须消耗许多周期来检查可能被触发的监听器。如果你有一个层，所有形状都无需对事件做出反应，可以通过设置 `layer.listening(false)` 来减轻这一负担。参见[演示](/docs/sandbox/Animation_Stress_Test.html)。在形状部分有类似的点。

4. 优化拖拽成本 - 当你将形状拖动时，该层必须在移动事件监听器的每个周期中重绘。为了避免此性能成本，可以在拖动时将形状移到专用层，然后在拖动结束时将其移回原始层。参见[演示](/docs/sandbox/Drag_and_Drop_Stress_Test.html)。

### 形状

1. [形状缓存](/docs/performance/Shape_Caching.html) - 在内部，Konva 会生成形状的图像，并在需要绘制时使用。绘制图像能够避免从绘图指令组成形状的开销，并可以显著提升复杂形状和组的性能。

2. 保持形状整洁 - 在舞台上，每个形状的存在都有成本。为了优化性能，隐藏或从层中移除任何变为不可见（不透明度 = 0）或超出视图的对象。

4. 使用 `shape.listening(false)` - 与层相似（见上文第 7 点），Konva 会关注何时应为形状触发事件，这会带来性能成本。告诉形状停止监听事件可以减少这一成本，具体见[监听关闭](/docs/performance/Listening_False.html)。

5. 关闭完美绘制 - 在某些情况下，使用 HTML5 canvas 绘制的结果可能不是你所期望的 - 有关示例，请参见[禁用完美绘制](/docs/performance/Disable_Perfect_Draw.html)的演示。 Konva 通过其完美绘制功能来纠正这一问题，但这会带来性能成本。通过设置 `shape.perfectDrawEnabled(false)` 可以避免这一成本，在形状具有填充、笔划和不透明度时，没有质量下降。

6. [优化笔划绘制](/docs/performance/Optimize_Strokes.html) - 为了获得如预期般的绘图效果，当形状同时具有笔划和阴影时，Konva 会进行额外的内部绘制。通过关闭 Konva 为笔划添加的阴影，避免这一性能负担。

### 动画

1. [优化动画](/docs/performance/Optimize_Animation.html) - 避免不必要的重绘成本，以应对视觉变化之间的动画步骤。

### 内存

1. [避免内存泄漏](/docs/performance/Avoid_Memory_Leaks.html) - Konva 处理了很多可能导致内存泄漏的情况，但创建形状和 tween 并管理其退出是你可以帮助的领域。