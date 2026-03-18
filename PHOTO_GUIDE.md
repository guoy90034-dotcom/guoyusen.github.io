# 主页照片添加指南

## 📸 准备你的个人照片

网站主页需要两张个人照片，位置在右侧并排显示。

### 1️⃣ 照片要求

- **数量**：2张
- **格式**：JPG、PNG 或 WebP
- **尺寸建议**：宽度 600-1000px，高度 800-1200px（竖向照片效果更好）
- **文件大小**：建议每张 < 2MB

### 2️⃣ 文件命名

将你的两张照片重命名为：
- `photo1.jpg` - 左侧照片
- `photo2.jpg` - 右侧照片

### 3️⃣ 放置位置

将两张照片复制到：
```
/Users/guoyusen/personal-website/images/
```

完整路径示例：
```
/Users/guoyusen/personal-website/images/photo1.jpg
/Users/guoyusen/personal-website/images/photo2.jpg
```

### 4️⃣ 快速操作（命令行）

如果你的照片在桌面上，可以运行：

```bash
# 复制第一张照片
cp ~/Desktop/你的照片1.jpg /Users/guoyusen/personal-website/images/photo1.jpg

# 复制第二张照片
cp ~/Desktop/你的照片2.jpg /Users/guoyusen/personal-website/images/photo2.jpg
```

### 5️⃣ 或者手动拖拽

1. 打开 Finder
2. 进入 `/Users/guoyusen/personal-website/images/`
3. 将你的两张照片拖进去
4. 重命名为 `photo1.jpg` 和 `photo2.jpg`

---

## 🎨 当前布局效果

- **左侧**：大标题 "HI! I am Guo Yusen"（蓝色，4rem字体）
- **右侧**：两张竖向个人照片并排显示
- **背景**：淡绿色渐变
- **全屏**：占满整个视口高度（100vh）

---

## 🔧 自定义照片样式（可选）

如果你想调整照片的显示效果，可以修改 `css/style.css` 中的 `.hero-image` 样式：

```css
.hero-image {
    flex: 1;
    height: 600px;  /* 调整高度 */
    border-radius: 8px;  /* 调整圆角 */
    /* 其他样式... */
}
```

---

## ⚠️ 常见问题

### Q: 照片显示不出来？
A: 
1. 检查文件名是否完全匹配：`photo1.jpg` 和 `photo2.jpg`
2. 检查文件路径是否正确
3. 刷新浏览器（Cmd+Shift+R 强制刷新）
4. 检查照片格式（必须是 jpg、png 或 webp）

### Q: 想用不同的文件名？
A: 修改 `index.html` 第 36-39 行：
```html
<img src="images/你的文件名1.jpg" alt="Photo 1">
<img src="images/你的文件名2.jpg" alt="Photo 2">
```

### Q: 只有一张照片怎么办？
A: 可以用同一张照片复制两份，或者修改CSS只显示一张。

---

## ✅ 完成后

1. 照片已放置在 `images/` 文件夹
2. 刷新浏览器：`http://localhost:8080`
3. 查看效果！

如果需要调整照片尺寸、边框、圆角等样式，随时告诉我！📸
