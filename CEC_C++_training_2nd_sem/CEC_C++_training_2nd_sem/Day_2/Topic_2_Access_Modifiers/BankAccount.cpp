/*
 * ACCESS MODIFIERS DEMONSTRATION
 * This file demonstrates the difference between public, private, 
 * and protected security levels in C++.
 */

#include <iostream>
#include <string>
using namespace std;

// =====================================================================
// 1. STRUCT vs CLASS DEMONSTRATION
// =====================================================================

// A Struct acts like a Public Park. By default, everything is PUBLIC!
struct PublicPark {
    int benches; // This is PUBLIC automatically
};

// A Class acts like a Bank. By default, everything is PRIVATE!
class SecureBank {
    int vaultMoney; // This is PRIVATE automatically
};

// =====================================================================
// 2. THE BANK ACCOUNT CLASS
// =====================================================================
class BankAccount {
// --- THE VAULT ---
// Only the class itself can see this.
private:
    double balance;
    string secretPin;

// --- THE BREAKROOM ---
// Only the class and its "child" classes (inheritance) can see this.
protected:
    string managerName;

// --- THE LOBBY ---
// Anyone in the main() function can see and use these.
public:
    string accountHolder;

    // Constructor to set up the bank account
    BankAccount(string name, double initialMoney, string pin) {
        accountHolder = name;
        balance = initialMoney;
        secretPin = pin;
        managerName = "Mr. Smith"; // Protected access inside the class is fine!
    }

    // "GETTER" FUNCTION: Safely lets the public check the private balance
    void showBalance(string enteredPin) {
        if (enteredPin == secretPin) {
            cout << "Access Granted! Your balance is: $" << balance << endl;
        } else {
            cout << "Access Denied! Incorrect PIN." << endl;
        }
    }

    // "SETTER" FUNCTION: Safely lets the public add money to the private balance
    void deposit(double amount) {
        if (amount > 0) {
            balance = balance + amount;
            cout << "Successfully deposited $" << amount << endl;
        } else {
            cout << "Error: Cannot deposit negative money!" << endl;
        }
    }
};

int main() {
    cout << "--- BANK SECURITY DEMO ---" << endl;

    // 1. Struct vs Class Test
    PublicPark park;
    park.benches = 10; // WORKS PERFECTLY! Structs are public.

    SecureBank bank;
    // bank.vaultMoney = 1000000; // ERROR! Classes are private by default!

    // 2. Access Modifier Test
    BankAccount myAccount("Rahul", 500.00, "1234");

    // We can access public data directly
    cout << "Welcome, " << myAccount.accountHolder << "!" << endl;

    // We CANNOT access private data directly!
    // myAccount.balance = 9999999; // THIS WOULD CAUSE A MASSIVE ERROR!
    // myAccount.secretPin = "0000"; // HACKER ATTEMPT BLOCKED!
    
    // We CANNOT access protected data directly!
    // cout << myAccount.managerName; // BLOCKED!

    // Instead, we use the PUBLIC "Teller" methods to safely access the vault!
    myAccount.deposit(150.00);      // Safely changes the private balance
    myAccount.showBalance("1234");  // Safely reads the private balance

    return 0;
}
