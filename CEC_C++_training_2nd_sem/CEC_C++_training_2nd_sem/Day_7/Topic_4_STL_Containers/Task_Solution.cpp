/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE OPERATING SYSTEM
 * =====================================================================
 */

#include <iostream>
#include <vector>
#include <stack>
#include <queue>
#include <string>

using namespace std;

int main() {
    cout << "--- 1. HIGH SCORES (Vector) ---" << endl;
    vector<int> highScores;
    highScores.push_back(500);
    highScores.push_back(750);
    highScores.push_back(1200);
    
    cout << "Total number of recorded scores: " << highScores.size() << endl;


    cout << "\n--- 2. TEXT EDITOR (Stack) ---" << endl;
    stack<string> undoHistory;
    undoHistory.push("Typed 'A'");
    undoHistory.push("Typed 'B'");
    undoHistory.push("Deleted 'A'");
    
    cout << "Current last action: " << undoHistory.top() << endl;
    
    cout << "*User clicks UNDO*" << endl;
    undoHistory.pop();
    
    cout << "New last action: " << undoHistory.top() << endl;


    cout << "\n--- 3. PRINTER QUEUE (Queue) ---" << endl;
    queue<string> printJobs;
    printJobs.push("Essay.pdf");
    printJobs.push("Photo.jpg");
    printJobs.push("Resume.pdf");
    
    cout << "Printing: " << printJobs.front() << endl;
    
    cout << "*Print Job Finished*" << endl;
    printJobs.pop();
    
    cout << "Next document in line: " << printJobs.front() << endl;


    return 0;
}
