/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE GADGET INVENTORY
 * =====================================================================
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

    // 1. Single pointer and arrow operator
    Gadget* bossGadget = new Gadget();
    bossGadget->name = "The Master Gadget";
    bossGadget->scan();

    // 2. Ask for input
    int count;
    cout << "\nHow many gadgets to craft? ";
    cin >> count;

    // 3. Allocate array of objects
    Gadget* inventory = new Gadget[count];

    // 4. Set names (Using Dot operator because [] dereferences the pointer)
    for(int i = 0; i < count; i++) {
        inventory[i].name = "Gadget " + to_string(i + 1);
    }

    // 5. Call functions
    for(int i = 0; i < count; i++) {
        inventory[i].scan();
    }

    // 6. Clean up ALL memory
    delete bossGadget;
    delete[] inventory;
    
    cout << "Inventory cleaned up!" << endl;

    return 0;
}
