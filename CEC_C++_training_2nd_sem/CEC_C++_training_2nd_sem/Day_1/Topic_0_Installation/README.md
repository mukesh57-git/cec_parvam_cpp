# Topic 0: C++ Environment Setup

Before starting the C++ training, students need their computers prepared to compile and run C++ code. The scripts in this folder automate the installation of all the necessary tools required for the concepts taught from Day 1 to Day 8.

## What will these scripts do?
When executed, the script checks your system and **skips any tool you already have installed**. If something is missing, it automatically downloads and configures:
1. **C++ Compiler (g++)**: The core tool required to compile C++ code into a running program.
2. **Visual Studio Code (VS Code)**: Our recommended lightweight code editor.
3. **VS Code Extensions**:
   - `C/C++` (by Microsoft): Enables advanced C++ syntax highlighting, autocomplete, and debugging capabilities.
   - `Code Runner`: Allows students to easily run their C++ code using a "Play" button in VS Code without needing to type terminal commands.

*(Note: Operating systems like Windows and macOS use entirely different underlying languages for executing scripts. A `.bat` file natively runs only on Windows. To ensure all students are covered regardless of their device, two separate scripts have been provided).*

---

## Instructions for Windows Users (All Windows versions)
1. Double-click the `setup_windows.bat` file.
2. A black terminal window will appear. It will automatically check for the required tools and download them if missing.
3. If Windows asks for permissions (User Account Control), click **Yes**.
4. Once it says "Setup Complete!", **press any key to close the window**.
5. Restart your computer (or completely close and reopen your terminals/VS Code) to make sure the environment paths are fully applied.

## Instructions for macOS Users
1. Open the folder containing the `setup_mac.command` file.
2. Double-click the `setup_mac.command` file.
   - *If your Mac gives a "Permission Denied" error or says it cannot be opened:*
     1. Open the **Terminal** app.
     2. Drag the `setup_mac.command` file into the terminal window, preceded by the command `sh ` (for example: `sh /path/to/setup_mac.command`).
3. The script will use Homebrew (and safely install it if it's missing) to download the compiler and VS Code. Follow any on-screen prompts.
4. Once completed, your Mac is ready to run C++ code!


---

## ▶️ How to Run the Code in this Folder
**Method 1: Using VS Code (Recommended for Students & Trainers)**
1. Open the `.cpp` file you want to run in Visual Studio Code.
2. Click the **"Play" button** (▷) in the top-right corner of the window. *(This was automatically installed by the Code Runner extension during the Topic 0 Setup).*
3. Look at the terminal at the bottom of the screen to see the output!

**Method 2: Using the Terminal (Manual Compilation)**
1. Open your terminal or command prompt.
2. Navigate to the folder containing the `.cpp` file.
3. Compile the code by typing: `g++ FileName.cpp -o program` and press Enter.
4. Run the code by typing: `./program` (Mac) or `program.exe` (Windows) and press Enter.
