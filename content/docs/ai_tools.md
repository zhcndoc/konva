---
sidebar_position: 3
title: 用于 Konva.js 开发的 AI 工具
sidebar_label: AI 工具
hide_table_of_contents: true
slug: ai_tools.html
description: "使用 AI 更快地构建 Konva.js 应用。与经过 Konva 文档训练的 AI 机器人聊天，或将 Konva MCP 服务器连接到 Cursor、Claude Desktop、Windsurf 和其他 AI 编码工具。"
---

## 使用 Konva 和 AI 进行编码

我们拥有多种 AI 工具，帮助您更快地构建 Konva 应用。所有这些工具均由 [CrawlChat](https://crawlchat.app/) 提供支持。

AI 代理广泛使用 Konva 文档来回答您的问题。请记住它是一个 LLM（大型语言模型），就像任何现代 LLM 一样，它可能会给出错误的答案。

## AI 聊天机器人

点击任何页面上的"Ask AI"按钮，提出关于 Konva 的问题。

您也可以加入 [Konva Discord 社区](https://discord.gg/8FqZwVT) 并在那里询问 `@AiBot-CrawlChat`。

## MCP（模型上下文协议）

MCP 是一种标准协议，用于将 AI 编码工具连接到外部文档。通过 Konva MCP 服务器，Cursor、Claude Desktop 和 Windsurf 等工具在帮助您编写代码时可以直接访问 Konva 文档。

### Cursor

有关视频说明，请参阅 [此指南](https://guides.crawlchat.app/walkthrough/67db0080600010f091e529b7)。

将以下内容添加到您的 Cursor MCP 设置中：

**重要提示：Cursor 仅在"Agent"模式下使用 MCP。"Ask"和其他模式不会使用它。**

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

### Claude Desktop

将以下内容添加到您的 Claude Desktop 配置文件 (`claude_desktop_config.json`) 中：

```json
{
  "mcpServers": {
    "konva-documentation": {
      "command": "npx",
      "args": [
        "crawl-chat-mcp",
        "--id=67d221efb4b9de65095a2579",
        "--name=konva_documentation"
      ]
    }
  }
}
```

在 macOS 上，配置文件位于 `~/Library/Application Support/Claude/claude_desktop_config.json`。在 Windows 上，位于 `%APPDATA%\Claude\claude_desktop_config.json`。

### Windsurf

将以下内容添加到您的 Windsurf MCP 配置中：

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

### 通用 MCP 命令

对于任何兼容 MCP 的工具，请使用：

```
npx crawl-chat-mcp --id=67d221efb4b9de65095a2579 --name=konva_documentation
```

## 可供 LLM 阅读的文档

Konva 为 AI 工具提供机器可读的文档文件：

- [`/llms.txt`](/llms.txt) — Konva 的简明摘要，包含关键文档链接（遵循 [llms-txt.org](https://llms-txt.org/) 标准）
- [`/llms-full.txt`](/llms-full.txt) — 纯文本格式的完整 API 参考，从 Konva 的 API 文档自动生成
- [`/.well-known/ai-plugin.json`](/.well-known/ai-plugin.json) — 描述 Konva 功能的机器可读身份文件

这些文件帮助 AI 助手提供有关 Konva 的准确答案。

## 使用 AI 配合 Konva 的技巧

当向 AI 工具询问关于 Konva 的问题时，如果您做到以下几点，将获得更好的结果：

- 在提示词中明确提及"Konva"或"react-konva"
- 引用特定的 Konva 功能（例如"Transformer"、"Layer"、"toDataURL"）
- 一次询问一个任务，而不是合并多个问题
- 根据 [Konva 文档](https://konvajs.org/docs/overview.html) 和 [API 参考](https://konvajs.org/api/Konva.html) 验证 AI 生成的代码
