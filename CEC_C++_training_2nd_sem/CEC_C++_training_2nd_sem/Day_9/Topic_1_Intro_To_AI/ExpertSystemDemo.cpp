/*
 * 1980s EXPERT SYSTEM DEMO
 * Before ChatGPT, AI was built using "Expert Systems".
 * This is a rule-based AI that acts as a digital doctor.
 */

#include <iostream>
#include <string>
#include <vector>
#include <map>

using namespace std;

// A rule has conditions (symptoms), a diagnosis, and a confidence percentage!
struct Rule {
    string condition;
    string diagnosis;
    int confidence;  // 0-100
};

class ExpertSystem {
private:
    vector<Rule> rules;

public:
    void addRule(string condition, string diagnosis, int confidence) {
        rules.push_back({condition, diagnosis, confidence});
    }
    
    void diagnose(map<string, bool> symptoms) {
        cout << "\n=== AI DOCTOR DIAGNOSIS REPORT ===" << endl;
        bool found = false;
        
        for (Rule& rule : rules) {
            bool allMatch = true;
            string cond = rule.condition;
            size_t pos = 0;
            string token;
            
            // This loop breaks apart the conditions (e.g., "fever,cough,bodyache")
            while ((pos = cond.find(',')) != string::npos) {
                token = cond.substr(0, pos);
                if (symptoms[token] != true) {
                    allMatch = false; // Symptom missing!
                    break;
                }
                cond.erase(0, pos + 1);
            }
            
            // Check the last symptom in the string
            if (allMatch && symptoms[cond] != true) {
                allMatch = false;
            }
            
            // If the patient has ALL the symptoms in the rule, we have a match!
            if (allMatch) {
                cout << "Diagnosis : " << rule.diagnosis << endl;
                cout << "Confidence: " << rule.confidence << "%" << endl;
                found = true;
            }
        }
        
        if (!found) {
            cout << "Diagnosis: Unknown. Please consult a human specialist." << endl;
        }
        cout << "==================================" << endl;
    }
};

int main() {
    ExpertSystem medicalAI;
    
    // 1. Train the AI by giving it rules!
    medicalAI.addRule("fever,cough,bodyache", "Common Cold", 80);
    medicalAI.addRule("fever,rash,redeyes", "Measles", 90);
    medicalAI.addRule("headache,nausea", "Migraine", 70);
    
    // 2. A patient comes in with symptoms. Let's see what the AI says!
    map<string, bool> patient1 = {
        {"fever", true}, 
        {"cough", true}, 
        {"bodyache", true},
        {"nausea", false}
    };
    
    cout << "Analyzing Patient 1..." << endl;
    medicalAI.diagnose(patient1);
    
    return 0;
}
