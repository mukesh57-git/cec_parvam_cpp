/*
 * =====================================================================
 * 💻 STUDENT TASK: LIBRARY MANAGEMENT SYSTEM
 * =====================================================================
 * 
 * Instructions:
 * Scroll down and look for the 🛑 TODO comments. 
 * Fill in the missing File Handling and Exception Handling code!
 */

#include <iostream>
#include <vector>
#include <fstream>
#include <string>
#include <sstream>
#include <stdexcept>

using namespace std;

// ==========================================
// THE BOOK CLASS (Completed for you)
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

    // Turns the book into a single string for saving to a file
    string toFileString() {
        return to_string(id) + "|" + title + "|" + author + "|" + (isIssued ? "1" : "0");
    }

    // Creates a book object from a line of text in the file
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
        // 🛑 TODO 1: Create an `ifstream` called `inFile` to open `filename`.
        // If it opens successfully, use a `while(getline(...))` loop to read the file.
        // Inside the loop, do this: `books.push_back(Book::fromFileString(line));`
        // Don't forget to close the file!
        
        
        
        
    }

    void saveToFile() {
        // 🛑 TODO 2: Create an `ofstream` called `outFile` to open `filename`.
        // Loop through the `books` vector. 
        // Write each book to the file using: `outFile << b.toFileString() << endl;`
        // Don't forget to close the file!
        
        
        
        
    }

    void addBook(int id, string title, string author) {
        books.push_back(Book(id, title, author));
        saveToFile(); // Save immediately!
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
                // 🛑 TODO 3: Check if `b.getIsIssued()` is true. 
                // If it is, `throw` a `runtime_error` saying "Book is already issued!"
                
                
                b.issue();
                saveToFile();
                cout << "Book checked out successfully!" << endl;
                return;
            }
        }
        // 🛑 TODO 4: If the loop finishes and we didn't find the book, 
        // `throw` an `invalid_argument` saying "Book ID not found!"
        
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

        // 🛑 TODO 5: Wrap the code inside this switch statement in a `try/catch` block!
        // Catch `const exception& e` and print out `e.what()`.
        
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

    } while (choice != 4);

    cout << "Library System Shutting Down..." << endl;
    return 0;
}
