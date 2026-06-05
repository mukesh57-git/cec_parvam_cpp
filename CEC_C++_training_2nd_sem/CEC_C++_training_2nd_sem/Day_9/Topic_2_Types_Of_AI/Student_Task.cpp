/*
 * =====================================================================
 * 💻 STUDENT TASK: THE TEACHER'S AI
 * =====================================================================
 * 
 * YOUR MISSION:
 * You are a teacher building an AI to predict student test scores based
 * on how many hours they studied!
 * 
 * 1. Create a vector of doubles called `hoursStudied` with this data:
 *    1.0, 2.0, 3.0, 4.0, 6.0, 8.0
 * 2. Create a vector of doubles called `testScores` with this data:
 *    55.0, 65.0, 70.0, 80.0, 92.0, 98.0
 * 3. Create a `LinearRegression` object.
 * 4. Call the `.train()` method and pass it your two vectors.
 * 5. Call the `.predict()` method to see what score a student will get 
 *    if they study for exactly 5.0 hours!
 * 6. Print the result to the terminal.
 */

#include <iostream>
#include <vector>

using namespace std;

class LinearRegression {
private:
    double slope;      
    double intercept;  
    bool isTrained = false;
public:
    void train(vector<double> x, vector<double> y) {
        int n = x.size();
        double sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
        for (int i = 0; i < n; i++) {
            sumX += x[i]; sumY += y[i]; sumXY += x[i] * y[i]; sumX2 += x[i] * x[i];
        }
        slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        intercept = (sumY / n) - slope * (sumX / n);
        isTrained = true;
        cout << "[AI] Training complete! Ready to predict test scores." << endl;
    }
    double predict(double x) {
        if (!isTrained) return 0;
        return (slope * x) + intercept; 
    }
};

int main() {
    cout << "=== STUDENT TEST SCORE AI ===" << endl;
    
    // 🛑 1. Create your hoursStudied vector here!
    
    
    // 🛑 2. Create your testScores vector here!
    
    
    // 🛑 3. Create your LinearRegression AI here!
    
    
    // 🛑 4. Train the AI!
    
    
    // 🛑 5 & 6. Predict the score for 5.0 hours and print it!
    
    
    
    return 0;
}
