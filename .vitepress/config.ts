import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Bun',
  description: '面向 JavaScript 和 TypeScript 应用的一体化工具集',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#141413' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500;600&display=swap'
    }]
  ],
  cleanUrls: true,
  themeConfig: {
    logo: '/favicon.svg',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '指南',
        link: '/guide/what-is-bun',
        activeMatch: '/guide/'
      },
      {
        text: '快速链接',
        items: [
          { text: '运行时', link: '/links/runtime' },
          { text: '包管理器', link: '/links/package-manager' },
          { text: '打包器', link: '/links/bundler' },
          { text: '编译器', link: '/links/compiler' },
          { text: 'Lint', link: '/links/lint' },
          { text: '格式化', link: '/links/format' },
          { text: '测试运行器', link: '/links/test' },
          { text: 'API', link: '/links/api' }
        ]
      },
      {
        text: '生态指南',
        items: [
          { text: '部署', link: '/ecosystem/deployment' },
          { text: '生态集成', link: '/ecosystem/integrations' },
          { text: 'HTTP', link: '/ecosystem/http' },
          { text: '安装', link: '/ecosystem/install' },
          { text: '进程', link: '/ecosystem/process' },
          { text: '读写文件', link: '/ecosystem/files' },
          { text: '流', link: '/ecosystem/streams' },
          { text: '测试', link: '/ecosystem/testing' },
          { text: '工具', link: '/ecosystem/utils' },
          { text: 'WebSocket', link: '/ecosystem/websocket' }
        ]
      },
      { text: '贡献', link: '/contributing' },
      { text: 'Bun 官网 ↗', link: 'https://bun.com' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: '什么是 Bun？', link: '/guide/what-is-bun' },
            { text: '安装', link: '/guide/installation' },
            { text: '升级', link: '/guide/upgrade' },
            { text: '快速上手', link: '/guide/quickstart' }
          ]
        }
      ],
      '/links/': [
        {
          text: '快速链接',
          items: [
            { text: '运行时', link: '/links/runtime' },
            { text: '包管理器', link: '/links/package-manager' },
            { text: '打包器', link: '/links/bundler' },
            { text: '编译器', link: '/links/compiler' },
            { text: 'Lint', link: '/links/lint' },
            { text: '格式化', link: '/links/format' },
            { text: '测试运行器', link: '/links/test' },
            { text: '包运行器', link: '/links/bunx' },
            { text: 'API', link: '/links/api' }
          ]
        }
      ],
      '/ecosystem/': [
        {
          text: '生态指南',
          items: [
            { text: '部署', link: '/ecosystem/deployment' },
            { text: '生态集成', link: '/ecosystem/integrations' },
            { text: '二进制数据', link: '/ecosystem/binary' },
            { text: 'HTTP', link: '/ecosystem/http' },
            { text: '安装', link: '/ecosystem/install' },
            { text: '进程', link: '/ecosystem/process' },
            { text: '读写文件', link: '/ecosystem/files' },
            { text: '运行时', link: '/ecosystem/runtime' },
            { text: '流', link: '/ecosystem/streams' },
            { text: '测试', link: '/ecosystem/testing' },
            { text: '工具', link: '/ecosystem/utils' },
            { text: 'WebSocket', link: '/ecosystem/websocket' },
            { text: '写入文件', link: '/ecosystem/write-file' },
            { text: 'HTMLRewriter', link: '/ecosystem/html-rewriter' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oven-sh/bun' },
      { icon: 'discord', link: 'https://bun.com/discord' },
      { icon: 'twitter', link: 'https://twitter.com/bunjavascript' }
    ],

    footer: {
      message: '基于 MIT 许可证发布',
      copyright: 'Copyright © 2024-present Oven Corporation'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单'
  }
})
