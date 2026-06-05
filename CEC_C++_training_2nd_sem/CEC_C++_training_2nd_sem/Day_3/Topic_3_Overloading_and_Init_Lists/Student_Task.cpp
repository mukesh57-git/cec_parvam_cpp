/*
 * =====================================================================
 * 💻 STUDENT TASK: THE ENEMY SPAWNER
 * =====================================================================
 * 
 * YOUR MISSION:
 * You are writing the code to spawn enemies in a video game. 
 * You need to give the level designers 3 different ways to spawn an enemy!
 * 
 * 1. Write a Default Constructor. It should set health to 50 and 
 *    weapon to "Fists".
 * 2. Write a 1-Parameter Constructor that accepts a custom weapon. 
 *    (It should set health to 50).
 * 3. Write a 2-Parameter Constructor that accepts custom health AND a weapon.
 * 
 * ⚠️ REQUIREMENT: You MUST use the `:` Initialization List syntax for all three!
 */

#include <iostream>
#include <string>
using namespace std;

class Enemy {
public:
    int health;
    string weapon;

    // 🛑 1. Default Constructor (Use : init list)
    
    
    // 🛑 2. 1-Parameter Constructor (Use : init list)
    
    
    // 🛑 3. 2-Parameter Constructor (Use : init list)
    
    

    void attack() {
        cout << "Enemy attacks with " << weapon << " (Health: " << health << ")" << endl;
    }
};

int main() {
    
    // 1. Create a default enemy and attack
    
    
    // 2. Create an enemy with just a "Sword" and attack
    
    
    // 3. Create an enemy with 200 health and a "Rocket Launcher" and attack
    

    return 0;
}
