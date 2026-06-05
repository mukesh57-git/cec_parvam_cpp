/*
 * ARROW OPERATOR DEMO
 * This file demonstrates how to access members of an object when you 
 * only have a pointer to it, using the Arrow Operator (->).
 */

#include <iostream>
#include <string>
using namespace std;

class Player {
public:
    string name;
    int health;

    Player(string n, int h) : name(n), health(h) {}

    // Default constructor (required when making arrays of objects!)
    Player() : name("Unknown"), health(100) {}

    void showStats() {
        cout << "Player: " << name << " | HP: " << health << endl;
    }
};

int main() {
    cout << "--- 1. SINGLE OBJECT POINTER ---" << endl;
    
    // Spawn a player on the Heap
    Player* p1 = new Player("Arjun", 100);

    // ILLEGAL: p1.name (Compiler says: p1 is a pointer, not an object!)
    
    // CLUNKY: (*p1).name
    cout << "Clunky access: " << (*p1).name << endl;

    // ELEGANT: The Arrow Operator!
    cout << "Elegant access: " << p1->name << endl;
    
    // Calling a function using the arrow
    p1->showStats();

    delete p1;


    cout << "\n--- 2. ARRAY OF OBJECTS ---" << endl;
    
    // Spawn an array of 3 players on the Heap
    Player* team = new Player[3];

    // Initialize them
    team[0] = Player("Ravi", 120);
    team[1] = Player("Priya", 150);
    team[2] = Player("Sneha", 90);

    // Even though 'team' is a pointer, the brackets [0] automatically dereference it!
    // So, we go back to using the DOT operator!
    for (int i = 0; i < 3; i++) {
        team[i].showStats(); 
    }

    delete[] team;

    return 0;
}
