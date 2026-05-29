#include <iostream>
#include <string>
using namespace std;
class employee
{
    private:
    int id;
    string name;
    double salary;
    string department;
    public:
    employee(int i, string n, double s, string d)
    {
        id = i;
        setname(n);
        setsalary(s);
        setdepartment(d);
    }
    int getid() const { return id;}
    string getname() const {return name;}
    double getsalary() const {return salary;}
    string getdepartment() const {return department;}
    void setname(string& n)
    {
        if (n.length() > 0)
        {
            name = n;
        }
        else
        {
            cout << "name must be at least 2 characters!" << endl;
            name = "unknown";
        }
    }
    void setsalary(double s)
    {
        if (s >= 0)
        {
            salary = s;
        }
        else
        {
            cout << "salary cannot be negative!" << endl;
            salary = 0;
        }
    }
    void setdepartment(string& d)
    {
        department = d;
    }
    void giveraise(double percentage)
    {
        if (percentage > 0)
        {
            salary += salary * (percentage /100);
            cout << name << " received a " << percentage 
            << "% raise. new salary: $" << salary << endl;
        }
    }
    void display () const
    {
        cout << "ID: " << id << " | " << department << endl;
    }
};
int main() 
{
    employee emp(101, "arjun", 50000, "engineering");
    emp.display();
    emp.giveraise(10);
    emp.setsalary(-100);

    cout << "\nfinal details:" << endl;
    cout << "name: " << emp.getname() << endl;
    cout << "salary: $" << emp.getsalary() << endl;
    return 0;

}