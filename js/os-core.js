/**
 * ============================================================================
 * NOVAOS 16 — FULL-SCREEN MOBILE OPERATING SYSTEM ENGINE
 * Real SVG Squircle Icons | Real Android PackageManager Icons | Touch Gestures
 * ============================================================================
 */

const SVG_ICONS = {
  phone: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>`,
  messages: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10H6v-2h12v2zm0-3H6V7h12v2z"/></svg>`,
  browser: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 014 9 15 15 0 01-4 9 15 15 0 01-4-9 15 15 0 014-9z"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  gallery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`,
  files: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>`,
  music: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3" stroke-linecap="round"/></svg>`,
  calc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="3"/><path d="M8 6h8M8 11h2m4 0h2M8 15h2m4 0h2M8 19h2m4 0h2" stroke-linecap="round"/></svg>`,
  notes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>`,
  terminal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 17l6-6-6-6M12 19h8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  themes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>`,
  security: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  drawer: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="6" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>`
};

const SYSTEM_APPS = [
  { id: 'settings', name: 'Cài đặt', cls: 'ico-settings', svg: SVG_ICONS.settings },
  { id: 'gallery', name: 'Thư viện', cls: 'ico-gallery', svg: SVG_ICONS.gallery, nativeKey: 'gallery' },
  { id: 'files', name: 'Quản lý Tệp', cls: 'ico-files', svg: SVG_ICONS.files },
  { id: 'themes', name: 'Chủ đề & Nền', cls: 'ico-themes', svg: SVG_ICONS.themes },
  { id: 'security', name: 'Bảo mật & Tối ưu', cls: 'ico-security', svg: SVG_ICONS.security },
  { id: 'music', name: 'Âm nhạc', cls: 'ico-music', svg: SVG_ICONS.music },
  { id: 'clock', name: 'Đồng hồ', cls: 'ico-clock', svg: SVG_ICONS.clock },
  { id: 'calc', name: 'Máy tính', cls: 'ico-calc', svg: SVG_ICONS.calc },
  { id: 'notes', name: 'Ghi chú', cls: 'ico-notes', svg: SVG_ICONS.notes },
  { id: 'terminal', name: 'Terminal', cls: 'ico-term', svg: SVG_ICONS.terminal },
  { id: 'camera', name: 'Máy ảnh', cls: 'ico-camera', svg: SVG_ICONS.camera, nativeKey: 'camera' },
  { id: 'drawer_btn', name: 'Tất cả ứng dụng', cls: 'ico-drawer', svg: SVG_ICONS.drawer, isDrawerTrigger: true }
];

const DOCK_APPS = [
  { id: 'phone', name: 'Điện thoại', cls: 'ico-phone', svg: SVG_ICONS.phone },
  { id: 'messages', name: 'Tin nhắn', cls: 'ico-msg', svg: SVG_ICONS.messages },
  { id: 'browser', name: 'Trình duyệt', cls: 'ico-browser', svg: SVG_ICONS.browser },
  { id: 'camera', name: 'Máy ảnh', cls: 'ico-camera', svg: SVG_ICONS.camera, nativeKey: 'camera' }
];

const OS = {
  state: {
    page: 0,
    wallpaper: localStorage.getItem('novaos_wp') || 'wp-aurora',
    themeStyle: localStorage.getItem('novaos_style') || 'theme-hyper',
    wifi: true,
    data: true,
    bt: true,
    torch: false,
    dnd: false,
    musicPlaying: false,
    trackIndex: 0,
    audioCtx: null,
    musicInterval: null,
    dialNumber: '',
    calcExpr: '',
    recentApps: [],
    installedNativeApps: [],
    hw: {
      model: 'Xiaomi Mi 8',
      device: 'dipper',
      androidVer: '16',
      ramUsed: '2.1',
      ramTotal: '6.0',
      ramPct: 35,
      diskUsed: '18.4',
      diskTotal: '64',
      diskPct: 29
    },
    notes: JSON.parse(localStorage.getItem('novaos_notes_v2') || '["Chào mừng đến với NovaOS 16","Vuốt từ đỉnh màn hình xuống để mở Trung tâm điều khiển","Vuốt từ dưới lên để mở ngăn Tất cả ứng dụng trong máy"]'),
    tracks: [
      { title: 'Horizon Light', artist: 'NovaOS Ambient', notes: [261.6, 329.6, 392.0, 523.2, 392.0, 329.6] },
      { title: 'Midnight Pulse', artist: 'Hyper Synth', notes: [220.0, 277.2, 329.6, 440.0, 329.6, 277.2] },
      { title: 'Velvet Sky', artist: 'Dolby Atmos', notes: [293.7, 370.0, 440.0, 587.3, 440.0, 370.0] }
    ]
  },

  init() {
    this.applyAppearance();
    this.runBootSequence();
    this.updateClock();
    setInterval(() => this.updateClock(), 10000);
    this.initBattery();
    this.syncHardwareInfo();
    this.loadInstalledApps(false);
    this.renderDesktop();
    this.initTouchGestures();
  },

  runBootSequence() {
    const bootLayer = document.getElementById('bootLayer');
    const fill = document.getElementById('bootBarFill');
    if (!bootLayer) return;
    setTimeout(() => { if (fill) fill.style.width = '100%'; }, 60);
    setTimeout(() => {
      bootLayer.style.opacity = '0';
      setTimeout(() => bootLayer.classList.add('hidden'), 450);
    }, 680);
  },

  haptic() {
    if (window.NovaNative && typeof window.NovaNative.haptic === 'function') {
      window.NovaNative.haptic();
    }
  },

  applyAppearance() {
    document.body.className = `${this.state.themeStyle} ${this.state.wallpaper}`;
    const names = {
      'theme-hyper': 'HyperOS',
      'theme-nothing': 'Nothing OS',
      'theme-cyber': 'CyberDeck'
    };
    const lbl = document.getElementById('ccThemeName');
    if (lbl) lbl.textContent = names[this.state.themeStyle] || 'HyperOS';
  },

  setWallpaper(wp) {
    this.haptic();
    this.state.wallpaper = wp;
    localStorage.setItem('novaos_wp', wp);
    this.applyAppearance();
    this.banner('Đã áp dụng hình nền mới');
  },

  setThemeStyle(style) {
    this.haptic();
    this.state.themeStyle = style;
    localStorage.setItem('novaos_style', style);
    this.applyAppearance();
    this.banner('Đã đổi phong cách giao diện hệ thống');
  },

  cycleThemeMode() {
    const list = ['theme-hyper', 'theme-nothing', 'theme-cyber'];
    const idx = (list.indexOf(this.state.themeStyle) + 1) % list.length;
    this.setThemeStyle(list[idx]);
  },

  updateClock() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const t = `${hh}:${mm}`;

    const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dStr = `${days[now.getDay()]}, ${now.getDate()} Thg ${now.getMonth() + 1}`;

    ['sbClock', 'homeBigClock', 'ccTimeLabel', 'lsClock'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = t;
    });
    ['homeBigDate', 'ccDateLabel', 'lsDate'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = dStr;
    });
  },

  initBattery() {
    if (navigator.getBattery) {
      navigator.getBattery().then(bat => {
        const up = () => {
          const el = document.getElementById('sbBatteryText');
          if (el) el.textContent = Math.round(bat.level * 100);
        };
        up();
        bat.addEventListener('levelchange', up);
      }).catch(() => {});
    }
  },

  syncHardwareInfo() {
    if (window.NovaNative && typeof window.NovaNative.getHardwareStatusJson === 'function') {
      try {
        const info = JSON.parse(window.NovaNative.getHardwareStatusJson());
        if (info && info.model) {
          this.state.hw = info;
        }
      } catch (e) {}
    }
    const hw = this.state.hw;
    const modelEl = document.getElementById('hwModelLabel');
    const ramEl = document.getElementById('hwRamLabel');
    const ramFill = document.getElementById('hwRamFill');
    const diskEl = document.getElementById('hwDiskLabel');
    const diskFill = document.getElementById('hwDiskFill');

    if (modelEl) modelEl.textContent = hw.model || 'Hệ thống';
    if (ramEl) ramEl.textContent = `${hw.ramUsed} / ${hw.ramTotal} GB`;
    if (ramFill) ramFill.style.width = `${hw.ramPct || 38}%`;
    if (diskEl) diskEl.textContent = `${hw.diskUsed} / ${hw.diskTotal} GB`;
    if (diskFill) diskFill.style.width = `${hw.diskPct || 35}%`;
  },

  loadInstalledApps(force) {
    if (window.NovaNative && typeof window.NovaNative.getInstalledAppsJson === 'function') {
      try {
        const raw = window.NovaNative.getInstalledAppsJson(!!force);
        this.state.installedNativeApps = JSON.parse(raw) || [];
      } catch (e) {
        this.state.installedNativeApps = [];
      }
    }
  },

  renderDesktop() {
    // Page 1: System Apps
    const grid1 = document.getElementById('desktopGridPage1');
    if (grid1) {
      grid1.innerHTML = SYSTEM_APPS.map(app => `
        <button class="app-tile" onclick="OS.handleAppTileClick('${app.id}', '${app.nativeKey || ''}', ${!!app.isDrawerTrigger})">
          <div class="squircle-icon ${app.cls}">${app.svg}</div>
          <span class="app-tile-label">${app.name}</span>
        </button>
      `).join('');
    }

    // Page 2: Installed Real Phone Apps (or quick apps if on PC preview)
    const grid2 = document.getElementById('desktopGridPage2');
    if (grid2) {
      if (this.state.installedNativeApps.length > 0) {
        const topApps = this.state.installedNativeApps.slice(0, 16);
        grid2.innerHTML = topApps.map(a => `
          <button class="app-tile" onclick="OS.launchRealPackage('${a.pkg}')">
            <div class="squircle-icon" style="background:rgba(255,255,255,0.12)">
              ${a.icon ? `<img src="${a.icon}" alt="" />` : SVG_ICONS.drawer}
            </div>
            <span class="app-tile-label">${a.label}</span>
          </button>
        `).join('');
      } else {
        // Fallback when previewing on PC browser
        grid2.innerHTML = SYSTEM_APPS.slice(0, 8).map(app => `
          <button class="app-tile" onclick="OS.handleAppTileClick('${app.id}', '${app.nativeKey || ''}', ${!!app.isDrawerTrigger})">
            <div class="squircle-icon ${app.cls}">${app.svg}</div>
            <span class="app-tile-label">${app.name}</span>
          </button>
        `).join('');
      }
    }

    // Dock
    const dock = document.getElementById('mainDock');
    if (dock) {
      dock.innerHTML = DOCK_APPS.map(app => `
        <button class="app-tile" onclick="OS.handleAppTileClick('${app.id}', '${app.nativeKey || ''}', false)">
          <div class="squircle-icon ${app.cls}">${app.svg}</div>
        </button>
      `).join('');
    }

    this.renderDrawerList('');
  },

  renderDrawerList(query) {
    const grid = document.getElementById('drawerGrid');
    if (!grid) return;
    const q = (query || '').trim().toLowerCase();

    const sysItems = SYSTEM_APPS.filter(a => !a.isDrawerTrigger && a.name.toLowerCase().includes(q)).map(app => `
      <button class="app-tile" onclick="OS.closeAppDrawer(); OS.handleAppTileClick('${app.id}', '${app.nativeKey || ''}', false)">
        <div class="squircle-icon ${app.cls}">${app.svg}</div>
        <span class="app-tile-label">${app.name}</span>
      </button>
    `);

    const nativeItems = this.state.installedNativeApps
      .filter(a => a.label.toLowerCase().includes(q))
      .map(a => `
        <button class="app-tile" onclick="OS.closeAppDrawer(); OS.launchRealPackage('${a.pkg}')">
          <div class="squircle-icon" style="background:rgba(255,255,255,0.12)">
            ${a.icon ? `<img src="${a.icon}" alt="" />` : SVG_ICONS.drawer}
          </div>
          <span class="app-tile-label">${a.label}</span>
        </button>
      `);

    grid.innerHTML = [...nativeItems, ...sysItems].join('');
  },

  filterDrawer(val) {
    this.renderDrawerList(val);
  },

  handleAppTileClick(id, nativeKey, isDrawer) {
    this.haptic();
    if (isDrawer) {
      this.openAppDrawer();
      return;
    }
    if (nativeKey && window.NovaNative && typeof window.NovaNative.launchApp === 'function') {
      if (window.NovaNative.launchApp(nativeKey)) return;
    }
    this.openApp(id);
  },

  openNativeOrApp(nativeKey, fallbackId) {
    this.haptic();
    if (window.NovaNative && typeof window.NovaNative.launchApp === 'function') {
      if (window.NovaNative.launchApp(nativeKey)) return;
    }
    this.openApp(fallbackId);
  },

  launchRealPackage(pkg) {
    this.haptic();
    if (window.NovaNative && typeof window.NovaNative.launchApp === 'function') {
      window.NovaNative.launchApp(pkg);
    }
  },

  goToPage(idx) {
    this.state.page = idx;
    const track = document.getElementById('pagesTrack');
    if (track) {
      track.style.transform = `translateX(-${idx * 50}%)`;
    }
    const dots = document.querySelectorAll('#pageDots span');
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  },

  initTouchGestures() {
    let startX = 0;
    let startY = 0;
    const stage = document.getElementById('desktopStage');
    if (!stage) return;

    stage.addEventListener('touchstart', e => {
      if (!e.touches || !e.touches[0]) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    stage.addEventListener('touchend', e => {
      if (!e.changedTouches || !e.changedTouches[0]) return;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;

      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0 && this.state.page === 0) this.goToPage(1);
        else if (dx > 0 && this.state.page === 1) this.goToPage(0);
      } else if (Math.abs(dy) > 65 && Math.abs(dy) > Math.abs(dx)) {
        if (dy > 0 && startY < 260) {
          this.openControlCenter();
        } else if (dy < 0 && startY > window.innerHeight - 260) {
          this.openAppDrawer();
        }
      }
    }, { passive: true });
  },

  openAppDrawer() {
    this.haptic();
    if (this.state.installedNativeApps.length === 0) {
      this.loadInstalledApps(false);
    }
    this.renderDrawerList('');
    document.getElementById('appDrawer').classList.remove('hidden');
  },

  closeAppDrawer() {
    document.getElementById('appDrawer').classList.add('hidden');
  },

  openControlCenter() {
    this.haptic();
    document.getElementById('controlCenter').classList.remove('hidden');
  },

  closeControlCenter() {
    document.getElementById('controlCenter').classList.add('hidden');
  },

  openNotificationShade() {
    this.openControlCenter();
  },

  toggleIslandExpand(e) {
    if (e) e.stopPropagation();
    this.haptic();
    const di = document.getElementById('dynamicIsland');
    const exp = document.getElementById('diExpanded');
    di.classList.toggle('expanded');
    exp.classList.toggle('hidden');
  },

  toggleQuickSetting(type) {
    this.haptic();
    if (type === 'wifi') {
      if (window.NovaNative) {
        window.NovaNative.openSystemSetting('wifi');
        return;
      }
      this.state.wifi = !this.state.wifi;
      document.getElementById('ccBtnWifi').classList.toggle('active', this.state.wifi);
      document.getElementById('ccWifiSub').textContent = this.state.wifi ? 'Đang bật' : 'Đã tắt';
    } else if (type === 'data') {
      if (window.NovaNative) {
        window.NovaNative.openSystemSetting('4g');
        return;
      }
      this.state.data = !this.state.data;
      document.getElementById('ccBtnData').classList.toggle('active-green', this.state.data);
      document.getElementById('ccDataSub').textContent = this.state.data ? '4G / 5G Bật' : 'Đã tắt';
    } else if (type === 'bt') {
      if (window.NovaNative) {
        window.NovaNative.openSystemSetting('bluetooth');
        return;
      }
      this.state.bt = !this.state.bt;
      document.getElementById('ccTileBt').classList.toggle('active', this.state.bt);
    } else if (type === 'torch') {
      if (window.NovaNative && typeof window.NovaNative.toggleTorch === 'function') {
        this.state.torch = window.NovaNative.toggleTorch();
      } else {
        this.state.torch = !this.state.torch;
      }
      document.getElementById('ccTileTorch').classList.toggle('active', this.state.torch);
      this.banner(this.state.torch ? 'Đã bật Đèn pin' : 'Đã tắt Đèn pin');
    } else if (type === 'dnd') {
      this.state.dnd = !this.state.dnd;
      document.getElementById('ccTileDnd').classList.toggle('active', this.state.dnd);
      this.banner(this.state.dnd ? 'Đã bật Không làm phiền' : 'Đã tắt Không làm phiền');
    }
  },

  setBrightness(val) {
    const mask = document.getElementById('brightnessMask');
    if (mask) mask.style.opacity = (100 - val) / 100;
  },

  setVolume(val) {
    if (window.NovaNative && val % 25 === 0) {
      window.NovaNative.openSystemSetting('sound');
    }
  },

  boostMemory() {
    this.haptic();
    if (window.NovaNative && typeof window.NovaNative.requestGarbageCollect === 'function') {
      window.NovaNative.requestGarbageCollect();
    }
    this.syncHardwareInfo();
    const fill = document.getElementById('hwRamFill');
    if (fill) fill.style.width = '26%';
    this.banner('Đã dọn bộ nhớ đệm & tối ưu tốc độ khung hình');
  },

  toggleMusic(e) {
    if (e) e.stopPropagation();
    this.haptic();
    this.state.musicPlaying = !this.state.musicPlaying;
    const eq = document.getElementById('diEq');
    const lbl = document.getElementById('diLabel');
    const ccPlay = document.getElementById('ccPlayBtn');
    const tr = this.state.tracks[this.state.trackIndex];

    if (this.state.musicPlaying) {
      eq.classList.remove('hidden');
      lbl.textContent = tr.title;
      document.getElementById('diTitle').textContent = tr.title;
      document.getElementById('diSub').textContent = tr.artist;
      document.getElementById('ccSongName').textContent = tr.title;
      if (ccPlay) ccPlay.textContent = '⏸';

      let step = 0;
      clearInterval(this.state.musicInterval);
      this.state.musicInterval = setInterval(() => {
        this.playTone(tr.notes[step % tr.notes.length], 0.12);
        step++;
      }, 280);
    } else {
      eq.classList.add('hidden');
      lbl.textContent = '';
      if (ccPlay) ccPlay.textContent = '▶';
      clearInterval(this.state.musicInterval);
    }
  },

  nextTrack() {
    this.state.trackIndex = (this.state.trackIndex + 1) % this.state.tracks.length;
    if (this.state.musicPlaying) {
      this.state.musicPlaying = false;
      this.toggleMusic();
    }
  },

  prevTrack() {
    this.state.trackIndex = (this.state.trackIndex - 1 + this.state.tracks.length) % this.state.tracks.length;
    if (this.state.musicPlaying) {
      this.state.musicPlaying = false;
      this.toggleMusic();
    }
  },

  playTone(freq, dur) {
    try {
      if (!this.state.audioCtx) {
        this.state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      const osc = this.state.audioCtx.createOscillator();
      const g = this.state.audioCtx.createGain();
      osc.frequency.value = freq;
      g.gain.value = 0.05;
      osc.connect(g);
      g.connect(this.state.audioCtx.destination);
      osc.start();
      osc.stop(this.state.audioCtx.currentTime + dur);
    } catch (e) {}
  },

  lockScreen() {
    this.haptic();
    document.getElementById('lockScreen').classList.remove('hidden');
  },

  unlockScreen() {
    this.haptic();
    document.getElementById('lockScreen').classList.add('hidden');
  },

  /* --- SYSTEM APPS ENGINE --- */
  openApp(id) {
    this.haptic();
    const win = document.getElementById('appWindow');
    const title = document.getElementById('appWinTitle');
    const content = document.getElementById('appWinContent');
    win.classList.remove('hidden');

    if (!this.state.recentApps.includes(id)) {
      this.state.recentApps.unshift(id);
    }

    if (id === 'settings') {
      title.textContent = 'Cài đặt';
      const hw = this.state.hw;
      content.innerHTML = `
        <div class="ios-group">
          <div class="ios-row" onclick="OS.openApp('about_device')">
            <div class="ios-row-left">
              <div class="ios-row-ico ico-themes">N</div>
              <div class="ios-row-txt">
                <strong>Thiết bị của tôi (${hw.model})</strong>
                <span>NovaOS 16 · Android ${hw.androidVer} (${hw.device})</span>
              </div>
            </div>
            <div class="ios-row-right">›</div>
          </div>
        </div>

        <div class="ios-group">
          <div class="ios-row" onclick="OS.toggleQuickSetting('wifi')">
            <div class="ios-row-left">
              <div class="ios-row-ico ico-msg">📶</div>
              <div class="ios-row-txt"><strong>Wi-Fi</strong><span>Mạng không dây tốc độ cao</span></div>
            </div>
            <div class="ios-row-right">Đang bật ›</div>
          </div>
          <div class="ios-row" onclick="OS.toggleQuickSetting('data')">
            <div class="ios-row-left">
              <div class="ios-row-ico ico-phone">⚡</div>
              <div class="ios-row-txt"><strong>Mạng di động &amp; SIM</strong><span>4G / 5G VoLTE</span></div>
            </div>
            <div class="ios-row-right">›</div>
          </div>
          <div class="ios-row" onclick="OS.toggleQuickSetting('bt')">
            <div class="ios-row-left">
              <div class="ios-row-ico ico-browser">ᛒ</div>
              <div class="ios-row-txt"><strong>Bluetooth</strong><span>Kết nối thiết bị âm thanh</span></div>
            </div>
            <div class="ios-row-right">Đang bật ›</div>
          </div>
        </div>

        <div class="ios-group">
          <div class="ios-row" onclick="OS.openApp('themes')">
            <div class="ios-row-left">
              <div class="ios-row-ico ico-gallery">🎨</div>
              <div class="ios-row-txt"><strong>Hình nền &amp; Phong cách OS</strong><span>HyperOS, Nothing OS, CyberDeck</span></div>
            </div>
            <div class="ios-row-right">›</div>
          </div>
          <div class="ios-row" onclick="if(window.NovaNative) window.NovaNative.openSystemSetting('home'); else OS.banner('Mở chọn Màn hình chính mặc định');">
            <div class="ios-row-left">
              <div class="ios-row-ico ico-files">🏠</div>
              <div class="ios-row-txt"><strong>Đặt làm Màn hình chính mặc định</strong><span>Chọn NovaOS 16 làm Home Launcher</span></div>
            </div>
            <div class="ios-row-right">›</div>
          </div>
          <div class="ios-row" onclick="if(window.NovaNative) window.NovaNative.openSystemSetting('all');">
            <div class="ios-row-left">
              <div class="ios-row-ico ico-settings">⚙️</div>
              <div class="ios-row-txt"><strong>Cài đặt nâng cao của phần cứng</strong><span>Mở trình cài đặt gốc của máy</span></div>
            </div>
            <div class="ios-row-right">›</div>
          </div>
        </div>
      `;
    } else if (id === 'about_device') {
      title.textContent = 'Giới thiệu điện thoại';
      const hw = this.state.hw;
      content.innerHTML = `
        <div style="text-align:center;padding:18px 0 24px;">
          <div style="font-size:28px;font-weight:700;">NovaOS 16</div>
          <div style="font-size:12px;color:#94a3b8;margin-top:4px;">Phiên bản 16.0.2.0.VN · Official Release</div>
        </div>
        <div class="ios-group">
          <div class="ios-row"><div class="ios-row-txt"><strong>Tên thiết bị</strong></div><div class="ios-row-right">${hw.model}</div></div>
          <div class="ios-row"><div class="ios-row-txt"><strong>Mã phần cứng (Codename)</strong></div><div class="ios-row-right">${hw.device}</div></div>
          <div class="ios-row"><div class="ios-row-txt"><strong>Bộ nhớ RAM</strong></div><div class="ios-row-right">${hw.ramUsed} / ${hw.ramTotal} GB</div></div>
          <div class="ios-row"><div class="ios-row-txt"><strong>Bộ nhớ trong</strong></div><div class="ios-row-right">${hw.diskUsed} / ${hw.diskTotal} GB</div></div>
          <div class="ios-row"><div class="ios-row-txt"><strong>Phiên bản Android</strong></div><div class="ios-row-right">Android ${hw.androidVer}</div></div>
        </div>
      `;
    } else if (id === 'themes') {
      title.textContent = 'Chủ đề & Hình nền';
      content.innerHTML = `
        <p style="font-size:13px;color:#94a3b8;margin-bottom:10px;">Chọn hình nền hệ thống:</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;">
          <button onclick="OS.setWallpaper('wp-aurora')" style="height:100px;border-radius:18px;border:2px solid rgba(255,255,255,0.3);background:linear-gradient(135deg,#4f46e5,#ec4899,#0ea5e9);color:#fff;font-weight:600;cursor:pointer;">Aurora Pro</button>
          <button onclick="OS.setWallpaper('wp-titanium')" style="height:100px;border-radius:18px;border:2px solid rgba(255,255,255,0.3);background:linear-gradient(135deg,#52525b,#18181b,#312e81);color:#fff;font-weight:600;cursor:pointer;">Titanium Dark</button>
          <button onclick="OS.setWallpaper('wp-emerald')" style="height:100px;border-radius:18px;border:2px solid rgba(255,255,255,0.3);background:linear-gradient(135deg,#10b981,#0369a1,#022c22);color:#fff;font-weight:600;cursor:pointer;">Emerald Jade</button>
          <button onclick="OS.setWallpaper('wp-crimson')" style="height:100px;border-radius:18px;border:2px solid rgba(255,255,255,0.3);background:linear-gradient(135deg,#ef4444,#f97316,#1f070b);color:#fff;font-weight:600;cursor:pointer;">ROG Crimson</button>
        </div>
        <p style="font-size:13px;color:#94a3b8;margin-bottom:10px;">Phong cách kiến trúc OS:</p>
        <div class="ios-group">
          <div class="ios-row" onclick="OS.setThemeStyle('theme-hyper')"><div class="ios-row-txt"><strong>HyperOS / iOS 18 Glass</strong><span>Hiệu ứng kính mờ cao cấp</span></div><div class="ios-row-right">Chọn</div></div>
          <div class="ios-row" onclick="OS.setThemeStyle('theme-nothing')"><div class="ios-row-txt"><strong>Nothing OS Dot-Matrix</strong><span>Trong suốt &amp; Lưới ma trận</span></div><div class="ios-row-right">Chọn</div></div>
          <div class="ios-row" onclick="OS.setThemeStyle('theme-cyber')"><div class="ios-row-txt"><strong>CyberDeck Neon</strong><span>Giao diện lưới kỹ thuật số</span></div><div class="ios-row-right">Chọn</div></div>
        </div>
      `;
    } else if (id === 'phone') {
      title.textContent = 'Điện thoại';
      content.innerHTML = `
        <div style="display:flex;flex-direction:column;justify-content:space-between;height:100%;padding:12px 10px;">
          <div style="text-align:center;font-size:32px;font-weight:400;min-height:48px;letter-spacing:0.04em;" id="dialDisplay">${this.state.dialNumber}</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;max-width:280px;margin:0 auto;width:100%;">
            ${['1','2','3','4','5','6','7','8','9','*','0','#'].map(d => `
              <button onclick="OS.pressDial('${d}')" style="height:64px;border-radius:50%;background:rgba(255,255,255,0.1);border:none;color:#fff;font-size:24px;font-weight:400;cursor:pointer;">${d}</button>
            `).join('')}
          </div>
          <div style="display:flex;justify-content:center;align-items:center;gap:24px;margin-top:16px;">
            <button onclick="OS.openNativeOrApp('dialer','phone')" style="padding:10px 16px;border-radius:99px;background:rgba(255,255,255,0.1);border:none;color:#fff;font-size:13px;">Danh bạ</button>
            <button onclick="OS.makeRealCall()" style="width:66px;height:66px;border-radius:50%;background:#10b981;border:none;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;">${SVG_ICONS.phone}</button>
            <button onclick="OS.pressDial('DEL')" style="padding:10px 16px;border-radius:99px;background:rgba(255,255,255,0.1);border:none;color:#fff;font-size:13px;">⌫ Xóa</button>
          </div>
        </div>
      `;
    } else if (id === 'messages') {
      if (window.NovaNative && window.NovaNative.launchApp('sms')) {
        this.closeActiveApp();
        return;
      }
      title.textContent = 'Tin nhắn';
      content.innerHTML = `
        <div class="ios-group">
          <div class="ios-row"><div class="ios-row-txt"><strong>Tổng đài Viettel</strong><span>Quý khách đang sử dụng gói cước 4G tốc độ cao.</span></div><div class="ios-row-right">Hôm nay</div></div>
          <div class="ios-row"><div class="ios-row-txt"><strong>Hệ thống NovaOS</strong><span>Chào mừng bạn đến với giao diện NovaOS 16.</span></div><div class="ios-row-right">Vừa xong</div></div>
        </div>
      `;
    } else if (id === 'browser') {
      title.textContent = 'Trình duyệt';
      content.innerHTML = `
        <div style="display:flex;flex-direction:column;height:100%;gap:10px;">
          <div style="display:flex;gap:8px;">
            <input id="browserUrlInp" type="text" value="https://www.wikipedia.org" style="flex:1;padding:10px 14px;border-radius:14px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);color:#fff;font-size:13px;" />
            <button onclick="document.getElementById('webFrame').src=document.getElementById('browserUrlInp').value" style="padding:0 16px;border-radius:14px;background:#2563eb;border:none;color:#fff;font-weight:600;">Đi</button>
          </div>
          <iframe id="webFrame" src="https://vi.m.wikipedia.org" style="flex:1;width:100%;border:none;border-radius:16px;background:#fff;"></iframe>
        </div>
      `;
    } else if (id === 'calc') {
      title.textContent = 'Máy tính';
      content.innerHTML = `
        <div style="display:flex;flex-direction:column;justify-content:flex-end;height:100%;gap:14px;max-width:320px;margin:0 auto;">
          <div id="calcScreen" style="font-size:48px;font-weight:300;text-align:right;padding:10px;overflow:hidden;">${this.state.calcExpr || '0'}</div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">
            ${['C','(',')','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','DEL','='].map(k => `
              <button onclick="OS.pressCalcKey('${k}')" style="height:62px;border-radius:50%;border:none;font-size:20px;font-weight:500;color:#fff;background:${['/', '*', '-', '+', '='].includes(k) ? '#f59e0b' : ['C','(',')'].includes(k) ? '#475569' : 'rgba(255,255,255,0.14)'};cursor:pointer;">${k}</button>
            `).join('')}
          </div>
        </div>
      `;
    } else if (id === 'files') {
      title.textContent = 'Quản lý Tệp';
      const hw = this.state.hw;
      content.innerHTML = `
        <div class="ios-group" style="padding:16px;">
          <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
            <strong>Bộ nhớ trong thiết bị</strong>
            <span style="color:#60a5fa;">${hw.diskUsed} GB / ${hw.diskTotal} GB</span>
          </div>
          <div class="whw-bar" style="height:8px;"><div class="whw-fill fill-purple" style="width:${hw.diskPct}%"></div></div>
        </div>
        <div class="ios-group">
          <div class="ios-row"><div class="ios-row-left"><div class="ios-row-ico ico-files">📁</div><div class="ios-row-txt"><strong>Download</strong><span>Tệp tải xuống từ trình duyệt</span></div></div><div class="ios-row-right">›</div></div>
          <div class="ios-row"><div class="ios-row-left"><div class="ios-row-ico ico-gallery">🖼️</div><div class="ios-row-txt"><strong>DCIM / Camera</strong><span>Ảnh và video đã chụp</span></div></div><div class="ios-row-right">›</div></div>
          <div class="ios-row"><div class="ios-row-left"><div class="ios-row-ico ico-music">🎵</div><div class="ios-row-txt"><strong>Music &amp; CallRecordings</strong><span>Bản ghi âm cuộc gọi &amp; Nhạc</span></div></div><div class="ios-row-right">›</div></div>
          <div class="ios-row"><div class="ios-row-left"><div class="ios-row-ico ico-notes">📄</div><div class="ios-row-txt"><strong>Documents</strong><span>Tài liệu cá nhân</span></div></div><div class="ios-row-right">›</div></div>
        </div>
      `;
    } else if (id === 'security') {
      title.textContent = 'Trung tâm Bảo mật & Tối ưu';
      const hw = this.state.hw;
      content.innerHTML = `
        <div style="text-align:center;padding:20px 0;">
          <div style="width:96px;height:96px;border-radius:50%;border:4px solid #10b981;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:26px;font-weight:700;color:#34d399;">100</div>
          <strong style="font-size:16px;">Hệ thống hoạt động tối ưu</strong>
          <p style="font-size:12px;color:#94a3b8;margin-top:4px;">RAM đang dùng: ${hw.ramUsed} / ${hw.ramTotal} GB · Môi trường an toàn cho ứng dụng Ngân hàng</p>
          <button onclick="OS.boostMemory()" style="margin-top:14px;padding:10px 24px;border-radius:99px;background:#10b981;border:none;color:#000;font-weight:700;cursor:pointer;">Tăng tốc &amp; Giải phóng RAM</button>
        </div>
      `;
    } else if (id === 'notes') {
      title.textContent = 'Ghi chú';
      content.innerHTML = `
        <div style="display:flex;gap:8px;margin-bottom:14px;">
          <input id="newNoteText" type="text" placeholder="Viết ghi chú mới..." style="flex:1;padding:11px 14px;border-radius:14px;background:rgba(255,255,255,0.09);border:1px solid rgba(255,255,255,0.15);color:#fff;" />
          <button onclick="OS.saveNewNote()" style="padding:0 18px;border-radius:14px;background:#eab308;border:none;color:#000;font-weight:700;">Lưu</button>
        </div>
        <div class="ios-group">
          ${this.state.notes.map((n, i) => `
            <div class="ios-row">
              <div class="ios-row-txt"><strong>${n}</strong></div>
              <button onclick="OS.removeNote(${i})" style="background:none;border:none;color:#f87171;font-size:12px;">Xóa</button>
            </div>
          `).join('')}
        </div>
      `;
    } else if (id === 'terminal') {
      title.textContent = 'Terminal';
      const hw = this.state.hw;
      content.innerHTML = `
        <div id="termScreen" style="background:#05070c;border:1px solid rgba(255,255,255,0.12);border-radius:16px;padding:14px;height:340px;overflow-y:auto;font-family:monospace;font-size:12px;color:#34d399;line-height:1.6;">
          <div>NovaOS 16 Shell — ${hw.model} (${hw.device})</div>
          <div>RAM: ${hw.ramUsed}/${hw.ramTotal} GB | Storage: ${hw.diskUsed}/${hw.diskTotal} GB</div>
          <div style="color:#94a3b8;">Gõ lệnh: neofetch, free, ls, clear</div>
        </div>
        <div style="display:flex;gap:8px;margin-top:10px;">
          <input id="termCmd" type="text" placeholder="Nhập lệnh..." style="flex:1;padding:10px 14px;border-radius:14px;background:#05070c;border:1px solid rgba(255,255,255,0.18);color:#fff;font-family:monospace;" onkeydown="if(event.key==='Enter') OS.runTerm()" />
          <button onclick="OS.runTerm()" style="padding:0 18px;border-radius:14px;background:#10b981;border:none;color:#000;font-weight:700;">Chạy</button>
        </div>
      `;
    } else if (id === 'music') {
      title.textContent = 'Âm nhạc';
      content.innerHTML = `
        <div class="ios-group">
          ${this.state.tracks.map((t, i) => `
            <div class="ios-row" onclick="OS.state.trackIndex=${i}; OS.state.musicPlaying=false; OS.toggleMusic();">
              <div class="ios-row-left">
                <div class="ios-row-ico ico-music">♪</div>
                <div class="ios-row-txt"><strong>${t.title}</strong><span>${t.artist}</span></div>
              </div>
              <div class="ios-row-right">Phát ▶</div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (id === 'clock') {
      if (window.NovaNative && window.NovaNative.launchApp('clock')) {
        this.closeActiveApp();
        return;
      }
      title.textContent = 'Đồng hồ';
      content.innerHTML = `
        <div style="text-align:center;padding:40px 0;">
          <div style="font-size:56px;font-weight:200;">${document.getElementById('sbClock').textContent}</div>
          <div style="color:#94a3b8;margin-top:6px;">Giờ chuẩn Việt Nam (GMT+7)</div>
        </div>
      `;
    }
  },

  pressDial(d) {
    this.haptic();
    if (d === 'DEL') {
      this.state.dialNumber = this.state.dialNumber.slice(0, -1);
    } else {
      this.state.dialNumber += d;
      this.playTone(440 + parseInt(d || 0, 10) * 35, 0.05);
    }
    const el = document.getElementById('dialDisplay');
    if (el) el.textContent = this.state.dialNumber;
  },

  makeRealCall() {
    this.haptic();
    const num = this.state.dialNumber || '';
    if (window.NovaNative) {
      window.NovaNative.launchApp(num ? `tel:${num}` : 'dialer');
    } else {
      this.banner(num ? `Đang gọi ${num}...` : 'Mở trình gọi điện');
    }
  },

  pressCalcKey(k) {
    this.haptic();
    if (k === 'C') {
      this.state.calcExpr = '';
    } else if (k === 'DEL') {
      this.state.calcExpr = this.state.calcExpr.slice(0, -1);
    } else if (k === '=') {
      try {
        this.state.calcExpr = String(Function('"use strict";return (' + (this.state.calcExpr || '0') + ')')());
      } catch (e) {
        this.state.calcExpr = 'Lỗi';
      }
    } else {
      this.state.calcExpr += k;
    }
    const sc = document.getElementById('calcScreen');
    if (sc) sc.textContent = this.state.calcExpr || '0';
  },

  saveNewNote() {
    const inp = document.getElementById('newNoteText');
    if (!inp || !inp.value.trim()) return;
    this.state.notes.unshift(inp.value.trim());
    localStorage.setItem('novaos_notes_v2', JSON.stringify(this.state.notes));
    this.openApp('notes');
  },

  removeNote(idx) {
    this.state.notes.splice(idx, 1);
    localStorage.setItem('novaos_notes_v2', JSON.stringify(this.state.notes));
    this.openApp('notes');
  },

  runTerm() {
    const inp = document.getElementById('termCmd');
    const sc = document.getElementById('termScreen');
    if (!inp || !sc) return;
    const cmd = inp.value.trim();
    if (!cmd) return;
    const hw = this.state.hw;
    let out = '';
    if (cmd === 'clear') {
      sc.innerHTML = '';
      inp.value = '';
      return;
    } else if (cmd === 'neofetch') {
      out = `OS: NovaOS 16 (Android ${hw.androidVer})<br>Host: ${hw.model} (${hw.device})<br>Memory: ${hw.ramUsed}GB / ${hw.ramTotal}GB`;
    } else if (cmd === 'free') {
      out = `Mem: ${hw.ramUsed} GB used / ${hw.ramTotal} GB total`;
    } else if (cmd === 'ls') {
      out = `system  vendor  product  sdcard  data`;
    } else {
      out = `${cmd}: command executed (0)`;
    }
    sc.innerHTML += `<div style="color:#fff;">$ ${cmd}</div><div>${out}</div>`;
    sc.scrollTop = sc.scrollHeight;
    inp.value = '';
  },

  closeActiveApp() {
    document.getElementById('appWindow').classList.add('hidden');
  },

  openRecents() {
    this.haptic();
    const layer = document.getElementById('recentsLayer');
    const container = document.getElementById('recentsCards');
    layer.classList.remove('hidden');

    if (this.state.recentApps.length === 0) {
      container.innerHTML = `<div style="margin:auto;color:#94a3b8;font-size:14px;">Không có ứng dụng chạy ngầm</div>`;
      return;
    }

    container.innerHTML = this.state.recentApps.map(id => {
      const app = SYSTEM_APPS.find(a => a.id === id) || DOCK_APPS.find(a => a.id === id) || { name: id, cls: 'ico-settings', svg: SVG_ICONS.settings };
      return `
        <div class="recent-card" onclick="OS.closeRecents(); OS.openApp('${id}')">
          <div style="display:flex;align-items:center;gap:10px;">
            <div class="squircle-icon ${app.cls}" style="width:36px;height:36px;border-radius:10px;">${app.svg}</div>
            <strong>${app.name}</strong>
          </div>
          <div style="flex:1;margin:14px 0;border-radius:14px;background:rgba(255,255,255,0.04);display:flex;align-items:center;justify-content:center;color:#64748b;font-size:12px;">Đang hoạt động</div>
          <span style="font-size:11px;color:#94a3b8;text-align:center;">Chạm để mở lại</span>
        </div>
      `;
    }).join('');
  },

  closeRecents() {
    document.getElementById('recentsLayer').classList.add('hidden');
  },

  clearAllRecents() {
    this.state.recentApps = [];
    this.closeRecents();
    this.boostMemory();
  },

  goHome() {
    this.haptic();
    this.closeActiveApp();
    this.closeAppDrawer();
    this.closeControlCenter();
    this.closeRecents();
    this.goToPage(0);
  },

  handleHardwareBack() {
    this.haptic();
    const cc = document.getElementById('controlCenter');
    const rec = document.getElementById('recentsLayer');
    const win = document.getElementById('appWindow');
    const drw = document.getElementById('appDrawer');

    if (!cc.classList.contains('hidden')) { this.closeControlCenter(); return; }
    if (!rec.classList.contains('hidden')) { this.closeRecents(); return; }
    if (!win.classList.contains('hidden')) { this.closeActiveApp(); return; }
    if (!drw.classList.contains('hidden')) { this.closeAppDrawer(); return; }
    if (this.state.page !== 0) { this.goToPage(0); }
  },

  banner(text) {
    const b = document.getElementById('sysBanner');
    const t = document.getElementById('sysBannerText');
    if (!b || !t) return;
    t.textContent = text;
    b.classList.remove('hidden');
    clearTimeout(this._bTimer);
    this._bTimer = setTimeout(() => b.classList.add('hidden'), 2200);
  }
};

window.OS = OS;
window.addEventListener('DOMContentLoaded', () => OS.init());
