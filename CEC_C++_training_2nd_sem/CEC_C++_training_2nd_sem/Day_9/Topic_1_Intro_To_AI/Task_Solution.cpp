/*
 * =====================================================================
 * ✅ SOLUTION FILE: THE CRAZY AI DOCTOR
 * =====================================================================
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
    
    // 1. ZOMBIE VIRUS
    medicalAI.addRule("craving_brains,slow_walking,groaning", "Zombie Virus", 100);
    
    // 2. VAMPIRISM
    medicalAI.addRule("fangs,pale_skin,hates_garlic", "Vampirism", 95);
    
    // 3. NINJA SYNDROME
    medicalAI.addRule("sneaky,wears_black,throws_stars", "Ninja Syndrome", 90);

    // 4. Change symptoms to trigger the Zombie Virus!
    map<string, bool> patient = {
        {"craving_brains", true}, 
        {"slow_walking", true}, 
        {"groaning", true},
        {"fangs", false}
    };
    
    cout << "Analyzing the Patient..." << endl;
    medicalAI.diagnose(patient);
    
    return 0;
}
