# Svelte + Vite

这个模板应帮助你开始在 Vite 中使用 Svelte 开发。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)。

## 需要官方的 Svelte 框架吗？

请查看 [SvelteKit](https://github.com/sveltejs/kit#readme)，它同样基于 Vite。采用无服务器优先的方法进行部署，并适应不同的平台，开箱即用支持 TypeScript、SCSS 和 Less，并且可以轻松添加对 mdsvex、GraphQL、PostCSS、Tailwind CSS 等的支持。

## 技术考虑

**为什么使用这个而不是 SvelteKit？**

- 它带来了自己的路由解决方案，这对某些用户可能并不理想。
- 它首先是一个框架，只是恰好在底层使用 Vite，而不是一个 Vite 应用。

这个模板尽可能少，以便你可以开始使用 Vite + Svelte，同时考虑到开发体验，特别是 HMR 和智能感知。它展示的能力与其他 `create-vite` 模板相当，是初学者涉足 Vite + Svelte 项目的良好起点。

如果你以后需要 SvelteKit 提供的扩展能力和可扩展性，模板结构与 SvelteKit 相似，因此迁移变得容易。

**为什么使用 `global.d.ts` 而不是 `jsconfig.json` 或 `tsconfig.json` 中的 `compilerOptions.types`？**

设置 `compilerOptions.types` 会排除所有未明确列出的类型。使用三斜杠引用可以保持 TypeScript 的默认设置，接受来自整个工作区的类型信息，同时添加 `svelte` 和 `vite/client` 的类型信息。

**为什么包含 `.vscode/extensions.json`？**

其他模板通过 README 间接推荐扩展，但这个文件允许 VS Code 在打开项目时提示用户安装推荐的扩展。

**为什么在 JS 模板中启用 `checkJs`？**

在运行时更改变量类型的大多数情况可能是意外的，而非故意的。这为你提供了开箱即用的高级类型检查。如果你想利用 JavaScript 的动态类型特性，修改配置也非常简单。

**为什么 HMR 没有保持我的本地组件状态？**

HMR 状态保留有很多陷阱！由于其经常令人惊讶的行为，它在 `svelte-hmr` 和 `@sveltejs/vite-plugin-svelte` 中默认被禁用。你可以在 [这里](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state) 阅读详细信息。

如果你有需要在组件中保留的重要状态，考虑创建一个外部存储，这样就不会被 HMR 替换。

```js
// store.js
// 一个极其简单的外部存储
import { writable } from 'svelte/store'
export default writable(0)
```