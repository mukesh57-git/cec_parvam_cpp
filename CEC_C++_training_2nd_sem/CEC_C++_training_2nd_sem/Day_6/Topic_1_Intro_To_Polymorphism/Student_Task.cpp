/*
 * =====================================================================
 * 💻 STUDENT TASK: STATIC OR DYNAMIC?
 * =====================================================================
 * 
 * YOUR MISSION:
 * Read the three scenarios below. Inside the cout statement, type either
 * "Compile-Time" or "Runtime" depending on when the computer makes the decision!
 */

#include <iostream>
using namespace std;

int main() {
    cout << "--- POLYMORPHISM POP QUIZ ---" << endl;

    // Scenario 1: The computer sees `calculateArea(5, 10)` in the code. 
    // It immediately knows it's dealing with two integers before you even press play.
    // Is this Compile-Time or Runtime?
    
    cout << "1. Function Overloading is an example of: " << "_________" << " Polymorphism." << endl;


    // Scenario 2: You write a program that asks the user to pick an animal.
    // If they type 1, it spawns a Dog. If they type 2, it spawns a Cat.
    // The computer cannot know what function to run until the user actually types the number!
    // Is this Compile-Time or Runtime?
    
    cout << "2. Virtual Functions are an example of: " << "_________" << " Polymorphism." << endl;


    // Scenario 3: Compile-Time polymorphism is generally (faster / slower) 
    // because the decision is made before the game even starts.
    
    cout << "3. Compile-Time polymorphism is generally: " << "_________" << endl;

    return 0;
}
