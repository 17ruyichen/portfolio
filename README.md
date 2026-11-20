# 陈如意 · 个人作品集

静态站点，纯 HTML/CSS/JS，无框架、无构建步骤。

```
index.html                 首页
work/01-multifactor.html   多因子量化策略
work/02-system.html        量化分析系统
work/03-paper.html         绿色技术创新论文
work/04-suilekang.html     穗乐康
work/05-trs.html           拓尔思
work/06-citic.html         中信证券
code.html                  代码与数据访问说明
assets/css/style.css       全部样式
assets/js/main.js          滚动显现、导航高亮、复制邮箱
assets/img/                图表与截图
tools/make_figures.py      从原始数据重画图表
robots.txt
```

---

## 本地预览

直接双击 `index.html` 即可。若浏览器限制本地文件，或想测试相对路径：

```bash
cd portfolio-site
python -m http.server 8765
# 打开 http://127.0.0.1:8765/
```

---

## 部署

### Vercel（推荐，免费）

1. 把 `portfolio-site` 目录推到 GitHub。
2. Vercel → New Project → 选择仓库。
3. Framework Preset 选 Other，Build Command 留空，Output Directory 填 `.`。
4. Deploy。

### GitHub Pages

1. 推送到 GitHub。
2. Settings → Pages → Source: Deploy from a branch → `main` / `root`。
3. 站点地址为 `https://<user>.github.io/<repo>/`。

### Netlify

拖拽整个 `portfolio-site` 目录到 Netlify Drop 即可。

---

## 修改内容

| 想改什么 | 改哪里 |
|---|---|
| 首页 Hero、About、Contact | `index.html` |
| 六个项目卡 | `index.html` 的 `.work-grid` |
| 项目详情 | `work/*.html` |
| 颜色、字体、栅格 | `assets/css/style.css` 顶部的 `:root` |
| 图表 | `tools/make_figures.py`，或直接替换 `assets/img/` 下同名文件 |
| 代码访问页 | `code.html` |

### 设计参数

- 纸色 `#F7F5F0`，墨色 `#141414`，强调色 `#1F3D33`（墨绿），辅助色 `#8C5A2B`（铜）
- 标题：Noto Serif SC / 思源宋体
- 正文：Noto Sans SC / Inter
- 数字：IBM Plex Mono
- 12 栏栅格，最大宽度 1240px
- 圆角 ≤ 2px，无阴影，无渐变，无玻璃拟态

---

## 关于 CV

站点已挂 CV：`assets/cv/chen-ruyi-cv.pdf`，使用的是 **20260925 版本（偏好金融量化岗）**。链接出现在导航、Hero、Contact 和代码页。

这份 CV 仍然使用“项目创始人”“验证集准确率 99.9%”等表述；站点的 01、04、05 详情页对这些口径做了限定。面试时如果被问到，以项目页的写法为准。

更新 CV 时，直接替换 `assets/cv/chen-ruyi-cv.pdf` 即可，不需要改链接。

---

## 关于代码

`code.html` 采用“公开片段 + 邮件申请私有仓库”的方式，没有做前端密码框（纯前端密码没有安全性）。

- 公开：因子打分片段、方法说明、图表
- 应要求：完整代码、数据字典、论文全文
- 不公开：原始数据、代码与数据文件中的个人信息、队友信息、本地路径

如果以后要加真正的密码保护，用 Vercel 的 Password Protection 或 Cloudflare Access，不要在前端写死密码。

---

## 图表来源

| 文件 | 来源 |
|---|---|
| `01-*.png` | `作品集/rebuild/output/`，由 `backtest_v2.py` 生成 |
| `02-platform.png` / `02-platform-card.png` | 课程项目的 Streamlit 截图 |
| `02-quality.png` | 数据质量报告截图 |
| `03-moran.png` / `03-hetero.png` | 由论文表 4、表 3 的数值重画 |
| `03-map.png` | 论文中的省级分布图，做了去饱和处理 |
| `04-revenue.png` | 商业计划书 2026 年收入表重画 |
| `05-hourly.png` / `05-conversion.png` / `05-buyers.png` | 由淘宝 1,225 万条原始数据重算、重画 |
| `portrait.jpg` | 生活照裁剪 |

重画图表：

```bash
python -I tools/make_figures.py
```

注意：`make_figures.py` 读取的是 `C:/Users/86182/Desktop/简历/...` 下的原始文件。换机器时改脚本顶部的 `SRC`。

---

## 交互与可访问性

- `.reveal` 元素用 IntersectionObserver 渐显；`prefers-reduced-motion` 下直接显示。
- 加 `?static=1` 可强制全部显示（用于截图与打印）。
- 所有图片有 `alt`；导航有 `aria-label`；有跳转正文链接。
- 键盘焦点有 2px 墨绿描边。
- 打印样式隐藏导航、页脚与“下一个项目”。

---

## 已知限制

1. 01 号项目的价格用前复权、EPS 用名义值，PE 水平可能有偏；详见项目页的“局限”。
2. 03 号论文的空间项不显著，站点已按“不能声称存在空间溢出”的口径写。
3. 04 号商业计划书的三张表之间存在口径差异，站点只引用收入预测与 ROI，并在局限里说明。
4. 05 号欺诈模型的 99.86% 是在 SMOTE 后的平衡测试集上，站点明确标注“不代表真实分布”。
5. 站点挂的 CV 仍是 20260925 版本，部分表述（如“项目创始人”“99.9%”）比项目页更宽；面试时以项目页为准。

---

## 下一步

- 更新 CV 口径（站点已挂 20260925 版本）。
- 补 01 号项目的行业分类与中证全指基准。
- 把 02 号的本地私链换成测试网，方便外部验证。
- 加英文版页面（可先做 `index-en.html`）。
