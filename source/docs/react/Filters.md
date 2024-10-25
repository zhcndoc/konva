title: 如何在 React 和 Konva 中应用画布滤镜？
layout: react_page
---

要应用滤镜，您需要手动缓存 `Konva.Node`。您可以在 `componentDidMount` 中完成此操作。每次在 `componentDidUpdate` 或 `React.useEffect` 中更新它们的样式时，您可能需要重新缓存节点。

说明：点击矩形以查看更改。

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/react-demos/filters?hidenavigation=1&view=split&fontsize=10" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>