/*
 * THE HEADER FILE (.h) - "The Restaurant Menu"
 * This file only LISTS the variables and functions. It does NOT 
 * contain the actual code logic. 
 */

// 1. INCLUDE GUARDS ("The Bouncer")
// These prevent the computer from reading this file twice!
#ifndef STUDENT_H  // If STUDENT_H hasn't been read yet...
#define STUDENT_H  // ...read it now!

// Dictionary for text words
#include <string>
using namespace std;

// 2. CLASS DECLARATION
class Student {
// Private hidden data
private:
    string name;
    int age;

// Public visible data
public:
    // Constructor declaration (Sets up the object)
    Student(string n, int a);
    
    // Method declaration (Just the name, no code!)
    void displayInfo();
};

#endif // End of the Include Guard
