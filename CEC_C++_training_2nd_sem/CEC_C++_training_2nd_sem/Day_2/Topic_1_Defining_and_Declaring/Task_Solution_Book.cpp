#include "Task_Solution_Book.h"
#include <iostream>
using namespace std;

// 1. Constructor definition
Book::Book(string t, int p) {
    title = t;
    pages = p;
}

// 2. Method definition
void Book::readBook() {
    cout << "Reading " << title << " which has " << pages << " pages!" << endl;
}
