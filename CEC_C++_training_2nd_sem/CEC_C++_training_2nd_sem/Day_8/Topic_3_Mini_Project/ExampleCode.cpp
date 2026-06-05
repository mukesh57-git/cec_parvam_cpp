/*
 * CONFIG READER DEMO (Example Code)
 * A real-world example of File Handling and string manipulation.
 * It reads an "app.config" file and loads the settings!
 */

#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {
    // 1. Create a fake config file to read from
    ofstream configFile("app.config");
    configFile << "# Application Configuration" << endl;
    configFile << "app_name=LibraryManagerPro" << endl;
    configFile << "version=3.0" << endl;
    configFile << "max_books=10000" << endl;
    configFile.close();

    // 2. Read the config file!
    ifstream inFile("app.config");
    string line;

    cout << "--- LOADING SYSTEM SETTINGS ---" << endl;

    if (inFile.is_open()) {
        while (getline(inFile, line)) {
            // Skip comments (lines starting with #) and empty lines
            if (line.empty() || line[0] == '#') {
                continue;
            }

            // Find the '=' sign to split the key and value
            int equalsPos = line.find('=');
            
            if (equalsPos != string::npos) { // If '=' was found
                string key = line.substr(0, equalsPos);
                string value = line.substr(equalsPos + 1);
                
                cout << "Loaded Setting -> " << key << " : " << value << endl;
            }
        }
        inFile.close();
        cout << "--- SYSTEM READY ---" << endl;
    } else {
        cout << "Error: Could not load configuration file!" << endl;
    }

    return 0;
}
