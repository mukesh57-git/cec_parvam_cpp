/*
 * FILE HANDLING DEMO
 * This file demonstrates how to write to a text file using 'ofstream',
 * and how to read from a text file using 'ifstream'.
 */

#include <iostream>
#include <fstream> // Required for File Handling!
#include <string>

using namespace std;

int main() {
    string filename = "diary.txt";

    // ==========================================
    // 1. WRITING TO THE FILE (ofstream)
    // ==========================================
    cout << "--- 1. WRITING TO FILE ---" << endl;
    
    // Create the 'pen' and open the file
    // (If the file doesn't exist, it will be created in the same folder as this code!)
    ofstream myPen(filename);

    if (myPen.is_open()) {
        cout << "Writing secret thoughts to " << filename << "..." << endl;
        
        myPen << "Dear Diary," << endl;
        myPen << "Today I learned C++ File Handling." << endl;
        myPen << "It is surprisingly easy!" << endl;
        
        // Always close the file when you are done!
        myPen.close(); 
        cout << "Successfully saved and closed the file.\n" << endl;
    } else {
        cout << "ERROR: Could not open file for writing!" << endl;
    }


    // ==========================================
    // 2. READING FROM THE FILE (ifstream)
    // ==========================================
    cout << "--- 2. READING FROM FILE ---" << endl;
    
    // Create the 'eyes' to read the file
    ifstream myEyes(filename);
    string line;

    if (myEyes.is_open()) {
        cout << "Reading contents of " << filename << ":" << endl;
        cout << "-----------------------------------" << endl;
        
        // getline() reads one line at a time. It returns 'false' when it hits the end of the file!
        while (getline(myEyes, line)) {
            cout << line << endl;
        }
        
        cout << "-----------------------------------" << endl;
        
        // Always close the file when you are done!
        myEyes.close();
    } else {
        cout << "ERROR: Could not open file for reading!" << endl;
    }

    return 0;
}
