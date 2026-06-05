/*
 * THE SOURCE FILE (.cpp) - "The Kitchen"
 * This file contains the actual logic/code for the functions 
 * we listed in the .h file.
 */

// 1. WE MUST INCLUDE THE MENU!
// Use quotes "" for custom files you created.
#include "Student.h"
#include <iostream>
using namespace std;

// 2. CONSTRUCTOR DEFINITION
// We use Student:: to tell the computer this belongs to the Student class!
Student::Student(string n, int a) {
    // The actual logic
    name = n;
    age = a;
}

// 3. METHOD DEFINITION
// We use Student:: to tie this code to the blueprint.
void Student::displayInfo() {
    // The actual logic
    cout << "Student Name: " << name << ", Age: " << age << endl;
}
