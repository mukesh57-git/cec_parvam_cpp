/*
 * THE MAIN FILE - "The Customer"
 * The main file only needs to look at the Menu (.h).
 * It doesn't care how the Kitchen (.cpp) works!
 */

#include <iostream>
// Include our custom header file (Use quotes "" for custom files!)
#include "Student.h"

using namespace std;

int main() {
    cout << "--- MULTI-FILE DEMO ---" << endl;

    // We can create the object because main looked at the Student.h menu!
    Student s1("Rahul", 20);
    
    // Ask the object to do something
    s1.displayInfo();

    return 0;
}
