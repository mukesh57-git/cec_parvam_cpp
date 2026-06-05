/*
 * =====================================================================
 * ✅ SOLUTION FILE: TRAIN THE NEURON!
 * =====================================================================
 */

#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>

using namespace std;

class Perceptron {
private:
    vector<double> weights;
    double bias;           
    double learningRate;   
    
    int activate(double sum) { return sum >= 0 ? 1 : 0; }
    
public:
    Perceptron(int inputSize, double lr = 0.1) {
        learningRate = lr; bias = 0; srand(time(nullptr));
        for (int i = 0; i < inputSize; i++) weights.push_back((double)(rand() % 100) / 100); 
    }
    
    int predict(vector<int> inputs) {
        double sum = bias;
        for (size_t i = 0; i < weights.size(); i++) sum += weights[i] * inputs[i];
        return activate(sum);
    }
    
    void train(vector<vector<int>> trainingInputs, vector<int> labels, int epochs) {
        cout << "[AI] Training perceptron for " << epochs << " epochs..." << endl;
        for (int epoch = 0; epoch < epochs; epoch++) {
            int errors = 0;
            for (size_t i = 0; i < trainingInputs.size(); i++) {
                int prediction = predict(trainingInputs[i]);
                int error = labels[i] - prediction; 
                if (error != 0) {
                    errors++;
                    for (size_t j = 0; j < weights.size(); j++) {
                        weights[j] += learningRate * error * trainingInputs[i][j];
                    }
                    bias += learningRate * error;
                }
            }
            if (errors == 0) {
                cout << "[AI] I have learned the pattern! Converged at epoch " << (epoch + 1) << "!" << endl;
                break;
            }
        }
    }
};

int main() {
    cout << "=== Single Neuron (Perceptron) ===\n" << endl;
    cout << "Training the AI to learn the OR logic gate...\n" << endl;
    
    vector<vector<int>> inputs = {
        {0, 0},  
        {0, 1},  
        {1, 0},  
        {1, 1}   
    };
    
    // 1. We changed the answers to match the OR gate logic! (0, 1, 1, 1)
    vector<int> labels = {0, 1, 1, 1};
    
    Perceptron neuron(2);
    neuron.train(inputs, labels, 20);
    
    cout << "\n=== Testing OR Gate ===" << endl;
    
    for (size_t i = 0; i < inputs.size(); i++) {
        int result = neuron.predict(inputs[i]);
        cout << inputs[i][0] << " OR " << inputs[i][1] << " = " << result 
             << "  (Expected: " << labels[i] << ")" << endl;
    }
    
    return 0;
}
