title: 如何在 HTML5 画布形状上显示上下文菜单?
layout: demo_page
---

## 您想在画布形状上显示上下文菜单吗？

要显示上下文菜单，我们需要：

1. 监听画布容器（舞台）上的 `contextmenu` 事件
2. 阻止默认的浏览器行为，这样我们就不会看到原生的上下文菜单
3. 使用 `Konva` 工具或常规 HTML 创建我们自己的上下文菜单

**说明：双击舞台以创建一个圆形。尝试在形状上右击（上下文菜单）以显示菜单。**

{% iframe /downloads/code/sandbox/Canvas_Context_Menu.html %}

{% include_code sandbox/Canvas_Context_Menu.html %}