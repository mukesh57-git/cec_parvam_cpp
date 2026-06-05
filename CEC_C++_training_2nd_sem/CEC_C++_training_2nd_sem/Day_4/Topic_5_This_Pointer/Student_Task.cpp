/*
 * =====================================================================
 * 💻 STUDENT TASK: THE PIZZA BUILDER
 * =====================================================================
 * 
 * YOUR MISSION:
 * 1. Look at the `setCrust` function. It has a bug! The parameter is named 
 *    `crust`, and the private variable is also named `crust`. 
 *    Fix it using the `this->` pointer!
 * 
 * 2. Look at the `addCheese` and `addPepperoni` functions. Modify them 
 *    so they return `*this`. (Don't forget to change the return type 
 *    from `void` to `PizzaBuilder&` !)
 * 
 * 3. In main(), build an entire pizza on a single line using method chaining!
 */

#include <iostream>
#include <string>
using namespace std;

class PizzaBuilder {
private:
    string crust;
    int cheeseCount;
    int pepperoniCount;

public:
    PizzaBuilder() {
        crust = "Normal";
        cheeseCount = 0;
        pepperoniCount = 0;
    }

    // 🛑 1. Fix this naming collision using 'this->'
    void setCrust(string crust) {
        crust = crust; // BUG! The compiler is confused!
    }

    // 🛑 2. Change 'void' to 'PizzaBuilder&' and return *this at the end!
    void addCheese() {
        cheeseCount++;
        // return what?
    }

    // 🛑 2. Change 'void' to 'PizzaBuilder&' and return *this at the end!
    void addPepperoni() {
        pepperoniCount++;
        // return what?
    }

    void serve() {
        cout << "Serving a " << crust << " crust pizza with " 
             << cheeseCount << " cheese and " 
             << pepperoniCount << " pepperoni!" << endl;
    }
};

int main() {
    cout << "--- PIZZA BUILDER ---" << endl;

    PizzaBuilder order;

    // 🛑 3. Chain these together into a single line of code!
    // order.setCrust("Thin");
    // order.addCheese();
    // order.addCheese();
    // order.addPepperoni();
    
    
    order.serve();

    return 0;
}
