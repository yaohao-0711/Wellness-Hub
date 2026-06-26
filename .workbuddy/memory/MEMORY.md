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
- 主色调: #5856d6（紫色），深色模式 #7d7aff
- 背景: #f5f5f7（浅）/ #1c1c1e（深）
- 文字层级: text > text-secondary > text-tertiary > text-quaternary
- 圆角: 8/12/16/20/24px
- 阴影: xs/sm/md/lg/xl 五级
- 动画: fast(150ms)/normal(250ms)/spring(350ms, cubic-bezier回弹)
- 毛玻璃: blur(20px) 用于topbar和tabbar
