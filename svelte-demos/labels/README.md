# Svelte + Vite

这个模板应该能帮助你开始在 Vite 中使用 Svelte 开发。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)。

## 需要官方的 Svelte 框架吗？

查看 [SvelteKit](https://github.com/sveltejs/kit#readme)，它也是由 Vite 驱动的。通过其无服务器优先的方法进行部署，并适应各种平台，支持 TypeScript、SCSS 和 Less 的开箱即用，且可以轻松添加对 mdsvex、GraphQL、PostCSS、Tailwind CSS 等的支持。

## 技术考虑

**为什么使用这个而不是 SvelteKit？**

- 它带来了自己的路由解决方案，对于某些用户来说可能并不理想。
- 它首先是一个框架，只是恰好在底层使用 Vite，而不是 Vite 应用。

这个模板包含了尽可能少的内容，以便开始使用 Vite + Svelte，同时考虑到开发者的体验，特别是在 HMR 和智能感知方面。它展示了与其他 `create-vite` 模板相当的能力，是初学者尝试 Vite + Svelte 项目一个很好的起点。

如果之后你需要 SvelteKit 提供的扩展能力和可扩展性，该模板的结构与 SvelteKit 类似，因此迁移起来很简单。

**为什么使用 `global.d.ts` 而不是 `jsconfig.json` 或 `tsconfig.json` 中的 `compilerOptions.types`？**

设置 `compilerOptions.types` 会排除配置中未明确列出的所有其他类型。使用三斜线引用保持 TypeScript 默认的设置，接受来自整个工作区的类型信息，同时还添加了 `svelte` 和 `vite/client` 的类型信息。

**为什么包含 `.vscode/extensions.json`？**

其他模板通过 README 间接推荐扩展，而这个文件允许 VS Code 在打开项目时提示用户安装推荐的扩展。

**为什么在 JS 模板中启用 `checkJs`？**

在运行时改变变量类型的情况很可能是意外的，而不是故意的。这提供了开箱即用的高级类型检查。如果你想利用 JavaScript 的动态类型特性，改变配置非常简单。

**为什么 HMR 没有保留我的本地组件状态？**

HMR 状态保留有许多问题！由于其常常令人惊讶的行为，在 `svelte-hmr` 和 `@sveltejs/vite-plugin-svelte` 中默认禁用了它。你可以在 [这里](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state) 阅读详细信息。

如果你有在组件内需要保留的重要状态，考虑创建一个外部存储，这样就不会被 HMR 替换。

```js
// store.js
// 一个极其简单的外部存储
import { writable } from 'svelte/store'
export default writable(0)
```