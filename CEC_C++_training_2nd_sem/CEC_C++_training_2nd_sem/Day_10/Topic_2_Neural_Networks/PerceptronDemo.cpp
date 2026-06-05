/*
 * SINGLE NEURON DEMO (PERCEPTRON)
 * We are going to train an Artificial Neuron to learn the "AND" Logic Gate.
 * It starts with random math, and adjusts itself until it gets 100% accuracy!
 */

#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>

using namespace std;

class Perceptron {
private:
    vector<double> weights; // The "Dials" the AI will turn to learn
    double bias;            // An extra dial for fine-tuning
    double learningRate;    // How fast it turns the dials
    
    // The Activation Function: Converts math into a simple 1 or 0
    int activate(double sum) {
        return sum >= 0 ? 1 : 0;
    }
    
public:
    Perceptron(int inputSize, double lr = 0.1) {
        learningRate = lr;
        bias = 0;
        srand(time(nullptr));
        
        // Start with random, messy weights!
        for (int i = 0; i < inputSize; i++) {
            weights.push_back((double)(rand() % 100) / 100); 
        }
    }
    
    // Make a guess based on the current dials
    int predict(vector<int> inputs) {
        double sum = bias;
        for (size_t i = 0; i < weights.size(); i++) {
            sum += weights[i] * inputs[i];
        }
        return activate(sum);
    }
    
    // The Learning Process!
    void train(vector<vector<int>> trainingInputs, vector<int> labels, int epochs) {
        cout << "[AI] Training perceptron for " << epochs << " epochs..." << endl;
        
        for (int epoch = 0; epoch < epochs; epoch++) {
            int errors = 0;
            
            for (size_t i = 0; i < trainingInputs.size(); i++) {
                int prediction = predict(trainingInputs[i]);
                int error = labels[i] - prediction; // How wrong were we?
                
                if (error != 0) {
                    errors++;
                    // We were wrong! Adjust the dials (Weights)!
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
    
    void displayWeights() {
        cout << "Final Dials (Weights): [" << weights[0] << ", " << weights[1] << "], Bias: " << bias << endl;
    }
};

int main() {
    cout << "=== Single Neuron (Perceptron) ===\n" << endl;
    cout << "Training the AI to learn the AND logic gate...\n" << endl;
    
    // Input combinations for an AND gate (x1, x2)
    vector<vector<int>> inputs = {
        {0, 0},  // 0 AND 0
        {0, 1},  // 0 AND 1
        {1, 0},  // 1 AND 0
        {1, 1}   // 1 AND 1
    };
    
    // The correct answers for an AND gate (0, 0, 0, 1)
    vector<int> labels = {0, 0, 0, 1};
    
    // Create a Neuron with 2 inputs
    Perceptron neuron(2);
    
    // Train it! (Give it 20 tries / epochs)
    neuron.train(inputs, labels, 20);
    
    // Test it to see if it really learned it!
    cout << "\n=== Testing AND Gate ===" << endl;
    neuron.displayWeights();
    cout << "\nResults:" << endl;
    
    for (size_t i = 0; i < inputs.size(); i++) {
        int result = neuron.predict(inputs[i]);
        cout << inputs[i][0] << " AND " << inputs[i][1] << " = " << result 
             << "  (Expected: " << labels[i] << ")" << endl;
    }
    
    return 0;
}
