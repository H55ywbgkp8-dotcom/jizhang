# 记账本 · 部署说明

## 一、部署到 GitHub Pages（免费）

### 1. 创建 GitHub 仓库
- 打开 https://github.com ，登录你的账号
- 点击右上角 `+` → `New repository`
- 仓库名填：`jizhang`（或其他名字）
- 选择 **Public**（公开）
- 点击 `Create repository`

### 2. 上传文件
创建仓库后，点击 `uploading an existing file`，把这两个文件拖进去：
- `index.html`
- `sw.js`

然后点 `Commit changes`。

### 3. 开启 GitHub Pages
- 进入仓库 → `Settings` → 左侧 `Pages`
- `Source` 选 `Deploy from a branch`
- `Branch` 选 `main`，`/(root)`，点 `Save`
- 等 1-2 分钟，页面上会出现网址：
  ```
  https://你的用户名.github.io/jizhang/
  ```

### 4. 手机打开
- 手机浏览器输入上面的网址
- 建议添加到桌面：
  - **iPhone**: Safari 底部点「分享」→「添加到主屏幕」
  - **Android**: Chrome 右上角「⋮」→「添加到主屏幕」

---

## 二、工作原理

| 问题 | 答案 |
|------|------|
| 数据存哪 | 你手机的浏览器 localStorage（本地存储） |
| GitHub 上有数据吗 | 没有，只存了空壳页面 |
| 离线能用吗 | 能，PWA 已缓存页面 |
| 换手机会丢吗 | 会的，数据在本机。可以导出 md 文件备份 |
| 语音支持 | iPhone Safari / Android Chrome 支持 |

---

## 三、语音输入用法

按住 🎤 按钮说话，松手识别。示例：

| 说什么 | 记录结果 |
|--------|---------|
| `吃饭 35` | 餐饮 · 吃饭 · -35.00 |
| `35` | 购物 · 购物 · -35.00 |
| `停车 20 刷卡` | 家庭 · 停车 · -20.00 · 刷卡 |
| `工资 7643` | 收入 · 工资 · +7643.00 |
| `打车 15` | 家庭 · 打车 · -15.00 |

---

## 四、更新版本

本地改好 `index.html` 后，重新上传到 GitHub 仓库替换旧文件即可。手机端下次打开自动使用新版本。
