/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE DATA ANALYST
 * =====================================================================
 */

#include <iostream>
#include <vector>
#include <algorithm> // Don't forget the spellbook!

using namespace std;

int main() {
    cout << "--- CLASS TEST SCORES ---" << endl;
    
    vector<int> scores = {85, 100, 42, 99, 100, 75, 88, 100, 60};

    // 1. Sort the scores
    sort(scores.begin(), scores.end());
    
    // 2. Reverse the scores (Highest to lowest)
    reverse(scores.begin(), scores.end());
    
    // 3. Print the scores
    cout << "Ranked Scores: ";
    for(int x : scores) {
        cout << x << " ";
    }
    cout << endl;
    
    // 4. Count the perfect scores
    int perfectScores = count(scores.begin(), scores.end(), 100);
    
    cout << "\nNumber of students who got a perfect 100: " << perfectScores << endl;

    return 0;
}
