title: 使用 Svelte 绘制画布形状
layout: svelte_page

---

所有 `svelte-konva` 组件对应于同名的 `Konva` 组件。
除非另有说明，所有可用于 `Konva` 对象的参数都是相应 `svelte-konva` 组件的有效 props。

核心形状包括：矩形（Rect）、圆形（Circle）、椭圆（Ellipse）、线（Line）、图像（Image）、文本（Text）、文本路径（TextPath）、星形（Star）、标签（Label）、SVG 路径（SVG Path）、正多边形（RegularPolygon）。你还可以创建自定义形状。

有关 Konva 的更多信息，可以阅读 [Konva 概述](/docs/overview.html)。

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/shapes?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>