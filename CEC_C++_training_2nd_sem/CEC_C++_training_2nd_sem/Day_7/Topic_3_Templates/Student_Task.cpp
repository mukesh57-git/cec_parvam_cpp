/*
 * =====================================================================
 * 💻 STUDENT TASK: THE GREAT SWAPPER
 * =====================================================================
 * 
 * YOUR MISSION:
 * 1. Write a Function Template called `swapValues`.
 *    - It should take two parameters of type `T` BY REFERENCE (e.g. `T& a, T& b`).
 *      (Why reference? Because we want to permanently change the original variables!)
 *    - Inside the function, create a temporary variable `T temp = a;`
 *    - Swap the values: `a = b;` and then `b = temp;`
 * 
 * 2. In main(), test your swapper on the provided integers, doubles, and strings!
 */

#include <iostream>
#include <string>
using namespace std;

// 🛑 1. Write your template function 'swapValues' here!





int main() {
    cout << "--- THE GREAT SWAPPER ---" << endl;

    int x = 10, y = 99;
    double d1 = 3.14, d2 = 0.01;
    string s1 = "Apples", s2 = "Bananas";

    // 🛑 2. Call your swapValues function on all three pairs of variables!
    // Example: swapValues(x, y);
    
    
    
    

    // --- Output Verification ---
    cout << "Ints  : " << x << ", " << y << endl;             // Should print 99, 10
    cout << "Doubles: " << d1 << ", " << d2 << endl;          // Should print 0.01, 3.14
    cout << "Strings: " << s1 << ", " << s2 << endl;          // Should print Bananas, Apples

    return 0;
}
