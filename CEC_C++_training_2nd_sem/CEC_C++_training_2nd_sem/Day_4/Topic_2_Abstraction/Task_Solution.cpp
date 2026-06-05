/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE ANIMAL KINGDOM
 * =====================================================================
 */

#include <iostream>
using namespace std;

// 1. ABSTRACT CLASS (The Contract)
class Animal {
public:
    // Pure Virtual Function
    virtual void makeSound() const = 0;
};

// 2. CONCRETE CLASS (Signs the Contract)
class Lion : public Animal {
public:
    void makeSound() const override {
        cout << "Lion says: ROOOAAARRR!" << endl;
    }
};

// 3. CONCRETE CLASS (Signs the Contract)
class Cow : public Animal {
public:
    void makeSound() const override {
        cout << "Cow says: MOOOOOOO!" << endl;
    }
};

int main() {
    cout << "--- ANIMAL KINGDOM ---" << endl;

    Lion simba;
    simba.makeSound();

    Cow bessie;
    bessie.makeSound();

    // Animal ghost; // ERROR: Cannot instantiate abstract class!

    return 0;
}
