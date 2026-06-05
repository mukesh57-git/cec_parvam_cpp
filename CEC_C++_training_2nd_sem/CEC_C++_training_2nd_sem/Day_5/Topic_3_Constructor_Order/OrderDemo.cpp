/*
 * CONSTRUCTOR & DESTRUCTOR ORDER DEMO
 * This file demonstrates the execution order of constructors (Top-Down)
 * and destructors (Bottom-Up), and how to pass arguments to a Base class.
 */

#include <iostream>
#include <string>
using namespace std;

// ==========================================
// 1. ORDER OF EXECUTION
// ==========================================
class A {
public:
    A() { cout << " [Construct] A built (Foundation)" << endl; }
    ~A() { cout << " [Destruct]  A destroyed" << endl; }
};

class B : public A {
public:
    B() { cout << " [Construct] B built (Roof)" << endl; }
    ~B() { cout << " [Destruct]  B destroyed" << endl; }
};

// ==========================================
// 2. PASSING ARGUMENTS
// ==========================================
class Enemy {
protected:
    string name;

public:
    // This Base constructor requires a string!
    Enemy(string enemyName) : name(enemyName) {
        cout << "  -> Enemy Base initialized with name: " << name << endl;
    }
};

class Zombie : public Enemy {
public:
    // The Zombie MUST take a string and pass it UP to the Enemy using ': Enemy(zName)'
    Zombie(string zName) : Enemy(zName) {
        cout << "  -> Zombie Child completely built!" << endl;
    }
};

int main() {
    cout << "--- PART 1: EXECUTION ORDER ---" << endl;
    cout << "Spawning Object B..." << endl;
    
    // We use a scope block { } to force the object to be destroyed immediately
    {
        B myObject;
    } 
    // myObject is destroyed here at the closing brace!

    cout << "\n--- PART 2: PASSING ARGUMENTS ---" << endl;
    cout << "Spawning Zombie 'Walker'..." << endl;
    
    Zombie myZombie("Walker");

    cout << "\nProgram ending..." << endl;
    return 0;
}
