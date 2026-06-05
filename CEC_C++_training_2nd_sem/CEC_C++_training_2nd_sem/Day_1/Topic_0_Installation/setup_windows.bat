@echo off
setlocal EnableDelayedExpansion

echo ===================================================
echo C++ Environment Setup for Windows
echo ===================================================

:: 1. Check and install VS Code
where code >nul 2>nul
if %ERRORLEVEL% == 0 (
    echo [OK] Visual Studio Code is already installed.
) else (
    echo [INSTALL] Downloading Visual Studio Code...
    powershell -Command "Invoke-WebRequest -Uri 'https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user' -OutFile '%TEMP%\vscode_installer.exe'"
    echo [INSTALL] Installing Visual Studio Code...
    start /wait "" "%TEMP%\vscode_installer.exe" /VERYSILENT /SUPPRESSMSGBOXES /MERGETASKS=!runcode
    echo [OK] Visual Studio Code installed.
    :: Add to temporary path to install extensions later in this script
    set "PATH=%LOCALAPPDATA%\Programs\Microsoft VS Code\bin;%PATH%"
)

:: 2. Check and install GCC Compiler (MinGW via w64devkit)
where g++ >nul 2>nul
if %ERRORLEVEL% == 0 (
    echo [OK] C++ Compiler (g++) is already installed.
) else (
    echo [INSTALL] Downloading C++ Compiler (w64devkit)...
    powershell -Command "Invoke-WebRequest -Uri 'https://github.com/skeeto/w64devkit/releases/download/v1.20.0/w64devkit-1.20.0.zip' -OutFile '%TEMP%\w64devkit.zip'"
    echo [INSTALL] Extracting Compiler to C:\w64devkit (this may take a minute)...
    powershell -Command "Expand-Archive -Path '%TEMP%\w64devkit.zip' -DestinationPath 'C:\' -Force"
    
    echo [INSTALL] Adding Compiler to System PATH...
    :: Safely append to PATH using powershell to avoid 1024 char limit of setx
    powershell -Command "$p = [Environment]::GetEnvironmentVariable('PATH', 'User'); if ($p -notlike '*C:\w64devkit\bin*') { [Environment]::SetEnvironmentVariable('PATH', $p + ';C:\w64devkit\bin', 'User') }"
    
    echo [OK] C++ Compiler installed.
    set "PATH=C:\w64devkit\bin;%PATH%"
)

:: 3. Install VS Code Extensions
echo [INSTALL] Installing C++ VS Code Extensions...
call code --install-extension ms-vscode.cpptools --force
call code --install-extension formulahendry.code-runner --force

:: 4. Create Desktop Folders and Sample Program
echo [SETUP] Creating sample project on Desktop...
set "DESKTOP_DIR=%USERPROFILE%\Desktop\cec_2nd_sem_c++_parvam_program\day1\sample_program"
if not exist "%DESKTOP_DIR%" (
    mkdir "%DESKTOP_DIR%"
)

set "SAMPLE_FILE=%DESKTOP_DIR%\hello.cpp"
echo #include ^<iostream^> > "%SAMPLE_FILE%"
echo using namespace std; >> "%SAMPLE_FILE%"
echo int main() { >> "%SAMPLE_FILE%"
echo     cout ^<^< "C++ setup is successful! Hello World from Windows!" ^<^< endl; >> "%SAMPLE_FILE%"
echo     return 0; >> "%SAMPLE_FILE%"
echo } >> "%SAMPLE_FILE%"

echo [TEST] Compiling sample program...
g++ "%SAMPLE_FILE%" -o "%DESKTOP_DIR%\hello.exe"
if %ERRORLEVEL% == 0 (
    echo.
    echo =================[ OUTPUT ]=========================
    "%DESKTOP_DIR%\hello.exe"
    echo ====================================================
    echo.
) else (
    echo [ERROR] Compilation failed. You may need to restart your computer to update the system PATH.
)

echo ===================================================
echo Setup Complete! 
echo Your sample program is on your Desktop.
echo Please close and reopen any terminal windows to apply PATH changes.
echo ===================================================
pause
