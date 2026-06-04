#include <iostream>
#include <fstream>
using namespace std;
int main()
{
    ifstream file("noneexistent.txt");
    
    if(file)
    {
        cout << "file not found!" <<endl;

    }
    if (file.fail())
    {
        cout <<  "file operation failed!" <<endl;
    }   
    if (file.is_open())
    {
        cout << "file is open!" << endl;
        file.close();
    }

    ifstream file2("example.txt");
    if (file2.good())
    {
        cout << "file is in good state." << endl;
    }
    return 0;
}
