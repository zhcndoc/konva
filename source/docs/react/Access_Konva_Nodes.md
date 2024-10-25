title: 如何从 react-konva 访问 Konva 节点？
layout: react_page
---

在某些情况下，您可能需要直接使用 `Konva` API。例如，用于导出画布或动画。

有两种方法可以从 `react-konva` 访问 Konva 节点/形状。

## 使用 `refs` API

您可以使用 [refs API](https://reactjs.org/docs/refs-and-the-dom.html) 来访问 Konva 节点。

```js
import { Circle } from 'react-konva';
const App = () => {
  const shapeRef = React.useRef(null);
  React.useEffect(() => {
    // 它将记录 `Konva.Circle` 实例
    console.log(shapeRef.current);
  });
  return <Circle ref={shapeRef} />;
}
```

## 在事件回调中使用事件对象

访问 Konva 节点的另一种常见方法是直接使用您在任何事件中作为参数的事件对象：

```js
import { Circle } from 'react-konva';
const App = () => {
  const handleClick = (e) => {
    // 记录被点击的 Konva.Circle 实例
    console.log(e.target);
  }
  return <Circle onClick={handleClick} />;
}
```

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/react-demos/refs?hidenavigation=1&view=split&fontsize=10" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>