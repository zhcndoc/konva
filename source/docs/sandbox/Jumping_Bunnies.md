title: 跳跃兔子性能压力测试
layout: demo_page
---

该演示展示了同时移动多个 `Konva.Image` 的性能。

这是从 [PixiJS 框架](https://www.pixijs.com/) 中采纳的 [示例](https://www.goodboydigital.com/pixijs/bunnymark/)。

你会注意到 `Konva` 版本的性能比 `PixiJS` 版本要慢得多。

所以首先我要说明的是，其他框架在某些情况下可能表现得更好。PixiJS 针对这类图形和动画进行了非常优化（它使用 WebGL 进行渲染）。

目前正在进行的工作是优化一些 `Konva` 的内部结构，以使其在该演示中也能更快地运行。

但请记住，该演示并不能代表使用 `Konva` 制作的典型应用程序的性能。如果你在执行很多像演示中一样的动画，并且涉及大量对象，可能需要使用其他解决方案，比如 [原生 Canvas 访问](/docs/sandbox/Native_Context_Access.html) 或者甚至是不同的框架。

因此，为你的应用程序明智地选择工具。

**说明：在画布上按下鼠标增加更多兔子。**

{% iframe /downloads/code/sandbox/Jumping_Bunnies.html %}

{% include_code Konva Bunnies Demo sandbox/Jumping_Bunnies.html %}
