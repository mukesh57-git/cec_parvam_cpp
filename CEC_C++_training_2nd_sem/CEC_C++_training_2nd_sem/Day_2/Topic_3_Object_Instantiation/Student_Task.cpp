/*
 * =====================================================================
 * 💻 STUDENT TASK: SPAWN THE BOSS MONSTER!
 * =====================================================================
 * 
 * YOUR MISSION:
 * You are coding a video game. The final Boss is too massive to fit on 
 * the Stack. You must spawn him on the Heap!
 * 
 * 1. Create a pointer to a 'Boss' object and use 'new' to spawn him on the Heap.
 * 2. Use the ARROW operator (->) to make him use the 'attack()' method.
 * 3. Before the program ends, you MUST defeat him by using 'delete' to 
 *    free up the memory!
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
    
    // 1. Spawn the boss on the Heap using a Pointer (*) and 'new'. Give him a name!
    
    
    // 2. Make the boss attack using the ARROW operator (->).
    
    
    // 3. Prevent a memory leak! Delete the boss!
    
    
    return 0;
}
