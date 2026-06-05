/*
 * =====================================================================
 * 💻 STUDENT TASK: THE DRAG RACE
 * =====================================================================
 * 
 * YOUR MISSION:
 * You are writing the code for a Drag Race. The `RaceCar` class has a 
 * `private` variable called `topSpeed`. 
 * 
 * 1. Write an external function called `compareSpeed(RaceCar car1, RaceCar car2)`.
 *    - It should look at both cars' `topSpeed` variables.
 *    - If car1 is faster, print "Car 1 Wins!"
 *    - If car2 is faster, print "Car 2 Wins!"
 * 
 * 2. In order for `compareSpeed` to see the private speeds, you MUST 
 *    grant it a VIP Pass inside the `RaceCar` class using the `friend` keyword!
 */

#include <iostream>
#include <string>
using namespace std;

class RaceCar {
private:
    string name;
    int topSpeed;

public:
    RaceCar(string n, int speed) : name(n), topSpeed(speed) {}

    // 🛑 1. Add the 'friend' declaration here to give your function a VIP Pass!
    
    
};

// 🛑 2. Write the external 'compareSpeed' function here!
// It must accept two RaceCar objects as parameters.




int main() {
    cout << "--- DRAG RACE ---" << endl;

    RaceCar mustang("Mustang", 180);
    RaceCar ferrari("Ferrari", 210);

    // 🛑 3. Call your compareSpeed function and pass in the two cars!
    

    return 0;
}
