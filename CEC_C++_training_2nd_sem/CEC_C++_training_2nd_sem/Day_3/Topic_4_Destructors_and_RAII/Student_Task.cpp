/*
 * =====================================================================
 * 💻 STUDENT TASK: THE SAFE NETWORK CONNECTION
 * =====================================================================
 * 
 * YOUR MISSION:
 * You are writing a class that handles a secure network connection.
 * When the object is created, it allocates memory for the secure IP.
 * 
 * YOUR TASK:
 * Write the Destructor! The Destructor must:
 * 1. Print a message saying "Closing connection to IP..."
 * 2. Safely `delete` the `secureIP` pointer so we don't have a memory leak!
 */

#include <iostream>
#include <string>
using namespace std;

class NetworkConnection {
private:
    string* secureIP; // Pointer to Heap memory

public:
    // Constructor (Connects)
    NetworkConnection(string ip) {
        secureIP = new string(ip); // Allocates memory
        cout << "🌍 Connected securely to: " << *secureIP << endl;
    }

    // 🛑 TASK: Write the Destructor below!
    // Remember to use the `~` symbol and delete the pointer!
    
    
    

    void sendData(string data) {
        cout << "   -> Transmitting data: '" << data << "' to " << *secureIP << endl;
    }
};

int main() {
    cout << "--- SERVER START ---" << endl;

    if (true) {
        cout << "Opening temporary scope..." << endl;
        
        NetworkConnection myWifi("192.168.1.50");
        myWifi.sendData("Hello Server!");
        
        cout << "Closing temporary scope..." << endl;
        // 🛑 When this bracket closes, your Destructor should automatically fire!
    }

    cout << "--- SERVER SHUTDOWN (No memory leaks!) ---" << endl;
    return 0;
}
