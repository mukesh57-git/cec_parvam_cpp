/*
 * NLP SPAM CLASSIFIER DEMO
 * This AI reads text and decides if it is SPAM or HAM (Good).
 * It learns by looking at words and calculating their probabilities!
 */

#include <iostream>
#include <string>
#include <map>
#include <vector>
#include <cctype>

using namespace std;

class SpamClassifier {
private:
    map<string, int> spamWords;
    map<string, int> hamWords;
    int spamCount = 0, hamCount = 0;
    
    // This helper function breaks a sentence into individual lowercase words
    vector<string> tokenize(const string& text) {
        vector<string> tokens;
        string word;
        for (char c : text) {
            if (isalpha(c)) {
                word += tolower(c);
            } else if (!word.empty()) {
                tokens.push_back(word);
                word = "";
            }
        }
        if (!word.empty()) tokens.push_back(word);
        return tokens;
    }

public:
    // 1. Train the AI! Give it a sentence and tell it if it's spam or not.
    void train(const string& text, bool isSpam) {
        vector<string> words = tokenize(text);
        if (isSpam) {
            spamCount++;
            for (string w : words) spamWords[w]++;
        } else {
            hamCount++;
            for (string w : words) hamWords[w]++;
        }
    }
    
    // 2. Predict! Calculate the math to find the Spam percentage.
    double predict(const string& text) {
        vector<string> words = tokenize(text);
        
        double probSpam = (double)spamCount / (spamCount + hamCount + 1);
        double probHam = (double)hamCount / (spamCount + hamCount + 1);
        
        for (string word : words) {
            double pWordInSpam = (double)(spamWords[word] + 1) / (spamCount + 2);
            double pWordInHam = (double)(hamWords[word] + 1) / (hamCount + 2);
            probSpam *= pWordInSpam;
            probHam *= pWordInHam;
        }
        
        return probSpam / (probSpam + probHam);  
    }
    
    // 3. Print the results nicely
    void classify(const string& text) {
        double score = predict(text);
        cout << "Message: \"" << text << "\"" << endl;
        cout << "Spam Probability: " << (score * 100) << "%" << endl;
        cout << "Classification: " << (score > 0.5 ? "🔴 SPAM" : "🟢 HAM (Safe)") << endl;
        cout << "-----------------------------------" << endl;
    }
};

int main() {
    SpamClassifier ai;
    
    // TRAINING PHASE: Teach the AI what Spam looks like
    ai.train("Buy cheap watches now!!!", true);
    ai.train("Congratulations you won a free iPhone click here", true);
    ai.train("Limited offer earn money fast!!!", true);
    
    // TRAINING PHASE: Teach the AI what Ham (good emails) looks like
    ai.train("Meeting at 3pm tomorrow please confirm", false);
    ai.train("Can you review the project report by Friday", false);
    ai.train("Thanks for your help with the presentation", false);
    
    cout << "=== AI NLP SPAM CLASSIFIER ===" << endl;
    
    // TESTING PHASE: Give the AI brand new emails it has never seen!
    vector<string> testMessages = {
        "Congratulations you won a free gift claim now!!!",
        "Can you send me the project files",
        "Buy cheap watches earn money fast!!"
    };
    
    for (string msg : testMessages) {
        ai.classify(msg);
    }
    
    return 0;
}
