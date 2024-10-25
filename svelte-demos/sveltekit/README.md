# create-svelte

构建 Svelte 项目所需的一切，使用 [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte) 提供支持。

## 创建项目

如果您看到这个，您可能已经完成了这一步。恭喜！

```bash
# 在当前目录中创建一个新项目
npm create svelte@latest

# 在 my-app 中创建一个新项目
npm create svelte@latest my-app
```

## 开发

一旦您创建了项目并使用 `npm install`（或 `pnpm install` 或 `yarn`）安装了依赖项，启动开发服务器：

```bash
npm run dev

# 或启动服务器并在新浏览器标签中打开应用
npm run dev -- --open
```

## 构建

要创建应用的生产版本：

```bash
npm run build
```

您可以通过 `npm run preview` 预览生产构建。

> 要部署您的应用，您可能需要为目标环境安装一个 [adapter](https://kit.svelte.dev/docs/adapters)。