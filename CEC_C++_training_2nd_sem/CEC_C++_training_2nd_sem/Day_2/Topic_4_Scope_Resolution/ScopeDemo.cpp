/*
 * SCOPE RESOLUTION (::) DEMONSTRATION
 * This file shows how to fix "Shadowing" (when variables share 
 * the exact same name) using :: and this->.
 */

#include <iostream>
#include <string>
using namespace std;

// 1. A GLOBAL VARIABLE (Lives outside of everything)
int value = 100;

class Demo {
public:
    // 2. A CLASS MEMBER VARIABLE
    int value;
    
    // A STATIC VARIABLE (Belongs to the class blueprint, not the object)
    static string appName;

    // We only DECLARE the function here.
    void setValue(int value);
    void printAll();
};

// =====================================================================
// DEFINING FUNCTIONS OUTSIDE THE CLASS USING `::`
// =====================================================================

// We must initialize static variables outside the class using ::
string Demo::appName = "ScopeDemo V1";

// We use `Demo::` to tell the computer this function belongs to the Demo class!
void Demo::setValue(int value) {
    // SHADOWING PROBLEM! The parameter 'value' hides the class 'value'.
    // We use the `this->` pointer to specify we want the CLASS variable.
    this->value = value; 
}

void Demo::printAll() {
    // 3. A LOCAL VARIABLE (Lives only inside this function)
    int value = 50; 

    cout << "--- WHICH VALUE IS WHICH? ---" << endl;
    
    // Just printing 'value' grabs the LOCAL one (it's the closest!)
    cout << "1. Local   value: " << value << endl;
    
    // Printing 'this->value' grabs the CLASS MEMBER one!
    cout << "2. Member  value: " << this->value << endl;
    
    // Printing '::value' grabs the GLOBAL one! (Bypassing everything else)
    cout << "3. Global  value: " << ::value << endl; 
}

int main() {
    
    // Accessing a static variable directly from the Blueprint using ::
    cout << "Starting App: " << Demo::appName << endl;

    Demo d1;
    d1.setValue(200); // Sets the Class Member value to 200
    
    d1.printAll();

    return 0;
}
