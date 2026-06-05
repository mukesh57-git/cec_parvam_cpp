/*
 * THE 'THIS' POINTER DEMONSTRATION
 * This file shows how to use 'this->' to fix naming confusion,
 * and how to 'return *this' to enable Method Chaining.
 */

#include <iostream>
#include <string>
using namespace std;

class Calculator {
private:
    double value;

public:
    // Constructor using 'this->' to solve naming confusion
    Calculator(double value) {
        this->value = value; 
        // If we just wrote "value = value", it wouldn't change the private variable!
    }

    // --- METHOD CHAINING ---
    // Notice the return type is 'Calculator&' (A reference to a Calculator)
    // By returning '*this', the object returns itself, ready for the next dot (.) !
    
    Calculator& add(double num) {
        this->value += num;
        return *this; 
    }

    Calculator& subtract(double num) {
        this->value -= num;
        return *this;
    }

    Calculator& multiply(double num) {
        this->value *= num;
        return *this;
    }

    void printResult() {
        cout << "Final Result is: " << this->value << endl;
    }
};

int main() {
    cout << "--- METHOD CHAINING CALCULATOR ---" << endl;

    Calculator calc(10.0); // Start with 10

    // Without chaining, code looks like this:
    // calc.add(5);
    // calc.multiply(2);
    // calc.subtract(4);

    // WITH CHAINING, it looks like a beautiful sentence!
    // Math: (((10 + 5) * 2) - 4) = 26
    
    calc.add(5).multiply(2).subtract(4);
    
    calc.printResult();

    return 0;
}
