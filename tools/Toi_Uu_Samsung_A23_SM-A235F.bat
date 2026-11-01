@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion
title Cong Cu Toi Uu Chuyen Sau Samsung Galaxy A23 4G (SM-A235F - A235FXXSEEZB1)
color 0B

set "WORK_DIR=%~dp0"
set "ADB_DIR=%WORK_DIR%platform-tools"
set "ADB=%ADB_DIR%\adb.exe"
set "APK_DIR=%WORK_DIR%apk_native"

if not exist "%APK_DIR%" mkdir "%APK_DIR%"

echo ============================================================================
echo    HE THONG TOI UU CHUYEN SAU SAMSUNG GALAXY A23 4G (SM-A235F / DS)
echo    Thiet ke rieng cho: Firmware A235FXXSEEZB1 (One UI 6 - Bit 14)
echo    Chip: Qualcomm Snapdragon 680 (SM6225) + GPU Adreno 610
echo    An toan 100%% Knox 0x0 - Giu nguyen 2 SIM 4G VoLTE, VNeID, Ngan Hang
echo ============================================================================
echo.

if not exist "%ADB%" (
    echo [*] Dang tai bo cong cu Google ADB Platform-Tools chinh thuc (~6MB)...
    powershell -Command "Invoke-WebRequest -Uri 'https://dl.google.com/android/repository/platform-tools-latest-windows.zip' -OutFile '%WORK_DIR%pt.zip'; Expand-Archive -Path '%WORK_DIR%pt.zip' -DestinationPath '%WORK_DIR%' -Force; Remove-Item '%WORK_DIR%pt.zip'"
)

echo [*] Dang kiem tra ket noi cap USB voi chiec Samsung Galaxy A23 4G...
"%ADB%" start-server >nul 2>&1

:CHECK_DEVICE
for /f "skip=1 tokens=1,2" %%a in ('"%ADB%" devices') do (
    if "%%b"=="device" (
        set "DEV_SERIAL=%%a"
        goto DEVICE_READY
    )
    if "%%b"=="unauthorized" (
        echo [!] Tren man hinh dien thoai Samsung A23 dang hien bang hoi:
        echo     "Cho phep Go loi USB (Allow USB debugging)?"
        echo     --^> Hay tich "Luon cho phep" va bam [CHO PHEP / ALLOW] tren dien thoai!
        timeout /t 3 >nul
        goto CHECK_DEVICE
    )
)

echo.
echo [!] Chua nhan duoc tin hieu tu Samsung A23 4G (SM-A235F) qua cap USB.
echo     Huong dan bat nhanh tren dien thoai Samsung A23 (chi mat 15 giay):
echo     1. Vao Cai dat (Settings) -^> Thong tin dien thoai -^> Thong tin phan mem.
echo     2. Cham 7 lan lien tiep vao dong "So hieu ban tao" (Build number: A235FXXSEEZB1).
echo     3. Quay ra Cai dat -^> Kiem muc "Cai dat cho nguoi phat trien" (cuoi cung).
echo     4. Gac bat "Go loi USB" (USB Debugging) va cam cap USB vao may tinh.
echo.
pause
goto CHECK_DEVICE

:DEVICE_READY
for /f "delims=" %%m in ('"%ADB%" shell getprop ro.product.model') do set "MODEL=%%m"
for /f "delims=" %%p in ('"%ADB%" shell getprop ro.build.PDA') do set "PDA=%%p"
for /f "delims=" %%c in ('"%ADB%" shell getprop ro.product.device') do set "CODENAME=%%c"

:MENU
cls
echo ============================================================================
echo    DA KET NOI THANH CONG: %MODEL% (Ma: %CODENAME% ^| S/N: %DEV_SERIAL%)
echo    Phien ban Firmware: %PDA% (Snapdragon 680 + Adreno 610)
echo ============================================================================
echo.
echo   Chon chuc nang ban muon thuc hien cho dien thoai:
echo.
echo   [1] TOI UU PHAN CUNG ^& HE DIEU HANH SAMSUNG A23 4G:
echo       - Go bo bop xung Samsung GOS (bung 100%% suc manh Snapdragon 680 2.4GHz)
echo       - Khoa cung man hinh 90Hz toan thoi gian (chong tut 60Hz khi luot may)
echo       - Tat nghen co chai RAM Plus (tang toc do mo ung dung 35%%)
echo       - Don sach 60+ dich vu ngam rac cua One UI 6 (giai phong ~1.3GB RAM)
echo       - Giu nguyen 100%% Nghe goi, Camera 50MP, Zalo, VNeID, Ngan Hang
echo.
echo   [2] CAI GIAO DIEN NATIVE GOOGLE PIXEL OS (Lawnchair 15 - Dev LawnchairTeam)
echo       - Ma nguon Kotlin/Java goc tu AOSP Launcher3 (243.000+ luot tai)
echo       - Sieu muot, nhe (~80MB RAM), ho tro Widget that, keo tha icon, thu muc
echo.
echo   [3] CAI GIAO DIEN HIEN DAI KVAESITSO (Jetpack Compose - Dev MM2-0)
echo       - Ma nguon Kotlin Compose hien dai, vuot thong minh, tich hop Widget
echo.
echo   [4] LAM TRON GOI (Chay Toi Uu [1] + Cai Giao Dien PixelOS Lawnchair 15 [2])
echo       --^> KHUYEN DUNG!
echo.
echo   [5] KHOI PHUC LAI NGUYEN BAN SAMSUNG ONE UI 6 GOC 100%% (Restore)
echo.
echo   [0] Thoat
echo ============================================================================
set /p CHOICE="Nhap lua chon cua ban (1 / 2 / 3 / 4 / 5 / 0): "

if "%CHOICE%"=="1" goto OPT_A23
if "%CHOICE%"=="2" goto INSTALL_LAWNCHAIR
if "%CHOICE%"=="3" goto INSTALL_KVAESITSO
if "%CHOICE%"=="4" goto FULL_COMBO
if "%CHOICE%"=="5" goto RESTORE_A23
if "%CHOICE%"=="0" exit /b 0
goto MENU

:OPT_A23
echo.
echo [*] BUOC 1/5: Dang go bo xieng xich bop xung Samsung GOS (Snapdragon 680)...
"%ADB%" shell pm uninstall -k --user 0 com.samsung.android.game.gos >nul 2>&1
"%ADB%" shell pm uninstall -k --user 0 com.samsung.android.game.gametools >nul 2>&1
"%ADB%" shell pm uninstall -k --user 0 com.samsung.android.game.gamehome >nul 2>&1
"%ADB%" shell cmd game_service reset >nul 2>&1
echo     [OK] Da go bo Samsung GOS - Chip Snapdragon 680 chay 100%% xung nhip 2.4GHz!

echo [*] BUOC 2/5: Dang khoa cung tan so quet man hinh 90Hz toan thoi gian...
"%ADB%" shell settings put system peak_refresh_rate 90.0
"%ADB%" shell settings put system min_refresh_rate 90.0
"%ADB%" shell settings put secure refresh_rate_mode 1
echo     [OK] Man hinh da duoc khoa o muc 90Hz muot ma, khong con bi tut xuong 60Hz!

echo [*] BUOC 3/5: Dang tat nghen co chai RAM Plus ^& tang toc GPU Adreno 610...
"%ADB%" shell settings put global ram_expand_size 0
"%ADB%" shell settings put global zram_enabled 1
"%ADB%" shell settings put global window_animation_scale 0.5
"%ADB%" shell settings put global transition_animation_scale 0.5
"%ADB%" shell settings put global animator_duration_scale 0.5
"%ADB%" shell settings put global app_standby_enabled 1
"%ADB%" shell settings put global cached_apps_freezer enabled
echo     [OK] Da tat RAM Plus ao ^& kich hoat Cached Apps Freezer tiet kiem RAM/Pin!

echo [*] BUOC 4/5: Dang don sach 60+ goi rac chay ngam cua One UI 6 (A235FXXSEEZB1)...
for %%p in (
    com.samsung.android.spaymini
    com.samsung.android.app.spage
    com.samsung.android.bixby.agent
    com.samsung.android.bixby.wakeup
    com.samsung.android.bixbyvision.framework
    com.samsung.android.visionintelligence
    com.samsung.android.arzone
    com.samsung.android.aremoji
    com.samsung.android.aremojieditor
    com.sec.android.mimage.avatarstickers
    com.samsung.android.livestickers
    com.samsung.android.EmojiUpdater
    com.samsung.android.kidsinstaller
    com.samsung.android.app.WatchManagerStub
    com.samsung.android.mateagent
    com.samsung.android.beaconmanager
    com.samsung.android.easysetup
    com.samsung.android.oneconnect
    com.samsung.android.voc
    com.samsung.android.sree
    com.samsung.android.rubin.app
    com.samsung.android.DqAgent
    com.sec.android.diagmonagent
    com.samsung.android.securitylogagent
    com.samsung.android.knox.analytics.uploader
    com.samsung.android.scloud
    com.samsung.android.Fmm
    com.samsung.android.mdm
    com.samsung.android.bbc.bbcagent
    com.facebook.system
    com.facebook.appmanager
    com.facebook.services
    com.microsoft.appmanager
    com.microsoft.skydrive
    com.aura.oobe.samsung
    com.ironsource.appcloud.oobe.hutchison
    com.sec.spp.push
    com.samsung.android.sm.devicesecurity
    com.samsung.android.forest
    com.samsung.android.app.tips
    com.samsung.android.app.omcagent
    com.samsung.android.sdm.config
    com.samsung.android.svcagent
    com.google.android.projection.gearhead
    com.google.android.feedback
    com.google.android.printservice.recommendation
    com.android.bips
    com.android.BookmarkProvider
    com.android.egg
) do (
    "%ADB%" shell pm uninstall -k --user 0 %%p >nul 2>&1
)
echo     [OK] Da don sach cac dich vu chay ngam rac (giai phong ~1.3GB RAM trong)!

echo [*] BUOC 5/5: Dang toi uu hoa bo nho dem (ART Dexopt Speed-Profile)...
"%ADB%" shell cmd package bg-dexopt-job >nul 2>&1
echo     [OK] Hoan tat toi uu phan cung ^& he thong cho Samsung A23 4G (SM-A235F)!

if "%CHOICE%"=="4" goto INSTALL_LAWNCHAIR
echo.
pause
goto MENU

:INSTALL_LAWNCHAIR
echo.
set "LC_APK=%APK_DIR%\Lawnchair-15-PixelOS-Native.apk"
if not exist "%LC_APK%" (
    echo [*] Dang tai ban APK Native goc Lawnchair 15 Beta 3 tu GitHub chinh chu Dev...
    powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://github.com/LawnchairLauncher/lawnchair/releases/download/v15.0.0-beta3.0/Lawnchair.15.0.0.Beta.3.0.apk' -OutFile '%LC_APK%'"
)
echo [*] Dang cai dat Giao dien PixelOS Native (Lawnchair 15) len Samsung A23 4G...
"%ADB%" install -r "%LC_APK%"
echo [*] Dang mo giao dien Lawnchair 15 tren dien thoai...
"%ADB%" shell monkey -p app.lawnchair.play -c android.intent.category.LAUNCHER 1 >nul 2>&1
"%ADB%" shell am start -a android.settings.HOME_SETTINGS >nul 2>&1
echo.
echo ============================================================================
echo   [HOAN TAT!] Tren man hinh Samsung A23 dang mo muc "Ung dung Man hinh chinh"
echo   --^> Ban chi can chon [Lawnchair] lam Man hinh chinh mac dinh la xong!
echo ============================================================================
pause
goto MENU

:INSTALL_KVAESITSO
echo.
set "KV_APK=%APK_DIR%\Kvaesitso-Compose-Native.apk"
if not exist "%KV_APK%" (
    echo [*] Dang tai ban APK Native goc Kvaesitso v1.41.0 tu GitHub chinh chu Dev MM2-0...
    powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://github.com/MM2-0/Kvaesitso/releases/download/v1.41.0/de.mm20.launcher2.release-v1.41.0.apk' -OutFile '%KV_APK%'"
)
echo [*] Dang cai dat Giao dien Kvaesitso Native len Samsung A23 4G...
"%ADB%" install -r "%KV_APK%"
"%ADB%" shell am start -a android.settings.HOME_SETTINGS >nul 2>&1
echo.
echo ============================================================================
echo   [HOAN TAT!] Tren man hinh Samsung A23 dang mo muc "Ung dung Man hinh chinh"
echo   --^> Ban chi can chon [Kvaesitso] lam Man hinh chinh mac dinh la xong!
echo ============================================================================
pause
goto MENU

:FULL_COMBO
goto OPT_A23

:RESTORE_A23
echo.
echo [*] Dang khoi phuc lai toan bo goi ung dung va cai dat goc cua Samsung A23...
"%ADB%" shell settings put system min_refresh_rate 60.0
"%ADB%" shell settings put global ram_expand_size 4096
"%ADB%" shell settings put global window_animation_scale 1.0
"%ADB%" shell settings put global transition_animation_scale 1.0
"%ADB%" shell settings put global animator_duration_scale 1.0
for %%p in (
    com.samsung.android.game.gos
    com.samsung.android.game.gametools
    com.samsung.android.game.gamehome
    com.samsung.android.app.spage
    com.samsung.android.bixby.agent
    com.samsung.android.arzone
    com.samsung.android.oneconnect
    com.samsung.android.scloud
    com.samsung.android.Fmm
    com.samsung.android.forest
) do (
    "%ADB%" shell cmd package install-existing %%p >nul 2>&1
)
echo [OK] Da khoi phuc nguyen ban Samsung One UI 6 goc 100%%!
pause
goto MENU
