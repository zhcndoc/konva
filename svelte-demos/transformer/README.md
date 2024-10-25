# Svelte + Vite

此模板应帮助您开始在 Vite 中使用 Svelte 进行开发。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)。

## 需要官方的 Svelte 框架吗？

请查看 [SvelteKit](https://github.com/sveltejs/kit#readme)，它也是由 Vite 提供支持。采用无服务器优先的方法，您可以将其部署到任何地方，并且适应各种平台，开箱即用支持 TypeScript、SCSS 和 Less，并且可以轻松添加对 mdsvex、GraphQL、PostCSS、Tailwind CSS 等的支持。

## 技术考虑

**为什么使用这个而不是 SvelteKit？**

- 它带来了自己的路由解决方案，这可能对某些用户不太合适。
- 它首先是一种框架，只是恰好在底层使用 Vite，而不是 Vite 应用。

此模板包含尽可能少的初始内容，以便与 Vite + Svelte 开始，同时考虑到开发者在 HMR 和智能感知方面的体验。它展示了与其他 `create-vite` 模板相当的能力，并且是初学者涉足 Vite + Svelte 项目的良好起点。

如果您后来需要 SvelteKit 提供的扩展功能和可扩展性，该模板的结构也类似于 SvelteKit，因此迁移将非常简单。

**为什么使用 `global.d.ts` 而不是 `jsconfig.json` 或 `tsconfig.json` 中的 `compilerOptions.types`？**

设置 `compilerOptions.types` 将排除所有未在配置中明确列出的类型。使用三重斜杠引用可以保持默认的 TypeScript 设置，从整个工作区接受类型信息，同时添加 `svelte` 和 `vite/client` 类型信息。

**为什么要包含 `.vscode/extensions.json`？**

其他模板通过 README 间接推荐扩展，但此文件允许 VS Code 在打开项目时提示用户安装推荐的扩展。

**为什么在 JS 模板中启用 `checkJs`？**

在运行时更改变量类型的大多数情况可能是意外的，而不是故意的。这提供了开箱即用的高级类型检查。如果您想利用 JavaScript 的动态类型特性，修改配置则是微不足道的。

**为什么 HMR 不保留我的本地组件状态？**

HMR 状态保留有许多小细节需要注意！由于其常令人惊讶的行为，`svelte-hmr` 和 `@sveltejs/vite-plugin-svelte` 中的 HMR 默认情况下已被禁用。您可以在 [这里](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state) 阅读详细信息。

如果您有需要在组件中保留的重要状态，请考虑创建一个外部商店，这样 HMR 就不会替换它。

```js
// store.js
// 一个极其简单的外部商店
import { writable } from 'svelte/store'
export default writable(0)
```