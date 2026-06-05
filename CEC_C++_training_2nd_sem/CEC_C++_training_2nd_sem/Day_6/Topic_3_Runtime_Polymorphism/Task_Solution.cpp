/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE SMART HOME
 * =====================================================================
 */

#include <iostream>
#include <vector>
using namespace std;

// 1. Abstract Base Class
class Appliance {
public:
    virtual void turnOn() = 0; // Pure virtual function
    virtual ~Appliance() {}    // Virtual destructor
};

// 2. Derived Class 1
class WashingMachine : public Appliance {
public:
    void turnOn() override {
        cout << "Washing Machine is filling with water..." << endl;
    }
};

// 3. Derived Class 2
class Microwave : public Appliance {
public:
    void turnOn() override {
        cout << "Microwave is heating food... MMMM..." << endl;
    }
};

int main() {
    cout << "--- SMART HOME SYSTEM ---" << endl;

    // 4. Runtime Polymorphism in action!
    vector<Appliance*> smartHome;
    
    smartHome.push_back(new WashingMachine());
    smartHome.push_back(new Microwave());

    for(int i = 0; i < smartHome.size(); i++) {
        smartHome[i]->turnOn(); // Dynamic Binding!
    }

    // Clean up memory
    for(int i = 0; i < smartHome.size(); i++) {
        delete smartHome[i];
    }

    return 0;
}
