// 1. Add your Include Guards here!
#ifndef BOOK_H
#define BOOK_H

#include <string>
using namespace std;

class Book {
private:
    string title;
    int pages;

public:
    // Constructor
    Book(string t, int p);
    
    // Method
    void readBook();
};

#endif
