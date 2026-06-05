/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE BUG HUNTER
 * =====================================================================
 */

#include <iostream>
using namespace std;

class Enemy {
public:
    virtual void attack(int damage) const {
        cout << "Enemy attacks for " << damage << " damage!" << endl;
    }
};

class Zombie : public Enemy {
public:
    // 1. Added 'override'. The typo was that the parameter was a 'double' instead of an 'int'!
    void attack(int damage) const override {
        cout << "Zombie bites for " << damage << " damage! BRAINS..." << endl;
    }
};

// ==========================================

class Vault {
public:
    // 2. Added 'final' to prevent the Thief from picking the lock!
    virtual void unlock() final {
        cout << "Vault unlocked safely." << endl;
    }
};

/* 
class Thief : public Vault {
public:
    // This now throws an error because unlock() is final!
    void unlock() override {
        cout << "Thief picks the lock! Vault hacked!" << endl;
    }
};
*/

int main() {
    cout << "--- BUG HUNTER ---" << endl;

    Enemy* e = new Zombie();
    e->attack(10); 
    
    delete e;
    return 0;
}
