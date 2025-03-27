---
sidebar_position: 3
title: AI tools
sidebar_label: AI tools
hide_table_of_contents: true
slug: ai_tools.html
---

## Coding with Konva and AI agent

We have several AI tools that may help you build better konva apps. All of them are powered by awesome [crawlchat](https://crawlchat.app/).

AI agent will use Konva docs exensevly to answer your questions. Please remember it is an LLM and as any modern LLM it may give wrong answers.

## AI chat bot

Click "Ask AI" button somewhere on the page to ask a question to AI.

You can also join your [Discord community](https://remotion.dev/discord) and ask `@AiBot-CrawlChat` there.

## MCP

MCP (Model Context Protocol) is a standard protocol to connect with LLM applications like Claude App, Cursor, Windsurf or more such applications.

### Cursor MCP Command

For clear video instuctions [take a look into this guide](https://guides.crawlchat.app/walkthrough/67db0080600010f091e529b7).
Cursor needs a JSON snippet to be added to the Cursor settings. Copy and paste the following snippet.

**Important: as of March 2025, cursor will use MCP only in "Agent" mode. "Ask" and others will not use it.**

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

### MCP Command

```
npx crawl-chat-mcp --id=67d221efb4b9de65095a2579 --name=konva_documentation
```
