/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE MULTILEVEL CHAIN
 * =====================================================================
 */

#include <iostream>
using namespace std;

// 1. Grandpa Class
class Shape {
public:
    void drawShape() { 
        cout << "Drawing a shape..." << endl; 
    }
};

// 2. Dad Class (Inherits from Shape)
class Polygon : public Shape {
public:
    void printSides() { 
        cout << "I have straight sides." << endl; 
    }
};

// 3. Son Class (Inherits from Polygon)
class Triangle : public Polygon {
public:
    void name() { 
        cout << "I am a Triangle!" << endl; 
    }
};

int main() {
    cout << "--- MULTILEVEL INHERITANCE ---" << endl;

    // 4. Spawn a Triangle
    Triangle myTri;

    // The Triangle can use its own function
    myTri.name();

    // The Triangle can use its Dad's function
    myTri.printSides();

    // The Triangle can use its Grandpa's function!
    myTri.drawShape();

    return 0;
}
