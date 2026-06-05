/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE ENEMY SPAWNER
 * =====================================================================
 */

#include <iostream>
using namespace std;

int main() {
    cout << "--- ZOMBIE SPAWNER ---" << endl;

    // 1 & 2. Ask for input
    int zombieCount;
    cout << "How many zombies are attacking? ";
    cin >> zombieCount;
    
    // 3. Dynamically allocate the array
    int* zombieHealths = new int[zombieCount];
    
    // 4. Fill the array
    for(int i = 0; i < zombieCount; i++) {
        zombieHealths[i] = 100;
    }
    
    // 5. Print the array
    cout << "Zombie Healths: ";
    for(int i = 0; i < zombieCount; i++) {
        cout << zombieHealths[i] << " ";
    }
    cout << endl;
    
    // 6. Prevent the memory leak!
    delete[] zombieHealths;
    zombieHealths = nullptr;
    
    cout << "All zombies defeated, memory cleaned!" << endl;

    return 0;
}
