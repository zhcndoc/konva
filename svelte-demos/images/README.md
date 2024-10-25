# Svelte + Vite

该模板应该能帮助您开始使用 Vite 开发 Svelte 应用。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)。

## 需要官方 Svelte 框架吗？

请查看 [SvelteKit](https://github.com/sveltejs/kit#readme)，它同样由 Vite 提供支持。采用无服务器优先的方法，可以在任何地方部署，并适应各种平台，开箱即用支持 TypeScript、SCSS 和 Less，同时也可以轻松添加对 mdsvex、GraphQL、PostCSS、Tailwind CSS 等的支持。

## 技术考虑

**为什么使用这个而不是 SvelteKit？**

- 它带来了自己的路由解决方案，这可能不适合某些用户。
- 它首先是一种框架，恰好在内部使用 Vite，而不是一个 Vite 应用。

该模板包含尽可能少的内容，以便与 Vite + Svelte 开始，同时考虑到开发者在 HMR 和智能感知方面的体验。它展示了与其他 `create-vite` 模板相当的功能，是初学者了解 Vite + Svelte 项目的良好起点。

如果您后来需要 SvelteKit 提供的扩展功能和可扩展性，模板的结构与 SvelteKit 相似，因此易于迁移。

**为什么使用 `global.d.ts` 而不是 `jsconfig.json` 或 `tsconfig.json` 中的 `compilerOptions.types`？**

设置 `compilerOptions.types` 会排除配置中未显式列出的所有其他类型。使用三斜杠引用保持了 TypeScript 的默认设置，即接受来自整个工作区的类型信息，同时添加了 `svelte` 和 `vite/client` 的类型信息。

**为什么包含 `.vscode/extensions.json`？**

其他模板通过 README 间接推荐扩展，但此文件允许 VS Code 在打开项目时提示用户安装推荐的扩展。

**为什么在 JS 模板中启用 `checkJs`？**

在运行时更改变量类型的大多数情况很可能是意外的，而不是故意的。这提供了开箱即用的高级类型检查。如果您希望利用 JavaScript 的动态类型特性，更改配置非常简单。

**为什么 HMR 没有保留我的本地组件状态？**

HMR 状态保留有很多注意事项！由于其常常令人惊讶的行为，`svelte-hmr` 和 `@sveltejs/vite-plugin-svelte` 中的默认设置都禁用了它。如果您想了解更多详情，可以在 [这里](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state) 阅读。

如果您有在组件中需要保留的重要状态，考虑创建一个外部存储，这样 HMR 不会替换它。

```js
// store.js
// 一个非常简单的外部存储
import { writable } from 'svelte/store'
export default writable(0)
```