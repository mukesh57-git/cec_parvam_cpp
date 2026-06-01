#include <iostream>
#include <string>
using namespace std;
class person
{
    protected:
    string name;
    int age;
    public:
    person(string n, int a) : name(n), age(a) {}
    void display()
    {
        cout << "name: " << name << ", age: " << age;
    }
};
class student : public person
{
    protected:
    int rollno;
    public:
    student(string n, int a, int r) : person(n, a), rollno(r) {}
    void display()
    {
        person::display();
        cout << ", roll no: " << rollno << endl;
    }
};
class graduatestudent : public student
{
    protected:
    string thesistopic;
    public:
    graduatestudent(string n, int a, int r, string t)
    : student(n, a, r),  thesistopic(t) {}
    void display()
    {
        student::display();
        cout << "thesis: " << thesistopic << endl;
    }
};
class teacher : public person
{
    private: 
    double salary;
    public:
    teacher(string n, int a, double s) : person(n, a), salary(s) {}
    void display()
    {
        person:: display();
        cout << ". salary: $" << salary << endl;
    }
};
class teachingassistant : public student, public teacher
{
    public:
    teachingassistant(string n, int a, int r, double s)
    : student(n, a, r), teacher(n, a, s) {}
    void display()
    {
        cout << "teaching assistant: " <<student::name << endl;
        cout << "age: " << "roll: " << rollno << endl; 
    }
};
int main()
{
    cout << "=== single inheritance ===" << endl;
    student s1("arjun", 20, 101);
    s1.display();
    cout << "\n==== multilevel inheritance ===" << endl;
    graduatestudent gs("priya", 24, 201, "machine learning");
    gs.display();
    cout << "\n=== hierarchical inheritance ===" << endl;
    teacher t1("Dr. sharma", 45, 80000);
    t1.display();
    return 0;
}
