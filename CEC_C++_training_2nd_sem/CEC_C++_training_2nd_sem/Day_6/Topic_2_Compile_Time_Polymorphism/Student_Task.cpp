/*
 * =====================================================================
 * 💻 STUDENT TASK: THE OVERLOADER
 * =====================================================================
 * 
 * YOUR MISSION:
 * 1. Write three overloaded `print()` functions:
 *    - One that takes an `int` and prints: "Integer: [number]"
 *    - One that takes a `double` and prints: "Double: [number]"
 *    - One that takes a `string` and prints: "String: [text]"
 * 
 * 2. Look at the `Wallet` class. It has a `cash` variable.
 *    Overload the `+` operator inside the Wallet class so that it returns 
 *    a new Wallet containing the combined cash of both wallets!
 */

#include <iostream>
#include <string>
using namespace std;

// 🛑 1. Write your three overloaded print() functions here!





// ==========================================

class Wallet {
public:
    int cash;

    Wallet(int c) {
        cash = c;
    }

    // 🛑 2. Overload the '+' operator here!
    // It should look like: Wallet operator+(const Wallet& other) { ... }
    
    
    
};

int main() {
    cout << "--- THE OVERLOADER ---" << endl;

    // 🛑 3. Test your print functions!
    // print(100);
    // print(99.99);
    // print("Hello Overloading!");

    // 🛑 4. Test your Wallet '+' operator!
    // Wallet myWallet(50);
    // Wallet momsWallet(100);
    // Wallet total = myWallet + momsWallet;
    // cout << "Total cash: $" << total.cash << endl;

    return 0;
}
