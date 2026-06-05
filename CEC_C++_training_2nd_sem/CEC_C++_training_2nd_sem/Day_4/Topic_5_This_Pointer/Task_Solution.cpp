/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE PIZZA BUILDER
 * =====================================================================
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

    // 1. Fixed using 'this->'
    PizzaBuilder& setCrust(string crust) {
        this->crust = crust; 
        return *this;
    }

    // 2. Changed return type and returned *this
    PizzaBuilder& addCheese() {
        this->cheeseCount++;
        return *this;
    }

    // 2. Changed return type and returned *this
    PizzaBuilder& addPepperoni() {
        this->pepperoniCount++;
        return *this;
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

    // 3. Method Chaining!
    order.setCrust("Thin").addCheese().addCheese().addPepperoni();
    
    order.serve();

    return 0;
}
