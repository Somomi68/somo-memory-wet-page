# AGENT.md - 灰白兔子 ｜ The Grey & White Bunny 開發與維護手冊

本文件是此專案的核心協同指南。無論是人類開發者或 AI 代理程式（AI Agent），在閱讀、修改、擴充或維護本專案時，**必須嚴格遵守以下準則與規範**。

---

## 1. 專案願景與核心目的

- **專案名稱**：灰白兔子 ｜ The Grey & White Bunny
- **核心目標**：
  1. 永久保存、展示與毛孩「小比」共度珍貴時光的所有回憶、照片、影片與故事。
  2. 打造一個氛圍溫柔、療癒、永恆且尊重的線上紀念空間，供主人、家人與親友隨時追憶。
  3. 採用純靜態網站（Static Website）架構，可永久免費託管於 **GitHub Pages**，無需維護後端伺服器，輕巧快速且能長期留存。

---

## 2. 視覺風格與美學定義 (Design & Aesthetic Guidelines)

- **色調風格 (Color Palette)**：
  - **溫暖治癒、柔和大地與晨光色系**。
  - 主背景色：溫暖米白 / 奶油柔光 (`#FAF7F2`、`#F5EFEB`)
  - 卡片與容器：純白半透明或毛玻璃效果 (`rgba(255, 255, 255, 0.85)`)
  - 文字主色：深暖灰 / 炭木色 (`#2C2A29`，非刺眼純黑)
  - 次要輔助色：焦糖大地色 (`#8D775F`)、淺溫陽暖黃 (`#F8E7C9`)、櫻花粉潤色 (`#F5E1DA`)
- **字型與排版 (Typography)**：
  - 中文：Noto Sans TC（思源黑體）或圓體風格（Zen Maru Gothic），給人親切溫潤的感受。
  - 閱讀舒適度：行高保持 `1.7 ~ 1.8`，避免過密文字排版。
- **動畫與動態感受 (Motion & Mood)**：
  - 柔和的微淡入（Fade In）、照片平滑縮放與圓角陰影。
  - 不使用刺眼、突兀或過快閃爍的動畫。
  - 營造出彷彿「微風輕拂草地、暖陽灑在沙發上、星空微光閃爍」的平靜感。

---

## 3. 頁面結構與分頁架構 (Site Architecture & Pages)

網站採用多頁式靜態頁面（Multi-page Static Architecture），頁面權責明確、清爽好讀，點擊右上角導覽選單可自由切換：

1. **首頁 (`index.html`)**
   - **開場橫幅 (Hero Banner)**：灰白兔頭像照片、陪伴年份 (2015.06.08 — 2025.12.27)、英文座右銘、點星星與獻櫻桃互動。
   - **小比檔案室 (Profile)**：代表照片、基本檔案、個性標籤與生活習慣小秘密。
   - **進入分頁傳送門**：提供直覺按鈕直接前往「時光軌跡」與「回憶寫真館」。
2. **時光軌跡分頁 (`timeline.html`)**
   - 記錄從 2015 到家、十年相伴到 2025 的里程碑時間軸卡片與歷史照片。
3. **回憶寫真館分頁 (`gallery.html`)**
   - 照片分類過濾標籤（日常寫真、放鬆萌態、撒嬌搞笑、生活點滴）。
   - 瀑布流網格相簿，點擊支援大圖全螢幕燈箱 (Lightbox) 閱讀照片細節。
4. **頁尾 (Footer - 全站統一)**
   - 溫暖感言、紀念年份標註與回到頂部按鈕。

---

## 4. 目錄架構與檔案放置規範 (Folder Structure & File Naming)

```text
/
├── index.html                 # 網站首頁（開場 + 小比檔案室）
├── timeline.html              # 時光軌跡獨立分頁
├── gallery.html               # 回憶寫真館獨立分頁
├── AGENT.md                   # AI 代理規範與專案手冊（本文件）
├── README.md                  # 專案介紹、本機啟動與 GitHub Pages 發布指南
├── assets/                    # 前端靜態資源
│   ├── css/
│   │   └── style.css          # 全域樣式與色系定義
│   ├── js/
│   │   ├── main.js            # 核心互動邏輯（Lightbox, 滾動動畫, 點星互動）
│   │   └── data-loader.js     # 動態載入 data/ 下的 JSON 檔案
│   ├── images/                # 網站所使用的優化圖片
│   │   ├── profile/           # 頭像、Banner 與代表圖
│   │   ├── timeline/          # 時間軸專用圖
│   │   └── gallery/           # 相簿照片
│   └── audio/                 # 輕柔背景音樂 (mp3，選用)
├── data/                      # 內容資料庫 (以 JSON 集中維護，方便抽換與擴充)
│   ├── profile.json           # 小比基本資料、喜好、金句
│   ├── timeline.json          # 時間軸事件清單
│   └── gallery.json           # 相簿清單（標題、標籤、圖片路徑、描述）
└── 小比貼圖素材/               # 原始相片素材存放區（未壓縮原始檔，避免直接載入生產環境）
```

### 檔案命名規範
1. **程式碼與樣式**：全小寫、英文字母、短橫線（kebab-case），如 `data-loader.js`、`style.css`。
2. **圖片檔案**：
   - 放入 `assets/images/` 之前，請轉換為英文/數字命名，格式如 `YYYYMMDD-event-name.jpg` 或 `gallery-01.jpg`。
   - 嚴禁中文檔名（在 GitHub Pages 與各瀏覽器編碼中易出錯）。
   - 檔案格式建議優先使用 `.webp` 或經壓縮的 `.jpg`，單張圖大小控制在 500KB 以下。

---

## 5. 新增內容格式標準 (Content Schema)

所有內容以 `data/*.json` 統一管理，方便日後擴充。

### 5.1 時間軸格式 (`data/timeline.json`)
```json
[
  {
    "id": "event-20220724",
    "date": "2022-07-24",
    "title": "陽光燦爛的出遊日",
    "description": "小比在草地上奔跑得像一陣風，笑臉甜得像蜜糖。",
    "image": "assets/images/timeline/2022-daily.jpg",
    "tag": "戶外出遊"
  }
]
```

### 5.2 相簿格式 (`data/gallery.json`)
```json
[
  {
    "id": "gal-001",
    "title": "最喜歡的睡姿",
    "date": "2022-08-06",
    "category": "睡覺萌態",
    "thumbnail": "assets/images/gallery/392653.jpg",
    "full": "assets/images/gallery/392653.jpg",
    "caption": "無論在哪裡都能睡得四腳朝天，是最安心的模樣。"
  }
]
```

---

## 6. AI 代理行為準則與協同規則 (Rules for AI)

當 AI 協助開發、擴充或修復本專案時，必須遵守以下鐵律：

1. **同理心與尊重（Empathy & Respect）**：
   - 任何由 AI 產生的範例文字、註解、說明，必須體現對寵物生命與主人情感的敬意與溫暖，絕不使用輕浮或冷漠的語調。
2. **資料與視圖分離原則（Separation of Concerns）**：
   - 嚴禁直接在 `index.html` 硬編碼（hardcode）大量重複的照片或文章節點。
   - 內容一律透過 `data/*.json` 或 Markdown 載入渲染，保證使用者可以不碰程式碼就輕易增減內容。
3. **無損與安全原則（Non-destructive Changes）**：
   - 絕不隨意刪除原始素材庫（如 `小比貼圖素材/`）內的任何原檔。
   - 編輯現有檔案時保持向後相容。
4. **純靜態相容性（Zero-Backend Requirement）**：
   - 程式碼必須能直接在瀏覽器端本機直接開啟（或透過輕量靜態 server）測試，且 100% 能在 GitHub Pages 上直接運行。
   - 不得引進需要 Node.js 後端伺服器運行時（SSR）的架構，確保維護成本為零。
5. **行動端優先響應式（Mobile-first Responsive Design）**：
   - 主人與親友通常會在手機上點開緬懷小比，所有卡片、字體大小、圖片 Lightbox 必須保證在 iPhone / Android 上有完美流暢的體驗。

---

## 7. 新增照片互動 SOP (Photo Ingestion & Placement Protocol)

當使用者上傳新照片或提供新素材時，AI 代理必須嚴格遵守以下互動 SOP，絕不可擅自跳步或猜測位置：

### 步驟 1：提出選擇題詢問歸屬
- **單張照片時**：AI 以選擇題主動詢問：
  - **問題**：「請問這張照片是否要加入【時光軌跡】？」
  - **選項**：
    1. `加入【時光軌跡】`
    2. `不加入，直接加入【回憶寫真館】`

- **多張照片批次上傳時（採方式 A：總表快速確認模式）**：
  1. AI 將照片按順序編號（照片 1、照片 2、照片 3...）。
  2. AI 整理為【批次推薦總表】：
     - 表格列出：照片編號、畫面簡述、AI 推薦歸屬（時光軌跡 / 寫真館）、推薦分類或年份建議。
  3. 使用者可一次性快速確認（如：「全數照推薦安排」或「照片 2 改放時光軌跡 2019 年」），AI 即可一次完成批次登錄。

---

### 步驟 2-A：若選擇【加入時光軌跡】
1. **請使用者提供年份**：AI 必須請使用者輸入該照片所屬的「年份」（或確切日期，如 `2018` 或 `2018.05`）。
2. **人機共同創作標題與故事**：
   - AI 先行觀察照片內容與氛圍，貼心擬定 **2～3 個溫暖的標題與故事短文初稿**。
   - 與使用者共同討論、修改後定稿。
3. **自動排版與資料庫寫入**：
   - 將照片儲存至 `assets/images/timeline/`。
   - 依照年份順序自動插入 `data/timeline.json` 的正確時間節點。
   - 確保照片框比例舒適（280px 4:3 構圖），主體置中不被壓扁裁切。

---

### 步驟 2-B：若選擇【直接加入回憶寫真館】
1. **AI 自動判斷分類**：
   - AI 依據畫面內容自動歸類至最合適的標籤（`日常寫真`、`放鬆萌態`、`撒嬌搞笑`、`生活點滴`，亦可自訂合適標籤）。
2. **AI 自動擬定標題與一句話萌態短評**：
   - 由 AI 提出標題與短文，供使用者確認或微調。
3. **儲存與登錄**：
   - 照片存入 `assets/images/gallery/`（編號遞增）。
   - 寫入 `data/gallery.json`，並同步更新 `assets/js/main.js` 備援快照。

---

### 步驟 3：驗收與提示
完成寫入後，AI 須明確告知使用者放置位置與成果，並提示至瀏覽器按下 **F5 重新整理** 預覽。

---

## 8. 發布與 GitHub Pages 部署流程 (Deployment Guide)

1. **建立 Git 本地儲存庫**：
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for pet memorial website"
   ```
2. **推送至 GitHub**：
   - 在 GitHub 上建立全新的公開（Public）或私有（Private）Repository。
   - 連接遠端分支並推播：
     ```bash
     git remote add origin https://github.com/<your-username>/<repo-name>.git
     git branch -M main
     git push -u origin main
     ```
3. **啟用 GitHub Pages**：
   - 前往 GitHub 倉庫頁面 -> **Settings** -> **Pages**。
   - 在 **Build and deployment** > **Source** 選擇 `Deploy from a branch`。
   - Branch 選擇 `main` 分支與 `/ (root)` 資料夾，點選 **Save**。
   - 靜待 1~2 分鐘，即可獲得正式上線網址（例如：`https://<your-username>.github.io/<repo-name>/`）。

---
*本文件由 AI 代理與使用者共同制訂，可隨著小比紀念網站的需求演進持續修訂。*
