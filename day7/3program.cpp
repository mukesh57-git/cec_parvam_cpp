#include <iostream>
#include <string>
using namespace std;
class student
{
    public:
        string name;
        int age;
        student(string n, int a) : name(n), age(a) {}
        void display()
        {
            cout << name << " (" << age << "years old)" << endl;
        }
};
int main()
{
    student* s1 = new student("arjun", 20);
    cout << "name: " << s1->name << endl;
    cout << "age: " << s1->age << endl;
    s1->display();
    (*s1).display();
    delete s1;
    return 0;
}
