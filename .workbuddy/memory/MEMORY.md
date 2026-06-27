# Wellness-Hub 项目记忆

## 项目概况
- 单文件 PWA（index.html + sw.js + manifest.json），GitHub Pages 部署
- Supabase 云端同步 + localStorage 双存储
- 仓库：yaohao-0711/Wellness-Hub，SSH 已配好

## 用户偏好
- 不喜欢过度设计：否掉了数据导出/导入/清除、存储用量显示、每日提醒
- 喜欢实用的功能：个性化设置、关于页信息
- 开发流程：先讨论方案，同意后再实现
- 美学参考：Apple HIG、Material Design 3，偏好warm minimal风格
- **重要：每次功能改动必须同步更新index.html里的更新日志！**
- 做完一个任务就停下来报告，不要一口气堆着做

## 设计系统
- 主色调: #8b7aff（深色）/ #6c5ce7（浅色）
- 背景: 深蓝渐变 #0a0a1a → #12122a → #1a1035（深色）/ #f5f3ff 薰衣草紫（浅色）
- 文字层级: text > text-secondary > text-tertiary > text-quaternary
- 圆角: 10/14/16/20/24px
- 阴影: xs/sm/md/lg/xl 五级（深色更强）
- 动画: fast(150ms)/normal(250ms)/spring(350ms, cubic-bezier回弹)
- 毛玻璃: blur(24px) 用于topbar和tabbar
- 卡片: 半透明背景 + backdrop-filter blur(12px) + 紫色边框
- 按钮: linear-gradient(135deg, #8b7aff, #6c5ce7) + 紫色光晕阴影
- 星空装饰: 闪烁星星 + 宇宙光晕球 + 流星动画
