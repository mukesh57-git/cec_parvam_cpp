/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE SMART THERMOSTAT
 * =====================================================================
 */

#include <iostream>
using namespace std;

class SmartThermostat {
private:
    int temperature;

public:
    // Constructor
    SmartThermostat() {
        temperature = 22; // Default comfortable temp
    }

    // 1. Getter
    int getTemperature() const {
        return temperature;
    }
    
    // 2. Setter with Validation
    void setTemperature(int t) {
        if (t >= 15 && t <= 30) {
            temperature = t;
            cout << "✅ Temperature set to " << temperature << " degrees." << endl;
        } else {
            cout << "❌ Warning! " << t << " degrees is unsafe! Command rejected." << endl;
        }
    }
};

int main() {
    SmartThermostat myHouse;
    
    // 1. Try to set the temp to 100 (Blocked)
    myHouse.setTemperature(100);
    
    // 2. Try to set the temp to 24 (Accepted)
    myHouse.setTemperature(24);
    
    // 3. Print the final temperature using the Getter
    cout << "Current House Temp is: " << myHouse.getTemperature() << " degrees." << endl;

    return 0;
}
