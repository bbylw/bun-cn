# 安装

Bun 支持 **Linux**（x64 和 arm64）、**macOS**（x64 和 Apple Silicon）以及 **Windows**（x64 和 arm64）。

::: warning 系统要求
- **Linux 用户** —— 强烈建议内核版本为 5.6 或更高，最低要求为 5.1。
- **x64 用户** —— 如果你看到 "illegal instruction"（非法指令）或类似错误，请查看 [CPU 要求](https://bun.com/docs/installation#cpu-requirements)
:::

## 使用安装脚本（推荐）

:::: code-group

::: code-group-item macOS / Linux
```sh
curl -fsSL https://bun.com/install | bash
```
:::

::: code-group-item Windows
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```
:::

::::

## 使用 npm

```sh
npm install -g bun
```

## 使用 Homebrew

```sh
brew tap oven-sh/bun
brew install bun
```

## 使用 Docker

```sh
docker pull oven/bun
docker run --rm --init --ulimit memlock=-1:-1 oven/bun
```

## 验证安装

安装完成后，运行以下命令验证安装是否成功：

```sh
bun --version
```

如果安装成功，你将看到 Bun 的版本号输出。

## 下一步

- [升级 Bun](/guide/upgrade) — 了解如何升级到最新版本
- [什么是 Bun？](/guide/what-is-bun) — 了解更多关于 Bun 的信息
- [快速上手](/guide/quickstart) — 开始使用 Bun
