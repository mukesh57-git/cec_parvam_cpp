# Topic 1: Introduction to Inheritance

## 1. What is Inheritance?
**Inheritance** is a mechanism where a new class (the **Derived** or **Child** class) takes on the properties and behaviors (variables and functions) of an existing class (the **Base** or **Parent** class). 
This promotes **Code Reusability**—you write the code once in the Base class, and all the children get it for free!

## 2. The "IS-A" Relationship
You should only use inheritance if the relationship passes the **IS-A** test.
- A Car **IS A** Vehicle. (Valid Inheritance ✅)
- A Dog **IS AN** Animal. (Valid Inheritance ✅)
- A SteeringWheel **IS A** Car? (Invalid ❌! A Steering Wheel is a *part* of a car. We do not use inheritance for this).

## 3. Basic Syntax
In C++, we use a colon `:` to inherit from a class. We almost always use the word `public` after the colon.

```cpp
// 1. The Base Class
class Animal {
public:
    void eat() { cout << "I am eating!" << endl; }
};

// 2. The Derived Class (Inherits from Animal)
class Dog : public Animal {
public:
    void bark() { cout << "Woof!" << endl; }
};

int main() {
    Dog myDog;
    myDog.bark(); // Its own function
    myDog.eat();  // Inherited from Animal! It gets this for free!
}
```

## 4. Private vs Protected
When dealing with inheritance, `private` can be too strict!

*   `public`: Everyone can access it (Strangers, Children, Main function).
*   `private`: NO ONE can access it EXCEPT the class itself. Not even its children!
*   `protected`: Strangers (like the `main` function) cannot access it. BUT, **Child classes CAN access it!** 

## 5. 🙋‍♂️ Interactive Classroom Activity: "The IS-A Game"
**Goal:** Practice identifying when to use Inheritance.
**Activity Steps:**
1. **The Game:** The Trainer shouts out two words. The students must yell back either **"INHERIT!"** (if it's an IS-A relationship) or **"REJECT!"** (if it's not).
2. **Round 1:** Trainer yells: "Apple and Fruit!" (Students: INHERIT! An Apple IS A Fruit).
3. **Round 2:** Trainer yells: "Engine and Airplane!" (Students: REJECT! An Engine is a part of an Airplane, not a type of airplane).
4. **Round 3:** Trainer yells: "Warrior and Player!" (Students: INHERIT! A Warrior IS A Player).
5. **Round 4:** Trainer yells: "Smartphone and Battery!" (Students: REJECT!).

## 6. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** You need to build a Base class called `Vehicle`, and a Derived class called `Car`. The `Car` should inherit from `Vehicle` and add its own special functions!
- **The Solution:** A separate file named **`Task_Solution.cpp`** is provided.

---

## ▶️ How to Run the Code in this Folder
**Method 1: Using VS Code (Recommended for Students & Trainers)**
1. Open the `.cpp` file you want to run in Visual Studio Code.
2. Click the **"Play" button** (▷) in the top-right corner of the window.
3. Look at the terminal at the bottom of the screen to see the output!

**Method 2: Using the Terminal (Manual Compilation)**
1. Open your terminal or command prompt.
2. Navigate to the folder containing the `.cpp` file.
3. Compile the code by typing: `g++ FileName.cpp -o program` and press Enter.
4. Run the code by typing: `./program` (Mac) or `program.exe` (Windows) and press Enter.
