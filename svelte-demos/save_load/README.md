# Svelte + Vite

这个模板应能帮助你在 Vite 中开始使用 Svelte 进行开发。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)。

## 需要一个官方的 Svelte 框架吗？

查看 [SvelteKit](https://github.com/sveltejs/kit#readme)，它同样由 Vite 提供支持。使用无服务器优先的方式随处部署，并适应各种平台，开箱即用支持 TypeScript、SCSS 和 Less，并且可以轻松添加对 mdsvex、GraphQL、PostCSS、Tailwind CSS 等的支持。

## 技术考虑

**为什么选择这个而不是 SvelteKit？**

- 它提供了自己的路由解决方案，这可能并不适合某些用户。
- 它首先是一个框架，恰好在底层使用 Vite，而不是一个 Vite 应用程序。

这个模板包含了启动 Vite + Svelte 所需的最少内容，同时考虑到了开发者在 HMR 和智能感知方面的体验。它展示了与其他 `create-vite` 模板相当的能力，是初学者进入 Vite + Svelte 项目的一个良好起点。

如果你后来需要 SvelteKit 提供的扩展能力和可扩展性，模板的结构与 SvelteKit 类似，因此迁移会很简单。

**为什么使用 `global.d.ts` 而不是 `jsconfig.json` 或 `tsconfig.json` 中的 `compilerOptions.types`？**

设置 `compilerOptions.types` 会排除所有在配置中未明确列出的其他类型。使用三斜杠引用可以保持默认的 TypeScript 设置，接受来自整个工作区的类型信息，同时添加 `svelte` 和 `vite/client` 的类型信息。

**为什么要包含 `.vscode/extensions.json`？**

其他模板通过 README 间接推荐扩展，但这个文件允许 VS Code 在打开项目时提示用户安装推荐的扩展。

**为什么在 JS 模板中启用 `checkJs`？**

在运行时更改变量类型的大多数情况可能是意外的，而不是故意的。这提供了开箱即用的高级类型检查。如果你希望利用 JavaScript 的动态类型特性，改变配置非常简单。

**为什么 HMR 不保留我的本地组件状态？**

HMR 状态保留存在许多陷阱！由于其常常令人惊讶的行为，它在 `svelte-hmr` 和 `@sveltejs/vite-plugin-svelte` 中默认被禁用。如果你在组件中有重要的状态需要保留，请考虑创建一个外部存储，这样不会被 HMR 替换。

```js
// store.js
// 一个极其简单的外部存储
import { writable } from 'svelte/store'
export default writable(0)
```