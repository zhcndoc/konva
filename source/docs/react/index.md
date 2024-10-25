title: 开始使用 React 和 Konva 进行画布绘图
layout: react_page
---

<div style="text-align: center">
  <img src="https://cloud.githubusercontent.com/assets/1443320/12193428/3bda2fcc-b623-11e5-8319-b1ccfc95eaec.png"/>
</div>

`react-konva` 是一个用于使用 [React](http://facebook.github.io/react/) 绘制复杂画布图形的 JavaScript 库。它提供了对 [Konva 框架](https://konvajs.org/) 的声明式和反应式绑定。


[Github 仓库](https://github.com/lavrton/react-konva)


这是一个使 [React](http://facebook.github.io/react/) 能够与 HTML5 画布库一起工作的尝试。目标是拥有与普通 React 相似的声明式标记以及类似的数据流模型。

**目前，`react-konva` 不支持 React Native 环境。**

目前您可以将所有 `Konva` 节点和形状用作 React 组件，并且所有 `Konva` 事件都以相同的方式支持它们。

**注意：您可以在这里找到许多使用 Konva 的演示和示例：[https://konvajs.org/](https://konvajs.org/)。实际上，您可以直接去那里查看 Konva 能为您做些什么。您也将能够使用 react-konva 实现相同的功能。`Konva` 对于 `react-konva` 就像 DOM 对于 `React`。**

## 安装

```bash
npm install react-konva konva --save
```

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/react-demos/basic_demo?hidenavigation=1&view=split&fontsize=10" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


## 比较

### react-konva vs react-canvas

[react-canvas](https://github.com/Flipboard/react-canvas) 是一个完全不同的 react 插件。它允许您在画布元素上以非常高效的方式绘制类似 DOM 的对象（图像、文本）。它不是用于绘制图形，而是 react-konva 正是为了这个目的：从 React 中绘制复杂图形到 `<canvas>` 元素上。

### react-konva vs react-art

[react-art](https://github.com/reactjs/react-art) 允许您在页面上绘制图形。它也支持 SVG 输出。但它不支持形状上的事件。

### react-konva vs vanilla canvas

原生画布可能更快，因为 `react-konva` 有两个抽象层：(1) `Konva` 框架位于画布之上，(2) `React` 位于 `Konva` 之上。对于许多应用程序而言，它的性能仍然非常不错。`react-konva` 的目的是降低应用程序的复杂性，并使用一种众所周知的声明式方式在画布上进行绘图。