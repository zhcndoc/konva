title: 使用 Konva 开始 Vue 和 Canvas 的旅程
layout: vue_page

---

## 如何在 Vue 中使用 Canvas？

![VueKonva Logo](https://raw.githubusercontent.com/konvajs/vue-konva/master/vue-konva.png)

Vue Konva 是一个用于使用 Vue 绘制复杂 Canvas 图形的 JavaScript 库。

它提供了与 [Konva 框架](https://konvajs.org/) 的声明性和反应式绑定。

所有的 `vue-konva` 组件对应于具有前缀 'v-' 的同名 `Konva` 组件。所有可用于 `Konva` 对象的参数都可以作为 `props` 中的 `config` 添加到相应的 `vue-konva` 组件中。

核心形状包括：`v-rect`、`v-circle`、`v-ellipse`、`v-line`、`v-image`、`v-text`、`v-text-path`、`v-star`、`v-label`、`v-path`、`v-regular-polygon`。
此外，你还可以创建自定义形状。

要获取有关 `Konva` 的更多信息，可以阅读 [Konva 概述](https://konvajs.org/docs/overview.html)。

## 快速开始

需要 [Vue.js](https://vuejs.org) 版本 2.4+。

### 1 通过 npm 安装

`vue@3`：

```npm
npm install vue-konva konva --save
```

`vue@2`：

```npm
npm install vue-konva@2 konva --save
```

### 2 导入并使用 VueKonva

`vue@3`：

```js
import { createApp } from 'vue';
import App from './App.vue';
import VueKonva from 'vue-konva';

const app = createApp(App);
app.use(VueKonva);
app.mount('#app');
```

`vue@2`：

```javascript
import Vue from 'vue';
import VueKonva from 'vue-konva';

Vue.use(VueKonva);
```

### 3 在你的组件模板中引用

```html
<template>
  <v-stage :config="configKonva">
    <v-layer>
      <v-circle :config="configCircle"></v-circle>
    </v-layer>
  </v-stage>
</template>
```

```javascript
<script>
export default {
  data() {
    return {
      configKonva: {
        width: 200,
        height: 200
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 70,
        fill: "red",
        stroke: "black",
        strokeWidth: 4
      }
    };
  }
};
</script>
```

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/vue-demos/basic_demo?hidenavigation=1&view=preview&fontsize=10&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### 或者使用 CDN

```html
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
  </head>
  <body>
    <div id="app">
      <v-stage ref="stage" :config="configKonva">
        <v-layer ref="layer">
          <v-circle :config="configCircle"></v-circle>
        </v-layer>
      </v-stage>
    </div>
    <!--1. 引入 Vue Javascript & Konva-->
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/konva@9/konva.min.js"></script>
    <!--2. 引入 VueKonva Javascript (插件自动安装)-->
    <script src="./lib/vue-konva.min.js"></script>
    <script>
      // 3. 创建 Vue 实例
      new Vue({
        el: '#app',
        data: {
          configKonva: {
            width: 200,
            height: 200,
          },
          configCircle: {
            x: 100,
            y: 100,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
          },
        },
      });
    </script>
  </body>
</html>
```