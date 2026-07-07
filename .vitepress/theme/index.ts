import DefaultTheme from 'vitepress/theme'
import { onMounted, h } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  setup() {
    onMounted(() => {
      // 强制深色模式
      const html = document.documentElement
      html.classList.add('dark')
      html.style.colorScheme = 'dark'

      // 移除主题切换按钮
      const toggle = document.querySelector('.VPNavBar .VPSwitch')
      if (toggle) {
        const wrapper = toggle.closest('.VPNavBarExtra') || toggle.parentElement
        if (wrapper) wrapper.remove()
      }

      // 持续监听并移除切换按钮（处理路由切换后重新渲染的情况）
      const observer = new MutationObserver(() => {
        const html = document.documentElement
        if (!html.classList.contains('dark')) {
          html.classList.add('dark')
          html.style.colorScheme = 'dark'
        }
      })
      observer.observe(html, { attributes: true, attributeFilter: ['class'] })
    })
  }
}
