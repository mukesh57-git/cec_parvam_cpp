/*
 * DESTRUCTORS & RAII DEMONSTRATION
 * This file shows how RAII perfectly protects you from memory leaks.
 * Notice how there is NO `delete` keyword in the main() function!
 */

#include <iostream>
using namespace std;

class SmartArray {
private:
    int* arr;
    int size;

public:
    // 1. CONSTRUCTOR (Acquires the Resource)
    SmartArray(int s) : size(s) {
        arr = new int[size]; // Request Heap Memory
        cout << "[Janitor] Acquired " << size << " blocks of memory." << endl;
    }

    // 2. DESTRUCTOR (Releases the Resource automatically!)
    ~SmartArray() {
        delete[] arr; // Give the Heap Memory back!
        cout << "[Janitor] Cleaned up " << size << " blocks of memory automatically! No leaks!" << endl;
    }

    void simulateWork() {
        cout << "   -> Doing lots of heavy calculations..." << endl;
        // Imagine an error happens here and the function has to quit early!
        // In a normal program, this would cause a massive memory leak.
        // But with RAII, the Destructor will STILL run and save us!
    }
};

void dangerousFunction() {
    cout << "\n--- Entering Dangerous Function ---" << endl;
    
    // Create an object on the stack. Its internal memory is on the heap!
    SmartArray myArray(1000); 
    
    myArray.simulateWork();
    
    cout << "--- Exiting Dangerous Function ---" << endl;
    // Right here, as the function ends, myArray goes out of scope.
    // The Destructor is immediately triggered!
}

int main() {
    cout << "Starting program..." << endl;
    
    dangerousFunction();
    
    cout << "\nBack in main(). The memory was already cleaned up!" << endl;
    return 0;
}
