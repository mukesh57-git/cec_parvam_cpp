/*
 * ITERATORS AND ALGORITHMS DEMO
 * This file demonstrates how to loop through containers using Range-Based For loops,
 * and how to use the magic spells in the <algorithm> library!
 */

#include <iostream>
#include <vector>
#include <algorithm> // The Spellbook!

using namespace std;

int main() {
    vector<int> numbers = {45, 12, 99, 12, 7, 82, 12, 33};

    cout << "--- 1. RANGE-BASED FOR LOOP ---" << endl;
    cout << "Original vector: ";
    // Read as: "For every integer 'x' in 'numbers'..."
    for (int x : numbers) {
        cout << x << " ";
    }
    cout << endl;


    cout << "\n--- 2. THE SORT SPELL ---" << endl;
    // We tell sort where to start, and where to end!
    sort(numbers.begin(), numbers.end());
    
    cout << "Sorted vector: ";
    for (int x : numbers) {
        cout << x << " ";
    }
    cout << endl;


    cout << "\n--- 3. THE REVERSE SPELL ---" << endl;
    reverse(numbers.begin(), numbers.end());
    
    cout << "Reversed vector (Descending): ";
    for (int x : numbers) {
        cout << x << " ";
    }
    cout << endl;


    cout << "\n--- 4. THE COUNT SPELL ---" << endl;
    // Count how many times the number '12' appears
    int twelves = count(numbers.begin(), numbers.end(), 12);
    
    cout << "The number 12 appears " << twelves << " times." << endl;

    return 0;
}
