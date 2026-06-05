/*
 * EXCEPTION HANDLING DEMO
 * This file demonstrates how to protect dangerous code using try/catch blocks,
 * and how to throw custom error messages!
 */

#include <iostream>
#include <stdexcept> // Required for invalid_argument and runtime_error

using namespace std;

int main() {
    cout << "--- AMUSEMENT PARK ROLLERCOASTER ---" << endl;
    
    int height;
    cout << "Enter your height in cm: ";
    cin >> height;

    // 1. Set up the safety net!
    try {
        cout << "Checking height requirements..." << endl;
        
        if (height < 0) {
            // 2. Fire the flare! (Execution stops here and jumps to catch)
            throw invalid_argument("Height cannot be a negative number!");
        }
        
        if (height < 120) {
            // Another flare!
            throw runtime_error("You are too short to ride this rollercoaster.");
        }
        
        // This code ONLY runs if no flares were thrown!
        cout << "Access Granted! Enjoy the ride!" << endl;
        
    } 
    // 3. The Rescue Worker catches the flare!
    catch (const exception& e) {
        cout << "🚨 ERROR CAUGHT: " << e.what() << endl;
    }

    // Notice how the program doesn't crash! It makes it all the way to the end.
    cout << "--- NEXT CUSTOMER PLEASE ---" << endl;

    return 0;
}
