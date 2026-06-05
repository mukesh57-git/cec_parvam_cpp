/*
 * OVERLOADING & INIT LISTS DEMONSTRATION
 * This file shows how to create multiple constructors (Overloading) 
 * and how to use the ultra-fast Initialization List syntax.
 */

#include <iostream>
#include <string>
using namespace std;

class Rectangle {
private:
    double length;
    double width;
    const string shapeType; // Constant! MUST use initialization list!

public:
    // 1. DEFAULT CONSTRUCTOR
    // Using Initialization List (Fast-Pass)
    Rectangle() : length(0), width(0), shapeType("Dot") {
        cout << "[System] Default Constructor called! (0x0)" << endl;
    }

    // 2. ONE-PARAMETER CONSTRUCTOR (For a perfect square)
    // Using Initialization List (Fast-Pass)
    Rectangle(double side) : length(side), width(side), shapeType("Square") {
        cout << "[System] Square Constructor called! (" << side << "x" << side << ")" << endl;
    }

    // 3. TWO-PARAMETER CONSTRUCTOR
    // Using Initialization List (Fast-Pass)
    Rectangle(double l, double w) : length(l), width(w), shapeType("Rectangle") {
        cout << "[System] Rectangle Constructor called! (" << l << "x" << w << ")" << endl;
    }

    void display() {
        cout << " -> I am a " << shapeType << " with an area of: " << (length * width) << endl << endl;
    }
};

int main() {
    cout << "--- CONSTRUCTOR OVERLOADING ---" << endl;

    // The compiler sees 0 arguments, so it runs Constructor #1
    Rectangle r1;              
    r1.display();

    // The compiler sees 1 argument, so it runs Constructor #2
    Rectangle r2(5.0);         
    r2.display();

    // The compiler sees 2 arguments, so it runs Constructor #3
    Rectangle r3(4.0, 6.0);    
    r3.display();

    // 🛑 If we try to pass 3 arguments, the program will crash because we don't have a matching constructor!
    // Rectangle r4(4.0, 6.0, 8.0); // ERROR!

    return 0;
}
