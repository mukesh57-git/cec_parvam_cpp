/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE MEMORY HACKER
 * =====================================================================
 */

#include <iostream>
using namespace std;

int main() {
    cout << "--- GAME STARTED ---" << endl;

    int playerScore = 10;
    cout << "Original Score: " << playerScore << endl;

    cout << "\n[Hacker] Infiltrating memory..." << endl;

    // 1. Create a pointer and assign it the address of playerScore (&)
    int* hackerPointer = &playerScore;

    // 2. Use the pointer (dereference it with *) to change the value to 9999
    *hackerPointer = 9999;

    // Let's see if the hack worked!
    cout << "Hacked Score: " << playerScore << endl;

    if (playerScore == 9999) {
        cout << "✅ SUCCESS! Memory successfully altered." << endl;
    } else {
        cout << "❌ FAILED! Score was not altered." << endl;
    }

    return 0;
}
