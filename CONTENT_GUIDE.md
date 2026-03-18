# 个人网站文字内容修改指南

## 📍 位置说明
所有内容都在 `index.html` 文件中，按照顺序修改即可。

---

## 1️⃣ 导航栏 (第14行)
```html
<div class="nav-brand">我的网站</div>
```
**修改为：** 你的网站名称

---

## 2️⃣ 主页横幅 (第33-34行)
```html
<h1 class="hero-title">你好，我是 <span class="highlight">北邮学子</span></h1>
<p class="hero-subtitle">1</p>
```
**修改为：**
- 标题：你的名字或身份
- 副标题：你的职位/学校/特长

---

## 3️⃣ 校园经历 - 第一条 (第46-53行)

### 时间
```html
<div class="timeline-date">2024.09 - 2027.06</div>
```

### 标题
```html
<h3 class="timeline-title">北京邮电大学<br>计算数学（硕士）</h3>
```

### 内容
```html
<p><strong>主修课程：</strong>偏微分方程</p>
<p><strong>担任兼职辅导员：</strong></p>
<p>• 独立牵头筹备"送毕业生交流会"等大型仪式活动</p>
<p>• 成功邀请学校党委书记莅临指导，并获得现场高度评价</p>
```

---

## 4️⃣ 校园经历 - 第二条 (第63-70行)

### 时间
```html
<div class="timeline-date">2020.09 - 2024.06</div>
```

### 标题
```html
<h3 class="timeline-title">河北工业大学<br>数学与应用数学（本科）</h3>
```

### 内容
```html
<p><strong>主修课程：</strong>数值分析、高等代数、概率论与数理统计</p>
<p><strong>担任四年班级班长：</strong></p>
<p>• 建立"宿舍—班级—学院"三级联防机制</p>
<p>• 高效完成奖助学金评定工作，准确率100%</p>
```

---

## 5️⃣ 实习经历 - 快手第一项 (第89-97行)

### 时间
```html
<div class="timeline-date">2025.11 - 至今</div>
```

### 标题
```html
<h3 class="timeline-title">快手 - 用户增长部<br>策略产品实习生</h3>
```

### 内容
```html
<p><strong>AI Push文案生成</strong></p>
<p>• 搭建多维度质量评估体系，通过提示词调优、RAG检索、SFT、DPO等模型微调手段</p>
<p>• 实现文案准确率95%，判别模型准确率90%，准召率70%</p>
<p>• AB实验：大模型文案ctr+0.1pp，有效播放率+0.08pp，DAU+30w</p>
<p>• 是推动AI大模型应用落地首个Push业务场景</p>
```

---

## 6️⃣ 实习经历 - 快手第二项 (第107-114行)

### 时间
```html
<div class="timeline-date">2025.11 - 至今</div>
```

### 标题
```html
<h3 class="timeline-title">快手 - Push视频池冷启动专项</h3>
```

### 内容
```html
<p><strong>优化推荐系统多样性与时效性</strong></p>
<p>• 定义冷启动指标体系，制定保量召回、Boost排序摸高等精细化策略</p>
<p>• 实施垂类*十大人群差异化扶持、爬坡赛马机制、流量倾斜高点击人群</p>
<p>• AB实验：冷启动成功率+8pp，时效性视频占比+1.38pp，多样性-0.32pp</p>
```

---

## 7️⃣ 实习经历 - 快手第三项 (第124-131行)

### 时间
```html
<div class="timeline-date">2025.11 - 至今</div>
```

### 标题
```html
<h3 class="timeline-title">快手 - 0-1min DAU专项</h3>
```

### 内容
```html
<p><strong>针对异常用户群体（64%）进行优化</strong></p>
<p>• 开展push拉端进程的性能优化</p>
<p>• 制定基于用户有效消费行为的承接追打、多样性打散策略</p>
<p>• AB实验：点击到曝光时间提升2s，有效播放率+0.12pp，时长+10w分钟</p>
```

---

## 8️⃣ 实习经历 - 美团第一项 (第142-149行)

### 时间
```html
<div class="timeline-date">2025.09 - 2025.11</div>
```

### 标题
```html
<h3 class="timeline-title">美团 - 服务零售部<br>策略产品实习生</h3>
```

### 内容
```html
<p><strong>AI 推荐理由优化</strong></p>
<p>• 从0-1搭建从数据圈选、prompt工程到质量评测的工作流</p>
<p>• 构建质量评估体系，采用DINN模型进行个性化推荐</p>
<p>• AB实验：美发类目UVCTR提升2.52pp，OPM提升6.63，每日新增1800+订单</p>
```

---

## 9️⃣ 实习经历 - 美团第二项 (第159-166行)

### 时间
```html
<div class="timeline-date">2025.09 - 2025.11</div>
```

### 标题
```html
<h3 class="timeline-title">美团 - 货架Tab承接路径优化</h3>
```

### 内容
```html
<p><strong>提升流量承接效率</strong></p>
<p>• 主导设计基于Query意图与商户经营类型的动态承接策略</p>
<p>• 采用"锚定Tab"或生成"刚刚搜过"Tab承接链路</p>
<p>• AB实验：团购UVCTR+0.09pp，下单用户货架点击率-0.04pp，访购率+0.16pp</p>
```

---

## 🔟 日常分享 - 第一条 (第184-190行)

### 日期
```html
<div class="timeline-date">04.03.2025</div>
```

### 标题
```html
<h3 class="timeline-title">学习TypeScript与Next.js</h3>
```

### 内容
```html
<p>最近在学习TypeScript和Next.js，搭建了一个个人博客系统。</p>
<p>感受到了类型系统带来的开发体验提升，以及服务端渲染带来的性能优势。</p>
<p>下一步计划部署到Vercel上，并添加评论系统。</p>
```

---

## 1️⃣1️⃣ 日常分享 - 第二条 (第200-206行)

### 日期
```html
<div class="timeline-date">03.22.2025</div>
```

### 标题
```html
<h3 class="timeline-title">参加设计工作坊</h3>
```

### 内容
```html
<p>周末参加了UI/UX设计工作坊，学习了设计基础知识。</p>
<p>发现设计思维对产品开发也很有帮助，让我能更好地理解用户需求。</p>
<p>开始尝试用Figma制作一些界面原型。</p>
```

---

## 1️⃣2️⃣ 日常分享 - 第三条 (第216-222行)

### 日期
```html
<div class="timeline-date">02.07.2025</div>
```

### 标题
```html
<h3 class="timeline-title">首个开源贡献</h3>
```

### 内容
```html
<p>给开源项目提交了第一个PR并被合并！</p>
<p>虽然只是修复了一个小bug，但整个流程让我学到很多：</p>
<p>如何阅读他人代码、如何规范提交、如何与维护者沟通。</p>
```

---

## 1️⃣3️⃣ 联系方式 (第238-251行)

### 提示文字
```html
<p>如果你有任何问题或合作意向，欢迎随时联系我！</p>
```

### 邮箱
```html
<a href="mailto:2935487325@qq.com" class="contact-item">
    <span class="contact-icon">📧</span>
    <span>2935487325@qq.com</span>
</a>
```
**修改：** `mailto:` 后面和显示文字都要改成你的邮箱

### GitHub
```html
<a href="https://github.com/yourusername" class="contact-item" target="_blank">
    <span class="contact-icon">💻</span>
    <span>GitHub</span>
</a>
```
**修改：** `yourusername` 改成你的GitHub用户名

### LinkedIn
```html
<a href="https://linkedin.com/in/yourusername" class="contact-item" target="_blank">
    <span class="contact-icon">💼</span>
    <span>LinkedIn</span>
</a>
```
**修改：** `yourusername` 改成你的LinkedIn用户名

---

## 1️⃣4️⃣ 页脚版权 (第260行)

```html
<p>&copy; 2026 我的个人网站. 保留所有权利.</p>
```
**修改为：** 你的名字或网站名称

---

## 📝 修改建议

1. **直接在 VSCode 中打开 `index.html`**
2. **使用 `Cmd+F` (Mac) 或 `Ctrl+F` (Windows) 搜索关键词**
3. **按照上面的行号定位内容**
4. **修改文字内容，保持HTML标签不变**
5. **保存后刷新浏览器查看效果**

## ⚠️ 注意事项

- 只修改文字内容，不要动HTML标签（如 `<p>`、`<div>`、`<h3>` 等）
- 保持原有的格式和缩进
- 如果要添加/删除项目，需要复制整个 `<div class="timeline-item">...</div>` 块
- 图标表情符号（🎓📚🚀等）可以根据需要修改

---

## 🎯 快速修改脚本

如果你想批量替换某些内容，可以使用VSCode的查找替换功能：
1. `Cmd+H` (Mac) 或 `Ctrl+H` (Windows)
2. 输入要查找的内容
3. 输入要替换成的内容
4. 点击"全部替换"
