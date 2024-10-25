title: 使用 Konva 的调整大小压力测试  
layout: demo_page  
---  

这是一个压力测试演示，可以同时选择和调整多个形状的大小。  

该演示使用了两个核心的 `Konva` 特性来提升性能：  

### 1. 图层  

调整大小的形状被移动到另一个图层（另一个 canvas 元素）。因此，在调整所选形状大小时，我们不需要重绘其他形状。  

### 2. 缓存  

在 `select` 时，我将所有选中的形状移动到一个组中并缓存该组。缓存操作会将组转换为位图图像。重新绘制这样的组在屏幕上要快得多。  

**说明：尝试选择几个形状并调整它们的大小/旋转它们。**  

{% iframe /downloads/code/sandbox/Resizing_Stress_Test.html %}  

{% include_code Konva Resizing Stress Test Demo sandbox/Resizing_Stress_Test.html %}