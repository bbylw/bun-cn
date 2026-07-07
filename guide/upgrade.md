# 升级

要升级到最新版本的 Bun，请运行：

```sh
bun upgrade
```

## Canary 版本

Bun 会在每次提交到 `main` 分支时自动发布一个 canary（每日构建）版本。要升级到最新的 canary 版本，请运行：

```sh
bun upgrade --canary
```

[查看 canary 版本](https://github.com/oven-sh/bun/releases/tag/canary)

## 使用包管理器升级

如果你是通过 npm 或 Homebrew 安装的 Bun，也可以使用对应的方式升级：

:::: code-group

::: code-group-item npm
```sh
npm install -g bun
```
:::

::: code-group-item Homebrew
```sh
brew upgrade bun
```
:::

::::
