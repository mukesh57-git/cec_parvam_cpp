/*
 * =====================================================================
 * ✅ SOLUTION FILE: FIX THE HACKED GAME!
 * =====================================================================
 * Trainer Note: Point out how `takeDamage` protects the `health` 
 * variable from ever going negative, which direct access couldn't prevent!
 */

#include <iostream>
#include <string>
using namespace std;

class Player {
// 1. Moved health to the private vault!
private: 
    int health;

public:
    string name;

    Player(string n) {
        name = n;
        health = 100;
    }

    // 2. Public Setter (Safely changes health)
    void takeDamage(int damage) {
        if (damage > 0) {
            health = health - damage;
            // Ensure health doesn't drop below zero
            if (health < 0) {
                health = 0;
            }
            cout << name << " took " << damage << " damage!" << endl;
        }
    }

    // 3. Public Getter (Safely views health)
    int getHealth() {
        return health;
    }
};

int main() {
    Player p1("Hero");

    // 4. Using the Getter instead of direct access
    cout << "Initial Health: " << p1.getHealth() << endl;

    // The Hacker attack `p1.health = 999999;` no longer compiles!
    // We are protected!

    // 5. Using the Setter instead of direct subtraction
    p1.takeDamage(50); 
    
    cout << "Health after damage: " << p1.getHealth() << endl;

    return 0;
}
