---
sidebar_position: 3
title: AI 工具
sidebar_label: AI 工具
hide_table_of_contents: true
slug: ai_tools.html
---

## 使用 Konva 和 AI 代理进行编码

我们拥有多种可能帮助你构建更佳 Konva 应用的 AI 工具。它们全部由强大的 [crawlchat](https://crawlchat.app/) 提供支持。

AI 代理将大量利用 Konva 文档来回答你的问题。请记住，它是一个大型语言模型（LLM），与任何现代 LLM 一样，可能会给出错误的答案。

## AI 聊天机器人

点击页面上的“提问 AI”按钮即可向 AI 提问。

你也可以加入你的 [Discord 社区](https://remotion.dev/discord)，在那里向 `@AiBot-CrawlChat` 提问。

## MCP

MCP（模型上下文协议）是一种连接到像 Claude App、Cursor、Windsurf 等 LLM 应用的标准协议。

### Cursor MCP 命令

有关详细的视频指南，请[查看此教程](https://guides.crawlchat.app/walkthrough/67db0080600010f091e529b7)。  
Cursor 需要在设置中添加一个 JSON 片段。复制并粘贴以下代码。

**重要提示：截至2025年3月，Cursor 仅在“代理”模式下使用 MCP。“提问”和其他模式将不使用该协议。**

```json
"konva-documentation": {
  "command": "npx",
  "args": [
    "crawl-chat-mcp",
    "--id=67d221efb4b9de65095a2579",
    "--name=konva_documentation"
  ]
}
```

### MCP 命令

```
npx crawl-chat-mcp --id=67d221efb4b9de65095a2579 --name=konva_documentation
```