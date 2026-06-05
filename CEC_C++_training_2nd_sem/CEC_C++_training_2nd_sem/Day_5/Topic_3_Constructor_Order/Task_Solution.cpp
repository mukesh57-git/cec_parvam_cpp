/*
 * =====================================================================
 * ✅ SOLUTION FILE: SMART ELECTRONICS
 * =====================================================================
 */

#include <iostream>
using namespace std;

// 1. THE BASE CLASS
class Device {
protected:
    int batteryLevel;

public:
    Device(int battery) : batteryLevel(battery) {
        cout << "[Device] Base initialized with " << batteryLevel << "% battery." << endl;
    }
};

// 2. THE DERIVED CLASS
class Phone : public Device {
public:
    // 3 & 4. Passing the argument 'b' UP to the Device constructor!
    Phone(int b) : Device(b) {
        cout << "[Phone] Smartphone successfully booted up!" << endl;
    }
};

int main() {
    cout << "--- SMART ELECTRONICS ---" << endl;

    // 5. Spawn the Phone
    Phone myiPhone(85);

    return 0;
}
