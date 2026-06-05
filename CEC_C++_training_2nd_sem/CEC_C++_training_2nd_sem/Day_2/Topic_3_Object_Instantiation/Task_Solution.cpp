/*
 * =====================================================================
 * ✅ SOLUTION FILE: SPAWN THE BOSS MONSTER
 * =====================================================================
 * Trainer Note: Watch the output console to show students that the 
 * "VICTORY" destructor message only prints because we called 'delete'!
 */

#include <iostream>
#include <string>
using namespace std;

class Boss {
public:
    string name;

    Boss(string n) {
        name = n;
        cout << "⚠️ WARNING: Boss " << name << " spawned on the Heap!" << endl;
    }

    ~Boss() {
        cout << "🎉 VICTORY: Boss " << name << " was deleted from memory!" << endl;
    }

    void attack() {
        cout << name << " uses FIREBALL! -9999 Damage!" << endl;
    }
};

int main() {
    
    // 1. Spawn on the Heap using 'new' and a pointer
    Boss* finalBoss = new Boss("Bowser");
    
    // 2. Access using the ARROW operator
    finalBoss->attack();
    
    // 3. Delete to prevent memory leak
    delete finalBoss;
    
    return 0;
}
