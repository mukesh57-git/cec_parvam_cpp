/*
 * =====================================================================
 * 💻 STUDENT TASK: THE CRAZY AI DOCTOR
 * =====================================================================
 * 
 * YOUR MISSION:
 * The 1980s Medical Expert System is too boring. We need to train it
 * to diagnose fun, fictional diseases!
 * 
 * 1. Look at how `medicalAI.addRule(...)` works.
 * 2. Add a new rule to diagnose the "Zombie Virus". (Think of 3 symptoms!)
 * 3. Add another new rule to diagnose "Vampirism".
 * 4. Add another rule for a crazy disease of your choice!
 * 5. Update the `patient` map so that the patient has the exact symptoms 
 *    of your Zombie Virus, and run the code to watch the AI diagnose them!
 */

#include <iostream>
#include <string>
#include <vector>
#include <map>

using namespace std;

struct Rule {
    string condition;
    string diagnosis;
    int confidence; 
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
            
            while ((pos = cond.find(',')) != string::npos) {
                token = cond.substr(0, pos);
                if (symptoms[token] != true) {
                    allMatch = false; break;
                }
                cond.erase(0, pos + 1);
            }
            if (allMatch && symptoms[cond] != true) {
                allMatch = false;
            }
            
            if (allMatch) {
                cout << "Diagnosis : " << rule.diagnosis << endl;
                cout << "Confidence: " << rule.confidence << "%" << endl;
                found = true;
            }
        }
        if (!found) cout << "Diagnosis: Unknown." << endl;
        cout << "==================================" << endl;
    }
};

int main() {
    ExpertSystem medicalAI;
    
    medicalAI.addRule("fever,cough,bodyache", "Common Cold", 80);
    
    // 🛑 1. ADD YOUR ZOMBIE VIRUS RULE HERE! 
    // Example: medicalAI.addRule("brains,groaning,pale", "Zombie Virus", 99);
    
    
    // 🛑 2. ADD YOUR VAMPIRISM RULE HERE!
    
    
    // 🛑 3. ADD YOUR OWN CRAZY DISEASE HERE!
    
    

    // 🛑 4. Change these symptoms to match your Zombie Virus!
    map<string, bool> patient = {
        {"fever", true}, 
        {"cough", true}, 
        {"bodyache", true},
        {"brains", false},
        {"fangs", false}
    };
    
    cout << "Analyzing the Patient..." << endl;
    medicalAI.diagnose(patient);
    
    return 0;
}
