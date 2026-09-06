/* i18n dictionary + runtime for the portfolio. Default language is English. */
(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-lang";
  var TEXT_PROPS = ["aria-label", "title", "placeholder", "data-label"];

  var DICT = {
    "Qi Shen - Portfolio": "沈淇 - 作品集",
    "Qi Shen's portfolio across user insight, content systems, AI workflows, growth experiments, and digital operations.": "沈淇的作品集：用户洞察、内容系统、AI workflow、增长实验与数字运营。",
    "sound off": "声音 关",
    "sound on": "声音 开",
    "about": "关于",
    "internship": "实习经历",
    "internships": "实习经历",
    "activities": "项目与经历",
    "skills": "技能",
    "photography": "摄影",
    "contact": "联系",
    "resume": "简历",
    "in Los Angeles": " 洛杉矶时间",
    "Chinese resume": "中文简历",
    "English resume": "英文简历",
    "Los Angeles / New York / Shanghai / Beijing": "洛杉矶 / 纽约 / 上海 / 北京",
    "Hey": "嗨",
    "I'm Qi Shen": "我是沈淇",
    "curious observer · product thinker": "好奇的观察者 · 产品思考者",
    "Hey, welcome to": "Hey，欢迎来到",
    "Shen Qi's Curious Page.": "沈淇的「神奇」Page。",
    "PEOPLE · CONTENT · DATA · TASTE · CURIOSITY": "人 · 内容 · 数据 · 审美 · 好奇心",
    "User & Content Insight": "用户与内容洞察",
    "Find the signals that actually matter inside behavior, content, and context.": "从行为、内容与场景里找到真正值得关注的信号。",
    "USER BEHAVIOR · CONTENT SENSE · EMPATHY": "用户行为 · 内容感知 · 同理心",
    "Strategic Judgment": "策略判断",
    "Move from \"what happened\" to \"why, and what we do next\".": "从“发生了什么”，继续追到“为什么，以及下一步做什么”。",
    "DATA · PATTERN · DECISION": "数据 · 规律 · 决策",
    "Planning & Execution": "策划与落地",
    "Turn vague ideas into plans, experiments, and results that actually happen.": "把模糊的想法变成方案、实验和真正发生的结果。",
    "EXPERIMENT · EXECUTION · ITERATION": "实验 · 落地 · 迭代",
    "Internship": "实习经历",
    "Internships": "实习经历",
    "Activities": "项目与经历",
    "Skills": "技能",
    "Photography": "摄影",
    "Web prototype": "Web 原型",
    "Web prototype built to visualize the restaurant agent experience.": "为具象化餐饮 Agent 的产品体验而搭建的 Web 原型。",
    "view web demo": "查看 Web Demo",
    "Internal ZooClaw agent workflows are not publicly shown.": "ZooClaw 内部 Agent workflow 不对外展示。",
    "AI-Native Restaurant": "AI-Native 餐饮",
    "Operations Agent": "运营 Agent",
    "AI Product Operations Intern · B2B Restaurant AI Agent": "AI 产品运营实习生 · B2B 餐饮 AI Agent",
    "I designed the agent workflows behind review intelligence and social planning, and built a working prototype to validate the experience before engineering.": "我负责设计 ZooClaw 平台内评价洞察与内容规划两条 Agent workflow，并独立搭建可交互原型，在工程介入之前先完成体验验证。",
    "The core question was never what the AI could generate — it was which decisions the agent should own, and which must stay human.": "核心问题从来不是“AI 能生成什么”，而是哪些决策该交给 Agent，哪些必须留给人。",
    "Agent Workflow Design": "Agent Workflow 设计",
    "Rebuilt two fragmented workflows as agent task chains — not another dashboard or a single-step AI writer.": "把两条碎片化的业务流程重构成 Agent 可执行的任务链，而不是再做一个 dashboard 或一步式 AI 写作工具。",
    "Reviews · monitor → classify → prioritize → draft → human review → learn": "评价 · 监测 → 分类 → 优先级排序 → 起草 → 人工审核 → 学习",
    "Social · cross-platform data → content taxonomy → strategy": "社媒 · 多平台数据 → 内容结构化 → 选题策略",
    "Human in the Loop": "Human-in-the-Loop 人机协同",
    "Set the automation boundary by risk: routine replies auto-schedule, ambiguous cases wait for review, high-risk issues escalate to a human.": "按风险划定自动化边界：常规回复自动排期，模糊 case 等待人工审核，高风险问题升级至人工处理。",
    "Auto · Suggest · Escalate": "自动 · 建议 · 升级",
    "0→1 Prototyping": "0→1 原型验证",
    "Turned workflow concepts into a working web demo with Claude Code and OpenAI Codex, so hypotheses could be tested with real interaction.": "用 Claude Code 与 OpenAI Codex 把 workflow 概念做成可运行的 Web Demo，让假设能在真实交互中被验证。",
    "Idea · Build · Validate · Iterate": "想法 · 构建 · 验证 · 迭代",
    "Impact": "业务结果",
    "response time reduction": "评价响应时间下降",
    "restaurant verticals": "餐饮品类",
    "Average review response time down 40%; automated monthly planning across 30+ restaurant verticals.": "平均评价响应时间下降 40%；月度内容规划覆盖 30+ 餐饮品类。",
    "Agent patterns": "Agent 范式",
    "Workflow Takeover": "流程接管",
    "Background Monitoring": "后台监测",
    "Thinking Partner": "思考伙伴",
    "Monitor": "监测",
    "Understand": "理解",
    "Decide": "决策",
    "Human Review": "人工审核",
    "Act": "执行",
    "Learn": "学习",
    "Abstract product logic, not ZooClaw system architecture.": "此处为抽象产品逻辑，并非 ZooClaw 系统架构。",
    "campaign page": "活动页面",
    "Yami story page": "Yami 专题页",
    "Annual tea break": "年度茶歇",
    "Zen tea-break storytelling for Asian snacks, beverages, and cross-border lifestyle discovery.": "以禅意茶歇为视觉线索，呈现亚洲零食、饮品与跨境生活方式发现。",
    "tea snacks": "茶歇零食",
    "landing story": "落地页叙事",
    "A themed ecommerce story built around tea-break snacks, beverages, and cross-border lifestyle discovery.": "围绕茶歇零食、饮品与跨境生活方式发现搭建的电商专题内容。",
    "campaign GMV": "活动 GMV",
    "add-to-cart lift": "加购率提升",
    "final conversion": "最终转化率",
    "landing page": "落地页",
    "SKU strategy": "SKU 策略",
    "new users": "新客增长",
    "ins / tiktok warm-up": "ins / tiktok 预热内容",
    "Campaign landing page and short-form teaser content for Yami's Annual Tea Break activation.": "Yami「一年一度茶歇大会」活动落地页与短视频预热内容。",
    "view campaign": "查看活动页",
    "Yami · New York · 2025": "Yami · 纽约 · 2025",
    "Growth & Campaign Operations Intern": "增长与活动运营实习生",
    "Yami is a North American Asian ecommerce platform for food, beauty, home, and lifestyle discovery.": "Yami 是北美面向亚洲食品、美妆、家居与生活方式品类的电商平台。",
    "Built the \"Annual Tea Break\" ecommerce campaign as a content-to-commerce loop, connecting social seeding, short-form teaser creative, landing-page storytelling, SKU strategy, and conversion analysis.": "以“内容—电商”闭环搭建「一年一度茶歇大会」活动：串联社媒种草、短视频预热素材、落地页叙事、SKU 策略与转化分析。",
    "Planned a Xiaohongshu new-user growth experiment that generated 125K+ content views and 32K+ interactions in two weeks.": "策划小红书新客增长实验，两周内获得 12.5 万+ 内容曝光与 3.2 万+ 互动。",
    "Operated the Annual Tea Break theme from campaign idea to page iteration, reaching $12.8K total GMV and $6,964 in new-customer revenue.": "主导「茶歇大会」主题从活动创意到页面迭代的全过程，最终 GMV $12.8K，其中新客贡献 $6,964。",
    "Used click and transaction data to identify conversion bottlenecks, lifting add-to-cart rate by 48% and final conversion to 28.9%.": "用点击与成交数据定位转化瓶颈，加购率提升 48%，最终转化率提升至 28.9%。",
    "Packaged a social-first warm-up video for Instagram and TikTok to turn product selection into a more memorable campaign story.": "为 Instagram 与 TikTok 制作社媒优先的预热视频，把选品逻辑包装成更有记忆点的活动故事。",
    "douyin account": "抖音账号",
    "Shanghai pop-up field assets and Burberry Douyin account operations, presented as an offline-to-online content system.": "上海快闪现场素材与 Burberry 抖音账号运营，作为一套从线下到线上的内容系统呈现。",
    "Burberry / Media.Monks · Shanghai · 2024": "Burberry / Media.Monks · 上海 · 2024",
    "Social Media & Content Operations Intern": "社交媒体与内容运营实习生",
    "A luxury brand social activation connecting Burberry's Shanghai pop-up scene with Xiaohongshu and Douyin content operations.": "一场奢侈品品牌社媒活动，连接 Burberry 上海快闪现场与小红书、抖音的内容运营。",
    "Turned a physical pop-up into platform-native storytelling: reading local social signals, shaping KOL logic, organizing content routes, and maintaining the rhythm of Burberry's Douyin-facing account work.": "把线下快闪转化为平台原生叙事：读取本地社媒信号、沉淀 KOL 筛选逻辑、组织内容动线，并维持 Burberry 抖音账号的更新节奏。",
    "Translated the pop-up's garden, coffee truck, signage, and product moments into social-ready creative directions for Xiaohongshu.": "把快闪的花园、咖啡车、导视与产品瞬间，转译为适配小红书的社媒创意方向。",
    "Built influencer screening logic around style fit, audience quality, interaction data, and campaign tone.": "围绕风格匹配度、受众质量、互动数据与活动调性，搭建达人筛选逻辑。",
    "Supported Burberry Douyin account operations across content publishing, asset organization, and performance review.": "支持 Burberry 抖音账号运营，覆盖内容发布、素材整理与效果复盘。",
    "Contributed to a 30% lift in social exposure and 16% growth in engagement during the activation window.": "活动期间助力社媒曝光提升 30%、互动量增长 16%。",
    "content selection machine": "内容选题引擎",
    "novel-to-screen desk": "小说到影视工作台",
    "literary IP": "文学 IP",
    "audio shelf": "有声书架",
    "drama launch": "剧集上线",
    "story source": "故事来源",
    "era · women · migration": "年代 · 女性 · 迁徙",
    "iQIYI drama": "爱奇艺剧集",
    "screen adaptation": "影视改编",
    "screen": "影视",
    "adaptation": "改编",
    "genre": "题材",
    "extension": "延展",
    "book": "书籍",
    "shelf": "书架",
    "visual tone / audience fit": "视觉调性 / 受众匹配",
    "novel IP": "小说 IP",
    "wuxia · mystery · fandom": "武侠 · 悬疑 · 粉丝基础",
    "drama + audio": "剧集 + 有声",
    "genre extension": "题材延展",
    "hook / catalog / recall": "钩子 / 目录 / 记忆点",
    "original novel": "原著小说",
    "romance · reversal · heat": "爱情 · 反转 · 热度",
    "content loop": "内容闭环",
    "book shelf": "书架链路",
    "promotion / conversion path": "推广 / 转化路径",
    "editorial signal": "编辑信号",
    "IP projects moved toward audio / video development": "IP 项目推进至有声 / 影视开发",
    "story potential": "故事潜力",
    "audience fit": "受众匹配",
    "adaptation value": "改编价值",
    "short-video hook": "短视频钩子",
    "adaptable": "可改编",
    "operating": "运营中",
    "testing": "测试中",
    "genre signal / audience path": "题材信号 / 受众路径",
    "catalog quality / metadata check": "目录质量 / 元数据校验",
    "hook review / feedback loop": "钩子复盘 / 反馈闭环",
    "audiobooks tracked": "有声书资产追踪",
    "IP titles evaluated": "文学 IP 评估",
    "promo videos reviewed": "宣传短视频审阅",
    "A content operations system for turning literary IP, audiobook catalogs, and short-video feedback into product decisions.": "一套把文学 IP、有声书目录与短视频反馈转化为产品决策的内容运营系统。",
    "A visual IP adaptation desk for reading how novels, audio catalogs, drama heat, and short-video feedback become product decisions.": "一个更直观的 IP 改编工作台：展示小说、有声书目录、剧集热度与短视频反馈如何进入产品判断。",
    "iQIYI · Beijing · 2023": "爱奇艺 · 北京 · 2023",
    "Content Product Operations Intern": "内容产品运营实习生",
    "A long-form entertainment platform role focused on IP evaluation, audiobook operations, and short-video promotion loops.": "长视频娱乐平台相关岗位，聚焦 IP 评估、有声书运营与短视频推广闭环。",
    "Built a repeatable content judgment workflow: reading story potential, organizing catalog signals, reviewing promotional hooks, and translating audience feedback into clearer content-operation decisions.": "搭建可复用的内容判断流程：判断故事潜力、梳理目录信号、复盘宣传钩子，并把用户反馈转化为更清晰的内容运营决策。",
    "Evaluated 700+ literary IP titles across genre, audience fit, narrative strength, and adaptation potential.": "从题材、受众匹配、叙事强度与改编潜力四个维度评估 700+ 文学 IP。",
    "Tracked 3,500+ audiobook assets, keeping catalog status, metadata, and operational signals organized for later decision-making.": "追踪 3,500+ 有声书资产，持续维护目录状态、元数据与运营信号，为后续决策留出依据。",
    "Produced and reviewed 400+ promotional short videos, using platform feedback to refine hooks, tags, and content positioning.": "制作并审阅 400+ 宣传短视频，用平台反馈反哺钩子、标签与内容定位。",
    "Helped 47 IP projects move into later audio/video development by turning editorial judgment into structured recommendations.": "把编辑判断沉淀为结构化推荐，推动 47 个 IP 项目进入后续有声 / 影视开发。",
    "slow social / meal memory / AI-assisted demo": "慢社交 / 用餐记忆 / AI 辅助 Demo",
    "Mealog turns meals into quiet stories.": "Mealog 把每一餐变成安静的故事。",
    "I reframed Mealog from \"what did I eat\" into \"who was there, where did it happen, and what kind of memory did this meal leave behind.\"": "我把 Mealog 的核心问题从“我今天吃了什么”，重新定义为“和谁一起、在哪里发生、这一餐留下了什么记忆”。",
    "defined people, places, meals, and shared memory as the core product model": "把人、地点、餐食与共同记忆定义为产品的核心模型",
    "designed a low-pressure social experience around monthly tables and relationship context": "围绕“每月一桌”与关系脉络，设计低压力的社交体验",
    "used Figma, Claude Code, and user feedback to move from concept deck to interactive demo": "用 Figma、Claude Code 与用户反馈，把概念 deck 推进到可交互 Demo",
    "process evidence": "过程留档",
    "download idea deck": "下载 Idea Deck",
    "open interactive demo": "打开交互 Demo",
    "Origin: everyday meal photos become quiet stories.": "起点：日常随手拍的餐食照片，变成安静的故事。",
    "Updated MVP flow: meal memories, saved photos, company, optional permissions, and quiet guest entry.": "更新后的 MVP 流程：用餐记忆、照片留存、同行的人、可选权限与安静的访客入口。",
    "Interaction metaphor: a meal, a relationship, a month of shared time.": "交互隐喻：一餐饭、一段关系、一个月的共处时光。",
    "Slow social signal: gentle summaries of people, time, and emotion.": "慢社交信号：关于人、时间与情绪的温和总结。",
    "interactive prototype": "可交互原型",
    "From table metaphor to tappable interface.": "从“餐桌”隐喻，到可点击的界面。",
    "The first prototype explores meal logging, participant memory, place tags, emotion labels, and monthly insights. The later direction keeps this warmth while becoming more focused, lighter, and more \"small but beautiful\" as a daily social object.": "第一版原型探索了用餐记录、同行者记忆、地点标签、情绪标注与月度洞察。后续方向保留这份温度，同时更聚焦、更轻量，让它成为一件“小而美”的日常社交小物。",
    "The first prototype explores meal logging, participant memory, place tags, emotion labels, and monthly insights. The later direction keeps this warmth while becoming more focused, lighter, and more human-scale as a daily social object.": "第一版原型探索了用餐记录、同行者记忆、地点标签、情绪标注与月度洞察。后续方向保留这份温度，同时更聚焦、更轻量，让它成为一件更有人情尺度的日常社交产品。",
    "download prototype deck": "下载原型 Deck",
    "Small": "小",
    "Human-scale": "有人的尺度",
    "It does not try to become another feed. The product centers on one everyday ritual: meals with people.": "它不想成为又一个信息流，而是只围绕一件日常小事：和人一起吃饭。",
    "It begins with one familiar table, keeping the product close to real meals, real people, places, and moods.": "它从一张熟悉的餐桌开始，让产品始终贴近真实的饭、真实的人、地点与情绪。",
    "Beautiful": "美",
    "Hand-drawn tables, plates, chairs, and warm calendar moments create a softer interface language.": "手绘的餐桌、餐盘、椅子与温暖的日历瞬间，构成更柔和的界面语言。",
    "Slow Social": "慢社交",
    "Instead of instant posting, it lets memories accumulate through monthly tables, emotional tags, and relationship traces.": "不做即时发布，而是让记忆通过每月一桌、情绪标签与关系痕迹慢慢沉淀。",
    "AIGC research": "AIGC 研究",
    "IP adaptation intelligence map": "IP 改编智能地图",
    "AIGC + predictive AI": "AIGC + 预测式 AI",
    "story adaptation studio": "故事改编工作室",
    "AIGC + human review": "AIGC + 人工判断",
    "Premise": "设定",
    "Characters": "人物",
    "Emotion hook": "情绪钩子",
    "scene test": "场景测试",
    "hook · conflict · cliffhanger": "钩子 · 冲突 · 悬念",
    "Extract": "提取",
    "story DNA": "故事 DNA",
    "Generate": "生成",
    "beats + scene options": "节拍 + 场景方案",
    "Evaluate": "评估",
    "quality + feasibility": "质量 + 可行性",
    "IP scorecard + AI use-case map + human-review checklist": "IP 评分卡 + AI 应用地图 + 人工审核清单",
    "Prompt tests": "Prompt 测试",
    "Predictive AI audit": "预测式 AI 审计",
    "IP signals": "IP 信号",
    "premise strength": "设定强度",
    "character arc": "人物弧光",
    "audience hook": "受众钩子",
    "AIGC testing": "AIGC 测试",
    "story summary": "故事梗概",
    "adaptation angle": "改编角度",
    "scene concept": "场景概念",
    "AI reality check": "AI 现实性校验",
    "data quality": "数据质量",
    "target clarity": "目标变量清晰度",
    "snake-oil risk": "伪科学风险",
    "deliverable": "交付物",
    "IP scorecard + AI use-case map + predictive AI red-flag checklist": "IP 评分卡 + AI 应用场景地图 + 预测式 AI 风险清单",
    "AIGC / novel IP adaptation / predictive AI validation": "AIGC / 小说 IP 改编 / 预测式 AI 校验",
    "I turn AI hype into testable content product decisions.": "我把 AI 概念，翻译成可验证的内容产品决策。",
    "I researched how generative AI can be used in real content production scenarios, especially how teams can evaluate whether a novel has the potential to become film, drama, audio, or short-form content. I also studied predictive AI critically, separating useful forecasting signals from \"AI snake oil\" claims that sound impressive but fail in product reality.": "我研究了生成式 AI 在真实内容生产场景中的落地方式，尤其是团队如何判断一部小说是否具备影视、剧集、有声或短剧化改编的潜力。同时我也以批判视角研究预测式 AI，把真正可用的预测信号，与那些“听起来厉害、落地就塌”的 AI 伪需求区分开。",
    "Situation": "背景",
    "IP adaptation decisions are high-cost, subjective, and full of noisy AI promises.": "IP 改编决策成本高、主观性强，且充斥大量嘈杂的 AI 承诺。",
    "Action": "行动",
    "Built an evaluation logic for story potential, audience fit, platform signal, and model credibility.": "围绕故事潜力、受众匹配、平台信号与模型可信度，搭建评估逻辑。",
    "Result": "结果",
    "Created reusable standards for AI-assisted IP screening, content planning, and product judgment.": "沉淀出可复用的标准，用于 AI 辅助 IP 筛选、内容规划与产品判断。",
    "Mapped where AIGC can enter the adaptation workflow: premise extraction, character analysis, genre positioning, audience hooks, and concept generation.": "梳理 AIGC 可介入改编流程的节点：设定提取、人物分析、题材定位、受众钩子与概念生成。",
    "Designed a rubric to judge novel IP across narrative strength, adaptation feasibility, target audience, platform fit, and commercial potential.": "设计小说 IP 评估量表，覆盖叙事强度、改编可行性、目标受众、平台匹配度与商业潜力。",
    "Audited predictive AI claims by checking data quality, target-variable clarity, feedback loops, explainability, and whether human review remained in the workflow.": "从数据质量、目标变量清晰度、反馈闭环、可解释性以及是否保留人工审核五个角度，审计预测式 AI 的说法。",
    "Translated the research into product-facing decision tools that help content and operations teams decide what to test, what to automate, and what to reject.": "把研究结论转化为面向产品的决策工具，帮助内容与运营团队判断：什么值得试、什么可以自动化、什么应该直接否定。",
    "micro-drama research": "短剧研究",
    "micro-drama product map": "短剧产品地图",
    "platform samples + growth loop": "平台样本 + 增长闭环",
    "discovery": "发现",
    "recommendation": "推荐",
    "retention": "留存",
    "monetization": "变现",
    "signals studied": "研究信号",
    "hook density / retention / paywall timing / localization": "钩子密度 / 留存 / 付费点时机 / 本地化",
    "content feature - user preference - consumption behavior": "内容特征 - 用户偏好 - 消费行为",
    "MICRO-DRAMA PRODUCT & CONTENT STRATEGY": "短剧产品与内容策略",
    "micro-drama product / content strategy / AI & localization": "短剧产品 / 内容策略 / AI 与本地化",
    "Mapping micro-drama growth from hook to paywall.": "拆解短剧从钩子到付费点的增长路径。",
    "A compact product study on how micro-drama platforms turn story signals into discovery, retention, monetization, and AI-assisted content decisions.": "一份紧凑的产品研究：短剧平台如何把内容信号转化为发现、留存、变现与 AI 辅助的内容决策。",
    "Platform logic": "平台逻辑",
    "Benchmarked Hongguo, ReelShort, DramaBox, and vertical-drama products across ranking, search, recommendation, IAP / IAA, and localization.": "对标红果、ReelShort、DramaBox 等竖屏短剧产品，覆盖榜单、搜索、推荐、IAP / IAA 与本地化。",
    "Viewer signals": "观众信号",
    "Tracked genre heat, episode hooks, cliffhanger rhythm, comments, completion signals, and paywall timing as product inputs.": "把题材热度、分集钩子、悬念节奏、评论、完播信号与付费点时机，作为产品输入持续追踪。",
    "AI content benchmark": "AI 内容对标",
    "Compared live-action and AI-generated stories to identify where AI could accelerate script development, content testing, and asset generation without compromising story quality.": "对比真人拍摄与 AI 生成内容，识别 AI 能在哪些环节加速剧本开发、内容测试与素材生成，同时不损伤故事质量。",
    "Product implications": "产品启示",
    "Translated observations into decisions for IP selection, story adaptation, distribution, recommendation, and retention experiments.": "把观察转译为 IP 选择、故事改编、分发、推荐与留存实验上的具体决策。",
    "Product & AI": "产品与 AI",
    "Product Strategy, Requirements Analysis, PRD Writing, Product Prototyping, Demo Development, AI Agent Design, Prompt Engineering, Vibe Coding.": "产品策略、需求分析、PRD 撰写、产品原型、Demo 开发、AI Agent 设计、Prompt Engineering、Vibe Coding",
    "User & Data": "用户与数据",
    "User Research, User Interviews, Behavior Analysis, Product Metrics Design, A/B Testing, Funnel Analysis, SQL, Python.": "用户研究、用户访谈、行为分析、产品指标设计、A/B 测试、漏斗分析、SQL、Python",
    "Growth & Operations": "增长与运营",
    "Growth Experiments, User Operations, Content Strategy, Campaign Operations, Creator & KOL Operations, Social Growth, Performance Optimization.": "增长实验、用户运营、内容策略、活动运营、创作者与 KOL 运营、社媒增长、效果优化",
    "Build & Analytics": "工具与分析",
    "Figma, Claude Code, OpenAI Codex, Tableau, Google Analytics, Excel, Photoshop, Premiere Pro.": "Figma、Claude Code、OpenAI Codex、Tableau、Google Analytics、Excel、Photoshop、Premiere Pro",
    "scale": "尺寸",
    "list": "列表",
    "grid": "网格",
    "type": "类型",
    "location": "地点",
    "all": "全部",
    "color": "彩色",
    "black & white": "黑白",
    "street": "街头",
    "portrait": "人像",
    "travel": "旅行",
    "museum": "美术馆",
    "all places": "全部地点",
    "new york": "纽约",
    "los angeles": "洛杉矶",
    "paris": "巴黎",
    "miami": "迈阿密",
    "mediterranean": "地中海",
    "museums": "美术馆",
    "SHOT ON FILM": "胶片影像",
    "color roll": "彩色卷",
    "black & white roll": "黑白卷",
    "VIEW": "查看",
    "Stay curious. Stay perceptive.": "保持好奇，也保持感知。",
    "Photography keeps me sensitive to people, emotion, and the small details of everyday life — and trains me to see the same thing from more than one angle. Curiosity, empathy, and taste are not just interests to me; they are how I understand users and build products.": "摄影让我保持对人、情绪与生活细节的敏感，也让我习惯从不同视角理解同一件事。对我来说，好奇、共情与审美并不只是兴趣，它们也是理解用户和创造产品的方式。",
    "I want to turn what I notice about life into products people actually need, and turn the ideas in my head into something thousands of people use every day.": "我希望把对生活的感知，变成真正被需要的产品；把脑海里的想法，落地成千千万万用户手中的日常。",
    "Thanks for visiting my page.": "感谢你看到这里。",
    "Contact": "联系方式",
    "Looking forward to working with you :)": "期待与您一起共事：）",
    "Email": "邮箱",
    "China phone": "中国电话",
    "U.S. phone": "美国电话",
    "WeChat": "微信",
    "LinkedIn": "LinkedIn",
    "copy email": "复制邮箱",
    "copy number": "复制号码",
    "copy wechat": "复制微信号",
    "copied": "已复制",
    "© 2026 Qi Shen": "© 2026 沈淇",
    "Song - Signal Field No. 1": "曲目 - Signal Field No. 1",
    "Toggle soundtrack": "切换背景音乐",
    "Main navigation": "主导航",
    "Qi Shen introduction": "沈淇个人介绍",
    "Qi Shen about me call": "沈淇的自我介绍",
    "Hide introduction": "收起介绍",
    "Show introduction": "展开介绍",
    "Core strengths": "核心能力",
    "Internship experience": "实习经历",
    "Favie restaurant AI agent web prototype preview": "Favie 餐饮 AI Agent 网页原型预览",
    "Favie restaurant AI agent web prototype": "Favie 餐饮 AI Agent 网页原型",
    "Yami campaign page preview": "Yami 活动页预览",
    "Campaign performance": "活动数据",
    "Yami social warm-up video preview": "Yami 社媒预热视频预览",
    "Burberry Shanghai pop-up visual field notes": "Burberry 上海快闪现场视觉记录",
    "Burberry Douyin account operations video preview": "Burberry 抖音账号运营视频预览",
    "iQIYI content product operations dashboard": "爱奇艺内容产品运营看板",
    "iQIYI IP adaptation visual board": "爱奇艺 IP 改编视觉板",
    "iQIYI poster wall": "爱奇艺海报墙",
    "Official iQIYI drama poster references": "爱奇艺官方剧集海报参考",
    "iQIYI poster for Sisterhood": "《南洋女儿情》爱奇艺海报",
    "iQIYI poster for Mysterious Lotus Casebook": "《莲花楼》爱奇艺海报",
    "iQIYI poster for Story of Kunning Palace": "《宁安如梦》爱奇艺海报",
    "Novel IP to drama adaptation examples": "小说 IP 到剧集改编案例",
    "Content evaluation criteria": "内容评估维度",
    "Content review cards": "内容审阅卡片",
    "iQIYI operating contribution numbers": "爱奇艺运营产出数据",
    "Project and activity experience": "项目与研究经历",
    "Mealog concept deck and prototype": "Mealog 概念 Deck 与原型",
    "AIGC and predictive AI research map for novel IP adaptation and content product decisions": "面向小说 IP 改编与内容产品决策的 AIGC 与预测式 AI 研究地图",
    "AIGC story adaptation studio for novel IP and content product decisions": "面向小说 IP 与内容产品决策的 AIGC 故事改编工作室",
    "AI tools studied": "研究涉及的 AI 工具",
    "STAR summary": "STAR 结构总结",
    "Micro-drama platform research board": "短剧平台研究看板",
    "Photography portfolio": "摄影作品集",
    "Photography archive controls": "摄影档案筛选",
    "Photo archive scale": "照片档案缩放",
    "Photo type filter": "照片类型筛选",
    "Photo location filter": "照片地点筛选",
    "Contact details": "联系方式详情",
    "Language": "语言切换"
  };

  var root = document.documentElement;
  var textMemo = new WeakMap();
  var attrMemo = new WeakMap();
  var current = "en";

  function normalize(value) {
    return String(value).replace(/\s+/g, " ").trim();
  }

  function t(text) {
    if (current !== "zh") return text;
    var hit = DICT[normalize(text)];
    return hit === undefined ? text : hit;
  }

  function readStored() {
    try {
      var value = window.localStorage.getItem(STORAGE_KEY);
      return value === "zh" || value === "en" ? value : "en";
    } catch (error) {
      return "en";
    }
  }

  function applyText(lang) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    var node = walker.nextNode();

    while (node) {
      nodes.push(node);
      node = walker.nextNode();
    }

    nodes.forEach(function (item) {
      if (!item.nodeValue || !item.nodeValue.trim()) return;
      if (item.parentElement && item.parentElement.closest("[data-i18n-skip]")) return;

      if (!textMemo.has(item)) textMemo.set(item, normalize(item.nodeValue));
      var base = textMemo.get(item);
      var next = lang === "zh" && DICT[base] !== undefined ? DICT[base] : base;
      if (item.nodeValue !== next) item.nodeValue = next;
    });
  }

  function applyAttributes(lang) {
    Array.prototype.forEach.call(
      document.querySelectorAll("[" + TEXT_PROPS.join("],[") + "]"),
      function (element) {
        var store = attrMemo.get(element);
        if (!store) {
          store = {};
          attrMemo.set(element, store);
        }

        TEXT_PROPS.forEach(function (prop) {
          if (!element.hasAttribute(prop)) return;
          if (!(prop in store)) store[prop] = element.getAttribute(prop);
          var base = store[prop];
          var next = lang === "zh" && DICT[base] !== undefined ? DICT[base] : base;
          if (element.getAttribute(prop) !== next) element.setAttribute(prop, next);
        });
      }
    );
  }

  function applyDocument(lang) {
    document.title = t("Qi Shen - Portfolio");
    var description = document.querySelector('meta[name="description"]');
    if (description) {
      var key = "Qi Shen's portfolio across user insight, content systems, AI workflows, growth experiments, and digital operations.";
      description.setAttribute("content", lang === "zh" && DICT[key] !== undefined ? DICT[key] : key);
    }
  }

  function syncSwitch(lang) {
    Array.prototype.forEach.call(document.querySelectorAll("[data-lang-option]"), function (button) {
      var isActive = button.dataset.langOption === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function apply(lang, persist) {
    current = lang === "zh" ? "zh" : "en";
    root.setAttribute("lang", current === "zh" ? "zh-CN" : "en");
    root.setAttribute("data-lang", current);

    applyText(current);
    applyAttributes(current);
    applyDocument(current);
    syncSwitch(current);

    if (persist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, current);
      } catch (error) {
        /* storage unavailable, keep session-only */
      }
    }

    root.removeAttribute("data-lang-pending");
    window.dispatchEvent(new CustomEvent("portfolio-languagechange", { detail: { lang: current } }));
  }

  function setupSwitch() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-lang-option]"), function (button) {
      button.addEventListener("click", function () {
        var next = button.dataset.langOption === "zh" ? "zh" : "en";
        if (next === current) return;
        apply(next, true);
      });
    });
  }

  window.I18N = {
    t: t,
    get lang() {
      return current;
    },
    set: function (lang) {
      apply(lang, true);
    }
  };

  apply(readStored(), false);
  setupSwitch();

  document.addEventListener("DOMContentLoaded", function () {
    apply(current, false);
  });

})();
