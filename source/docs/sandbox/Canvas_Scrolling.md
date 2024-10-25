title: HTML5 大画布滚动演示
layout: demo_page
---

想象一下我们有这样的场景。一个3000x3000的大舞台，里面有许多节点。
用户想查看所有节点，但它们并不是一次性可见的。

## 如何展示和滚动一个非常大的 HTML5 画布？

让我们想象你有一个很大的画布，你想要增加导航功能。

我将向你展示4种不同的方法来实现这一点：

### 1. 只制作大舞台

这是最简单的方法。但它非常慢，因为大的画布运行速度慢。
用户将能够使用本机滚动条进行滚动。

优点：
* 实现简单

缺点：
* 速度慢

{% iframe /downloads/code/sandbox/Canvas_Scrolling_Large.html %}

<details><summary>显示源代码！</summary>
<p>
{% include_code Canvas Scrolling Large sandbox/Canvas_Scrolling_Large.html %} 
</p>
</details>

### 2. 使舞台可拖动（通过拖放导航）

这个方法更好，因为舞台要小得多。

优点：
* 实现简单
* 快速

缺点：
* 有时拖放导航并不是最佳用户体验

{% iframe /downloads/code/sandbox/Canvas_Scrolling_Drag.html %}

<details><summary>显示源代码！</summary>
<p>
{% include_code Canvas Scrolling Drag sandbox/Canvas_Scrolling_Drag.html %} 
</p>
</details>

## 3. 仿真滚动条。

你将需要手动绘制它们并实现所有移动功能。
这工作量相当大，但对于许多应用而言有效。

说明：尝试使用滚动条进行滚动。

优点：
- 运行良好
- 直观的滚动
- 快速

缺点：
- 滚动条不是原生的，所以你必须手动实现许多功能（例如使用键盘滚动）

{% iframe /downloads/code/sandbox/Canvas_Scrolling_Manual.html %}

<details><summary>显示源代码！</summary>
<p>
{% include_code Canvas Scrolling Bars sandbox/Canvas_Scrolling_Manual.html %} 
</p>
</details>

## 4. 使用变换仿真屏幕移动。

这个演示效果很好，但可能有点棘手。
其思路是：
- 我们将使用与屏幕大小相等的小画布
- 我们将创建一个所需大小的容器（3000x3000），使本机滚动条可见
- 当用户尝试滚动时，我们将对舞台容器应用 CSS 变换，使其仍在用户屏幕中心
- 我们将移动所有节点，这样看起来就像你在滚动（通过更改舞台位置）

优点：
- 完美运行且快速
- 原生滚动

缺点：
- 你必须理解发生了什么。

说明：尝试使用本机滚动条进行滚动。

{% iframe /downloads/code/sandbox/Canvas_Scrolling_Transform.html %}

<details><summary>显示源代码！</summary>
<p>
{% include_code Canvas Scrolling Transform sandbox/Canvas_Scrolling_Transform.html %} 
</p>
</details>
