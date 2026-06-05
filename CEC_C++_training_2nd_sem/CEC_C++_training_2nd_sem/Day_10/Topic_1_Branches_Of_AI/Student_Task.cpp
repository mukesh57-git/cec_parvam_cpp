/*
 * =====================================================================
 * 💻 STUDENT TASK: HACK THE SPAM FILTER!
 * =====================================================================
 * 
 * YOUR MISSION:
 * 1. Look at the `testMessages` array. Add a new string to it.
 *    Your goal is to write a SPAM message (trying to steal money or sell 
 *    something), but use words that will TRICK the AI into thinking it 
 *    is a 🟢 HAM (Safe) message! (Hint: Look at the Ham training data).
 * 
 * 2. Run the code. Did your message bypass the filter?
 * 
 * 3. Now, put your Cybersecurity hat on. Go up to the `ai.train()` section 
 *    and add a NEW Spam training phrase so the AI catches your tricky email!
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
    
    // === TRAINING DATA ===
    ai.train("Buy cheap watches now!!!", true);
    ai.train("Congratulations you won a free iPhone click here", true);
    ai.train("Limited offer earn money fast!!!", true);
    
    // 🛑 3. Add a new Spam training phrase here to catch your tricky email!
    
    
    ai.train("Meeting at 3pm tomorrow please confirm", false);
    ai.train("Can you review the project report by Friday", false);
    ai.train("Thanks for your help with the presentation", false);
    
    cout << "=== AI NLP SPAM CLASSIFIER ===" << endl;
    
    // === TESTING DATA ===
    vector<string> testMessages = {
        "Congratulations you won a free gift claim now!!!",
        // 🛑 1. Write a sneaky spam email here that bypasses the filter!
        // (Try using words like 'project' or 'meeting' to trick it)
        
    };
    
    for (string msg : testMessages) {
        ai.classify(msg);
    }
    
    return 0;
}
