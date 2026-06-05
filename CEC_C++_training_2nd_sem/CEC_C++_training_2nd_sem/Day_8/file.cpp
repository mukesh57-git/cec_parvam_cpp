#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // === WRITING TO A FILE ===
    ofstream outFile("example.txt");   // Open file for writing
    
    if (outFile.is_open()) {
        outFile << "Hello, File!" << endl;
        outFile << "This is line 2." << endl;
        outFile << "C++ file handling is easy!" << endl;
        outFile.close();               // Always close the file
        cout << "File written successfully!" << endl;
    } else {
        cout << "Error: Could not open file for writing!" << endl;
    }
    
    // === READING FROM A FILE ===
    ifstream inFile("example.txt");    // Open file for reading
    
    if (inFile.is_open()) {
        string line;
        cout << "\nFile contents:" << endl;
        while (getline(inFile, line)) {  // Read line by line
            cout << line << endl;
        }
        inFile.close();                // Always close the file
    } else {
        cout << "Error: Could not open file for reading!" << endl;
    }
    
    return 0;
}