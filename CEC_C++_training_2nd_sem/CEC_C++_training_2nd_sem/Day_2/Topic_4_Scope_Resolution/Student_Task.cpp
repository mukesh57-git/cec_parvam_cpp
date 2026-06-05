/*
 * =====================================================================
 * 💻 STUDENT TASK: FIX THE SHADOWING BUGS!
 * =====================================================================
 * 
 * YOUR MISSION:
 * The programmer who wrote this code used the variable name 'power' 
 * for EVERYTHING. It's causing massive confusion!
 * 
 * You need to fix the code inside `displayPowers()` so that it prints 
 * the correct numbers using the correct scope syntax.
 * 
 * 1. Print the Local power (Should be 10)
 * 2. Print the Class power using `this->` (Should be 50)
 * 3. Print the Global power using `::` (Should be 9000)
 */

#include <iostream>
using namespace std;

// The GLOBAL power
int power = 9000;

class Robot {
public:
    // The CLASS power
    int power;

    Robot(int power) {
        // Fix the shadowing here using `this->`
        power = power; 
    }

    void displayPowers() {
        // The LOCAL power
        int power = 10;

        cout << "--- POWER LEVELS ---" << endl;
        
        // 🛑 TASK: Fix these three cout statements!
        cout << "Local Power : " << power << " (Should be 10)" << endl;
        cout << "Class Power : " << power << " (Should be 50)" << endl;
        cout << "Global Power: " << power << " (Should be 9000)" << endl;
    }
};

int main() {
    Robot myRobot(50);
    myRobot.displayPowers();
    return 0;
}
