/*
 * LINEAR REGRESSION DEMO
 * This is a basic Machine Learning algorithm!
 * It looks at House Sizes and House Prices, finds the pattern (a straight line),
 * and uses that pattern to predict the price of NEW houses!
 */

#include <iostream>
#include <vector>

using namespace std;

// The AI Model
class LinearRegression {
private:
    double slope;      // 'm' in y = mx + b
    double intercept;  // 'b' in y = mx + b
    bool isTrained;

public:
    LinearRegression() {
        slope = 0;
        intercept = 0;
        isTrained = false;
    }
    
    // Feed it historical data to find the pattern!
    void train(vector<double> x, vector<double> y) {
        int n = x.size();
        double sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
        
        // Loop through all the data to calculate the math
        for (int i = 0; i < n; i++) {
            sumX += x[i];
            sumY += y[i];
            sumXY += x[i] * y[i];
            sumX2 += x[i] * x[i];
        }
        
        double meanX = sumX / n;
        double meanY = sumY / n;
        
        // Magic math to find the Line of Best Fit!
        slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        intercept = meanY - slope * meanX;
        
        isTrained = true;
        cout << "[AI] Training complete! I have found the pattern." << endl;
    }
    
    // Ask the AI to predict the future based on its training
    double predict(double x) {
        if (!isTrained) {
            cout << "ERROR: You must train the AI first!" << endl;
            return 0;
        }
        // y = mx + b
        return (slope * x) + intercept; 
    }
};

int main() {
    cout << "=== HOUSING PRICE PREDICTOR AI ===" << endl;
    
    // 1. Prepare our Training Data
    // X = House Size in square feet
    vector<double> houseSizes = {800, 1000, 1200, 1500, 1800, 2000, 2500};
    
    // Y = House Price in dollars
    vector<double> housePrices = {150000, 180000, 220000, 270000, 320000, 360000, 440000};
    
    // 2. Create and Train the AI
    LinearRegression aiModel;
    aiModel.train(houseSizes, housePrices);
    
    // 3. Make Predictions!
    cout << "\nLet's predict some prices for houses we've never seen before!" << endl;
    
    double newHouse = 1600; // A size that wasn't in our training data!
    double predictedPrice = aiModel.predict(newHouse);
    
    cout << "House size: " << newHouse << " sqft -> Estimated price: $" << (int)predictedPrice << endl;
    
    return 0;
}
