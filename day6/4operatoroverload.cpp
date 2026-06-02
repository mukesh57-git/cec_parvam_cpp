//OPERATOR OVERLOADING

#include<iostream>
using namespace std;

class complex
{
    private:
    double real;
    double imag;

    public:
    complex(double r = 0, double i = 0) : real(r), imag(i) {}

    complex operator+(const complex& other) const {
        return complex(real + other.real, imag + other.imag);
    }

    complex operator-(const complex& other) const {
        return complex(real - other.real, imag - other.imag);
    }

    complex operator-() const {
        return complex(-real, -imag);
    }

    bool operator==(const complex& other) const {
        return (real == other.real) && (imag == other.imag);
    }

    complex& operator++() {
        ++real;
        return *this;
    }

    complex operator++(int) {
        complex temp = *this;
        ++real;
        return temp;
    }

    double operator[](int index) const {
        if (index == 0)return real;
        if(index==1)return imag;
        throw out_of_range("Index must be 0(real) or 1(imag)");
    }

    friend ostream& operator<<(ostream& os, const complex& c);

    friend istream& operator>>(istream& is,complex& c);
};

ostream& operator<<(ostream& os, const complex& c) {
    os<<c.real;
    if(c.imag >= 0)
    os<<" + "<<c.imag<<"i";
    else
    os<<" - "<<(-c.imag)<<"i";
    return os;
}
istream& operator>>(istream& is, complex& c)
{
    cout << "enter real part: ";
    is >> c.real;
    cout << "enter imag part: ";
    is >>c.imag;
    return is;
}
int main()
{
    complex c1(3, 4);
    complex c2(1, 2);
    cout << "c1 = " << c1 << endl;
    cout << "C2 = " << c2 << endl;

    cout << "c1 + c2 = " << (c1 + c2) << endl;
    cout << "c1 - c2 = " << (c1 - c2) << endl;
    cout << "-c1 =  " << (-c1) << endl;
    cout << "c1 == c2: " << (c1 == c2 ? "true" : "false") << endl;
    
    cout << "c1++ = " << (c1++) << ", after: " << c1 << endl;
    cout << "++c1 = " << (++c1) << endl;

    cout << "C1[0] = " << c1[0] << ", c1[1] = " << c1[1] << endl;
    return 0;
}