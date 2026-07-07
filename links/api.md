# API

Bun 提供了丰富的内置 API，涵盖 HTTP 服务器、数据库、文件 I/O、网络等多个领域。

## HTTP 服务器

- [HTTP 服务器（`Bun.serve`）](https://bun.com/docs/runtime/http/server)
- [HTTP 路由](https://bun.com/docs/runtime/http/routing)
- [HTTP 错误处理](https://bun.com/docs/runtime/http/error-handling)
- [HTTP 指标](https://bun.com/docs/runtime/http/metrics)
- [WebSockets](https://bun.com/docs/runtime/http/websockets)

## 并发与进程

- [Workers](https://bun.com/docs/runtime/workers) — Web Workers
- [子进程（spawn）](https://bun.com/docs/runtime/child-process) — 子进程管理
- [定时任务（`Bun.cron`）](https://bun.com/docs/runtime/cron) — 定时任务

## 数据与文件

- [二进制数据](https://bun.com/docs/runtime/binary-data) — 二进制数据处理
- [流](https://bun.com/docs/runtime/streams) — 流式数据处理
- [文件 I/O（`Bun.file`）](https://bun.com/docs/runtime/file-io) — 文件读写
- [归档（tar）](https://bun.com/docs/runtime/archive) — tar 归档

## 数据库

- [SQLite（`bun:sqlite`）](https://bun.com/docs/runtime/sqlite) — 内置 SQLite
- [PostgreSQL（`Bun.sql`）](https://bun.com/docs/runtime/sql) — PostgreSQL 客户端
- [Redis（`Bun.redis`）](https://bun.com/docs/runtime/redis) — Redis 客户端

## 云服务

- [S3 客户端（`Bun.s3`）](https://bun.com/docs/runtime/s3) — S3 兼容存储

## 网络

- [TCP 套接字](https://bun.com/docs/runtime/networking/tcp)
- [UDP 套接字](https://bun.com/docs/runtime/networking/udp)
- [DNS](https://bun.com/docs/runtime/networking/dns)
- [fetch API 扩展](https://bun.com/docs/runtime/networking/fetch)

## 工具与解析

- [全局对象](https://bun.com/docs/runtime/globals) — 全局对象
- [FileSystemRouter](https://bun.com/docs/runtime/file-system-router) — 文件系统路由
- [WebView](https://bun.com/docs/runtime/webview) — WebView 集成
- [转译器（`Bun.Transpiler`）](https://bun.com/docs/runtime/transpiler) — 代码转译
- [哈希](https://bun.com/docs/runtime/hashing) — 哈希函数
- [颜色（`Bun.color`）](https://bun.com/docs/runtime/color) — 颜色处理
- [控制台](https://bun.com/docs/runtime/console) — 控制台 API
- [FFI（`bun:ffi`）](https://bun.com/docs/runtime/ffi) — 外部函数接口
- [C 编译器（`bun:ffi` cc）](https://bun.com/docs/runtime/c-compiler) — C 代码编译
- [HTMLRewriter](https://bun.com/docs/runtime/html-rewriter) — HTML 重写
- [Cookie（`Bun.Cookie`）](https://bun.com/docs/runtime/cookies) — Cookie 管理
- [CSRF（`Bun.CSRF`）](https://bun.com/docs/runtime/csrf) — CSRF 保护
- [密钥（`Bun.secrets`）](https://bun.com/docs/runtime/secrets) — 密钥管理
- [YAML（`Bun.YAML`）](https://bun.com/docs/runtime/yaml) — YAML 解析
- [TOML（`Bun.TOML`）](https://bun.com/docs/runtime/toml) — TOML 解析
- [JSON5](https://bun.com/docs/runtime/json5) — JSON5 解析
- [JSONL](https://bun.com/docs/runtime/jsonl) — JSONL 解析
- [Markdown](https://bun.com/docs/runtime/markdown) — Markdown 解析
- [图像处理](https://bun.com/docs/runtime/image) — 图像处理 API
- [工具函数](https://bun.com/docs/runtime/utils) — 实用工具函数
- [Node-API](https://bun.com/docs/runtime/node-api) — Node-API 兼容
- [Glob（`Bun.Glob`）](https://bun.com/docs/runtime/glob) — 文件 Glob
- [Semver（`Bun.semver`）](https://bun.com/docs/runtime/semver) — 语义化版本
