/*
 * =====================================================================
 * 💻 STUDENT TASK: THE BANK ATM
 * =====================================================================
 * 
 * YOUR MISSION:
 * You are writing the software for a Bank ATM. The user starts with $500.
 * 
 * 1. Ask the user how much they want to withdraw.
 * 2. Create a `try` block.
 * 3. Inside the try block, check if the withdrawal amount is NEGATIVE. 
 *    If it is, `throw` an `invalid_argument` error!
 * 4. Check if the withdrawal amount is GREATER than their balance ($500).
 *    If it is, `throw` a `runtime_error`!
 * 5. If everything is fine, subtract the amount from the balance and print the new balance.
 * 6. Create a `catch (const exception& e)` block to catch the errors and print `e.what()`.
 */

#include <iostream>
#include <stdexcept>

using namespace std;

int main() {
    double balance = 500.0;
    double withdrawAmount;

    cout << "--- WELCOME TO C++ BANK ---" << endl;
    cout << "Current Balance: $" << balance << endl;
    cout << "Enter amount to withdraw: $";
    cin >> withdrawAmount;

    // 🛑 1. Write your try { } block here!
    
    
    
    
    
    
    
    // 🛑 2. Write your catch { } block here!
    
    
    
    

    cout << "Thank you for using C++ Bank!" << endl;
    return 0;
}
