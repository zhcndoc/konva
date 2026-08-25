---
title: 如何使用 Svelte 在 canvas 上绘制图像？
sidebar_label: 图像
hide_table_of_contents: true
slug: Images.html
description: "了解如何使用 svelte-konva Image 组件在 HTML5 Canvas 上加载和显示图像。"
---

对于图像，你需要手动创建一个原生的 window.Image 实例或 `canvas` 元素，并将其用作 `Image` 组件的 image 属性。

<iframe loading="lazy" src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/images?file=/src/App.svelte" style={{width: '100%', height:'800px', border: '0px', borderRadius: '4px', overflow: 'hidden'}} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
