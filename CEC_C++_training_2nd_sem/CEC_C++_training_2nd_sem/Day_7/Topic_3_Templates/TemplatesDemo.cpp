/*
 * TEMPLATES DEMO
 * This file demonstrates how to create generic functions and generic classes
 * using the 'template <typename T>' syntax.
 */

#include <iostream>
#include <string>
using namespace std;

// ==========================================
// 1. FUNCTION TEMPLATE
// ==========================================
// 'T' acts as a placeholder for whatever data type the user passes in!
template <typename T>
T getMaximum(T a, T b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// ==========================================
// 2. CLASS TEMPLATE
// ==========================================
// A generic 'Storage' box that can hold any single item.
template <typename T>
class Storage {
private:
    T item;

public:
    Storage(T i) {
        item = i;
    }

    void showItem() {
        cout << "Item in storage: " << item << endl;
    }
};

int main() {
    cout << "--- 1. FUNCTION TEMPLATES ---" << endl;
    
    // The compiler automatically figures out T is 'int'
    cout << "Max of 10 and 20: " << getMaximum(10, 20) << endl;
    
    // The compiler automatically figures out T is 'double'
    cout << "Max of 3.5 and 1.2: " << getMaximum(3.5, 1.2) << endl;
    
    // The compiler automatically figures out T is 'char'
    cout << "Max of 'A' and 'Z': " << getMaximum('A', 'Z') << endl;


    cout << "\n--- 2. CLASS TEMPLATES ---" << endl;
    
    // For classes, we MUST explicitly tell it what type to use using < >
    Storage<int> intBox(42);
    intBox.showItem();

    Storage<string> stringBox("Secret Documents");
    stringBox.showItem();

    return 0;
}
