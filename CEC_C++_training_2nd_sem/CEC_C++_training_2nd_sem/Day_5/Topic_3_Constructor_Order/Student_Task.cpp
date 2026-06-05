/*
 * =====================================================================
 * 💻 STUDENT TASK: SMART ELECTRONICS
 * =====================================================================
 * 
 * YOUR MISSION:
 * 1. Look at the `Device` Base class. Its constructor requires an `int battery`.
 * 2. Create a `Phone` class that inherits from `Device`.
 * 3. Write a constructor for `Phone` that takes an `int b`.
 * 4. IMPORTANT: Use the Initialization List `:` to pass `b` UP to the `Device`!
 * 5. In main(), spawn a Phone with 85% battery.
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

// 🛑 2. CREATE THE DERIVED 'Phone' CLASS HERE!
// (Make sure it inherits from Device)





// 🛑 3 & 4. WRITE THE PHONE CONSTRUCTOR HERE!
// It should look like: Phone(int b) : Device(b) { ... }





int main() {
    cout << "--- SMART ELECTRONICS ---" << endl;

    // 🛑 5. Spawn a Phone object here with 85 battery!
    
    

    return 0;
}
