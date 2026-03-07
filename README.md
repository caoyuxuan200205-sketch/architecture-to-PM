
  # 近代建筑史研究App (Modern Architecture History Research Game)

这是一个基于 React + Vite 开发的文字养成类游戏，模拟了建筑学研究生的三年求职生涯。

## 🎮 游戏特色

- **纯文字交互**：数值驱动叙事，类养成 + 随机事件
- **11项属性值**：建筑专业力、逻辑力、导师好感度……
- **52条随机事件**：导师压力、HR已读不回、海归竞争……
- **40+真实实习**：从MCN小编到高盛IBD，还原真实职场生态
- **12种结局**：从大厂PM到被退学，由你的选择决定

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

### 3. 构建生产版本

```bash
npm run build
```

## 📦 部署指南 (GitHub Pages)

本项目已配置 GitHub Actions 自动部署。

1.  **安装 Git**：如果你的电脑上没有安装 Git，请先去 [Git官网](https://git-scm.com/downloads) 下载并安装。
2.  **初始化仓库**：
    ```bash
    git init
    git add .
    git commit -m "feat: initial commit"
    ```
3.  **推送到 GitHub**：
    - 在 GitHub 上新建一个空仓库。
    - 运行以下命令（将 `<你的仓库地址>` 替换为实际地址）：
    ```bash
    git branch -M main
    git remote add origin <你的仓库地址>
    git push -u origin main
    ```
4.  **开启 Pages 服务**：
    - 进入仓库 Settings -> Pages。
    - Source 选择 "GitHub Actions"。
    - 等待 Actions 运行完毕即可访问。

## 🛠️ 技术栈

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion (动画)
- Lucide React (图标)

## 📄 License

MIT
  