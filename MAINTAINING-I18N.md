# 中文站维护约定

本仓库独立维护 Konva 中文文档，与上游提供的简体中文翻译并行存在。

## 内容归属

- `content/` 是本站实际发布和持续维护的中文文档。同步上游后，需要由本站维护者把上游英文改动翻译到这里。
- `src/`、`docusaurus.config.ts` 和侧边栏中的可见文案也以本站中文版本为准。
- `i18n/zh-Hans/` 是上游提供的中文翻译镜像，只用于原样跟随上游。不要在本仓库中翻译、修正、格式化或重新生成该目录下的文件。
- Docusaurus 的默认语言标识暂时仍是 `en`，这是为了保持本站既有 URL 和部署方式；它不代表 `content/` 的正文是英文。

语言切换按钮有意隐藏。保留 `i18n/zh-Hans/` 目录和多语言配置，是为了让后续上游合并能够完整接收其中文文件，而不是向本站读者提供两套可切换的中文内容。

## 同步上游

1. 合并上游提交。
2. 对 `i18n/zh-Hans/` 的变更直接采用上游版本，不做本地编辑。
3. 检查上游对 `content/` 的新增和修改，将新增英文文案翻译成中文，并保留代码、路径、slug、组件属性及示例行为。
4. 翻译本次变更在 `src/`、`docusaurus.config.ts` 和侧边栏中新增的用户可见文案。
5. 运行 `npm run check`，确认 MDX、示例、类型检查、默认站点构建、性能、sitemap 和 llms 输出均通过。

合并冲突需要根据内容判断；如果冲突位于 `i18n/zh-Hans/`，以本次上游版本为准。不要通过删除整个目录来解决冲突。

## 不适用于本分支的上游检查

上游的 `npm run check:i18n`、`npm run check:i18n-drift`、`npm run check:code-drift` 和 `npm run update:i18n-sources` 假设 `content/` 是英文规范源、`i18n/zh-Hans/` 是由本仓库维护的译文。该假设不适用于本分支，因此这些命令不作为 CI 或发布门槛，也不要用它们更新 `i18n/zh-Hans/SOURCES.json` 或 `i18n/zh-Hans/CODE_SOURCES.json`。

`scripts/check-code-drift.js` 在手动运行后会清理临时生成的 `i18n/en/`，避免其中的英文界面目录覆盖本站直接写在源码里的中文文案。

## 翻译边界

翻译正文、标题、描述、导航、按钮、辅助功能标签和图片替代文本。以下内容保持原样：

- Konva API、类名、方法名和属性名；
- JavaScript、TypeScript、JSX、JSON 的语法与键；
- 导入路径、内部 URL、slug 和 UTM 参数；
- 代码围栏元数据以及 Tabs 的 `value`；
- `Canvas`、`Konva`、`React`、`Vue`、`Svelte`、`Angular`、`SVG`、`DOM`、`API`、`SDK` 等技术名称。

术语优先使用：stage「舞台」、layer「图层」、shape「图形」、node「节点」、drag and drop「拖放」、filter「滤镜」、tween「补间」、demo「示例」。
