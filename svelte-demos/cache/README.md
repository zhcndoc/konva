# Svelte + Vite

这个模板应该能帮助你在 Vite 中开始使用 Svelte 的开发。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)。

## 需要官方的 Svelte 框架吗？

查看 [SvelteKit](https://github.com/sveltejs/kit#readme)，它同样由 Vite 驱动。凭借其无服务器优先的方法，您可以在任何地方部署，并适应各种平台，开箱即用地支持 TypeScript、SCSS 和 Less，并且轻松添加对 mdsvex、GraphQL、PostCSS、Tailwind CSS 等的支持。

## 技术考虑

**为什么使用这个而不是 SvelteKit？**

- 它带来了自己的路由解决方案，这可能不像某些用户所希望的那样。
- 它首先是一个框架，刚好在底层使用 Vite，而不是一个 Vite 应用。

这个模板包含了尽可能少的内容，以便使用 Vite + Svelte 的开发，同时考虑到开发者在热模块替换（HMR）和智能感知方面的体验。它展示了与其他 `create-vite` 模板相当的能力，是初学者涉足 Vite + Svelte 项目的良好起点。

如果您后来需要 SvelteKit 提供的扩展功能和可扩展性，模板的结构与 SvelteKit 类似，因此迁移很容易。

**为什么使用 `global.d.ts` 而不是 `jsconfig.json` 或 `tsconfig.json` 中的 `compilerOptions.types`？**

设置 `compilerOptions.types` 会排除所有未在配置中显式列出的类型。使用三斜线引用保留了默认 TypeScript 设置，即接受来自整个工作区的类型信息，同时还添加了 `svelte` 和 `vite/client` 的类型信息。

**为什么要包含 `.vscode/extensions.json`？**

其他模板通过 README 间接推荐扩展，但这个文件允许 VS Code 在打开项目时提示用户安装推荐的扩展。

**为什么在 JS 模板中启用 `checkJs`？**

运行时更改变量类型的大多数情况很可能是意外的，而不是故意的。这提供了开箱即用的高级类型检查。如果您希望利用 JavaScript 的动态类型特性，更改配置是微不足道的。

**为什么 HMR 不保留我的本地组件状态？**

HMR 状态保留有许多注意事项！由于其常常出乎意料的行为，在 `svelte-hmr` 和 `@sveltejs/vite-plugin-svelte` 中默认禁用了它。您可以在 [这里](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state) 阅读详细信息。

如果您需要在组件中保留的状态，请考虑创建一个外部存储，以免被 HMR 替换。

```js
// store.js
// 一个极其简单的外部存储
import { writable } from 'svelte/store'
export default writable(0)
```