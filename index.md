---
layout: home

hero:
  name: Bun
  text: 一体化 JavaScript 工具集
  tagline: 快速的 JavaScript 运行时，集打包、测试、运行于一身。以单一可执行文件形式发布，旨在作为 Node.js 的替代品。使用 Rust 编写，底层由 JavaScriptCore 驱动。
  image:
    src: /favicon.svg
    alt: Bun
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/what-is-bun
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/oven-sh/bun

features:
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    title: 极速运行时
    details: 使用 Rust 编写，底层由 JavaScriptCore 驱动，可大幅降低启动时间和内存占用。开箱即用地支持 TypeScript 和 JSX。
    link: /guide/what-is-bun
    linkText: 了解更多
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
    title: 兼容 Node.js 的包管理器
    details: 无需再安装上千个 node_modules，只需要 bun 即可。在几乎无需改动的情况下即可用于现有的 Node.js 项目。
    link: /links/package-manager
    linkText: 包管理器文档
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11H1l3.5-3.5L1 4h8a4 4 0 0 1 0 8z"/><path d="M23 13h-8a4 4 0 0 0 0 8h8l-3.5-3.5L23 13z"/></svg>
    title: 内置测试运行器
    details: bun test 提供了类 Jest 的测试体验，支持快照、Mock、代码覆盖率等，速度远超现有方案。
    link: /links/test
    linkText: 测试文档
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    title: 强大的打包器
    details: Bun.build 提供原生打包能力，支持单文件可执行程序、CSS、HTML、HMR、字节码缓存等。
    link: /links/bundler
    linkText: 打包器文档
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    title: 丰富的内置 API
    details: 内置 HTTP 服务器、WebSockets、SQLite、PostgreSQL、Redis、S3、文件 I/O 等，无需额外安装依赖。
    link: /links/api
    linkText: API 文档
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
    title: 开箱即用
    details: bun run、bun test、bun install、bunx —— 一个命令搞定一切。开发时你只需要 bun。
    link: /guide/quickstart
    linkText: 快速上手
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 特性卡片光斑跟随
  const features = document.querySelectorAll('.VPFeature')
  features.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--mx', x + '%')
      el.style.setProperty('--my', y + '%')
    })
  })

  // 确保 hero 背景渐变
  const hero = document.querySelector('.VPHero')
  if (hero) {
    hero.style.background = 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.06), transparent 65%)'
  }
})
</script>

<style>
/* 快速开始区域 */
.vp-doc h2 {
  font-family: var(--bun-font-display, 'Space Grotesk', sans-serif);
  font-weight: 600;
  letter-spacing: -0.03em;
}
</style>

## 快速开始 {style="margin-top: 56px; text-align: center;"}

安装 Bun 非常简单——只需一行命令：

::: code-group

```sh [macOS / Linux]
curl -fsSL https://bun.com/install | bash
```

```powershell [Windows]
powershell -c "irm bun.sh/install.ps1 | iex"
```

```sh [npm]
npm install -g bun
```

```sh [Homebrew]
brew tap oven-sh/bun
brew install bun
```

```sh [Docker]
docker pull oven/bun
docker run --rm --init --ulimit memlock=-1:-1 oven/bun
```

:::

安装完成后，你就可以立即使用：

```sh
bun run index.tsx             # 开箱即用地支持 TS 和 JSX
bun test                      # 运行测试
bun run start                 # 运行 package.json 中的 start 脚本
bun install <pkg>             # 安装一个包
bunx cowsay 'Hello, world!'   # 执行一个包
```
