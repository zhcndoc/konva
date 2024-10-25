title: HTML5 Canvas 键盘事件与 Konva
---

## HTML5 Canvas 键盘事件与 Konva

在 Konva 中没有内置的键盘事件，比如 `keydown` 或 `keyup`。

### 那么如何在画布上监听 keydown 或 keyup 事件呢？

你可以通过两种方式轻松添加它们：

1. 监听 `window` 对象上的全局事件
2. 或者使舞台容器可聚焦，使用 `tabIndex` 属性并在其上监听事件。

指令：点击舞台以聚焦，使用箭头键移动形状

{% iframe /downloads/code/events/Keyboard_Events.html %}

{% include_code HTML5 Canvas 键盘事件 events/Keyboard_Events.html %}