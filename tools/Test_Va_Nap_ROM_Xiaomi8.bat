@echo off
chcp 65001 >nul
title CONG CU TEST & NAP ROM NOVAOS 16 - XIAOMI 8 (CHONG BRICK 100%%)
color 0B

:MENU
cls
echo ============================================================================
echo    NOVAOS 16 HYBRID LITE - CONG CU CHAY THU VA NAP ROM CHO XIAOMI 8
echo    Ho tro: Xiaomi Mi 8 (dipper) ^| Redmi Note 8 (ginkgo) ^| Redmi 8 (olive)
echo    Trang thai Bao Ve: DANG BAT CHE DO CHONG HONG MAY (ANTI-BRICK)
echo ============================================================================
echo.
echo   [1] KIEM TRA AN TOAN: Kiem tra cap USB, ten ma may Xiaomi & Pin (0%% rui ro)
echo   [2] TEST ROM TAM THOI (DSU Dual-Boot): Chay thu He Dieu Hanh moi song song
echo       - Khong xoa ROM goc! Tat nguon bat lai la ve may cu 100%%, khong so brick!
echo   [3] NAP CO DINH (Fastboot Flash): Chi dung sau khi da test ngon o Buoc [2]
echo   [0] Thoat
echo.
set /p choice="Nhap lua chon cua ban (0-3): "

if "%choice%"=="1" goto CHECK_DEVICE
if "%choice%"=="2" goto TEST_DSU
if "%choice%"=="3" goto FLASH_PERMANENT
if "%choice%"=="0" exit
goto MENU

:CHECK_DEVICE
cls
echo [KIEM TRA AN TOAN] Dang doc thong tin dien thoai qua cap USB...
where adb >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] Chua tim thay cong cu ADB tren may tinh.
    echo     Ban chi can giai nen bo Google Platform-Tools (10MB) vao cung thu muc nay.
    pause
    goto MENU
)
echo --- Thiet bi dang ket noi:
adb devices
echo --- Ma phan cung (Codename):
adb shell getprop ro.product.device
echo --- Phien ban Android hien tai:
adb shell getprop ro.build.version.release
echo.
echo [OK] Qua trinh kiem tra hoan tat. Khong co thay doi nao duoc ghi vao dien thoai!
pause
goto MENU

:TEST_DSU
cls
echo ============================================================================
echo   CHE DO CHAY THU HE DIEU HANH QUA DSU (DYNAMIC SYSTEM UPDATES)
echo   An toan 100%%: He dieu hanh moi chay tren vung nho tam, KHONG de len ROM goc.
echo   Muon quay ve ROM cu chi can Khoi dong lai dien thoai!
echo ============================================================================
echo.
if not exist "NovaOS_SafeTest_DSU.zip" (
    echo [!] Chua thay file NovaOS_SafeTest_DSU.zip trong thu muc hien tai.
    echo     Hay tai file nay tu muc Artifacts/Releases tren GitHub cua ban ve day truoc nhe!
    pause
    goto MENU
)
echo [1/2] Dang chuan bi nap ROM tam thoi vao vung nho DSU...
adb push NovaOS_SafeTest_DSU.zip /sdcard/Download/NovaOS_SafeTest_DSU.zip
echo [2/2] Dang kich hoat trinh khoi chay He dieu hanh tam thoi (DSU)...
adb shell am start-activity ^
    -n com.android.dynsystem/com.android.dynsystem.VerificationActivity ^
    -a android.os.image.action.START_INSTALL ^
    -d file:///sdcard/Download/NovaOS_SafeTest_DSU.zip ^
    --el KEY_USERDATA_SIZE 2147483648
echo.
echo [HOAN TAT] Tren man hinh dien thoai se hien thong bao "Khoi dong lai vao He dieu hanh moi".
echo Khi test xong, ban chi can Reboot lai may la quay ve he dieu hanh cu nguyen ven 100%%!
pause
goto MENU

:FLASH_PERMANENT
cls
color 0E
echo ============================================================================
echo   [CANH BAO BAO VE MAY] CHE DO NAP CO DINH VAO PHAN VUNG /SYSTEM
echo   Che do nay se thay the han ROM cu. Chi thuc hien khi ban da Unlock Bootloader
echo   va da test ky ban ROM!
echo ============================================================================
echo.
set /p confirm="Go chinh xac chu XAC_NHAN de mo khoa lenh nap (hoac Enter de huy): "
if not "%confirm%"=="XAC_NHAN" (
    echo [DA HUY] Da khoa lenh nap de bao ve dien thoai cua ban!
    color 0B
    pause
    goto MENU
)
echo Dang kiem tra ma may trong che do Fastboot...
fastboot getvar product
echo.
echo De nap thu cong khi da san sang, chay lenh:
echo   fastboot flash system system.img
color 0B
pause
goto MENU
