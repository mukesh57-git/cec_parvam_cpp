/*
 * FRIEND FUNCTION DEMONSTRATION
 * This file shows how an external function can be granted a "VIP Pass"
 * to read and write private variables by using the 'friend' keyword.
 */

#include <iostream>
#include <string>
using namespace std;

class Vault {
private:
    int secretCode;
    double money;

public:
    Vault(int code, double cash) : secretCode(code), money(cash) {}

    // 🛑 GRANTING VIP ACCESS:
    // We are telling the compiler: "Let this specific outside function bypass our security!"
    friend void bankAuditor(Vault& targetVault);
};

// ---------------------------------------------------------
// THIS IS A NORMAL, EXTERNAL FUNCTION!
// It is NOT a part of the Vault class.
// But because it was listed as a 'friend', it has a VIP pass.
// ---------------------------------------------------------
void bankAuditor(Vault& targetVault) {
    cout << "[Auditor] I am bypassing security using my VIP Pass..." << endl;
    
    // It can directly read the private variables!
    cout << "[Auditor] The secret code is: " << targetVault.secretCode << endl;
    cout << "[Auditor] The amount of money is: $" << targetVault.money << endl;

    // It can even WRITE to the private variables!
    targetVault.money -= 500; 
    cout << "[Auditor] I just took $500 as an audit fee." << endl;
}

int main() {
    cout << "--- THE VAULT AUDIT ---" << endl;

    Vault myVault(9999, 50000.0);

    // 🛑 DANGER: The main function is NOT a friend.
    // cout << myVault.secretCode; // ERROR! Main function gets blocked by security!

    // The bankAuditor function IS a friend. We pass the vault to it.
    bankAuditor(myVault);

    return 0;
}
