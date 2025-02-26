# Svelte + Vite

此模板应帮助您开始在 Vite 中使用 Svelte 进行开发。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)。

## 需要官方的 Svelte 框架吗？

请查看 [SvelteKit](https://github.com/sveltejs/kit#readme)，它也是由 Vite 提供支持。使用无服务器优先的方法在任何地方进行部署，并适应各种平台，开箱即用支持 TypeScript、SCSS 和 Less，轻松添加对 mdsvex、GraphQL、PostCSS、Tailwind CSS 等的支持。

## 技术考虑

**为什么选择这个而不是 SvelteKit？**

- 它提供了自己的路由解决方案，这对某些用户来说可能并不理想。
- 它首先是一个框架，恰好在底层使用 Vite，而不是一个 Vite 应用。

该模板包含尽可能少的内容，便于开始使用 Vite + Svelte，同时考虑到开发者在 HMR 和智能感知方面的体验。它展示了与其他 `create-vite` 模板相当的功能，并且是初学者初步接触 Vite + Svelte 项目的良好起点。

如果您后来需要 SvelteKit 提供的扩展功能和可扩展性，该模板的结构与 SvelteKit 相似，因此迁移将非常容易。

**为什么使用 `global.d.ts` 而不是在 `jsconfig.json` 或 `tsconfig.json` 中使用 `compilerOptions.types`？**

设置 `compilerOptions.types` 会排除配置中未明确定义的所有其他类型。使用三斜杠引用保持了默认 TypeScript 设置，允许从整个工作区接受类型信息，同时还增加了 `svelte` 和 `vite/client` 的类型信息。

**为什么要包含 `.vscode/extensions.json`？**

其他模板通过 README 间接推荐扩展，但此文件允许 VS Code 在打开项目时提示用户安装推荐的扩展。

**为什么在 JS 模板中启用 `checkJs`？**

在运行时更改变量类型的大多数情况可能是意外的，而不是故意的。这提供了开箱即用的高级类型检查。如果您想利用 JavaScript 的动态类型特性，修改配置非常简单。

**为什么 HMR 不保持我的本地组件状态？**

HMR 状态保持有许多陷阱！在 `svelte-hmr` 和 `@sveltejs/vite-plugin-svelte` 中默认已禁用，因为它们的行为常常令人惊讶。您可以在 [这里](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state) 阅读详情。

如果您有重要的状态需要在组件内保留，考虑创建一个外部存储，这样就不会被 HMR 替代。

```js
// store.js
// 一个极其简单的外部存储
import { writable } from 'svelte/store'
export default writable(0)
```