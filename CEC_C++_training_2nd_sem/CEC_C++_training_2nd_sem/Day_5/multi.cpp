#include <iostream>
#include <string>
using namespace std;

// ========= SINGLE INHERITANCE =========
class Person {
    protected:
        string name;
        int age;
    
    public:
        Person(string n, int a) : name(n), age(a) {}
        void display() {
            cout << "Name: " << name << ", Age: " << age;
        }
};

class Student : public Person {
    protected:
        int rollNo;
    
    public:
        Student(string n, int a, int r) : Person(n, a), rollNo(r) {}
        
        void display() {
            Person::display();
            cout << ", Roll No: " << rollNo << endl;
        }
};

// ========= MULTILEVEL INHERITANCE =========
class GraduateStudent : public Student {
    private:
        string thesisTopic;
    
    public:
        GraduateStudent(string n, int a, int r, string t) 
            : Student(n, a, r), thesisTopic(t) {}
        
        void display() {
            Student::display();
            cout << "Thesis: " << thesisTopic << endl;
        }
};

// ========= HIERARCHICAL INHERITANCE =========
class Teacher : public Person {
    private:
        double salary;
    
    public:
        Teacher(string n, int a, double s) : Person(n, a), salary(s) {}
        
        void display() {
            Person::display();
            cout << ", Salary: $" << salary << endl;
        }
};

// ========= MULTIPLE INHERITANCE =========
class TeachingAssistant : public Student, public Teacher {
    public:
        TeachingAssistant(string n, int a, int r, double s) 
            : Student(n, a, r), Teacher(n, a, s) {}
        
        void display() {
            cout << "Teaching Assistant: " << Student::name << endl;
            cout << "Age: " << Student::age << ", Roll: " << Student::rollNo << endl;
        }
};

int main() {
    cout << "=== Single Inheritance ===" << endl;
    Student s1("Arjun", 20, 101);
    s1.display();
    
    cout << "\n=== Multilevel Inheritance ===" << endl;
    GraduateStudent gs("Priya", 24, 201, "Machine Learning");
    gs.display();
    
    cout << "\n=== Hierarchical Inheritance ===" << endl;
    Teacher t1("Dr. Sharma", 45, 80000);
    t1.display();
    
    return 0;
}