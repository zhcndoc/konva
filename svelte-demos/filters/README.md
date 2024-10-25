# Svelte + Vite

这个模板旨在帮助你开始使用 Vite 开发 Svelte 项目。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)。

## 需要官方的 Svelte 框架吗？

请查看 [SvelteKit](https://github.com/sveltejs/kit#readme)，它同样以 Vite 为基础。使用无服务器优先的方法，可以在各种平台上进行部署，开箱即用支持 TypeScript、SCSS 和 Less，并可轻松添加对 mdsvex、GraphQL、PostCSS、Tailwind CSS 等的支持。

## 技术考虑

**为什么要使用这个而不是 SvelteKit？**

- 它提供了自己的路由解决方案，这可能对某些用户来说并不理想。
- 它首先是一个框架，底层使用 Vite，而不单是一个 Vite 应用。

这个模板尽可能地精简，以便快速开始 Vite + Svelte，同时考虑到开发者在热模块替换（HMR）和代码提示方面的体验。它展示了与其他 `create-vite` 模板相当的能力，对于初学者尝试 Vite + Svelte 项目来说是一个很好的起点。

如果你之后需要 SvelteKit 提供的扩展能力和可扩展性，该模板的结构与 SvelteKit 类似，以便于迁移。

**为什么使用 `global.d.ts` 而不是 `jsconfig.json` 或 `tsconfig.json` 中的 `compilerOptions.types`？**

设置 `compilerOptions.types` 会排除配置中没有明确列出的所有其他类型。使用三斜杠引用可以保留 TypeScript 默认设置，即接受来自整个工作区的类型信息，同时还添加了 `svelte` 和 `vite/client` 的类型信息。

**为什么要包含 `.vscode/extensions.json`？**

其他模板通过 README 间接推荐扩展，但这个文件允许 VS Code 在打开项目时提示用户安装推荐的扩展。

**为什么在 JS 模板中启用 `checkJs`？**

在运行时更改变量类型的绝大多数情况很可能是意外，而不是故意的。这提供了开箱即用的高级类型检查。如果你想利用 JavaScript 的动态类型特性，改变配置是微不足道的。

**为什么 HMR 没有保留我的本地组件状态？**

HMR 状态保留存在许多陷阱！由于其常见的意外行为，`svelte-hmr` 和 `@sveltejs/vite-plugin-svelte` 默认都禁用了这个功能。你可以在 [这里](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state) 阅读详细信息。

如果你有在组件内需要保留的重要状态，考虑创建一个外部 store，这样在 HMR 时不会被替换。

```js
// store.js
// 一个极其简单的外部 store
import { writable } from 'svelte/store'
export default writable(0)
```