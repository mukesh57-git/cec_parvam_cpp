/*
 * STACK VS HEAP DEMONSTRATION
 * This file demonstrates creating objects on the automatic Stack 
 * versus the manual Heap, and shows the Dot vs Arrow operators.
 */

#include <iostream>
#include <string>
using namespace std;

class Car {
public:
    string brand;

    // Constructor: Prints a message when the object is BORN
    Car(string b) {
        brand = b;
        cout << "[+] BORN: " << brand << " has been created in memory!" << endl;
    }

    // Destructor: Prints a message when the object is DESTROYED (cleaned up)
    ~Car() {
        cout << "[-] DESTROYED: " << brand << " has been erased from memory!" << endl;
    }

    void honk() {
        cout << brand << " says BEEP BEEP!" << endl;
    }
};

int main() {
    cout << "========== 1. THE STACK (THE BACKPACK) ==========" << endl;
    
    // Creating an object on the Stack (Automatic Memory)
    Car stackCar("Toyota (Stack)");
    
    // Using the DOT operator because it is right here in our backpack
    stackCar.honk();

    cout << "\n========== 2. THE HEAP (THE STORAGE UNIT) ==========" << endl;
    
    // Creating an object on the Heap (Manual Memory)
    // We must use 'new' and a Pointer (*).
    Car* heapCar = new Car("Ferrari (Heap)");
    
    // Using the ARROW operator because the object is far away in storage
    heapCar->honk();

    cout << "\n========== 3. CLEANING UP ==========" << endl;
    
    // We MUST manually delete the Heap object, or we cause a Memory Leak!
    cout << "Manually deleting the Ferrari..." << endl;
    delete heapCar; 

    // The Stack object (Toyota) will automatically be deleted 
    // when we hit 'return 0;'. We don't have to do anything!
    cout << "Program finishing. Watch the Stack object delete itself automatically:" << endl;

    return 0;
}
