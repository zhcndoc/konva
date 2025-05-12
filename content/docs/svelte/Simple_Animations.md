---
title: 如何使用 Svelte 和 Konva 应用画布动画？
sidebar_label: 简单动画
hide_table_of_contents: true
slug: Simple_Animations.html
---

Konva 本身有两种动画方法 [Tween](/docs/tweens/Linear_Easing.html) 和 [Animation](/docs/animations/Rotation.html)。你可以手动将它们应用于节点。

对于简单的用例，我们建议使用 `node.to()` 方法。

**指示：** 尝试移动一个矩形。

<iframe 
  src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/simple_animations?file=/src/App.svelte" 
  style={{
    width: "100%",
    height: "800px",
    border: 0,
    borderRadius: "4px",
    overflow: "hidden"
  }}
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>