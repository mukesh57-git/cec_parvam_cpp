/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE DRAG RACE
 * =====================================================================
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

    // 1. The VIP Pass (Friend Declaration)
    friend void compareSpeed(RaceCar car1, RaceCar car2);
};

// 2. The External Friend Function
void compareSpeed(RaceCar car1, RaceCar car2) {
    cout << car1.name << " (Speed: " << car1.topSpeed << ") VS " 
         << car2.name << " (Speed: " << car2.topSpeed << ")" << endl;

    if (car1.topSpeed > car2.topSpeed) {
        cout << "🏆 " << car1.name << " WINS THE RACE!" << endl;
    } else if (car2.topSpeed > car1.topSpeed) {
        cout << "🏆 " << car2.name << " WINS THE RACE!" << endl;
    } else {
        cout << "🤝 IT'S A TIE!" << endl;
    }
}

int main() {
    cout << "--- DRAG RACE ---" << endl;

    RaceCar mustang("Mustang", 180);
    RaceCar ferrari("Ferrari", 210);

    // 3. Run the race
    compareSpeed(mustang, ferrari);

    return 0;
}
