#include <iostream>
#include <fstream>
#include <string>
#include <iomanip>
using namespace std;
int main()
{
    ofstream outfile("student.txt");
    if (outfile.is_open())
    {
        outfile << left << setw(10) << "ID: "
                << setw(20) << "Name: "
                << setw(10) << "CGPA: " << endl;
        outfile << string(40, '-') << endl;

        outfile << setw(10) << 101
                << setw(20) << "arjun"
                << setw(10) << fixed << setprecision(2) << 8.75 << endl;

        outfile << setw(10) << 102
                << setw(20) << "priya"
                << setw(10) << fixed << setprecision(2) << 9.20 << endl;
        outfile.close();
    }
    ifstream infile("student.txt");
    string line;
    if (infile.is_open())
    {
        cout << "=== student records ===" << endl;
        while (getline(infile, line))
        {
            cout << line << endl;
        }
        infile.close();
    }
    ifstream numfile("numbers.txt");
    int sum = 0, num;

    ofstream createnum("numbers.txt");
    createnum << 10 << " " << 20 << " " << 30 << " " << 40 << " " << 50;
    createnum.close();

    numfile.open("numbers.txt");
    while (numfile >> num)
    {
        sum += num;
    }
    numfile.close();
    cout << "\nsum of numbers: " << sum << endl;
    return 0;
}
