/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE OVERLOADER
 * =====================================================================
 */

#include <iostream>
#include <string>
using namespace std;

// 1. Function Overloading
void print(int num) {
    cout << "Integer: " << num << endl;
}

void print(double num) {
    cout << "Double: " << num << endl;
}

void print(string text) {
    cout << "String: " << text << endl;
}

// ==========================================

class Wallet {
public:
    int cash;

    Wallet(int c) {
        cash = c;
    }

    // 2. Operator Overloading
    Wallet operator+(const Wallet& other) {
        return Wallet(this->cash + other.cash);
    }
};

int main() {
    cout << "--- THE OVERLOADER ---" << endl;

    // 3. Testing Print functions
    print(100);
    print(99.99);
    print("Hello Overloading!");

    // 4. Testing Wallet Operator
    Wallet myWallet(50);
    Wallet momsWallet(100);
    
    Wallet total = myWallet + momsWallet;
    
    cout << "Total cash: $" << total.cash << endl;

    return 0;
}
