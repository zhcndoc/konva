title: 解决 "污点画布无法导出" 的问题与 Konva
---


当你尝试导出一个画布时，可能会遇到如下错误：

> 无法获取数据 URL。无法在 'HTMLCanvasElement' 上执行 'toDataURL'：污点画布无法导出。

> 无法从画布获取图像数据，因为画布被跨域数据污染。

或者在应用滤镜时，你可能会遇到以下错误：

> 无法应用滤镜。无法在 'CanvasRenderingContext2D' 上执行 'getImageData'：画布已被跨域数据污染。

> 无法应用滤镜。此操作不安全。


## 为什么会出现这个不安全的错误？

这是一个 [CORS 错误](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image)。出于安全原因，当你从另一个域加载图像时，浏览器可能会将画布标记为污点。在这种情况下，浏览器会阻止将画布导出为 `dataURL` 或 `imageData`（这就是我们在导出或使用滤镜时所做的操作）。

## 如何解决 CORS 问题？

首先，你可以尝试设置加载图像的 `crossOrigin = Anonymous` 属性。这种方法仅在请求的域具有允许共享请求的 `Access-Control-Allow-Origin` 头时有效。

```javascript
// 1
// 原生图像加载：
const img = new Image();
img.onload = () => {
   // 你的代码
};
img.crossOrigin = 'Anonymous';
img.src = url;

// 2
// 如果你使用 Konva.Image.fromURL API，就不需要设置该属性
// 它会自动设置为 Anonymous
Konva.Image.fromURL(url, img => {
  layer.add(img);
});

// 3
// 如果你使用 use-image hook 进行 react-konva
const MyImage = ({ url }) => {
  const [image] = useImage(url, 'Anonymous');
  return <Image image={image} />;
}
```

### 如果不起作用怎么办？

**它在所有情况下可能仍然无效。如果不起作用，那么你必须以不同的方式配置你的服务器（这超出了 Konva 的范围），或者你可以尝试将图像存储在其他地方以支持 CORS 请求。**