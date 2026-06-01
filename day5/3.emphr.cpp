#include <iostream>
#include <string>
using namespace std;

class hr
{
protected:
    string hrname;
    double salary;
    int attendance;

public:
    hr(string n) : hrname(n), salary(0), attendance(0) {}

    hr(string n, int s) : hrname(n), salary(s), attendance(75) {}

    hr(string n, int s, int a) : hrname(n), salary(s), attendance(a) {}

    void display()
    {
        cout << "hr name: " << hrname << endl;
        cout << "Attendance: " << attendance << "%" << endl;
        cout << "Salary: $" << salary << endl;
    }
};

class manager : public hr
{
private:
    string performance;
    string project;

public:
    manager(string n, int s, string p)
        : hr(n, s, 79), performance(p), project(p) {}

    void display()
    {
        hr::display();
        cout << "Performance: " << performance << endl;
        cout << "Project: " << project << endl;
    }
};

class lead : public hr
{
private:
    string team;
    string project;

public:
    lead(string n, int s, string t)
        : hr(n, s, 79), team(t), project(t) {}

    void display()
    {
        hr::display();
        cout << "Team: " << team << endl;
        cout << "Project: " << project << endl;
    }
};

class employee : public manager, public lead
{
public:
    employee(string n, int s, string p, string t)
        : manager(n, s, p), lead(n, s, t) {}

    void display()
    {
        cout << "Employee: " << manager::hrname << endl;
        manager::display();
        lead::display();
    }
};

int main()
{
    cout <<"\n--- HR details --- " << endl;
    hr("John", 80000, 100).display();
    cout << endl;

     cout << "\n--- Manager details ---" << endl;
    manager("Alice", 65000, "Excellent").display();
    cout << endl;

    cout << "\n--- lead details ---" << endl;
    lead("Bob", 50000, "Team A").display();
    cout << endl;

    cout << "\n--- employee details ---" << endl;
    employee("Eve", 40000, "Outstanding", "Team B").display();

    return 0;
}