# Svelte + Vite

这个模板应该能帮助你在 Vite 中开始开发 Svelte。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)。

## 需要官方的 Svelte 框架吗？

查看 [SvelteKit](https://github.com/sveltejs/kit#readme)，它同样由 Vite 支持。使用无服务器优先的方法可以在任何地方部署，并适应各种平台，开箱即用地支持 TypeScript、SCSS 和 Less，同时可以轻松添加对 mdsvex、GraphQL、PostCSS、Tailwind CSS 等的支持。

## 技术考虑

**为什么选择这个而不是 SvelteKit？**

- 它带来了自己的路由解决方案，可能并不适合某些用户。
- 它首先是一个框架，仅仅是使用 Vite 作为底层，而不是一个 Vite 应用。

这个模板尽可能少地包含内容，以便于与 Vite + Svelte 开始，同时考虑到开发者在热模块替换 (HMR) 和智能感知方面的体验。它展示了与其他 `create-vite` 模板相当的功能，并且是初入 Vite + Svelte 项目的初学者的良好起点。

如果你后来需要 SvelteKit 提供的扩展功能和可扩展性，该模板的结构与 SvelteKit 相似，因此易于迁移。

**为什么使用 `global.d.ts` 而不是 `jsconfig.json` 或 `tsconfig.json` 中的 `compilerOptions.types`？**

设置 `compilerOptions.types` 会排除所有未在配置中明确列出的类型。使用三斜杠引用可以保持默认 TypeScript 设置，接受整个工作区的类型信息，同时添加 `svelte` 和 `vite/client` 的类型信息。

**为什么要包含 `.vscode/extensions.json`？**

其他模板通过 README 间接推荐扩展，而这个文件允许 VS Code 在打开项目时提示用户安装推荐的扩展。

**为什么在 JS 模板中启用 `checkJs`？**

运行时类型变化大多是意外的，而非故意的。这提供了即开即用的高级类型检查。如果你想利用 JavaScript 的动态类型特性，修改配置是微不足道的。

**为什么 HMR 不保留我的本地组件状态？**

HMR 状态保留有许多需要注意的地方！在 `svelte-hmr` 和 `@sveltejs/vite-plugin-svelte` 中默认禁用了此功能，因为它的行为常常令人惊讶。你可以在 [这里](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state) 阅读详细信息。

如果你有重要的状态需要在组件中保留，考虑创建一个外部存储，这样 HMR 就不会替换它。

```js
// store.js
// 一个极其简单的外部存储
import { writable } from 'svelte/store'
export default writable(0)
```