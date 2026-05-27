#include <iostream>
#include <cstring>
using namespace std;
class person
{
private:
    char *name;
    int age;

public:
    person()
    {
        name = new char[1];
        name[0] = '\n';
        age = 0;
        cout << "default constructer" << endl;
    }
    person(const char *n, int a)
    {
        name = new char[strlen(n) + 1];
        strcpy(name, n);
        age = a;
        cout << "parameterized constructer " << name << endl;
    }
    person(const person &p)
    {
        name = new char[strlen(p.name) + 1];
        strcpy(name, p.name);
        age = p.age;
        cout << "copy constructer " << name << endl;
    }
    ~person()
    {
        cout << "destructer:" << name << endl;
        delete[] name;
    }
    void display()
    {
        cout << name << "(" << age << "years old)" << endl;
    }
};

int main()
{
    person p1;
    person p2("arjun", 20);
    person p3 = p2;
    cout << "\n--- personal details ---" << endl;
    p1.display();
    p2.display();
    p3.display();
    cout << "\n--- end of main ---" << endl;
    return 0;
}