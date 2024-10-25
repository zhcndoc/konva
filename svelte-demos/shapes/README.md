# Svelte + Vite

这个模板应该能帮助你开始在 Vite 中使用 Svelte 进行开发。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)。

## 需要官方的 Svelte 框架吗？

请查看 [SvelteKit](https://github.com/sveltejs/kit#readme)，它同样由 Vite 提供支持。通过其无服务器优先的方法，可以部署到任何地方，并适应各种平台，开箱即用支持 TypeScript、SCSS 和 Less，并且可以轻松添加对 mdsvex、GraphQL、PostCSS、Tailwind CSS 等的支持。

## 技术考虑

**为什么选择这而不是 SvelteKit？**

- 它带来了自己的路由解决方案，这对某些用户可能不是首选。
- 它首先是一个框架，而恰好在底层使用 Vite，而不是 Vite 应用。

这个模板包含最少的内容，以便开始使用 Vite + Svelte，同时考虑到与 HMR 和智能感知相关的开发者体验。它展示的功能与其他 `create-vite` 模板不相上下，是初学者尝试 Vite + Svelte 项目的良好起点。

如果你以后需要 SvelteKit 提供的扩展能力和可扩展性，该模板的结构与 SvelteKit 相似，以便于迁移。

**为什么使用 `global.d.ts` 而不是 `jsconfig.json` 或 `tsconfig.json` 中的 `compilerOptions.types`？**

设置 `compilerOptions.types` 会排除所有未在配置中明确列出的类型。使用三斜杠引用保持了默认 TypeScript 设置，接受整个工作区的类型信息，同时添加了 `svelte` 和 `vite/client` 的类型信息。

**为什么要包含 `.vscode/extensions.json`？**

其他模板通过 README 间接推荐扩展，但是这个文件允许 VS Code 在打开项目时提示用户安装推荐的扩展。

**为什么在 JS 模板中启用 `checkJs`？**

在运行时更改变量类型的绝大多数情况更可能是意外而非故意。这提供了开箱即用的高级类型检查。如果你希望利用 JavaScript 的动态类型特性，可以很简单地更改配置。

**为什么 HMR 没有保留我的本地组件状态？**

HMR 状态保留有很多注意事项！由于其常常令人惊讶的行为，`svelte-hmr` 和 `@sveltejs/vite-plugin-svelte` 的默认设置都是禁用的。你可以在 [这里](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state) 阅读详细信息。

如果你有重要的状态需要在组件内保留，考虑创建一个外部存储，这样它就不会被 HMR 替换。

```js
// store.js
// 一个极其简单的外部存储
import { writable } from 'svelte/store'
export default writable(0)
```