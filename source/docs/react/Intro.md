title: react-konva - 声明式画布组件用于 React
layout: react_page
---

```bash
npm install react-konva konva
```



<div class="features">
  <div class="feature"><img src="/assets/features/undraw_abstract_x68e.svg" />
    <h3 class="desc">适用于图形应用的所有常见形状</h3>
  </div>
  <div class="feature"><img src="/assets/features/undraw_file_sync_ot38.svg" />
    <h3 class="desc">支持桌面和移动设备</h3>
  </div>
  <div class="feature"><img src="/assets/features/undraw_fitting_pieces_cli3.svg" />
    <h3 class="desc">节点嵌套、分组和事件冒泡</h3>
  </div>
  <div class="feature"><img src="/assets/features/undraw_image_viewer_wxce.svg" />
    <h3 class="desc">高质量导出为数据 URL、图像数据或图像对象</h3>
  </div>
</div>

## 它看起来如何？

```js
import { Stage, Layer, Rect, Circle } from 'react-konva';

export const App = () => {
  return (
    // Stage - 是一个 div 包裹层
    // Layer - 是实际的 2D 画布元素，因此可以在舞台内有多个图层
    // Rect 和 Circle 不是 DOM 元素。它们是画布上的 2D 形状
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect width={50} height={50} fill="red" />
        <Circle x={200} y={200} stroke="black" radius={50} />
      </Layer>
    </Stage>
  );
}
```

## 演示

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/react-demos/basic_demo?hidenavigation=1&view=split&fontsize=10" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<div id="intro-btn-wrap" style="margin-bottom: 50px"><a id="intro-btn" href="/docs/react/index.html">开始使用</a></div>