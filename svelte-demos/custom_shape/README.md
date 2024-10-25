# Svelte + Vite

这个模板应该能帮助你开始在 Vite 中使用 Svelte 进行开发。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)。

## 需要官方的 Svelte 框架吗？

查看 [SvelteKit](https://github.com/sveltejs/kit#readme)，它同样由 Vite 支持。具备无服务器优先的部署方式，灵活适应各种平台，开箱即用支持 TypeScript、SCSS 和 Less，并可以轻松添加对 mdsvex、GraphQL、PostCSS、Tailwind CSS 等的支持。

## 技术考虑

**为什么选择这个而不是 SvelteKit？**

- 它带来了自己的路由解决方案，可能并不适合某些用户。
- 它首先是一个框架，恰好在底层使用 Vite，而不是一个 Vite 应用。

这个模板包含了尽可能少的内容，以便开始 Vite + Svelte 的开发，同时考虑了开发者在 HMR 和 IntelliSense 方面的体验。它展示了与其他 `create-vite` 模板相当的功能，并为初学者提供了一个良好的起点，帮助他们入门 Vite + Svelte 项目。

如果你后来需要 SvelteKit 提供的扩展功能和可扩展性，该模板的结构与 SvelteKit 相似，以便于迁移。

**为什么使用 `global.d.ts` 而不是在 `jsconfig.json` 或 `tsconfig.json` 中的 `compilerOptions.types`?**

设置 `compilerOptions.types` 会排除配置中未显式列出的所有其他类型。使用三斜线引用保持了默认的 TypeScript 设置，允许从整个工作区接受类型信息，同时添加了 `svelte` 和 `vite/client` 的类型信息。

**为什么要包含 `.vscode/extensions.json`?**

其他模板通过 README 间接推荐扩展，但这个文件可以让 VS Code 在打开项目时提示用户安装推荐的扩展。

**为什么在 JS 模板中启用 `checkJs`?**

在运行时改变变量类型的大多数情况可能是意外的，而不是故意的。这提供了开箱即用的高级类型检查。如果你想利用 JavaScript 的动态类型特性，改变配置是微不足道的。

**为什么 HMR 没有保留我的本地组件状态?**

HMR 状态保留有很多陷阱！在 `svelte-hmr` 和 `@sveltejs/vite-plugin-svelte` 中，它默认是禁用的，因为其行为往往令人惊讶。你可以在 [这里](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state) 阅读详细信息。

如果你有重要的状态需要在组件中保留，考虑创建一个外部存储，这样就不会被 HMR 替换。

```js
// store.js
// 一个极其简单的外部存储
import { writable } from 'svelte/store'
export default writable(0)
```