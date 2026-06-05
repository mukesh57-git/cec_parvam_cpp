/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE GARAGE
 * =====================================================================
 */

#include <iostream>
using namespace std;

// 1. THE BASE CLASS
class Vehicle {
public:
    void drive() {
        cout << "The vehicle is moving forward." << endl;
    }
};

// 2. THE DERIVED CLASS (Inheriting from Vehicle)
class Car : public Vehicle {
public:
    // The Car's own special function
    void honkHorn() {
        cout << "BEEP BEEP!" << endl;
    }
};

int main() {
    cout << "--- THE GARAGE ---" << endl;

    // 3. Spawn the Car
    Car myMustang;

    // 4. Call the Car's own function
    myMustang.honkHorn();

    // 5. Call the function INHERITED from Vehicle!
    myMustang.drive();

    return 0;
}
