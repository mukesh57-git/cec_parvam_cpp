/*
 * STL CONTAINERS DEMO
 * This file demonstrates how to use vectors, stacks, and queues!
 */

#include <iostream>
#include <vector>
#include <stack>
#include <queue>
#include <string>

using namespace std;

int main() {
    // ==========================================
    // 1. VECTOR (The Smart Array)
    // ==========================================
    cout << "--- VECTOR (The Smart Array) ---" << endl;
    vector<string> inventory;
    
    inventory.push_back("Sword");
    inventory.push_back("Shield");
    inventory.push_back("Potion");
    
    cout << "You have " << inventory.size() << " items." << endl;
    cout << "Item 2 is: " << inventory[1] << endl; // Shield
    
    inventory.pop_back(); // Use potion!
    cout << "After pop_back, you have " << inventory.size() << " items." << endl;

    
    // ==========================================
    // 2. STACK (LIFO - Last In, First Out)
    // ==========================================
    cout << "\n--- STACK (The Pringles Can / Undo History) ---" << endl;
    stack<string> browserHistory;
    
    browserHistory.push("google.com");
    browserHistory.push("youtube.com");
    browserHistory.push("github.com"); // Last in!
    
    cout << "Current page: " << browserHistory.top() << endl; // github.com
    
    browserHistory.pop(); // Hit the 'Back' button
    cout << "Hit back. New page: " << browserHistory.top() << endl; // youtube.com


    // ==========================================
    // 3. QUEUE (FIFO - First In, First Out)
    // ==========================================
    cout << "\n--- QUEUE (The Rollercoaster Line) ---" << endl;
    queue<string> ticketLine;
    
    ticketLine.push("Arjun"); // First in line
    ticketLine.push("Priya");
    ticketLine.push("Ravi");
    
    cout << "Next in line to ride: " << ticketLine.front() << endl; // Arjun
    
    ticketLine.pop(); // Arjun gets on the ride
    cout << "Next in line: " << ticketLine.front() << endl; // Priya

    return 0;
}
