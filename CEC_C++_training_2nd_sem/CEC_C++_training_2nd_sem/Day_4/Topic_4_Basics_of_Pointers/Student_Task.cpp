/*
 * =====================================================================
 * 💻 STUDENT TASK: THE MEMORY HACKER
 * =====================================================================
 * 
 * YOUR MISSION:
 * You are writing a cheat code for a game. 
 * The player's score is stored in a variable called `playerScore`.
 * 
 * YOUR TASK:
 * 1. Create an integer pointer called `hackerPointer`.
 * 2. Store the memory address of `playerScore` inside your pointer.
 * 3. Use the pointer to "Dereference" and change the score to 9999.
 *    (You are NOT allowed to write `playerScore = 9999;` ! You must use the pointer!)
 */

#include <iostream>
using namespace std;

int main() {
    cout << "--- GAME STARTED ---" << endl;

    int playerScore = 10;
    cout << "Original Score: " << playerScore << endl;

    cout << "\n[Hacker] Infiltrating memory..." << endl;

    // 🛑 1. Create a pointer and assign it the address of playerScore:
    
    

    // 🛑 2. Use the pointer (dereference it!) to change the value to 9999:
    
    


    // Let's see if your hack worked!
    cout << "Hacked Score: " << playerScore << endl;

    if (playerScore == 9999) {
        cout << "✅ SUCCESS! Memory successfully altered." << endl;
    } else {
        cout << "❌ FAILED! Score was not altered." << endl;
    }

    return 0;
}
