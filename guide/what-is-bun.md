# 什么是 Bun？

Bun 是面向 JavaScript 和 TypeScript 应用的一体化工具集，以名为 `bun` 的单一可执行文件形式发布。

其核心是 **Bun 运行时**，一个快速的 JavaScript 运行时，旨在作为 **Node.js 的替代品**。它使用 Rust 编写，底层由 JavaScriptCore 驱动，可大幅降低启动时间和内存占用。

```bash
bun run index.tsx             # 开箱即用地支持 TS 和 JSX
```

`bun` 命令行工具还实现了测试运行器、脚本运行器和兼容 Node.js 的包管理器。开发时你无需再安装上千个 node_modules，只需要 `bun` 即可。Bun 的内置工具比现有方案快得多，并且在几乎无需改动的情况下即可用于现有的 Node.js 项目。

```bash
bun test                      # 运行测试
bun run start                 # 运行 `package.json` 中的 `start` 脚本
bun install <pkg>             # 安装一个包
bunx cowsay 'Hello, world!'   # 执行一个包
```

## 核心特性

### ⚡ 极速运行时

Bun 运行时使用 Rust 编写，底层由 JavaScriptCore 驱动，启动速度和内存占用均优于 Node.js。原生支持 TypeScript 和 JSX，无需额外配置。

### 📦 一体化工具链

`bun` 单一可执行文件包含了运行时、包管理器、测试运行器和打包器。你不再需要安装 Node.js、npm、yarn、pnpm、jest、esbuild 等多个工具。

### 🔧 兼容 Node.js

Bun 实现了大部分 Node.js API，在几乎无需改动的情况下即可用于现有的 Node.js 项目。包括 `fs`、`path`、`http`、`stream` 等核心模块。

### 🌐 丰富的内置 API

Bun 内置了 HTTP 服务器（`Bun.serve`）、WebSockets、SQLite（`bun:sqlite`）、文件 I/O（`Bun.file`）等强大的 API，无需安装额外依赖。

## 下一步

- [安装 Bun](/guide/installation) — 开始使用 Bun
- [快速上手](/guide/quickstart) — 了解更多用法
- [运行时文档](/links/runtime) — 深入了解运行时
