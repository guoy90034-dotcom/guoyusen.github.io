#!/bin/bash

# GitHub 部署脚本
# 使用方法：
# 1. 先在 GitHub 创建仓库（建议命名为 guoyusen.github.io）
# 2. 将下面的仓库地址替换为你的实际地址
# 3. 运行此脚本

REPO_NAME="personal-website"  # 或改为 "guoyusen.github.io"
GITHUB_USERNAME="guoyusen"

echo "📤 准备推送到 GitHub..."

# 添加远程仓库
git remote add origin https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git

# 推送代码
git branch -M main
git push -u origin main

echo "✅ 代码已推送到 GitHub！"
echo ""
echo "🌐 接下来配置 GitHub Pages："
echo "1. 访问：https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/settings/pages"
echo "2. Source 选择：Deploy from a branch"
echo "3. Branch 选择：main"
echo "4. Folder 选择：/ (root)"
echo "5. 点击 Save"
echo ""
echo "⏰ 等待1-2分钟后，访问："
echo "https://${GITHUB_USERNAME}.github.io/${REPO_NAME}/"
