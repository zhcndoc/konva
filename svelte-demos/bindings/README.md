# Svelte + Vite

这个模板应该能帮助你开始使用 Vite 开发 Svelte。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)。

## 需要一个官方的 Svelte 框架吗？

请查看 [SvelteKit](https://github.com/sveltejs/kit#readme)，它同样是基于 Vite 的。通过其无服务器优先的方法，可以部署到任何地方，并适应各种平台，开箱即用提供支持 TypeScript、SCSS 和 Less，并且可以轻松添加对 mdsvex、GraphQL、PostCSS、Tailwind CSS 等的支持。

## 技术考虑

**为什么使用这个而不是 SvelteKit？**

- 它提供了自己的路由解决方案，这对于某些用户来说可能不太理想。
- 它首先是一个框架，刚好在底层使用 Vite，而不是一个 Vite 应用。

这个模板包含尽可能少的内容，以便使用 Vite + Svelte 开始开发，同时考虑到了开发者的体验，尤其是 HMR 和智能感知。它展示了与其他 `create-vite` 模板相当的能力，是初学者尝试 Vite + Svelte 项目的良好起点。

如果你后来需要 SvelteKit 提供的扩展功能和可扩展性，该模板的结构与 SvelteKit 类似，以便于迁移。

**为什么使用 `global.d.ts` 而不是 `jsconfig.json` 或 `tsconfig.json` 中的 `compilerOptions.types`？**

设置 `compilerOptions.types` 会排除所有未在配置中显式列出的类型。使用三斜杠引用保留了默认的 TypeScript 设置，即接受来自整个工作区的类型信息，同时还添加了 `svelte` 和 `vite/client` 的类型信息。

**为什么要包含 `.vscode/extensions.json`？**

其他模板间接通过 README 推荐扩展，但此文件允许 VS Code 在打开项目时提示用户安装推荐的扩展。

**为什么在 JS 模板中启用 `checkJs`？**

在运行时更改变量类型的大多数情况往往是意外而非故意的。这提供了开箱即用的高级类型检查。如果你想利用 JavaScript 的动态类型特性，更改配置是微不足道的。

**为什么 HMR 没有保留我的本地组件状态？**

HMR 状态保留有许多注意事项！由于其常常令人惊讶的行为，它在 `svelte-hmr` 和 `@sveltejs/vite-plugin-svelte` 中默认被禁用。你可以在 [这里](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state) 阅读详情。

如果你在组件中有需要保留的重要状态，考虑创建一个外部存储，它不会被 HMR 替换。

```js
// store.js
// 一个非常简单的外部存储
import { writable } from 'svelte/store'
export default writable(0)
```