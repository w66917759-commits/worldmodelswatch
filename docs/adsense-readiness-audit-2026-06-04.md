# AdSense 上线前最终审核报告

审核对象：`https://worldmodelswatch.com`
审核日期：2026-06-05
审核范围：当前本地生产构建（P0-P4 修复后）+ 生产域名基础可访问性复核。
审核方法：`next build` 后在 `http://localhost:3131` 全量抓取 sitemap 76 个公开 URL；抽查随机 404、`robots.txt`、`sitemap.xml`、`ads.txt`；探测 71 个唯一外链；对 7 个代表页面运行 Lighthouse mobile lab；复核生产 HTTPS / robots / sitemap 响应。
重要说明：当前本地待部署版本 sitemap 为 76 URL；线上 `https://worldmodelswatch.com/sitemap.xml` 当前仍为 73 URL。申请 AdSense 前必须先部署当前版本，否则 Google 审核到的仍可能是旧版本。
政策参考：Google AdSense Program policies、Google Publisher Policies、Google Search spam policies、Google helpful content / AI content guidance。

## 1. 基础可访问性

| 检查项 | 结果 | 问题描述 | 修复建议 |
|---|---:|---|---|
| HTTPS | PASS | 生产首页、`sitemap.xml`、`robots.txt` 均通过 HTTPS 返回 `HTTP/2 200`，Vercel HSTS 正常。 | 保持强制 HTTPS；部署后再复测 200 / 308。 |
| Sitemap | PASS | 本地待部署版本 sitemap 包含 76 个公开 URL，全部返回 200；生产 sitemap 当前为 73 URL。 | 申请前部署当前版本，确保线上 sitemap 也为 76 URL。 |
| Robots | PASS | `robots.txt` 允许公开页面，屏蔽 `/account`、`/api/`、`/auth/callback`，并声明 sitemap。 | 保持；上线广告后确认不要屏蔽 `ads.txt`。 |
| 404 页面 | PASS | 随机路径返回 HTTP 404，并含 `noindex`，无软 404。 | 保持。 |
| 死链/外链 | PASS | 71 个唯一外链自动探测均为 2xx/3xx 或可访问；P0 报告中的 3 个异常外链已替换或标注。 | 建议每次新增 source 后跑一次 source health check。 |
| 重定向异常 | PASS | sitemap URL 均直接返回 200；canonical 指向生产域。首页 canonical 为 `https://worldmodelswatch.com`，可接受。 | 继续避免把跳转 URL 放进 sitemap。 |
| 移动端兼容性 | PASS | Lighthouse mobile SEO 100，Accessibility 96-100；导航、搜索、footer、详情页阅读结构可用。 | 继续保持移动端排版和按钮尺寸稳定。 |
| 页面加载速度 | WARNING | Lighthouse mobile performance 76-86；LCP 仍偏慢，代表页为 4.2s-7.9s。 | 优先优化模型列表、新闻详情、长尾页首屏 LCP 元素和视频/图片加载策略。 |
| Core Web Vitals | WARNING | Lab CLS 全部 0，TBT 0-17ms；LCP 多数超过 2.5s。未取得 CrUX field data。 | 部署后用 PageSpeed Insights / Search Console 复测真实用户数据；先修 LCP。 |

性能抽样：

| 页面 | Performance | SEO | Accessibility | FCP | LCP | TBT | CLS |
|---|---:|---:|---:|---:|---:|---:|---:|
| `/` | 86 | 100 | 100 | 0.9s | 4.2s | 17ms | 0 |
| `/models` | 76 | 100 | 100 | 0.9s | 7.5s | 2ms | 0 |
| `/models/world-api` | 77 | 100 | 96 | 1.1s | 7.1s | 1ms | 0 |
| `/news` | 78 | 100 | 100 | 1.1s | 6.2s | 4ms | 0 |
| `/news/world-labs-marble-1-1-model-rollout` | 77 | 100 | 96 | 1.1s | 7.1s | 0ms | 0 |
| `/compare/genie-3-vs-marble` | 78 | 100 | 96 | 1.1s | 5.9s | 4ms | 0 |
| `/ai-360-skybox-generator` | 76 | 100 | 100 | 0.9s | 7.9s | 0ms | 0 |

## 2. AdSense 合规检查

总体风险等级：MEDIUM。

| 风险项 | 等级 | URL / 范围 | 审核员视角问题 | 修复方案 |
|---|---:|---|---|---|
| 未部署当前修复版 | HIGH | `https://worldmodelswatch.com/sitemap.xml` | 线上 sitemap 仍为 73 URL，本地待部署版本为 76 URL；若立即申请，审核员可能看到旧版本的薄内容和缺失项。 | 申请前部署当前代码，并复测线上 sitemap、首页、About、Contact、Search、OG image、alt 覆盖率。 |
| Low Value Content | MEDIUM | `/concepts`、`/updates`、`/spatial-intelligence`、`/from-video-to-worlds`、`/faq`、`/what-is-world-model` | 首页和 `/create-word` 已补强到 811 / 889 words；剩余风险转移到少数 indexable 概念/索引页，最低 419 words。 | 每页再补 1-2 个原创段落、FAQ 或 source-backed examples；如果暂时不扩写，可对最薄的非核心页短期 `noindex`。 |
| Insufficient Original Content | MEDIUM | 8 个 news 详情页低于 850 words | 新闻页已补原创分析和 byline，但仍有 698-781 words 的旧 release signal，被抽中时仍可能显得偏短。 | 把 8 篇旧新闻扩到 850-1000 words，增加 what changed / why it matters / verification notes / limitations。 |
| Auto Generated / Programmatic SEO | LOW-MEDIUM | 4 个长尾页、13 个 compare 页 | 长尾页已经加入 practical example、workflow、source boundary；compare 页有表格、FAQ、schema。仍需避免继续批量扩 URL。 | 继续保持少量高质量长尾页；新增页面必须有独立案例、来源和人工判断。 |
| Scraped / Replicated Content | LOW-MEDIUM | `/world-model-labs`、模型 demo 页 | `/world-model-labs` 已扩到 1198 words，并含 demo-by-demo 解读和 sources；风险已明显下降。 | 保持只引用官方/稳定来源；不要托管无授权第三方视频。 |
| Copyright / IP risk | LOW-MEDIUM | 本地媒体、外部 demo/source 链接 | 当前页面以引用、来源链接和自有 social image 为主，未发现明显侵权内容；媒体来源仍建议长期维护 manifest。 | 给 `public/world-videos` 和 showcase 资产维护来源/用途/许可说明。 |
| Doorway Pages | LOW-MEDIUM | 4 个长尾页 | 页面现在能直接回答 query，不只是导流；两个长尾页仍低于 850 words。 | 保留 direct-answer、选择流程、限制和 source list；继续避免关键词变体批量页。 |
| 违规内容 | LOW | 全站 | 未发现成人、危险、仇恨、赌博、金融误导等 Google Publisher Policy 禁止内容。 | 评论区继续使用审核/举报策略，避免 UGC 引入政策风险。 |

## 3. 内容质量检查

统计结果：

| 指标 | 数值 |
|---|---:|
| Sitemap 总页面数 | 76 |
| 文章/编辑型页面数 | 60 个含 `Article` / `TechArticle` / `NewsArticle` / `FAQPage` JSON-LD 的页面 |
| 新闻文章数 | 20 |
| 模型项目页数 | 16 |
| 比较指南数 | 13 |
| 长尾 SEO 页数 | 4 |
| 平均可见字数 | 905 words |
| 文章型页面平均字数 | 930 words |
| 图片数量 | 175 |
| Alt 标签覆盖率 | 175/175，100% |
| 唯一外链数 | 71 |
| 外链异常数 | 0 |

核心页面质量评估：

| 页面类型 | 是否解决用户问题 | 独特价值 | 专家视角 | 可读性 | 风险 |
|---|---|---|---|---|---|
| 首页 | 是 | 中高，已加入站点方法、来源排序、使用路径 | 中 | 高 | LOW-MEDIUM |
| `/create-word` | 是 | 中高，已从工具入口变为选择流程页 | 中 | 高 | LOW-MEDIUM |
| 模型页 | 是 | 高，有来源、优势、限制、更新记录、适用/不适用场景 | 中高 | 高 | LOW |
| 新闻页 | 基本解决 | 中等，部分旧新闻仍偏短 | 中 | 高 | MEDIUM |
| 比较页 | 是 | 高，表格、FAQ、source-backed comparison 有实际判断价值 | 中高 | 高 | LOW |
| 长尾页 | 基本解决 | 中等，已有 practical examples 和 source boundaries | 中 | 高 | LOW-MEDIUM |
| Demo 页 | 是 | 中高，已增加 demo-by-demo reading 和判断方法 | 中 | 高 | LOW-MEDIUM |

World Models 项目页专项检查：

| 检查项 | 当前状态 | 缺失项 |
|---|---|---|
| 项目介绍 | 已覆盖 | 无统一缺失。 |
| 开发团队 | 已覆盖 | 部分 open-source/preview 项目仍需持续核验组织归属。 |
| 技术特点 | 已覆盖 | 可继续加入更细的 benchmark / architecture notes。 |
| Demo 展示 | 已覆盖可用 demo 或官方 action | 没有公开 demo 的项目需要继续标注 “not publicly available”。 |
| 更新记录 | 已覆盖 | 需要随日常更新继续维护。 |
| 使用场景 | 已覆盖 | 无统一缺失。 |
| 优势分析 | 已覆盖 | 无统一缺失。 |
| 局限性分析 | 已覆盖 | 无统一缺失。 |
| 引用来源 | 已覆盖 | 继续做 source health。 |
| 独特分析 | 已覆盖 | 仍可增强 named expert / human reviewer 信号。 |

低字数 URL 级别清单：

| 严重程度 | URL | 证据 | AdSense / SEO 影响 | 修复方案 |
|---|---|---|---|---|
| MEDIUM | `/concepts` | 419 words，CollectionPage | Glossary 索引页偏薄，被抽样时可能像导航页。 | 增加术语解释、来源标准、内部分类说明，目标 700+ words。 |
| MEDIUM | `/updates` | 480 words，CollectionPage | 更新索引页偏短，可能像 release link list。 | 增加更新选择标准、source confidence、近期重点变化摘要。 |
| MEDIUM | `/spatial-intelligence` | 491 words，Article | 主题页偏薄，和 world model 概念页有重叠风险。 | 增加定义、应用边界、与 3D generation / robotics 的区别。 |
| MEDIUM | `/from-video-to-worlds` | 525 words，Article | 主题页深度不足。 | 增加视频模型到 world model 的技术路线、限制和例子。 |
| MEDIUM | `/faq` | 532 words，FAQPage | FAQ 有结构化数据，但正文偏短。 | 增加 3-5 个 AdSense/reader-oriented 问答。 |
| MEDIUM | `/what-is-world-model` | 644 words，Article | 接近阈值，但作为核心解释页应更强。 | 增加 world model taxonomy、examples、misconceptions。 |
| MEDIUM | `/news/ant-robbyant-lingbot-map` | 698 words，NewsArticle | 旧新闻分析深度不足。 | 增加 what changed、source confidence、robotics impact、limitations。 |
| MEDIUM | `/news/tencent-hunyuan-hy-world-2-0` | 708 words，NewsArticle | 旧新闻分析深度不足。 | 扩展 technical delta、demo verification、comparison links。 |
| MEDIUM | `/news/runway-characters-gwm-1` | 709 words，NewsArticle | 旧新闻分析深度不足。 | 增加 GWM-1 与 Characters 的边界和影响。 |
| MEDIUM | `/news/ant-lingguang-mobile-world-model` | 720 words，NewsArticle | 旧新闻分析深度不足。 | 增加 mobile world model use cases 和 verification notes。 |
| MEDIUM | `/news/google-project-genie-street-view` | 727 words，NewsArticle | 旧新闻分析深度不足。 | 增加 Project Genie / Street View evidence boundary。 |
| MEDIUM | `/news/world-labs-marble-1-1-model-rollout` | 734 words，NewsArticle | 新增新闻仍略短。 | 增加 rollout impact、access status、what to test。 |
| MEDIUM | `/news/skybox-ai-pending-generation-limits` | 735 words，NewsArticle | 新增新闻仍略短。 | 增加 user impact、queue/limit handling、alternative paths。 |
| MEDIUM | `/news/nvidia-cosmos-3-physical-ai-stack` | 781 words，NewsArticle | 低于理想新闻深度。 | 增加 physical AI stack implications 和 source caveats。 |
| LOW | `/text-to-3d-world-generator` | 811 words，Article + ItemList | 已有 direct-answer 和 workflow，略低于 850。 | 增加 1 个 creator / developer scenario。 |
| LOW | `/ai-environment-creator-for-unity-unreal` | 848 words，Article + ItemList | 接近 850。 | 增加 Unity/Unreal integration caveats。 |
| LOW | `/compare/genie-3-vs-marble` | 795 words，Article + FAQ + ItemList | 有表格和 FAQ，风险低。 | 增加 “when not to choose either” 段落。 |
| LOW | `/compare/marble-vs-gwm-1` | 795 words，Article + FAQ + ItemList | 有表格和 FAQ，风险低。 | 增加 evaluation criteria 或 source caveat。 |

## 4. SEO 检查

| 检查项 | 结果 | 缺失项 / 严重程度 | 修复方案 |
|---|---:|---|---|
| Title | PASS | 本次 crawl 未发现 title 超过 70 chars。 | 继续使用 `seoPageTitle` 截断策略。 |
| Meta Description | PASS | 本次 crawl 未发现 description 超过 170 chars。 | 继续使用 `seoMetaDescription`。 |
| Canonical | PASS | 76/76 有 canonical，指向生产域。首页无尾斜杠 canonical 可接受。 | 保持。 |
| Open Graph | PASS | 76/76 有 `og:image`。 | 未来可为高价值模型/新闻页增加专属图。 |
| Twitter Card | PASS | 76/76 有 `twitter:image`。 | 保持。 |
| Sitemap.xml | PASS | 本地 76 URL 全部 200；生产仍 73 URL。 | 申请前部署。 |
| Robots.txt | PASS | 规则清晰。 | 保持。 |
| Structured Data | PASS | 核心页、索引页、法律页、新闻、模型、比较页均有合适 JSON-LD。 | 继续避免重复/冲突 schema。 |
| Breadcrumb | PASS | model/news/compare 详情页已具备 BreadcrumbList。 | 可继续给部分 hub 页加可见 breadcrumb，但非必需。 |
| Internal Linking | PASS | 首页、模型、新闻、比较、长尾页互链充分。 | 继续从短页补上下文链接。 |
| URL Structure | PASS | URL 短、可读、主题明确。 | 保持。 |

## 5. 用户体验检查

| 检查项 | 结果 | 问题 | 修复建议 |
|---|---:|---|---|
| 顶部导航 | PASS | 有 World Evolution、Create AI Worlds、Company Map、Decision Guides、Release Signals、Search、FAQ。 | 保持，避免继续塞入过多导航项。 |
| 分类导航 | PASS | `/models`、`/compare`、`/news`、`/world-model-labs`、长尾页结构清晰。 | 短页补内容后继续从 hub 页引流。 |
| 搜索功能 | PASS | 已有 `/search`，使用公开 sitemap 作为索引；页面 noindex 合理。 | 后续可做客户端过滤增强。 |
| Footer | PASS | 已包含 About Us、Contact、Privacy Policy、Terms of Use、Sitemap、Social。 | Terms 文案如需严格匹配，可改 label 为 Terms of Service。 |
| 页面层级 | PASS | 详情页 breadcrumb、HTML sitemap、XML sitemap 齐全。 | 保持。 |
| CTA 设计 | PASS | 未发现诱导广告点击文案。 | 上广告后继续避免 “click ads / support us by ads”。 |
| 移动端体验 | WARNING | 布局和可访问性通过，但 LCP 仍慢。 | 优化首屏视频/图片和关键 CSS。 |

Footer 必备项：

| 项目 | 当前状态 |
|---|---|
| About Us | PASS：`/about` |
| Contact | PASS：`/contact` + footer email |
| Privacy Policy | PASS：`/privacy` |
| Terms of Service | PASS：`/terms`，当前 footer label 为 Terms of Use |

## 6. 技术质量检查

| 检查项 | 结果 | 问题 | 修复建议 |
|---|---:|---|---|
| Next.js SEO 配置 | PASS | Metadata、canonical、OG/Twitter、description 截断已覆盖。 | 保持 `src/lib/seo/page-targets.ts` 为统一入口。 |
| Metadata 配置 | PASS | 76/76 有 title、description、canonical、social image。 | 未来为重点新闻页增加专属 image。 |
| Sitemap 自动生成 | PASS | 本地构建输出 76 public URLs。 | 部署后确认生产也为 76。 |
| Robots 自动生成 | PASS | `src/app/robots.ts` 正常。 | 保持。 |
| Schema Markup | PASS | `WebSite`、`CollectionPage`、`Article`、`NewsArticle`、`TechArticle`、`FAQPage`、`BreadcrumbList` 覆盖合理。 | 保持 schema 与页面实际内容一致。 |
| 图片优化 | PASS | 175/175 `<img>` 有非空 alt；showcase 多为 WebP。 | 继续压缩 LCP 相关图片。 |
| Lazy Load | PASS | 内容图基本 lazy；首屏视频/图需要谨慎。 | 首屏 LCP 元素不要过度 lazy。 |
| WebP/AVIF | PASS | 多数展示图使用 WebP。 | 可逐步补 AVIF，但不是 AdSense 阻断项。 |
| 页面缓存策略 | PASS | Vercel 静态页面缓存正常，生产 headers 显示 `x-vercel-cache: HIT`。 | 动态评论/登录页继续与公开内容分离。 |
| `ads.txt` | WARNING | `/ads.txt` 当前 404。 | 拿到 AdSense publisher id 后添加 `public/ads.txt`，格式如 `google.com, pub-xxxxxxxxxxxxxxxx, DIRECT, f08c47fec0942fa0`。 |

## 7. 广告准备度评分

评分口径：当前本地待部署版本。

| 维度 | 分数 |
|---|---:|
| 内容质量 | 84/100 |
| SEO质量 | 94/100 |
| 用户体验 | 88/100 |
| AdSense合规 | 86/100 |
| 技术质量 | 90/100 |
| 最终总分 | 88/100 |

预计 AdSense 通过概率：70%-90%。

理由：P0-P3 的关键阻断项已基本消除：首页、`/create-word`、模型页、demo 页、OG/Twitter image、alt、About、Contact、byline、Breadcrumb、JSON-LD、外链健康均明显改善。剩余风险主要是部署前后不一致、少数短新闻/概念页、LCP 偏慢、`ads.txt` 尚未配置。

## 8. AdSense 风险清单

### 必须修复（阻止审核通过）

| 问题 | 影响 | 修复方案 |
|---|---|---|
| 当前修复版尚未部署到生产 | Google 审核的是 `https://worldmodelswatch.com`，不是本地 76 URL 版本。若线上仍是 73 URL 旧版，通过率会回落。 | 部署当前代码；部署后复测线上 sitemap=76、首页 words>800、`/create-word` words>850、OG/alt/JSON-LD 全覆盖。 |

### 建议修复（提高通过率）

| 问题 | 影响 | 修复方案 |
|---|---|---|
| 8 个 news 详情页低于 850 words | 被抽样时仍可能显得像 release 聚合。 | 每篇补 150-250 words 的原创分析、验证路径和局限。 |
| 6 个 indexable 概念/索引页低于 650 words | 会留下 Low Value Content 抽样风险。 | 扩写 `/concepts`、`/updates`、`/spatial-intelligence`、`/from-video-to-worlds`、`/faq`、`/what-is-world-model`。 |
| Lighthouse LCP 4.2s-7.9s | 影响用户体验、SEO 和 Discover。 | 优化首屏媒体、预加载关键图、减少视频首屏影响、审查 LCP 元素。 |
| `ads.txt` 404 | 不是预审硬阻断，但广告上线后会影响授权和收益状态。 | 获得 publisher id 后添加 `public/ads.txt`。 |

### 可选优化

| 问题 | 收益 |
|---|---|
| 重点新闻页缺专属 1200px 图片 | 提升 Discover 和社交分享表现。 |
| About 仍是机构作者，缺 named human author | 增强 EEAT，但不是 AdSense 必需。 |
| 资产许可 manifest 未独立成文档 | 降低长期版权/IP 审核风险。 |
| Search 只是 sitemap index | 后续可提升 UX，但当前已满足基础站内查找。 |

## 9. 最终结论

当前状态：✅ 建议立即提交 AdSense（前提：先部署当前 P0-P4 版本）。

如果以当前本地待部署版本为准，站点已经从“可以申请但风险较高”提升到“建议提交”：核心薄内容已补强，About/Contact/Privacy/Terms 已齐，OG/Twitter image 和图片 alt 已覆盖，模型/新闻/比较页有 byline、来源、Breadcrumb 和结构化数据，demo/长尾页也加入了原创判断和使用边界。

但不要在未部署当前版本时提交。生产 sitemap 当前仍是 73 URL，本地最终版本是 76 URL；AdSense 审核员只看线上页面。部署后再跑一次线上 crawl，确认报告中的 PASS 项都已反映到 `https://worldmodelswatch.com`。

## 专项分析

| 专项 | 风险 | 结论 | 建议 |
|---|---:|---|---|
| AI 内容占比过高 | LOW-MEDIUM | 页面仍有统一编辑模板，但有来源、限制、比较、更新记录和人工审核声明，不像纯 AI spam。 | 保持 byline 和 source confidence；避免批量生成新页。 |
| 自动聚合资讯 | MEDIUM | 新闻页已有原创分析，但 8 篇低于 850 words。 | 优先扩写旧新闻；弱来源新闻宁可不发。 |
| 项目页面内容过薄 | LOW | 16 个模型页平均 1129 words，无低于 850 words。 | 继续维护更新记录和 source health。 |
| Demo 页面价值不足 | LOW-MEDIUM | `/world-model-labs` 已 1198 words，有 demo 判断方法和来源。 | 继续补 demo 级别的限制和适用场景。 |
| 导航站倾向 | LOW-MEDIUM | 首页 811 words，已加入方法论和 editorial body；仍有强导航属性。 | 首页后续可再加 “latest editorial findings”。 |
| Programmatic SEO 页面质量 | LOW-MEDIUM | 长尾页数量少、主题明确、有 practical examples。 | 不扩成大规模关键词页。 |
| EEAT 信号缺失 | LOW-MEDIUM | About、Contact、byline、publisher schema 已补。 | 可增加 named editor / reviewer。 |
| 作者信息缺失 | LOW-MEDIUM | model/news/compare 详情页已有 editorial desk byline 和 schema author/publisher。 | 如要冲 Discover，可引入实名作者页。 |
| 引用来源缺失 | LOW | source list 和外链健康良好，71 个外链本轮无异常。 | 继续 source health 自动检查。 |
| Google Discover 兼容性 | MEDIUM | OG/Twitter 图已补，SEO/accessibility 高；LCP 和专属新闻图仍是短板。 | 优化 LCP；给重点新闻页配置大图和更明确 dateModified。 |

## P4 验证记录

| 命令 / 检查 | 结果 |
|---|---|
| `npm run build` | PASS，生成 85 个 Next.js app routes |
| 本地 sitemap crawl | PASS，76/76 URL 返回 200 |
| 随机 404 | PASS，HTTP 404 + noindex |
| 外链探测 | PASS，71 unique external URLs，0 个异常 |
| Lighthouse mobile 抽样 | WARNING，SEO 100，Accessibility 96-100，LCP 偏慢 |
| 生产 HTTPS / robots / sitemap headers | PASS，均为 `HTTP/2 200` |
| 生产 sitemap 数量 | WARNING，73 URL，尚未反映当前本地 76 URL 版本 |

## 官方政策参考

- Google AdSense Program policies: https://support.google.com/adsense/answer/48182
- Google Publisher Policies: https://support.google.com/adsense/answer/10502938
- Google Search spam policies: https://developers.google.com/search/docs/essentials/spam-policies
- Creating helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search guidance about AI-generated content: https://developers.google.com/search/blog/2023/02/google-search-and-ai-content
