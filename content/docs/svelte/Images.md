---
title: 如何在 Svelte 中在画布上绘制图像？
sidebar_label: 图像
hide_table_of_contents: true
slug: Images.html
---

对于图像，您需要手动创建一个原生的 `window.Image` 实例或 `canvas` 元素，并将其用作 `Image` 组件的图像属性。

<iframe 
  src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/images?file=/src/App.svelte" 
  style={{
    width: "100%",
    height: "800px",
    border: 0,
    borderRadius: "4px",
    overflow: "hidden"
  }}
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>