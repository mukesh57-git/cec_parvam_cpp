/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE BANK ATM
 * =====================================================================
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

    try {
        // Check for negative numbers
        if (withdrawAmount < 0) {
            throw invalid_argument("You cannot withdraw a negative amount of money!");
        }
        
        // Check for overdraft
        if (withdrawAmount > balance) {
            throw runtime_error("Insufficient funds! You do not have that much money.");
        }
        
        // If we make it here, the withdrawal is successful!
        balance -= withdrawAmount;
        cout << "Dispensing $" << withdrawAmount << "..." << endl;
        cout << "New Balance: $" << balance << endl;
        
    } 
    catch (const exception& e) {
        // Catch any thrown errors and prevent a crash
        cout << "🚨 TRANSACTION FAILED: " << e.what() << endl;
    }

    cout << "Thank you for using C++ Bank!" << endl;
    return 0;
}
