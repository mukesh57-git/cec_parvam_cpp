/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE SAFE NETWORK CONNECTION
 * =====================================================================
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

    // 1. THE DESTRUCTOR
    ~NetworkConnection() {
        cout << "🔌 Closing connection to " << *secureIP << "... Memory freed!" << endl;
        delete secureIP; // Safely return the memory to the system!
    }

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
        // The Destructor fires exactly right here as myWifi goes out of scope!
    }

    cout << "--- SERVER SHUTDOWN (No memory leaks!) ---" << endl;
    return 0;
}
