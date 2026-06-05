/*
 * COMPILE-TIME POLYMORPHISM DEMO
 * This file demonstrates Function Overloading (same name, different params)
 * and Operator Overloading (teaching '+' how to add custom objects).
 */

#include <iostream>
#include <string>
using namespace std;

// ==========================================
// 1. FUNCTION OVERLOADING
// ==========================================
class Calculator {
public:
    // Overload 1: Two Integers
    void add(int a, int b) {
        cout << "[Int + Int] = " << (a + b) << endl;
    }

    // Overload 2: Two Doubles
    void add(double a, double b) {
        cout << "[Double + Double] = " << (a + b) << endl;
    }

    // Overload 3: Three Integers
    void add(int a, int b, int c) {
        cout << "[Int + Int + Int] = " << (a + b + c) << endl;
    }
};

// ==========================================
// 2. OPERATOR OVERLOADING
// ==========================================
class Vector2D {
public:
    int x;
    int y;

    Vector2D(int xPos, int yPos) : x(xPos), y(yPos) {}

    // Overloading the '+' operator!
    // This function tells C++ what to do if it sees: VectorA + VectorB
    Vector2D operator+(const Vector2D& other) {
        // Add the X's together, and the Y's together, and return a new Vector!
        int newX = this->x + other.x;
        int newY = this->y + other.y;
        return Vector2D(newX, newY);
    }
};

int main() {
    cout << "--- FUNCTION OVERLOADING ---" << endl;
    Calculator calc;
    
    // The compiler automatically picks the right blender!
    calc.add(5, 10);
    calc.add(2.5, 2.5);
    calc.add(1, 2, 3);

    cout << "\n--- OPERATOR OVERLOADING ---" << endl;
    Vector2D player(10, 10);
    Vector2D boost(5, 0);

    // Normally, C++ would crash here. But because we overloaded '+', it works perfectly!
    Vector2D newPosition = player + boost; 

    cout << "Player X: " << newPosition.x << endl;
    cout << "Player Y: " << newPosition.y << endl;

    return 0;
}
