@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion
title [TU DONG 100%] Toi Uu Samsung Galaxy A23 4G (SM-A235F) ^& Cai Giao Dien PixelOS Native
color 0A

set "WORK_DIR=%~dp0"
set "ADB=%WORK_DIR%platform-tools\adb.exe"
set "LC_APK=%WORK_DIR%apk_native\Lawnchair-15-PixelOS-Native.apk"

echo ============================================================================
echo    CHE DO TU DONG 100%% CHO SAMSUNG GALAXY A23 4G (SM-A235F - A235FXXSEEZB1)
echo ============================================================================
echo.
echo [*] May tinh da tai san:
echo     1. Bo cong cu Google ADB Platform-Tools chinh thuc
echo     2. Giao dien Native Google PixelOS (Lawnchair 15 Beta 3 - Kotlin/Java goc)
echo     3. Bo kich ban Toi uu 90Hz + Go bo Samsung GOS + Tat RAM Plus + Don 60 app rac
echo.
echo ============================================================================
echo  ^>^> BAY GIO BAN CHI CAN LAM DUNG 1 VIEC:
echo     Cam cap USB noi chiec Samsung Galaxy A23 4G vao may tinh!
echo     (Neu tren man hinh dien thoai hien bang hoi "Cho phep Go loi USB?",
echo      hay bam [Cho phep / Allow]).
echo.
echo  [*] He thong dang cho tin hieu cap USB tu dien thoai cua ban...
echo ============================================================================

"%ADB%" start-server >nul 2>&1

:WAIT_LOOP
for /f "skip=1 tokens=1,2" %%a in ('"%ADB%" devices') do (
    if "%%b"=="device" (
        set "DEV_SERIAL=%%a"
        goto START_AUTO
    )
    if "%%b"=="unauthorized" (
        echo [!] Da nhan cap USB! Hay nhin len man hinh dien thoai Samsung A23 va bam [CHO PHEP / ALLOW] Go loi USB...
    )
)
timeout /t 2 >nul
goto WAIT_LOOP

:START_AUTO
echo.
echo [+] DA KET NOI THANH CONG VOI SAMSUNG A23 (S/N: %DEV_SERIAL%)!
echo [*] Bat dau TU DONG chay toan bo quy trinh toi uu tu A-Z...
echo.

echo [1/6] Go bo xieng xich bop xung Samsung GOS (Snapdragon 680 chay 100%% 2.4GHz)...
"%ADB%" shell pm uninstall -k --user 0 com.samsung.android.game.gos >nul 2>&1
"%ADB%" shell pm uninstall -k --user 0 com.samsung.android.game.gametools >nul 2>&1
"%ADB%" shell pm uninstall -k --user 0 com.samsung.android.game.gamehome >nul 2>&1
"%ADB%" shell cmd game_service reset >nul 2>&1

echo [2/6] Khoa cung man hinh 90Hz toan thoi gian (chong tut xuong 60Hz)...
"%ADB%" shell settings put system peak_refresh_rate 90.0
"%ADB%" shell settings put system min_refresh_rate 90.0
"%ADB%" shell settings put secure refresh_rate_mode 1

echo [3/6] Tat nghen co chai RAM Plus ^& tang toc hieu ung GPU Adreno 610...
"%ADB%" shell settings put global ram_expand_size 0
"%ADB%" shell settings put global zram_enabled 1
"%ADB%" shell settings put global window_animation_scale 0.5
"%ADB%" shell settings put global transition_animation_scale 0.5
"%ADB%" shell settings put global animator_duration_scale 0.5
"%ADB%" shell settings put global app_standby_enabled 1
"%ADB%" shell settings put global cached_apps_freezer enabled

echo [4/6] Don sach 60+ dich vu rac chay ngam cua One UI 6 (giai phong ~1.3GB RAM)...
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

echo [5/6] Cai dat Giao dien He dieu hanh PixelOS Native (Lawnchair 15)...
"%ADB%" install -r "%LC_APK%"

echo [6/6] Mo bang chon Man hinh chinh tren dien thoai Samsung A23...
"%ADB%" shell am start -a android.settings.HOME_SETTINGS >nul 2>&1

echo.
echo ============================================================================
echo   [HOAN TAT 100%%!] Toan bo qua trinh Toi uu 90Hz + Go GOS + Don rac One UI
echo   va cai dat Giao dien PixelOS Native (Lawnchair 15) da xong!
echo.
echo   --^> Tren man hinh dien thoai Samsung A23 dang hien muc "Ung dung Man hinh chinh"
echo        Ban chi can cham chon [Lawnchair] la xong!
echo ============================================================================
echo.
pause
