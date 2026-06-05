# Topic 3: Constructor & Destructor Order

## 1. The Order of Construction (Top-Down)
When you create a Derived class object, the compiler must build the Base class **before** it can build the Derived class.
Think of it like a house: You must build the Foundation (Base) before you can build the Roof (Derived).

1. Base Class Constructor runs.
2. Derived Class Constructor runs.

## 2. The Order of Destruction (Bottom-Up)
When the object dies, the destruction happens in the **exact reverse order**. 
Think of it like demolishing a house: You must remove the Roof (Derived) before you destroy the Foundation (Base).

1. Derived Class Destructor runs.
2. Base Class Destructor runs.

```cpp
class Parent {
public:
    Parent() { cout << "1. Parent Built" << endl; }
    ~Parent() { cout << "4. Parent Destroyed" << endl; }
};

class Child : public Parent {
public:
    Child() { cout << "2. Child Built" << endl; }
    ~Child() { cout << "3. Child Destroyed" << endl; }
};
```

## 3. Passing Arguments to the Base Constructor
If your Base class does NOT have a default constructor (meaning it requires an argument like an `int` or `string`), you MUST manually pass that data from the Child to the Parent. 

We do this using an **Initialization List** (a colon `:` after the Child's constructor).

```cpp
class Vehicle {
public:
    Vehicle(int wheels) { cout << "Vehicle with " << wheels << " wheels created." << endl; }
};

class Car : public Vehicle {
public:
    // The Car takes an integer, and immediately passes it UP to the Vehicle!
    Car(int w) : Vehicle(w) { 
        cout << "Car created." << endl;
    }
};
```

## 4. 🙋‍♂️ Interactive Classroom Activity: "The Matryoshka Dolls"
**Goal:** Physically demonstrate the order of construction and destruction.
**Activity Steps:**
1. **The Setup:** The Trainer gets two empty boxes, one small (Child) and one large (Parent). 
2. **Construction:** The Trainer says "Spawn a Child!" The Trainer must first construct the Parent (put down the large box). Then, the Trainer constructs the Child (puts the small box inside the large box). The students yell: "PARENT FIRST, CHILD SECOND!"
3. **Destruction:** The Trainer says "The program is ending! Destroy the objects!" Can the Trainer destroy the large box first? No, the small box is inside it! The Trainer must pull out the small box (destroy Child) and then destroy the large box (destroy Parent). The students yell: "CHILD FIRST, PARENT SECOND!"

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** You are building electronics. The Base class is `Device` and it needs a `batteryLevel`. The Derived class is `Phone`. You must write the `Phone` constructor so it passes the battery level UP to the `Device`!
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
