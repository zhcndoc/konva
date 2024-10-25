# Svelte + Vite

此模板应有助于您开始在 Vite 中使用 Svelte 进行开发。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)。

## 需要官方的 Svelte 框架吗？

查看 [SvelteKit](https://github.com/sveltejs/kit#readme)，它也由 Vite 驱动。利用其无服务器优先的方法，您可以在任何地方进行部署，并适应各种平台，开箱即用，支持 TypeScript、SCSS 和 Less，并能轻松添加对 mdsvex、GraphQL、PostCSS、Tailwind CSS 等的支持。

## 技术考虑

**为什么使用这个而不是 SvelteKit？**

- 它带来了自己的路由解决方案，这对某些用户可能不太合适。
- 它首先是一个框架，只是恰好在底层使用 Vite，而不是一个 Vite 应用。

此模板包含尽可能少的内容，以便开始使用 Vite + Svelte，同时考虑到开发者在 HMR 和智能感知方面的体验。它展示了与其他 `create-vite` 模板平级的能力，是初学者涉足 Vite + Svelte 项目的良好起点。

如果您稍后需要 SvelteKit 提供的扩展功能和可扩展性，模板的结构与 SvelteKit 类似，因此易于迁移。

**为什么使用 `global.d.ts` 而不是 `jsconfig.json` 或 `tsconfig.json` 内的 `compilerOptions.types`？**

设置 `compilerOptions.types` 会排除所有未在配置中明确列出的类型。使用三斜杠引用保持 TypeScript 默认设置，即接受来自整个工作区的类型信息，同时还添加了 `svelte` 和 `vite/client` 的类型信息。

**为什么包含 `.vscode/extensions.json`？**

其他模板间接通过 README 推荐扩展，而此文件允许 VS Code 在打开项目时提示用户安装推荐的扩展。

**为什么在 JS 模板中启用 `checkJs`？**

大多数情况下，运行时改变变量类型很可能是意外的，而不是故意的。这提供了开箱即用的高级类型检查。如果您希望利用 JavaScript 的动态类型特性，则很容易更改配置。

**为什么 HMR 没有保存我的本地组件状态？**

HMR 状态保存存在一些陷阱！由于其常常令人惊讶的行为，在 `svelte-hmr` 和 `@sveltejs/vite-plugin-svelte` 中默认已禁用。您可以在 [这里](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state) 了解详细信息。

如果您有重要的状态需要在组件内保留，请考虑创建一个外部存储，这样就不会被 HMR 替换。

```js
// store.js
// 一个极其简单的外部存储
import { writable } from 'svelte/store'
export default writable(0)
```