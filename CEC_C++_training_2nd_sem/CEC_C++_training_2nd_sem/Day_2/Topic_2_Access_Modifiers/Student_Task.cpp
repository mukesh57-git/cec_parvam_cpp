/*
 * =====================================================================
 * 💻 STUDENT TASK: FIX THE HACKED GAME!
 * =====================================================================
 * 
 * YOUR MISSION:
 * The Player class below was written by a bad programmer. 
 * They left the player's 'health' PUBLIC!
 * 
 * In the main() function, a hacker changes the health to 99999!
 * 
 * Your job:
 * 1. Move 'health' into the 'private:' section.
 * 2. Create a public "Setter" method called `void takeDamage(int damage)`.
 *    It should safely subtract damage from health, but ensure health 
 *    doesn't drop below 0!
 * 3. Create a public "Getter" method called `int getHealth()`.
 *    It should return the current health so the screen can print it.
 * 4. Update the main() function to use your new safe methods instead of 
 *    the direct hacks!
 */

#include <iostream>
#include <string>
using namespace std;

class Player {
public: // Uh oh... this is public!
    int health;
    string name;

    Player(string n) {
        name = n;
        health = 100;
    }
};

int main() {
    Player p1("Hero");

    cout << "Initial Health: " << p1.health << endl;

    // 🛑 THE HACKER ATTACKS! (Fix this by making health private!)
    p1.health = 999999; 
    cout << "Hacked Health: " << p1.health << endl;

    // 🛑 Direct access to health (Change this to use takeDamage() instead!)
    p1.health = p1.health - 50; 
    
    // 🛑 Direct access to health (Change this to use getHealth() instead!)
    cout << "Health after damage: " << p1.health << endl;

    return 0;
}
