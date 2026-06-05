/*
 * POINTERS DEMONSTRATION
 * This file demonstrates the &, *, and pointer syntax.
 */

#include <iostream>
using namespace std;

int main() {
    cout << "--- THE TREASURE MAP ---" << endl;

    // 1. The House with the Gold (Normal Variable)
    int gold = 50;
    
    // 2. The Treasure Map (Pointer)
    // We use '&' to get the memory address of the gold, and store it in our map.
    int* treasureMap = &gold;

    cout << "Value of gold: " << gold << " coins" << endl;
    cout << "Address of gold (&gold): " << &gold << endl;
    cout << "What the map is holding: " << treasureMap << endl; // Prints the exact same address!

    cout << "\n--- FOLLOWING THE MAP ---" << endl;
    
    // 3. Dereferencing (Following the map using '*')
    cout << "Following the map (*treasureMap): We found " << *treasureMap << " coins!" << endl;

    // We can also change the value by following the map!
    cout << "\nPutting more gold in the house using the map..." << endl;
    *treasureMap = 500; // We didn't touch the 'gold' variable directly!

    cout << "New value of gold: " << gold << " coins" << endl;

    // --- POINTERS AND ARRAYS ---
    cout << "\n--- ARRAYS ARE SECRETLY POINTERS ---" << endl;
    int inventory[3] = {10, 20, 30};
    
    // The name of the array IS a pointer to the first element!
    int* invPointer = inventory; 

    cout << "Index 0: " << *invPointer << endl;           // Dereference the start
    cout << "Index 1: " << *(invPointer + 1) << endl;     // Pointer Math! Move 1 step forward
    cout << "Index 2: " << *(invPointer + 2) << endl;     // Pointer Math! Move 2 steps forward

    return 0;
}
