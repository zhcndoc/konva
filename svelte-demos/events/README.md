# Svelte + Vite

这个模板应该能帮助你开始使用 Vite 开发 Svelte 应用。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)。

## 需要官方的 Svelte 框架吗？

可以查看 [SvelteKit](https://github.com/sveltejs/kit#readme)，它也是基于 Vite 的。采用无服务优先的方法，随处部署并适应各种平台，开箱即用地支持 TypeScript、SCSS 和 Less，并且可以轻松添加对 mdsvex、GraphQL、PostCSS、Tailwind CSS 等的支持。

## 技术考虑

**为什么使用这个而不是 SvelteKit？**

- 它带来了自己的路由解决方案，这对于某些用户来说可能不是优选。
- 它首要是一个框架，恰好在底层使用 Vite，而不是一个 Vite 应用。

这个模板尽量少，便于使用 Vite + Svelte 开始，同时考虑到开发者在 HMR 和智能感知方面的体验。它展示了与其他 `create-vite` 模板相当的能力，是初学者涉足 Vite + Svelte 项目的良好起点。

如果你之后需要 SvelteKit 提供的扩展能力和可扩展性，该模板的结构与 SvelteKit 类似，因此迁移将非常容易。

**为什么使用 `global.d.ts` 而不是 `jsconfig.json` 或 `tsconfig.json` 中的 `compilerOptions.types`？**

设置 `compilerOptions.types` 会关闭所有未在配置中明确列出的类型。使用三斜杠引用保持了默认的 TypeScript 设置，接受来自整个工作区的类型信息，同时还添加了 `svelte` 和 `vite/client` 的类型信息。

**为什么包含 `.vscode/extensions.json`？**

其他模板通过 README 间接推荐扩展，但这个文件允许 VS Code 在用户打开项目时提示安装推荐的扩展。

**为什么在 JS 模板中启用 `checkJs`？**

在运行时改变变量类型的情况很可能是意外的，而不是故意的。这提供了开箱即用的高级类型检查。如果你想利用 JavaScript 的动态类型特性，改变配置非常简单。

**为什么 HMR 没有保留我的本地组件状态？**

HMR 状态保留有一些陷阱！由于其常常令人惊讶的行为，在 `svelte-hmr` 和 `@sveltejs/vite-plugin-svelte` 中默认禁用了它。如果你想查看详细信息，可以查看 [这里](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state)。

如果你有在组件内重要的状态需要保留，考虑创建外部存储，这样在 HMR 时就不会被替换。

```js
// store.js
// 一个非常简单的外部存储
import { writable } from 'svelte/store'
export default writable(0)
```