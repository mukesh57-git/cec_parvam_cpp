/*
 * ABSTRACTION DEMONSTRATION
 * This file shows how to create an Abstract Class (Interface) using
 * Pure Virtual Functions (= 0), and how child classes implement them.
 */

#include <iostream>
#include <string>
using namespace std;

// 1. ABSTRACT CLASS (The Contract / Blueprint)
class Shape {
protected:
    string color;

public:
    Shape(string c) : color(c) {}

    // PURE VIRTUAL FUNCTION (= 0)
    // The Shape class has no idea how to calculate area.
    // It forces every child class to figure it out themselves!
    virtual double calculateArea() const = 0;

    void printColor() {
        cout << "My color is " << color << endl;
    }
};

// 2. CONCRETE CLASS (Signs the contract)
class Circle : public Shape {
private:
    double radius;

public:
    Circle(string c, double r) : Shape(c), radius(r) {}

    // Fulfilling the contract! If we don't write this, Circle becomes Abstract too!
    double calculateArea() const override {
        return 3.14159 * radius * radius;
    }
};

// 3. CONCRETE CLASS (Signs the contract)
class Rectangle : public Shape {
private:
    double length;
    double width;

public:
    Rectangle(string c, double l, double w) : Shape(c), length(l), width(w) {}

    // Fulfilling the contract!
    double calculateArea() const override {
        return length * width;
    }
};

int main() {
    cout << "--- ABSTRACTION: SHAPES ---" << endl;

    // 🛑 ERROR: You cannot create an object of an Abstract Class!
    // Shape ghostShape("Clear"); // This will not compile!

    // We CAN create objects of the Child classes that signed the contract!
    Circle myCircle("Red", 5.0);
    Rectangle myRect("Blue", 4.0, 6.0);

    myCircle.printColor();
    cout << "Circle Area: " << myCircle.calculateArea() << endl << endl;

    myRect.printColor();
    cout << "Rectangle Area: " << myRect.calculateArea() << endl;

    return 0;
}
