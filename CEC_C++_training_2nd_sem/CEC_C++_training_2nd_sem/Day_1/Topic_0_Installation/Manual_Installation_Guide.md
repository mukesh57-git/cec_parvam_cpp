# Manual Installation Guide

If the automated setup scripts (`setup_windows.bat` or `setup_mac.command`) do not work due to strict firewall settings, slow internet, or administrator restrictions, follow these steps to manually install the C++ environment.

---

## 1. Windows Manual Installation

### Step 1: Install Visual Studio Code
1. Download VS Code from the official site: https://code.visualstudio.com/
2. Run the installer and click "Next" through the prompts.
3. **Important**: When asked, check the boxes for "Add to PATH" and "Add 'Open with Code' action".

### Step 2: Install C++ Compiler (MinGW / w64devkit)
1. Download the `w64devkit` compiler ZIP file from GitHub: [w64devkit-1.20.0.zip](https://github.com/skeeto/w64devkit/releases/download/v1.20.0/w64devkit-1.20.0.zip)
2. Extract the contents of the ZIP file to your `C:\` drive. You should now have a folder at `C:\w64devkit`.
3. Open the Start menu, type **"Environment Variables"**, and click **"Edit the system environment variables"**.
4. Click the **"Environment Variables..."** button at the bottom.
5. Under "User variables", find the variable named **Path**, select it, and click **Edit**.
6. Click **New**, and type exactly: `C:\w64devkit\bin`
7. Click **OK** on all windows to save the changes.

### Step 3: Verify the Compiler
1. Open a new Command Prompt (`cmd`).
2. Type `g++ --version` and press Enter. If you see text with a version number, your compiler is set up correctly!

### Step 4: Install VS Code Extensions
1. Open Visual Studio Code.
2. Go to the Extensions view by clicking the blocks icon on the left sidebar (or pressing `Ctrl+Shift+X`).
3. Search for **C/C++** (by Microsoft) and click **Install**.
4. Search for **Code Runner** (by Jun Han) and click **Install**.

---

## 2. macOS Manual Installation

### Step 1: Install Homebrew (Package Manager)
1. Open the **Terminal** app.
2. Paste the following command and hit Enter:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. Wait for the installation to finish.

### Step 2: Install the GCC Compiler
1. In the Terminal, run:
   ```bash
   brew install gcc
   ```

### Step 3: Install Visual Studio Code
1. Download VS Code for Mac from: https://code.visualstudio.com/
2. Open the downloaded `.zip` file and drag **Visual Studio Code** into your **Applications** folder.

### Step 4: Install VS Code Extensions
1. Open Visual Studio Code.
2. Open the Extensions panel (`Cmd+Shift+X`).
3. Install **C/C++** (by Microsoft) and **Code Runner** (by Jun Han).

---

## 3. Testing Your Installation Manually

Once installed (whether via script or manually), verify everything works:

1. Create a folder on your Desktop named `cec_2nd_sem_c++_parvam_program`.
2. Inside that, create a folder named `day1`.
3. Inside `day1`, create a folder named `sample_program`.
4. Open the `sample_program` folder in VS Code.
5. Create a new file named `hello.cpp`.
6. Paste the following code into the file:
   ```cpp
   #include <iostream>
   using namespace std;
   
   int main() {
       cout << "C++ setup is successful! Hello World!" << endl;
       return 0;
   }
   ```
7. Click the **"Play"** button in the top right corner of VS Code (provided by the Code Runner extension).
8. Look at the terminal output at the bottom of VS Code to see if your program successfully printed the message!
