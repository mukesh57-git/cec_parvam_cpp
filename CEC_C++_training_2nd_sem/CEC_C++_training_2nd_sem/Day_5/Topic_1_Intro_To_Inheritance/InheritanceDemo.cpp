/*
 * INHERITANCE DEMONSTRATION
 * This file shows how a Derived class inherits functions from a Base class,
 * and how the 'protected' access modifier works.
 */

#include <iostream>
#include <string>
using namespace std;

// ==========================================
// 1. THE BASE CLASS (PARENT)
// ==========================================
class Enemy {
protected:
    // Protected means: Main() cannot touch this, but my children (Zombie) CAN!
    int health;
    int attackDamage;

public:
    Enemy(int h, int dmg) : health(h), attackDamage(dmg) {}

    // Every enemy in the game can take damage
    void takeDamage(int damage) {
        health -= damage;
        cout << "[Enemy] Took " << damage << " damage! Health is now " << health << "." << endl;
    }
};

// ==========================================
// 2. THE DERIVED CLASS (CHILD)
// ==========================================
// The ':' means "Zombie inherits from Enemy"
class Zombie : public Enemy {
private:
    int brainsEaten; // Something unique ONLY to Zombies

public:
    // The Zombie constructor must pass the health and damage up to the Enemy constructor!
    Zombie() : Enemy(100, 15) {
        brainsEaten = 0;
    }

    // Zombies have their own special attack
    void bite() {
        cout << "[Zombie] *CHOMP* Dealt " << attackDamage << " damage!" << endl;
        brainsEaten++;
    }

    void brag() {
        // We can access 'health' directly because it is 'protected' in the parent class!
        cout << "[Zombie] I have eaten " << brainsEaten << " brains, and I have " 
             << health << " health left!" << endl;
    }
};

int main() {
    cout << "--- VIDEO GAME ENEMY DEMO ---" << endl;

    // Create a Zombie
    Zombie walker;

    // The Zombie can use its OWN functions:
    walker.bite();
    walker.bite();

    // The Zombie can ALSO use the functions it INHERITED from Enemy!
    walker.takeDamage(40); 

    // Use its own function again
    walker.brag();

    // 🛑 DANGER: We cannot touch health from main() because it is protected!
    // walker.health = 5000; // ERROR!

    return 0;
}
