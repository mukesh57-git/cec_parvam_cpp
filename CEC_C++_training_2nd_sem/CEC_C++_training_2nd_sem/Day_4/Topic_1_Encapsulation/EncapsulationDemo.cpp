/*
 * ENCAPSULATION DEMONSTRATION
 * This file demonstrates how to protect data using private variables,
 * and how to safely access/modify that data using Getters and Setters.
 */

#include <iostream>
#include <string>
using namespace std;

class Employee {
private:
    int id;             // Read-only (No setter provided!)
    string name;
    double salary;      // Heavily guarded by the Setter

public:
    // Constructor
    Employee(int empId, string empName) : id(empId) {
        setName(empName);
        salary = 30000; // Starting default salary
    }

    // --- GETTERS (Read Access) ---
    // The 'const' keyword guarantees these functions won't accidentally change the data
    int getId() const { return id; }
    string getName() const { return name; }
    double getSalary() const { return salary; }

    // --- SETTERS (Write Access with Security Checks!) ---
    void setName(string newName) {
        if (newName.length() >= 2) {
            name = newName;
        } else {
            cout << "❌ Error: Name must be at least 2 characters long." << endl;
        }
    }

    void setSalary(double newSalary) {
        // SECURITY CHECK: Prevent bad data!
        if (newSalary >= 30000 && newSalary <= 200000) {
            salary = newSalary;
            cout << "✅ Salary updated successfully for " << name << "!" << endl;
        } else {
            cout << "❌ Error: Salary $" << newSalary << " is outside company policy limits!" << endl;
        }
    }
};

int main() {
    cout << "--- ENCAPSULATION & DATA SECURITY ---" << endl;

    Employee emp1(101, "Arjun");

    // 🛑 DANGER: The code below will NOT compile because the data is private!
    // emp1.salary = -500000; 

    // We MUST use the public interface (Getters and Setters)
    cout << "Initial Salary for " << emp1.getName() << " is $" << emp1.getSalary() << endl;

    cout << "\nAttempting to set salary to $20,000 (Below minimum wage)..." << endl;
    emp1.setSalary(20000); // The Setter acts as a bouncer and rejects this!

    cout << "\nAttempting to set salary to $60,000..." << endl;
    emp1.setSalary(60000); // The Setter accepts this!

    cout << "\nFinal Profile:" << endl;
    cout << "ID: " << emp1.getId() << " | Name: " << emp1.getName() << " | Salary: $" << emp1.getSalary() << endl;

    return 0;
}
