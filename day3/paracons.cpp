#include <iostream>
#include<string>
using namespace std;
class student

{

    public:
    string name;
    int age;
    double cgpa;
    student(string n, int a, double c)

    {

        name =  n;
        age = a;
        cgpa = c;
        cout << "parameterized constructer called for " << name << endl;

    }

};

 int main()

 {

    student s1("arjun", 20, 8.75);
    student s2 = student("priya" , 21, 9.2);
    return 0;

 }