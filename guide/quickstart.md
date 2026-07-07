# 快速上手

本页将帮助你快速了解 Bun 的基本用法。

## 运行 TypeScript 文件

Bun 开箱即用地支持 TypeScript 和 JSX，无需额外配置：

```bash
bun run index.tsx
```

你也可以直接运行 `.ts` 文件：

```bash
bun run hello.ts
```

## 运行脚本

使用 `bun run` 运行 `package.json` 中的脚本：

```bash
bun run start          # 运行 `start` 脚本
bun run dev            # 运行 `dev` 脚本
```

## 安装依赖

使用 `bun install` 安装项目依赖：

```bash
bun install            # 安装 package.json 中的所有依赖
bun install <pkg>      # 安装一个新包
```

## 运行测试

使用 `bun test` 运行测试文件：

```bash
bun test               # 运行所有测试
bun test hello.test.ts # 运行指定文件的测试
```

## 执行包

使用 `bunx` 执行包，类似于 `npx`：

```bash
bunx cowsay 'Hello, world!'
```

## 更多资源

- [运行时文档](/links/runtime) — 了解 Bun 运行时的详细用法
- [包管理器文档](/links/package-manager) — 了解包管理的详细用法
- [测试文档](/links/test) — 了解测试运行器的详细用法
- [打包器文档](/links/bundler) — 了解打包器的详细用法
- [API 文档](/links/api) — 了解 Bun 的内置 API
