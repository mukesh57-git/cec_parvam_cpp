/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE GREAT SWAPPER
 * =====================================================================
 */

#include <iostream>
#include <string>
using namespace std;

// 1. Template Function
template <typename T>
void swapValues(T& a, T& b) {
    T temp = a;
    a = b;
    b = temp;
}

int main() {
    cout << "--- THE GREAT SWAPPER ---" << endl;

    int x = 10, y = 99;
    double d1 = 3.14, d2 = 0.01;
    string s1 = "Apples", s2 = "Bananas";

    // 2. Calling the template function
    swapValues(x, y);         // Compiler generates an int version
    swapValues(d1, d2);       // Compiler generates a double version
    swapValues(s1, s2);       // Compiler generates a string version

    // Output Verification
    cout << "Ints   : " << x << ", " << y << endl;             
    cout << "Doubles: " << d1 << ", " << d2 << endl;          
    cout << "Strings: " << s1 << ", " << s2 << endl;          

    return 0;
}
