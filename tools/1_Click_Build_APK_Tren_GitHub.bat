@echo off
chcp 65001 >nul
title DONG GOI APK TREN DAM MAY GITHUB (0%% NANG MAY)
color 0A

cd /d "%~dp0.."
echo ============================================================================
echo   DANG DAY MA NGUON LEN GITHUB ACTIONS DE BIEN DICH FILE .APK & ROM...
echo ============================================================================
echo.

gh repo view nova-mobile-os >nul 2>nul
if %errorlevel% neq 0 (
    echo [1/2] Dang tao kho chua Public "nova-mobile-os" tren GitHub cua ban...
    gh repo create nova-mobile-os --public --source=. --remote=origin --push
) else (
    echo [1/2] Dang cap nhat code len GitHub...
    git push -u origin main --force
)

echo.
echo [2/2] HOAN TAT! May chu GitHub Actions dang tu dong bien dich file:
echo       - NovaOS_Xiaomi8_Launcher.apk (Chay muot 90FPS tren GPU Adreno)
echo       - NovaOS_A16_dipper_SafeTest_DSU.zip
echo.
echo Dang mo trang theo doi tien trinh va tai file tren trinh duyet...
start https://github.com/buiduchuy2010qn-prog/nova-mobile-os/actions
pause
