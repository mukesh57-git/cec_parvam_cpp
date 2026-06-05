/*
 * DYNAMIC MEMORY DEMO
 * This file demonstrates how to allocate memory on the Heap using 'new',
 * and how to properly clean it up using 'delete' to prevent Memory Leaks!
 */

#include <iostream>
using namespace std;

int main() {
    cout << "--- 1. SINGLE VARIABLE ALLOCATION ---" << endl;
    
    // Requesting a single integer on the Heap
    // 'p' is just the remote control (pointer). The actual int lives on the Heap!
    int* p = new int;        
    
    *p = 9000; // Dereference to put a value inside
    cout << "Value at p: " << *p << endl;
    
    // We are done! Time to return the rented space.
    delete p; 
    p = nullptr; // Safety habit: point the remote at nothing so we don't accidentally use it again
    
    cout << "Memory freed successfully." << endl;


    cout << "\n--- 2. DYNAMIC ARRAY ALLOCATION ---" << endl;
    
    int size;
    cout << "Enter the size of the array: ";
    cin >> size;
    
    // Normal arrays look like: int arr[10]; (Must be a constant number)
    // Dynamic arrays allow us to use variables for the size!
    int* arr = new int[size]; 
    
    // Fill the array
    for (int i = 0; i < size; i++) {
        arr[i] = (i + 1) * 10;
    }
    
    // Print the array
    cout << "Array elements: ";
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    // Because we used brackets [] with 'new', we MUST use brackets [] with 'delete'!
    delete[] arr; 
    arr = nullptr;
    
    cout << "Array memory freed successfully." << endl;

    return 0;
}
