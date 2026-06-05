/*
 * =====================================================================
 * 💻 STUDENT TASK: THE BUG HUNTER
 * =====================================================================
 * 
 * YOUR MISSION:
 * 1. The `Zombie` class is supposed to override the `attack()` function.
 *    But there is a typo! Add the `override` keyword to the Zombie's attack 
 *    function. The compiler will throw an error. Find the typo and fix it!
 * 
 * 2. Look at the `Vault` class. It has an `unlock()` function.
 *    Add a keyword to this function so that the `Thief` class is permanently 
 *    banned from overriding it!
 */

#include <iostream>
using namespace std;

// ==========================================

class Enemy {
public:
    virtual void attack(int damage) const {
        cout << "Enemy attacks for " << damage << " damage!" << endl;
    }
};

class Zombie : public Enemy {
public:
    // 🛑 1. Add 'override' to the end of this function. Then, fix the typo so it compiles!
    void attack(double damage) const {
        cout << "Zombie bites for " << damage << " damage! BRAINS..." << endl;
    }
};

// ==========================================

class Vault {
public:
    // 🛑 2. Add the correct keyword here to prevent anyone from overriding this!
    virtual void unlock() {
        cout << "Vault unlocked safely." << endl;
    }
};

class Thief : public Vault {
public:
    // Once you add the keyword above, this Hacker override should throw an error!
    // You can comment this out once you see the error to prove it worked.
    void unlock() {
        cout << "Thief picks the lock! Vault hacked!" << endl;
    }
};

int main() {
    cout << "--- BUG HUNTER ---" << endl;

    // Testing the Enemy polymorphic fix
    Enemy* e = new Zombie();
    e->attack(10); // Should print the Zombie bite, not the generic Enemy attack!
    
    delete e;
    return 0;
}
