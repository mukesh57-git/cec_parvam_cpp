/*
 * =====================================================================
 * 💻 STUDENT TASK: THE GADGET INVENTORY
 * =====================================================================
 * 
 * YOUR MISSION:
 * 1. Create a single `Gadget` pointer on the Heap called `bossGadget`.
 *    Use the Arrow Operator (`->`) to call its `scan()` function!
 * 
 * 2. Ask the user how many gadgets they want to craft.
 * 3. Dynamically allocate an array of `Gadget` objects of that size.
 * 4. Use a loop to give each gadget a unique name (e.g., "Gadget 1", "Gadget 2").
 * 5. Use a loop to call the `scan()` function on every gadget in the array!
 * 6. Clean up both the single pointer AND the array memory!
 */

#include <iostream>
#include <string>
using namespace std;

class Gadget {
public:
    string name;

    Gadget() {
        name = "Generic Gadget";
    }

    void scan() {
        cout << name << " is scanning the area... Beep boop!" << endl;
    }
};

int main() {
    cout << "--- GADGET INVENTORY ---" << endl;

    // 🛑 1. Create one Gadget on the Heap, and use -> to call scan()
    
    

    // 🛑 2. Ask the user for the number of gadgets
    
    

    // 🛑 3. Dynamically allocate an array of Gadgets
    
    

    // 🛑 4. Loop through the array and set the names (Use the Dot operator here!)
    // Hint: to_string(i) can convert a number to a string!
    
    

    // 🛑 5. Loop through and call scan() on all of them
    
    

    // 🛑 6. Clean up memory for BOTH the single gadget and the array!
    
    

    return 0;
}
