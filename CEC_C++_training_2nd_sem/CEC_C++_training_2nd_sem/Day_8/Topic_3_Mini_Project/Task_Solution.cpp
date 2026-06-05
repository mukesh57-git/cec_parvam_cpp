/*
 * =====================================================================
 * ✅ SOLUTION FILE: LIBRARY MANAGEMENT SYSTEM
 * =====================================================================
 */

#include <iostream>
#include <vector>
#include <fstream>
#include <string>
#include <sstream>
#include <stdexcept>

using namespace std;

// ==========================================
// THE BOOK CLASS
// ==========================================
class Book {
private:
    int id;
    string title;
    string author;
    bool isIssued;

public:
    Book(int i, string t, string a, bool issued = false) {
        id = i;
        title = t;
        author = a;
        isIssued = issued;
    }

    int getId() { return id; }
    string getTitle() { return title; }
    bool getIsIssued() { return isIssued; }

    void issue() { isIssued = true; }
    void returnBook() { isIssued = false; }

    void display() {
        cout << "ID: " << id << " | " << title << " by " << author 
             << " | Status: " << (isIssued ? "ISSUED" : "AVAILABLE") << endl;
    }

    string toFileString() {
        return to_string(id) + "|" + title + "|" + author + "|" + (isIssued ? "1" : "0");
    }

    static Book fromFileString(string line) {
        stringstream ss(line);
        string token;
        
        getline(ss, token, '|'); int id = stoi(token);
        getline(ss, token, '|'); string title = token;
        getline(ss, token, '|'); string author = token;
        getline(ss, token, '|'); bool issued = (token == "1");
        
        return Book(id, title, author, issued);
    }
};

// ==========================================
// THE LIBRARY CLASS
// ==========================================
class Library {
private:
    vector<Book> books;
    string filename = "library_db.txt";

public:
    Library() {
        loadFromFile();
    }

    void loadFromFile() {
        ifstream inFile(filename);
        string line;
        
        if (inFile.is_open()) {
            while (getline(inFile, line)) {
                books.push_back(Book::fromFileString(line));
            }
            inFile.close();
        }
    }

    void saveToFile() {
        ofstream outFile(filename);
        if (outFile.is_open()) {
            for (Book& b : books) {
                outFile << b.toFileString() << endl;
            }
            outFile.close();
        }
    }

    void addBook(int id, string title, string author) {
        books.push_back(Book(id, title, author));
        saveToFile();
        cout << "Book added successfully!" << endl;
    }

    void displayAllBooks() {
        if (books.empty()) {
            cout << "No books in the library yet!" << endl;
            return;
        }
        cout << "\n--- LIBRARY INVENTORY ---" << endl;
        for (Book& b : books) {
            b.display();
        }
        cout << "-------------------------" << endl;
    }

    void issueBook(int id) {
        for (Book& b : books) {
            if (b.getId() == id) {
                if (b.getIsIssued()) {
                    throw runtime_error("Book is already issued to someone else!");
                }
                b.issue();
                saveToFile();
                cout << "Book checked out successfully!" << endl;
                return;
            }
        }
        throw invalid_argument("Book ID not found in system!");
    }
};

// ==========================================
// MAIN MENU
// ==========================================
int main() {
    Library lib;
    int choice;

    do {
        cout << "\n=== LIBRARY MENU ===" << endl;
        cout << "1. Add Book\n2. View Books\n3. Issue Book\n4. Exit" << endl;
        cout << "Enter choice: ";
        cin >> choice;

        try {
            switch(choice) {
                case 1: {
                    int id; string title, author;
                    cout << "Enter ID: "; cin >> id;
                    cin.ignore(); // Clear newline
                    cout << "Enter Title: "; getline(cin, title);
                    cout << "Enter Author: "; getline(cin, author);
                    lib.addBook(id, title, author);
                    break;
                }
                case 2:
                    lib.displayAllBooks();
                    break;
                case 3: {
                    int id;
                    cout << "Enter Book ID to issue: "; cin >> id;
                    lib.issueBook(id);
                    break;
                }
            }
        } 
        catch (const exception& e) {
            cout << "🚨 ERROR: " << e.what() << endl;
        }

    } while (choice != 4);

    cout << "Library System Shutting Down..." << endl;
    return 0;
}
