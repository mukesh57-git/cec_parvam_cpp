/*
 * =====================================================================
 * ✅ SOLUTION FILE: HACK THE SPAM FILTER!
 * =====================================================================
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
    
    vector<string> tokenize(const string& text) {
        vector<string> tokens; string word;
        for (char c : text) {
            if (isalpha(c)) word += tolower(c);
            else if (!word.empty()) { tokens.push_back(word); word = ""; }
        }
        if (!word.empty()) tokens.push_back(word); return tokens;
    }

public:
    void train(const string& text, bool isSpam) {
        vector<string> words = tokenize(text);
        if (isSpam) {
            spamCount++; for (string w : words) spamWords[w]++;
        } else {
            hamCount++; for (string w : words) hamWords[w]++;
        }
    }
    
    double predict(const string& text) {
        vector<string> words = tokenize(text);
        double probSpam = (double)spamCount / (spamCount + hamCount + 1);
        double probHam = (double)hamCount / (spamCount + hamCount + 1);
        for (string word : words) {
            probSpam *= (double)(spamWords[word] + 1) / (spamCount + 2);
            probHam *= (double)(hamWords[word] + 1) / (hamCount + 2);
        }
        return probSpam / (probSpam + probHam);  
    }
    
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
    
    ai.train("Buy cheap watches now!!!", true);
    ai.train("Congratulations you won a free iPhone click here", true);
    ai.train("Limited offer earn money fast!!!", true);
    
    // 3. We updated the AI to know that "Review my crypto project" is Spam!
    ai.train("Review my crypto project and send money", true);
    
    ai.train("Meeting at 3pm tomorrow please confirm", false);
    ai.train("Can you review the project report by Friday", false);
    ai.train("Thanks for your help with the presentation", false);
    
    cout << "=== AI NLP SPAM CLASSIFIER ===" << endl;
    
    vector<string> testMessages = {
        "Congratulations you won a free gift claim now!!!",
        
        // 1. This sneaky email uses Ham words like "review", "project", and "presentation"
        // Without line 72, this would trick the AI into thinking it's safe!
        "Review my new crypto project presentation and send me money!",
    };
    
    for (string msg : testMessages) {
        ai.classify(msg);
    }
    
    return 0;
}
