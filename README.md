# 灰白兔子 ｜ The Grey & White Bunny 🐰

記錄長達十年半的溫暖歲月、愛與永恆記憶。

> **"Small paws, endless love, forever home."**  
> *「小小的腳爪，無盡的愛，永恆的家。」*

---

## 🌟 網站特色

- **溫暖治癒風格**：採用燕麥米白、柔和大自然與大地色調，搭配沉靜優雅的版面設計。
- **資料驅動架構**：所有照片、時光大事記、基本資料均以 `data/*.json` 集中管理，不需修改複雜程式碼即可隨時擴充回憶。
- **豐富互動體驗**：
  - ⭐️ **點亮星光 / 送上甜櫻桃**：即時飄升粒子動畫與累積計數器（自動儲存於瀏覽器）。
  - 🖼️ **寫真館分類篩選與燈箱 (Lightbox)**：支援類別標籤（日常寫真、放鬆萌態、撒嬌搞笑、生活點滴），點擊可查看全螢幕大圖與故事背後的心情說明。
  - ⏳ **時光軌跡時間軸**：記錄從初夏相遇到相伴十載的重要足跡。
- **純靜態架構**：100% 相容 GitHub Pages，零主機伺服器費用、永久免費託管。

---

## 📂 目錄結構

```text
寵物回憶網站/
├── index.html                 # 網站首頁（開場 + 小比檔案室）
├── timeline.html              # 時光軌跡獨立分頁
├── gallery.html               # 回憶寫真館獨立分頁
├── AGENT.md                   # AI 代理開發規範手冊
├── README.md                  # 專案操作說明（本文件）
├── .gitignore                 # Git 忽略檔案清單
├── data/                      # 內容資料庫
│   ├── profile.json           # 小比基本資料與封面標語
│   ├── timeline.json          # 時間軸重要里程碑
│   └── gallery.json           # 相簿照片、標籤與故事
├── assets/                    # 靜態資源
│   ├── css/style.css          # 全域樣式表
│   ├── js/main.js             # 動態渲染與互動邏輯
│   └── images/                # 優化後的網站圖片
│       ├── profile/           # 頭像與橫幅照片
│       ├── gallery/           # 寫真館相片
│       └── timeline/          # 時間軸相片
└── 小比貼圖素材/               # 原始相片備份庫
```

---

## 🚀 如何在電腦上預覽

本專案支援**開箱即用**：
- **方式一（最簡單）**：直接在檔案總管中雙擊 `index.html`，即可在任何瀏覽器中預覽。
- **方式二（靜態伺服器，可獲取最佳動態載入效果）**：
  如果你電腦有安裝 Python 或 Node.js，可以在本資料夾開啟終端機執行：
  ```bash
  # 使用 Python
  python -m http.server 8000
  # 或使用 npx
  npx serve .
  ```
  接著在瀏覽器打開 `http://localhost:8000` 即可。

---

## 🌐 如何發布至 GitHub Pages 供所有人線上瀏覽

### 第一步：初始化並提交 Git
在專案根目錄開啟 PowerShell 或終端機，執行：
```bash
git init
git add .
git commit -m "feat: initial release of grey and white bunny memorial website"
```

### 第二步：建立 GitHub 儲存庫並推播
1. 前往 [GitHub.com](https://github.com) 登入您的帳號，點選右上角 **New repository**。
2. Repository name 可以填寫 `grey-white-bunny` 或 `pet-memorial`，建議設定為 **Public（公開）**。
3. 建立後，在終端機中執行 GitHub 提示的推播指令（將 `<your-username>` 替換為您的 GitHub 帳號）：
   ```bash
   git remote add origin https://github.com/<your-username>/grey-white-bunny.git
   git branch -M main
   git push -u origin main
   ```

### 第三步：啟用 GitHub Pages（免費上線）
1. 進入您剛建立的 GitHub 倉庫頁面，點選上方的 **Settings**（設定）。
2. 在左側側邊欄點選 **Pages**。
3. 在 **Build and deployment** > **Branch** 下拉選單中：
   - 分支選擇 `main`
   - 資料夾選擇 `/(root)`
   - 點選 **Save** 儲存。
4. 稍等約 1～2 分鐘重新整理頁面，頂部就會出現綠色標籤與您專屬的公開網址：
   `https://<your-username>.github.io/grey-white-bunny/`
5. 現在您可以將這個網址分享給任何家人朋友，隨時隨地開啟回顧小比的美好時光！

---

## ✍️ 日後如何新增更多照片與回憶

1. **新增照片**：將新照片轉換為英文命名（例如 `gallery-12.jpg`），放進 `assets/images/gallery/`。
2. **登錄相簿**：打開 `data/gallery.json`，在陣列中加入一筆新資料，儲存後重新推播至 GitHub 即可：
   ```json
   {
     "id": "gal-12",
     "title": "新相片標題",
     "date": "2023-05-20",
     "category": "日常寫真",
     "image": "assets/images/gallery/gallery-12.jpg",
     "caption": "記錄當時的心情與小比的可愛模樣。"
   }
   ```
