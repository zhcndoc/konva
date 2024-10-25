title: 如何在画布上用 Svelte 绘制图像？
layout: svelte_page

---

对于图像，你需要手动创建一个原生的 `window.Image` 实例或 `canvas` 元素，并将其作为 `Image` 组件的图像属性使用。

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/images?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>