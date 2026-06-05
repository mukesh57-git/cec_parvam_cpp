/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE SECRET AGENT
 * =====================================================================
 */

#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {
    cout << "--- SECURE TERMINAL ACTIVATED ---" << endl;

    string filename = "top_secret.txt";

    // PART 1: Writing
    ofstream outFile(filename);

    if (outFile.is_open()) {
        outFile << "AGENT 007 LOG:" << endl;
        outFile << "Target located at the coffee shop." << endl;
        outFile << "Mission accomplished. Awaiting extraction." << endl;
        
        outFile.close();
        cout << "Message securely written to drive.\n" << endl;
    } else {
        cout << "ERROR: Could not write to secure drive!" << endl;
    }

    // PART 2: Reading
    ifstream inFile(filename);
    string line;

    if (inFile.is_open()) {
        cout << "--- DECRYPTING MESSAGE ---" << endl;
        
        while (getline(inFile, line)) {
            cout << "> " << line << endl;
        }
        
        inFile.close();
    } else {
        cout << "ERROR: Could not read from secure drive!" << endl;
    }

    return 0;
}
