/*
 * =====================================================================
 * 💻 STUDENT TASK: THE SMART THERMOSTAT
 * =====================================================================
 * 
 * YOUR MISSION:
 * You are programming a `SmartThermostat` for a house.
 * The temperature is locked in the `private` section to prevent people 
 * from hacking it and setting the house on fire.
 * 
 * YOUR TASK:
 * 1. Write a Getter `getTemperature()` that returns the current temp.
 * 2. Write a Setter `setTemperature(int t)`. 
 *    - It should only accept temperatures between 15 and 30 degrees.
 *    - If the input is valid, change the temperature and print a success message.
 *    - If the input is invalid, DO NOT change the temperature, and print a warning!
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

    // 🛑 1. Write your Getter here:
    
    
    // 🛑 2. Write your Setter with validation here (Only accept 15 to 30):
    
    
    
};

int main() {
    SmartThermostat myHouse;
    
    // 1. Try to set the temp to 100 (Should be blocked!)
    
    
    // 2. Try to set the temp to 24 (Should be accepted!)
    
    
    // 3. Print the final temperature using the Getter
    

    return 0;
}
