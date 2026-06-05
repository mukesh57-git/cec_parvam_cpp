#ifndef BOOK_H
#define BOOK_H

#include <string>
using namespace std;

class Book {
private:
    string title;
    int pages;

public:
    Book(string t, int p);
    void readBook();
};

#endif
