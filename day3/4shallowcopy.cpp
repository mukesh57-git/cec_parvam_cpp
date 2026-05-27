#include <iostream>
#include <string>
using namespace std;
class rectangle
{
    private:
         double length;
         double width;
    public:
    rectangle()
    {
        length = 0;
        width = 0;
        cout << "default constructer" << endl;
    }
    rectangle(double side)
    {
        length = side;
        width = side;
        cout << "squre consturcter " << endl;
    }
    rectangle(double l, double w)
    {
        length = l;
        width = w;
        cout << "two parameterized constructer " << endl;
    }
    rectangle(const rectangle &r)
    {
        length = r.length;
        width = r.width;
        cout << "copy constructer " << endl;
    }
    double area()
    {
        return length * width;
    }

};

int main()
{
    rectangle r1;
    rectangle r2(5);
    rectangle r3(4 ,6);
    rectangle r4 = r3;
    cout << "\n areas:" << r1.area() << "," << r2.area()
            << "," << r3.area() << "," << r4.area() << endl;
    return 0;
}