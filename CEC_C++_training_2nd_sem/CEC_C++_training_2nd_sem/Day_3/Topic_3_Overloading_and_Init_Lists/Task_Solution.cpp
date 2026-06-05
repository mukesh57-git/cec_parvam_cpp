/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE ENEMY SPAWNER
 * =====================================================================
 * Trainer Note: Point out how clean the code looks when the {} body 
 * is completely empty because all the work was done in the init list!
 */

#include <iostream>
#include <string>
using namespace std;

class Enemy {
public:
    int health;
    string weapon;

    // 1. Default Constructor using Init List
    Enemy() : health(50), weapon("Fists") {
        // Body is completely empty!
    }
    
    // 2. 1-Parameter Constructor using Init List
    Enemy(string w) : health(50), weapon(w) {
        // Body is completely empty!
    }
    
    // 3. 2-Parameter Constructor using Init List
    Enemy(int h, string w) : health(h), weapon(w) {
        // Body is completely empty!
    }

    void attack() {
        cout << "Enemy attacks with " << weapon << " (Health: " << health << ")" << endl;
    }
};

int main() {
    
    // 1. Calls Default
    Enemy e1;
    e1.attack();
    
    // 2. Calls 1-Parameter
    Enemy e2("Sword");
    e2.attack();
    
    // 3. Calls 2-Parameter
    Enemy e3(200, "Rocket Launcher");
    e3.attack();

    return 0;
}
