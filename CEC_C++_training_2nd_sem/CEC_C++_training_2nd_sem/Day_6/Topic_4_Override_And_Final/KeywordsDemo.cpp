/*
 * OVERRIDE AND FINAL DEMO
 * This file demonstrates how 'override' catches human errors,
 * and how 'final' protects classes and functions from being modified.
 */

#include <iostream>
using namespace std;

// ==========================================
// 1. THE OVERRIDE KEYWORD
// ==========================================
class Player {
public:
    virtual void jump(float height) const {
        cout << "Player jumps " << height << " meters high." << endl;
    }
};

class SuperPlayer : public Player {
public:
    // Try deleting the 'const' word below, or changing 'float' to 'double'.
    // Because we used 'override', the compiler will immediately scream at you!
    // It guarantees that our signature exactly matches the Base class.
    void jump(float height) const override {
        cout << "SuperPlayer flies " << height * 10 << " meters high!" << endl;
    }
};


// ==========================================
// 2. THE FINAL KEYWORD
// ==========================================
class SecureSystem {
public:
    // No child class is allowed to change how the password check works!
    virtual bool checkPassword(int pass) final {
        return pass == 1234;
    }
};

class SubSystem : public SecureSystem {
public:
    // 🛑 UNCOMMENTING THE CODE BELOW WILL CAUSE A COMPILER ERROR!
    // bool checkPassword(int pass) override {
    //     return true; // Hacker trying to bypass security!
    // }
};

// You can also make a whole class final!
class UltimateBoss final {
    // ...
};

// 🛑 UNCOMMENTING THE CODE BELOW WILL CAUSE A COMPILER ERROR!
// class FakeBoss : public UltimateBoss { };


int main() {
    cout << "--- SAFETY FIRST! ---" << endl;

    Player* p = new SuperPlayer();
    p->jump(5.0f); // Safely runs the SuperPlayer version!
    
    delete p;

    SecureSystem s;
    if (s.checkPassword(1234)) {
        cout << "System unlocked safely!" << endl;
    }

    return 0;
}
