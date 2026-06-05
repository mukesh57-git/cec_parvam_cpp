#!/bin/bash

echo "==================================================="
echo "C++ Environment Setup for macOS"
echo "==================================================="

# 1. Install Homebrew if not exists
if ! command -v brew &> /dev/null
then
    echo "[INSTALL] Homebrew not found. Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    # Add brew to path for the current script
    eval "$(/opt/homebrew/bin/brew shellenv)"
else
    echo "[OK] Homebrew is already installed."
fi

# 2. Check and install GCC Compiler
if ! command -v g++ &> /dev/null
then
    echo "[INSTALL] Installing C++ Compiler (gcc)..."
    brew install gcc
else
    echo "[OK] C++ Compiler is already installed."
fi

# 3. Check and install VS Code
if ! command -v code &> /dev/null
then
    echo "[INSTALL] Installing Visual Studio Code..."
    brew install --cask visual-studio-code
else
    echo "[OK] Visual Studio Code is already installed."
fi

# 4. Install Extensions
echo "[INSTALL] Installing C++ VS Code Extensions..."
code --install-extension ms-vscode.cpptools --force
code --install-extension formulahendry.code-runner --force

# 5. Create Desktop Folders and Sample Program
echo "[SETUP] Creating sample project on Desktop..."
DESKTOP_DIR="$HOME/Desktop/cec_2nd_sem_c++_parvam_program/day1/sample_program"
mkdir -p "$DESKTOP_DIR"

SAMPLE_FILE="$DESKTOP_DIR/hello.cpp"
cat << 'EOF' > "$SAMPLE_FILE"
#include <iostream>
using namespace std;
int main() {
    cout << "C++ setup is successful! Hello World from macOS!" << endl;
    return 0;
}
EOF

echo "[TEST] Compiling sample program..."
g++ "$SAMPLE_FILE" -o "$DESKTOP_DIR/hello"
if [ $? -eq 0 ]; then
    echo ""
    echo "=================[ OUTPUT ]========================="
    "$DESKTOP_DIR/hello"
    echo "===================================================="
    echo ""
else
    echo "[ERROR] Compilation failed."
fi

echo "==================================================="
echo "Setup Complete!"
echo "Your sample program is on your Desktop."
echo "==================================================="
