/*
 * RUNTIME POLYMORPHISM DEMO
 * This file demonstrates Abstract Classes, Pure Virtual Functions (= 0),
 * and how Base pointers dynamically call Child functions at Runtime!
 */

#include <iostream>
#include <string>
#include <vector>
using namespace std;

// ==========================================
// 1. ABSTRACT BASE CLASS (The Blueprint)
// ==========================================
class Payment {
public:
    // Pure Virtual Function (= 0)
    // This makes 'Payment' an Abstract Class. We cannot spawn a 'Payment' object!
    // Every child MUST implement this function to exist.
    virtual void processPayment() = 0; 
    
    // Virtual Destructor (Always needed when using inheritance!)
    virtual ~Payment() {}
};

// ==========================================
// 2. CONCRETE DERIVED CLASSES
// ==========================================
class CreditCard : public Payment {
public:
    // We use the 'override' keyword to prove we are fulfilling the contract!
    void processPayment() override {
        cout << "💳 Swiping Credit Card... Payment successful!" << endl;
    }
};

class Crypto : public Payment {
public:
    void processPayment() override {
        cout << "🪙 Verifying Blockchain transaction... Payment successful!" << endl;
    }
};

class Cash : public Payment {
public:
    void processPayment() override {
        cout << "💵 Handing over physical cash... Payment successful!" << endl;
    }
};

int main() {
    cout << "--- SECURE CHECKOUT SYSTEM ---" << endl;

    // 🛑 THIS IS ILLEGAL:
    // Payment myPayment; // ERROR! Cannot instantiate an abstract class!

    // Instead, we can create an array of Base Class Pointers!
    // This is the true power of polymorphism. We can store totally different 
    // child objects in the EXACT SAME array!
    vector<Payment*> cart;

    cart.push_back(new CreditCard());
    cart.push_back(new Crypto());
    cart.push_back(new Cash());

    cout << "Processing all payments in the cart:\n" << endl;

    // We loop through the array. 
    // At RUNTIME, C++ looks at each pointer, figures out what Child it actually is,
    // and runs the correct version of processPayment()!
    for(int i = 0; i < cart.size(); i++) {
        cart[i]->processPayment();
    }

    // Always clean up dynamic memory!
    for(int i = 0; i < cart.size(); i++) {
        delete cart[i];
    }

    return 0;
}
