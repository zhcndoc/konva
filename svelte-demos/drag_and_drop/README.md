# Svelte + Vite

这个模板应该能帮助你开始在 Vite 中开发 Svelte。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)。

## 需要官方的 Svelte 框架吗？

可以查看 [SvelteKit](https://github.com/sveltejs/kit#readme)，它同样基于 Vite。采用无服务器优先的方法，可以部署到任何地方，并适应各种平台，开箱即用支持 TypeScript、SCSS 和 Less，并且轻松添加对 mdsvex、GraphQL、PostCSS、Tailwind CSS 等的支持。

## 技术考量

**为什么使用这个而不是 SvelteKit？**

- 它带来了自己的路由解决方案，对于某些用户来说可能并不是最理想的选择。
- 它首先是一个框架，恰好在底层使用 Vite，而不是一个 Vite 应用。

这个模板尽可能少地包含内容，以便开始使用 Vite + Svelte，同时考虑到开发者体验，尤其是关于 HMR 和智能感知的部分。它展示了与其他 `create-vite` 模板相当的功能，是初学者进入 Vite + Svelte 项目的良好起点。

如果你后来需要 SvelteKit 提供的扩展功能和可扩展性，模板的结构与 SvelteKit 类似，这样很容易进行迁移。

**为什么使用 `global.d.ts` 而不是在 `jsconfig.json` 或 `tsconfig.json` 中使用 `compilerOptions.types`？**

设置 `compilerOptions.types` 会排除所有未在配置中明确列出的类型。使用三斜线引用可以保留默认的 TypeScript 设置，即接受来自整个工作区的类型信息，同时添加 `svelte` 和 `vite/client` 的类型信息。

**为什么要包含 `.vscode/extensions.json`？**

其他模板通过 README 间接推荐扩展，但这个文件允许 VS Code 在打开项目时提示用户安装推荐的扩展。

**为什么在 JS 模板中启用 `checkJs`？**

在运行时改变变量类型的最常见情况可能是意外而非故意。这样可以开箱即用地提供高级类型检查。如果你希望利用 JavaScript 的动态类型特性，修改配置非常简单。

**为什么 HMR 不保留我的本地组件状态？**

HMR 状态保留有一些问题！由于其经常令人惊讶的行为，默认情况下在 `svelte-hmr` 和 `@sveltejs/vite-plugin-svelte` 中都已禁用。你可以在 [这里](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state) 阅读详细信息。

如果你有重要的状态需要在组件中保留，考虑创建一个外部存储，这样就不会被 HMR 替换。

```js
// store.js
// 一个极其简单的外部存储
import { writable } from 'svelte/store'
export default writable(0)
```