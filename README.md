# 个人网站

一个现代化、响应式的个人简历与作品集网站。

## 特性

- ✨ 现代化设计风格
- 📱 完全响应式布局（支持手机、平板、电脑）
- 🎨 渐变色彩主题
- ⚡ 流畅的动画效果
- 🧭 平滑滚动导航
- 💼 作品展示区
- 📧 联系方式展示

## 文件结构

```
personal-website/
├── index.html          # 主页面
├── css/
│   └── style.css      # 样式文件
├── js/
│   └── script.js      # 交互脚本
├── images/            # 图片资源目录
└── README.md          # 说明文档
```

## 使用方法

### 1. 本地预览

直接在浏览器中打开 `index.html` 文件即可预览网站。

或者使用本地服务器：

```bash
# 使用 Python 3
cd personal-website
python3 -m http.server 8000

# 使用 Node.js (需要安装 http-server)
npx http-server

# 然后在浏览器访问 http://localhost:8000
```

### 2. 自定义内容

编辑 `index.html` 文件，修改以下内容：

- **个人信息**: 修改姓名、职位、简介等
- **技能**: 更新你的技能列表
- **作品**: 添加你的项目案例
- **联系方式**: 更新邮箱、GitHub、LinkedIn等链接

### 3. 自定义样式

编辑 `css/style.css` 文件中的 `:root` 变量来修改配色方案：

```css
:root {
    --primary-color: #6366f1;     /* 主色调 */
    --secondary-color: #8b5cf6;   /* 辅助色 */
    --text-color: #1f2937;        /* 文字颜色 */
    /* ... */
}
```

### 4. 添加图片

将你的项目截图、个人照片等放入 `images/` 目录，然后在 HTML 中引用：

```html
<img src="images/your-image.jpg" alt="描述">
```

## 部署

你可以将网站部署到以下平台（全部免费）：

### GitHub Pages
1. 创建 GitHub 仓库
2. 上传所有文件
3. 在仓库设置中启用 GitHub Pages
4. 访问 `https://yourusername.github.io/repository-name`

### Netlify
1. 注册 Netlify 账号
2. 拖拽 `personal-website` 文件夹到 Netlify
3. 自动部署完成

### Vercel
1. 注册 Vercel 账号
2. 导入项目
3. 自动部署完成

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, 动画)
- 原生 JavaScript (ES6+)

## 许可

MIT License - 可自由使用和修改

---

享受你的新网站吧！ 🎉
