/*
 * THE "PLAY" DEMONSTRATION
 * This file conceptually demonstrates how the same word/action ("Play")
 * can have Many Forms (Polymorphism) depending on the object it interacts with!
 */

#include <iostream>
#include <string>
using namespace std;

// This is a sneak peek at Compile-Time Polymorphism (Function Overloading)
// We have three functions with the EXACT SAME NAME!

void play(string instrument) {
    cout << "Playing the " << instrument << " by strumming the strings!" << endl;
}

void play(int videoGameLevel) {
    cout << "Playing Level " << videoGameLevel << " using a controller!" << endl;
}

void play(double movieLength) {
    cout << "Playing a movie that is " << movieLength << " hours long by pressing the remote." << endl;
}

int main() {
    cout << "--- THE 'PLAY' POLYMORPHISM DEMO ---" << endl;

    // The compiler looks at the parameter. It sees a string ("Guitar").
    // It immediately knows to bind this to the first function! (Compile-Time)
    play("Guitar");

    // The compiler sees an integer (5). 
    // It binds to the second function!
    play(5);

    // The compiler sees a double (2.5). 
    // It binds to the third function!
    play(2.5);

    return 0;
}
