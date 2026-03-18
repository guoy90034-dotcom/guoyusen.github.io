# 个人网站部署指南

## 🚀 快速部署到 GitHub Pages

### 步骤 1: 创建 GitHub 仓库

访问 [GitHub](https://github.com/new) 创建新仓库：

**推荐选项 A（直接用域名访问）：**
- 仓库名称：`guoyusen.github.io`
- 访问地址：`https://guoyusen.github.io/`

**或选项 B（子路径访问）：**
- 仓库名称：`personal-website`
- 访问地址：`https://guoyusen.github.io/personal-website/`

**其他设置：**
- ✅ Public（公开）
- ❌ 不要勾选 "Add a README file"

### 步骤 2: 推送代码

在终端运行以下命令：

```bash
cd /Users/guoyusen/personal-website

# 添加远程仓库（根据你选择的仓库名修改）
git remote add origin https://github.com/guoyusen/guoyusen.github.io.git
# 或
# git remote add origin https://github.com/guoyusen/personal-website.git

# 推送代码
git branch -M main
git push -u origin main
```

如果提示需要认证，按照 GitHub 提示使用 Personal Access Token。

### 步骤 3: 配置 GitHub Pages

1. 访问仓库的 Settings 页面
2. 左侧菜单点击 **Pages**
3. 在 "Source" 下：
   - Branch: 选择 `main`
   - Folder: 选择 `/ (root)`
4. 点击 **Save**

### 步骤 4: 等待部署

- ⏰ 等待 1-2 分钟
- ✅ 访问你的网站：
  - 选项 A: `https://guoyusen.github.io/`
  - 选项 B: `https://guoyusen.github.io/personal-website/`

---

## 🔄 更新网站

以后修改内容后，运行：

```bash
cd /Users/guoyusen/personal-website
git add .
git commit -m "更新内容描述"
git push
```

几分钟后，网站会自动更新。

---

## 🌐 其他部署选项

### Netlify（拖拽部署）

1. 访问 [netlify.com](https://www.netlify.com/)
2. 注册登录
3. 拖拽整个 `personal-website` 文件夹到页面
4. 自动部署，获得 `xxx.netlify.app` 域名

### Vercel

1. 访问 [vercel.com](https://vercel.com/)
2. 用 GitHub 登录
3. Import 你的 GitHub 仓库
4. 自动部署

---

## 📝 常见问题

### Q: 推送时要求输入密码？
A: GitHub 不再支持密码认证，需要使用 Personal Access Token：
1. 访问：https://github.com/settings/tokens
2. Generate new token (classic)
3. 勾选 `repo` 权限
4. 复制 token，在终端粘贴（不会显示字符）

### Q: 图片或样式不显示？
A: 如果使用选项 B（子路径），需要修改路径：
- CSS: `<link rel="stylesheet" href="personal-website/css/style.css">`
- JS: `<script src="personal-website/js/script.js"></script>`
- 图片: `<img src="personal-website/images/xxx.jpg">`

### Q: 想用自定义域名？
A: 在 GitHub Pages 设置页面的 "Custom domain" 输入你的域名，然后在域名服务商添加 CNAME 记录指向 `guoyusen.github.io`

---

## ✅ 部署检查清单

- [ ] 创建 GitHub 仓库
- [ ] 推送代码到 GitHub
- [ ] 配置 GitHub Pages
- [ ] 访问网站确认部署成功
- [ ] 测试所有功能正常
- [ ] 分享链接给朋友！🎉
