# Topic 4: `override` and `final` (C++11)

## 1. The `override` Keyword (Your Best Friend)
When you are overriding a virtual function, you must match the Base function's signature **exactly** (same name, same parameters, same `const` status). 

If you make a tiny mistake, the compiler normally won't warn you. It just creates a *new* function instead of overriding the old one!

```cpp
class Base {
public:
    virtual void show(int x) { cout << "Base" << endl; }
};

class Derived : public Base {
public:
    // ❌ BUG: I changed 'int' to 'double'. This doesn't override!
    void show(double x) { cout << "Derived" << endl; } 
    
    // ✅ CORRECT: Adding 'override' forces the compiler to double-check!
    // If we make a typo here, the compiler throws a massive red error.
    void show(int x) override { cout << "Derived" << endl; } 
};
```
**Golden Rule:** *Always* use `override` when you intend to override a virtual function! It is a free safety net.

## 2. The `final` Keyword (The Stop Sign)
Sometimes, you want to protect your code from being modified by subclasses. The `final` keyword stops inheritance dead in its tracks.

### Usage 1: On a Function
Prevents any further children from overriding this specific function.
```cpp
class Parent {
public:
    virtual void rules() final { cout << "My house, my rules!" << endl; }
};
class Child : public Parent {
    // ERROR! Cannot override a final function!
    // void rules() override { } 
};
```

### Usage 2: On an Entire Class
Prevents anyone from using this class as a Base class.
```cpp
class Admin final {
    // ...
};

// ERROR! Admin is final, you cannot inherit from it!
// class Hacker : public Admin { }; 
```

## 3. 🙋‍♂️ Interactive Classroom Activity: "Spot the Typo!"
**Goal:** Prove why `override` is necessary.
**Activity Steps:**
1. The Trainer writes a Base class function on the board: `virtual void calculateScore(int kills, int deaths);`
2. The Trainer writes a Derived class function: `void calculateScore(int deaths, int kills);`
3. **Question:** Will this override the base function? (Answer: NO! The parameters are swapped, so it's technically a different function signature. If we had typed `override` at the end, the compiler would have caught this bug immediately!)

## 4. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** 
  1. Find the hidden typo bug that is breaking the polymorphic `Enemy` attack system, and use `override` to fix it!
  2. Protect the `Vault` class by making its `unlock()` function `final` so no one can bypass the security!
- **The Solution:** A separate file named **`Task_Solution.cpp`** is provided.
