/*
 * =====================================================================
 * ✅ SOLUTION FILE: FIX THE SHADOWING BUGS
 * =====================================================================
 * Trainer Note: Ensure students see that `power` without anything 
 * defaults to the Local variable (10). They MUST use `this->` or `::` 
 * to access the others!
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
        // 1. Used this-> to assign the parameter to the class variable
        this->power = power; 
    }

    void displayPowers() {
        // The LOCAL power
        int power = 10;

        cout << "--- POWER LEVELS ---" << endl;
        
        // 2. Just 'power' gets the local variable
        cout << "Local Power : " << power << " (Should be 10)" << endl;
        
        // 3. 'this->power' gets the class member variable
        cout << "Class Power : " << this->power << " (Should be 50)" << endl;
        
        // 4. '::power' gets the global variable!
        cout << "Global Power: " << ::power << " (Should be 9000)" << endl;
    }
};

int main() {
    Robot myRobot(50);
    myRobot.displayPowers();
    return 0;
}
