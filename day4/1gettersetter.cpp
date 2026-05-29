#include <iostream>
using namespace std;
class Student
{
private:
    string name;
    int age;
    double cgpa;

public:
    string getName() const { return name; }
    int getage() const { return age; }
    double getcgpa() const { return cgpa; }
    void setname(string n) { name = n; }
    void setage(int a)
    {
        if (a > 0 && a < 150)
            age = a;
        else
            cout << "Invalid age!" << endl;

    }
    void setcgpa(double c) 
    {
        if (c>= 0.0 && c<= 10.0) 
        {
            cgpa = c;
        }
        else 
        {
            cout << "Invalid CGPA! must be between 0.0 and 10.0" << endl;
        }
    }
};
int main()
{
    Student s1;

    s1.setname("Alice");
    s1.setage(20);
    s1.setcgpa(8.5);

    cout << "Name: " << s1.getName() << endl;
    cout << "Age: " << s1.getage() << endl;
    cout << "CGPA: " << s1.getcgpa() << endl;

    Student s2;
    s2.setname("Bob");
    s2.setage(257);  
    s2.setcgpa(12.1);
    cout << "Name: " << s2.getName() << endl;
    cout << "Age: " << s2.getage() << endl;

    return 0;
}