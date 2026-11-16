/**
 * 灰白兔子 ｜ The Grey & White Bunny - Main JavaScript
 * Handles dynamic content rendering, gallery filtering, lightbox modal, and tribute interactions.
 */

// Default data fallback in case fetch is blocked by local file:// CORS
const FALLBACK_PROFILE = {
  name: "小比",
  gender: "女生 ♀",
  breed: "萌兔寶貝 (灰白色 / 蓬鬆白圍巾)",
  color: "溫暖灰白相間",
  dates: {
    birthday: "2015-06-08",
    homeArrival: "2015-06-24",
    rainbowBridge: "2025-12-27",
    yearsOfLove: "10 年又 6 個月 (2015.06 - 2025.12)"
  },
  favorites: {
    food: "最愛大口啃櫻桃 🍒",
    activities: "最喜歡被溫柔地摸摸頭、在地板上融化成一灘小麻糬",
    personality: "優雅獨立、懂事療癒、有自己專屬堅持的小天使"
  },
  dislikes: "討厭布製品（超有原則的個性小妞！）",
  selectedSlogan: {
    en: "Small paws, endless love, forever home.",
    zh: "小小的腳爪，無盡的愛，永恆的家。"
  },
  avatar: "assets/images/profile/avatar.jpg",
  heroImage: "assets/images/profile/hero.jpg"
};

const FALLBACK_TIMELINE = [
  {
    id: "tl-01",
    year: "2015",
    date: "2015-06-08 / 2015-06-24",
    title: "初夏的相遇：小比來到我們的生命中",
    description: "2015年6月8日妳悄悄來到這個世界，6月24日妳正式成為我們家中最疼愛的成員。小小的身軀、輕巧的腳步，開啟了長達十載的美好緣分。",
    image: "assets/images/timeline/2015-arrival.jpg",
    tag: "相遇時刻"
  },
  {
    id: "tl-02",
    year: "2015 - 2024",
    date: "十年朝夕相伴",
    title: "櫻桃的甜香與無數個被摸摸頭的午後",
    description: "妳最愛大口啃櫻桃，最喜歡把小腦袋貼在手心討摸摸。妳有自己的小脾氣（特別討厭布製品！），但只要一舒服起來，就會整隻融化在地板上，成為家中最溫柔的風景。",
    image: "assets/images/timeline/2022-daily.jpg",
    tag: "溫暖歲月"
  },
  {
    id: "tl-03",
    year: "2025",
    date: "2025-12-27",
    title: "彩虹橋的約定：化作夜空裡最明亮的星",
    description: "十載春秋，十載摯愛。2025年冬天，妳輕輕收起小腳爪，前往無病無痛、草地無垠的彩虹橋。謝謝妳給予的整整十年陪伴，妳留下的愛與溫暖，永遠定格在我們心中。",
    image: "assets/images/timeline/2025-rainbow.jpg",
    tag: "永恆紀念"
  }
];

const FALLBACK_GALLERY = [
  {
    id: "gal-01",
    title: "優雅的小公主",
    date: "2022-07-24",
    category: "日常寫真",
    image: "assets/images/gallery/01-poised-beauty.jpg",
    caption: "端正又優雅的站姿，自帶仙女氣質的小比。"
  },
  {
    id: "gal-02",
    title: "融化在木地板的貴妃躺",
    date: "2022-07-24",
    category: "放鬆萌態",
    image: "assets/images/gallery/02-melting-loaf.jpg",
    caption: "毫無防備地側躺融化，整隻拉得好長好長，是最安心放鬆的模樣。"
  },
  {
    id: "gal-03",
    title: "開懷大笑（還是大呵欠？）",
    date: "2022-07-24",
    category: "撒嬌搞笑",
    image: "assets/images/gallery/03-yawn-smile.jpg",
    caption: "張開粉紅小嘴，不管是打呵欠還是開心笑，都可愛到讓人融化！"
  },
  {
    id: "gal-04",
    title: "極品圓滾滾毛茸茸兔屁屁",
    date: "2022-08-06",
    category: "放鬆萌態",
    image: "assets/images/gallery/04-fluffy-bunny-butt.jpg",
    caption: "白白胖胖的短圓尾巴，配上紮實的毛絨絨背影，看著窗外好專注。"
  },
  {
    id: "gal-05",
    title: "吃草草就像吸麵條",
    date: "2022-07-24",
    category: "生活點滴",
    image: "assets/images/gallery/05-eating-hay-noodle.jpg",
    caption: "嘴角叼著長長的草，小嘴快速咀嚼，吃貨小比認真幹飯的日常。"
  },
  {
    id: "gal-06",
    title: "放風時間！全速衝刺",
    date: "2022-08-06",
    category: "生活點滴",
    image: "assets/images/gallery/06-bunny-sprint.jpg",
    caption: "一到放風時間就開心得像小火箭，四腳騰空在客廳歡快飛奔。"
  },
  {
    id: "gal-07",
    title: "深邃大眼與靈動小鬍鬚",
    date: "2022-07-24",
    category: "日常寫真",
    image: "assets/images/gallery/07-curious-whiskers.jpg",
    caption: "湊到鏡頭前的極致特寫，那雙如黑珍珠般清澈的大眼睛充滿好奇。"
  },
  {
    id: "gal-08",
    title: "嘴邊肉都擠出來的討摸摸",
    date: "2019-09-26",
    category: "撒嬌搞笑",
    image: "assets/images/gallery/08-cheek-squish.jpg",
    caption: "臉貼著欄杆想要被摸摸頭，把軟綿綿的腮幫子肉擠得圓嘟嘟的。"
  },
  {
    id: "gal-09",
    title: "挺拔俊俏的貴氣姿態",
    date: "2022-08-06",
    category: "日常寫真",
    image: "assets/images/gallery/09-standing-proud.jpg",
    caption: "小手手端正放著，招牌小圍兜襯托出無與倫比的高貴氣息。"
  },
  {
    id: "gal-10",
    title: "圍巾小公主的自信神采",
    date: "2022-07-24",
    category: "日常寫真",
    image: "assets/images/gallery/10-dewlap-queen.jpg",
    caption: "蓬鬆軟柔的大圍巾，彷彿戴著最暖和的白絨披肩。"
  },
  {
    id: "gal-11",
    title: "專注回眸的小精靈",
    date: "2019-09-26",
    category: "生活點滴",
    image: "assets/images/gallery/11-looking-back.jpg",
    caption: "在專屬小天地裡敏銳張望，守護著這個溫暖幸福的家。"
  },
  {
    id: "gal-12",
    title: "幼崽時期的桌上大劈腿",
    date: "2015-初夏",
    category: "放鬆萌態",
    image: "assets/images/gallery/12-baby-sploot.jpg",
    caption: "從小就展現無人能敵的放鬆神功！趴在桌上雙手大開劈腿，模樣可愛到讓人融化。"
  },
  {
    id: "gal-13",
    title: "磁磚上的清涼趴趴兔",
    date: "悠閒日常",
    category: "放鬆萌態",
    image: "assets/images/gallery/13-cool-tiles-loaf.jpg",
    caption: "貼著涼涼的磁磚地板，整隻趴得平平的享受夏日午後。"
  },
  {
    id: "gal-14",
    title: "凝望遠方的側顏小仙女",
    date: "悠閒日常",
    category: "日常寫真",
    image: "assets/images/gallery/14-fairy-side-profile.jpg",
    caption: "認真放空的側影，白圍兜與臉部線條優雅滿分。"
  },
  {
    id: "gal-15",
    title: "鏡頭前的無辜黑珍珠大眼",
    date: "悠閒日常",
    category: "日常寫真",
    image: "assets/images/gallery/15-curious-black-eyes.jpg",
    caption: "好奇湊上前的小臉龐，清澈的大眼睛裡全是對世界的探索。"
  },
  {
    id: "gal-16",
    title: "縮成一顆芝麻小麻糬",
    date: "悠閒日常",
    category: "放鬆萌態",
    image: "assets/images/gallery/16-grooming-ball.jpg",
    caption: "把後腳腳收進懷裡專心清理，圓滾滾得像顆剛出爐的芝麻麻糬。"
  },
  {
    id: "gal-17",
    title: "招牌單腳飛踢（兔兔瑜伽）",
    date: "悠閒日常",
    category: "撒嬌搞笑",
    image: "assets/images/gallery/17-bunny-yoga-leg.jpg",
    caption: "端正坐著卻把毛茸茸的大後腳伸在前面，搞笑霸氣又療癒。"
  },
  {
    id: "gal-18",
    title: "紗門後的探險小特務",
    date: "悠閒日常",
    category: "生活點滴",
    image: "assets/images/gallery/18-screen-door-spy.jpg",
    caption: "隔著紗門偷看客廳動靜，小鼻子一動一動隨時準備出發大探險。"
  }
];

let appState = {
  profile: FALLBACK_PROFILE,
  timeline: FALLBACK_TIMELINE,
  gallery: FALLBACK_GALLERY,
  currentFilter: 'all',
  starCount: parseInt(localStorage.getItem('bunny_stars') || '88', 10),
  cherryCount: parseInt(localStorage.getItem('bunny_cherries') || '102', 10)
};

// Safe JSON loader with fallback
async function loadData() {
  try {
    const [pRes, tRes, gRes] = await Promise.all([
      fetch('data/profile.json'),
      fetch('data/timeline.json'),
      fetch('data/gallery.json')
    ]);
    if (pRes.ok) appState.profile = await pRes.json();
    if (tRes.ok) appState.timeline = await tRes.json();
    if (gRes.ok) appState.gallery = await gRes.json();
  } catch (err) {
    console.info('Loaded data via embedded cache (smooth offline / local preview).');
  }
}

// Render Hero & Profile
function renderProfile() {
  const p = appState.profile;
  // Hero Slogan
  const sloganEn = document.getElementById('hero-slogan-en');
  const sloganZh = document.getElementById('hero-slogan-zh');
  if (sloganEn) sloganEn.textContent = p.selectedSlogan.en;
  if (sloganZh) sloganZh.textContent = p.selectedSlogan.zh;

  // Profile Fields
  const gridContainer = document.getElementById('profile-fields-container');
  if (gridContainer) {
    gridContainer.innerHTML = `
      <div class="profile-field-item">
        <span class="field-label">本名 / 稱謂</span>
        <span class="field-value">${p.name}</span>
      </div>
      <div class="profile-field-item">
        <span class="field-label">性別</span>
        <span class="field-value">${p.gender}</span>
      </div>
      <div class="profile-field-item">
        <span class="field-label">誕生之日</span>
        <span class="field-value">${p.dates.birthday}</span>
      </div>
      <div class="profile-field-item">
        <span class="field-label">到家紀念</span>
        <span class="field-value">${p.dates.homeArrival}</span>
      </div>
      <div class="profile-field-item">
        <span class="field-label">天使紀念日</span>
        <span class="field-value">${p.dates.rainbowBridge}</span>
      </div>
      <div class="profile-field-item">
        <span class="field-label">愛的守護</span>
        <span class="field-value">${p.dates.yearsOfLove}</span>
      </div>
    `;
  }

  // Trait Badges
  const traitsContainer = document.getElementById('traits-container');
  if (traitsContainer) {
    traitsContainer.innerHTML = `
      <span class="trait-badge cherry">🍒 最愛大口啃櫻桃</span>
      <span class="trait-badge">🥰 摸摸頭狂熱者</span>
      <span class="trait-badge">🚫 討厭布製品 (超有個性)</span>
      <span class="trait-badge">🛋️ 融化式貴妃躺專家</span>
      <span class="trait-badge">🧣 自備天然白毛絨圍兜</span>
    `;
  }

  // Counts update
  updateTributeCounts();
}

// Render Timeline
function renderTimeline() {
  const container = document.getElementById('timeline-list');
  if (!container) return;

  container.innerHTML = appState.timeline.map((item, idx) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="timeline-date">${item.date}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-text">${item.description}</p>
        ${item.image ? `
          <div class="timeline-img-wrap" onclick="openCustomLightbox('${item.image}', '${item.title}', '${item.description.replace(/'/g, "\\'")}')" style="cursor: pointer;" title="點擊放大查看照片">
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}

// Render Gallery
function renderGallery(filter = 'all') {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  const items = filter === 'all' 
    ? appState.gallery 
    : appState.gallery.filter(i => i.category === filter);

  const cardsHtml = items.map(item => `
    <div class="gallery-card" data-id="${item.id}" onclick="openLightbox('${item.id}')">
      <div class="gallery-card-img-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <span class="gallery-card-overlay"># ${item.category}</span>
      </div>
      <div class="gallery-card-body">
        <h4 class="gallery-card-title">${item.title}</h4>
        <p class="gallery-card-caption">${item.caption}</p>
      </div>
    </div>
  `).join('');

  const placeholderHtml = `
    <div class="gallery-card gallery-card-placeholder">
      <div class="placeholder-inner">
        <div class="placeholder-icon-wrap">
          <span class="placeholder-icon">🐇</span>
          <span class="placeholder-sparkle">✨</span>
        </div>
        <h4 class="placeholder-title">更多回憶・整理中</h4>
        <p class="placeholder-en">More Photos Updating...</p>
        <p class="placeholder-desc">十載春秋的點滴還有好多好多<br>陸續翻拍與上傳中，敬請期待 🌸</p>
        <div class="placeholder-pill">Coming Soon</div>
      </div>
    </div>
  `;

  container.innerHTML = cardsHtml + placeholderHtml;
}

// Gallery Filter Buttons Setup
function setupGalleryFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      appState.currentFilter = cat;
      renderGallery(cat);
    });
  });
}

// Lightbox Logic
function openLightbox(id) {
  const item = appState.gallery.find(i => i.id === id);
  if (!item) return;

  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const caption = document.getElementById('lightbox-caption');

  img.src = item.image;
  img.alt = item.title;
  title.textContent = item.title;
  caption.textContent = item.caption;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openCustomLightbox(src, title, caption) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const captionEl = document.getElementById('lightbox-caption');
  if (!modal || !img) return;

  img.src = src;
  img.alt = title;
  if (titleEl) titleEl.textContent = title;
  if (captionEl) captionEl.textContent = caption;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Tribute Counter & Particle Animation
function updateTributeCounts() {
  const starEl = document.getElementById('star-count');
  const cherryEl = document.getElementById('cherry-count');
  if (starEl) starEl.textContent = appState.starCount;
  if (cherryEl) cherryEl.textContent = appState.cherryCount;
}

function spawnFloatingIcon(symbol, originX) {
  const container = document.getElementById('floating-fx');
  if (!container) return;

  const icon = document.createElement('div');
  icon.className = 'floating-icon';
  icon.textContent = symbol;
  icon.style.left = `${originX || (Math.random() * 80 + 10)}%`;
  icon.style.fontSize = `${Math.random() * 16 + 24}px`;

  container.appendChild(icon);
  setTimeout(() => {
    icon.remove();
  }, 2800);
}

function giveStar(event) {
  appState.starCount += 1;
  localStorage.setItem('bunny_stars', appState.starCount);
  updateTributeCounts();

  const xPercent = event ? (event.clientX / window.innerWidth) * 100 : 50;
  spawnFloatingIcon('⭐️', xPercent);
  spawnFloatingIcon('✨', xPercent + (Math.random() * 6 - 3));
}

function giveCherry(event) {
  appState.cherryCount += 1;
  localStorage.setItem('bunny_cherries', appState.cherryCount);
  updateTributeCounts();

  const xPercent = event ? (event.clientX / window.innerWidth) * 100 : 50;
  spawnFloatingIcon('🍒', xPercent);
  spawnFloatingIcon('🌸', xPercent + (Math.random() * 6 - 3));
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  renderProfile();
  renderTimeline();
  renderGallery();
  setupGalleryFilters();

  // Tribute buttons event
  const btnStar = document.getElementById('btn-give-star');
  const btnCherry = document.getElementById('btn-give-cherry');
  if (btnStar) btnStar.addEventListener('click', giveStar);
  if (btnCherry) btnCherry.addEventListener('click', giveCherry);

  // Lightbox close events
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // Back to top
  const btnTop = document.getElementById('back-to-top-btn');
  if (btnTop) {
    btnTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
