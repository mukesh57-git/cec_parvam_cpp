/**
 * Day 5 Quiz Questions Database
 * Topic: Inheritance in C++
 * Contains:
 * - 30 C++ Inheritance Trivia & Fun Facts (50%)
 * - 30 C++ Day 5 Curriculum Questions (50%)
 */

const QUESTIONS = [
  // --- INHERITANCE TRIVIA / FUN FACTS (30 Questions) ---
  {
    id: 1,
    type: "fact",
    category: "Inheritance History",
    question: "Which 1967 programming language first introduced the concept of class inheritance, directly influencing C++?",
    options: ["Smalltalk", "COBOL", "Simula 67", "Fortran"],
    answer: 2
  },
  {
    id: 2,
    type: "fact",
    category: "OOP Trivia",
    question: "The word 'inheritance' in OOP was borrowed from real-world genetics. Which OOP language popularized the exact term 'inheritance' in programming in the 1970s?",
    options: ["Pascal", "Smalltalk", "C", "BASIC"],
    answer: 1
  },
  {
    id: 3,
    type: "fact",
    category: "C++ Trivia",
    question: "The 'diamond problem' in multiple inheritance got its name because of the shape of the class hierarchy diagram. Which shape does it resemble?",
    options: ["A triangle with a base", "A diamond (◇)", "An hourglass", "A pyramid"],
    answer: 1
  },
  {
    id: 4,
    type: "fact",
    category: "C++ History",
    question: "Multiple inheritance in C++ is controversial. Which popular modern language explicitly removed it and replaced it with 'interfaces' to avoid the diamond problem?",
    options: ["Python", "Rust", "Java", "Swift"],
    answer: 2
  },
  {
    id: 5,
    type: "fact",
    category: "OOP Trivia",
    question: "In real-world biology, multiple inheritance is like a child inheriting traits from both parents. C++'s 'virtual inheritance' is analogous to which real-world concept?",
    options: [
      "A single shared ancestor in a family tree",
      "Twins with identical DNA",
      "Identical genes from mutation",
      "Cloning from a single parent"
    ],
    answer: 0
  },
  {
    id: 6,
    type: "fact",
    category: "C++ Trivia",
    question: "Which programming language allows multiple inheritance like C++ and is commonly used in game engines (like Unreal Engine)?",
    options: ["C#", "Java", "C++", "Kotlin"],
    answer: 2
  },
  {
    id: 7,
    type: "fact",
    category: "Inheritance Fun Fact",
    question: "Bjarne Stroustrup included multiple inheritance in C++ despite controversy. He said it was needed for which real-world modeling scenario?",
    options: [
      "Simulating network packets",
      "Modeling 'is implemented in terms of' relationships",
      "Efficient sorting algorithms",
      "Simulating physical hardware"
    ],
    answer: 1
  },
  {
    id: 8,
    type: "fact",
    category: "C++ Trivia",
    question: "The virtual table (vtable) is a hidden mechanism C++ uses for dynamic dispatch. Approximately how many extra bytes does a vtable pointer add to each object?",
    options: ["0 bytes", "1 byte", "4 or 8 bytes (pointer size)", "16 bytes"],
    answer: 2
  },
  {
    id: 9,
    type: "fact",
    category: "OOP History",
    question: "Which real-world concept does 'hierarchical inheritance' best model?",
    options: [
      "A recipe with steps",
      "A family tree or org chart",
      "A linked list",
      "A hash table"
    ],
    answer: 1
  },
  {
    id: 10,
    type: "fact",
    category: "C++ Trivia",
    question: "Which C++ feature was introduced specifically to solve the diamond problem and ensure only one copy of a base class exists?",
    options: ["Abstract classes", "Friend classes", "Virtual base classes", "Template specialization"],
    answer: 2
  },
  {
    id: 11,
    type: "fact",
    category: "OOP Fun Fact",
    question: "In C++, what is the typical order in which destructors are called — from most-derived to base, or base to most-derived?",
    options: [
      "Base class destructor first, then derived",
      "Most-derived class destructor first, then base (reverse of construction)",
      "All destructors are called simultaneously",
      "The order is random"
    ],
    answer: 1
  },
  {
    id: 12,
    type: "fact",
    category: "C++ Trivia",
    question: "Why did C++ designers use the keyword 'virtual' for both polymorphism AND virtual inheritance?",
    options: [
      "It was a mistake that was never fixed",
      "Both involve runtime resolution or shared subobjects — the concept of 'virtual binding'",
      "Virtual functions and virtual inheritance compile to the same code",
      "The keyword was recycled to save reserved word space"
    ],
    answer: 1
  },
  {
    id: 13,
    type: "fact",
    category: "Inheritance Trivia",
    question: "Python also supports multiple inheritance. Unlike C++, Python uses MRO (Method Resolution Order). What algorithm does Python use for MRO?",
    options: ["DFS (Depth-First Search)", "BFS (Breadth-First Search)", "C3 Linearization", "Round-robin"],
    answer: 2
  },
  {
    id: 14,
    type: "fact",
    category: "C++ Trivia",
    question: "A C++ class can use 'protected' inheritance. In practice, this is sometimes called 'implementation inheritance'. What does it prevent?",
    options: [
      "The derived class from calling base methods",
      "Outside code from treating the derived class as a base class (breaks IS-A)",
      "Virtual function override",
      "Multiple levels of inheritance"
    ],
    answer: 1
  },
  {
    id: 15,
    type: "fact",
    category: "OOP Trivia",
    question: "Which famous software book coined the principle 'Favor composition over inheritance'?",
    options: [
      "The C++ Programming Language by Bjarne Stroustrup",
      "Clean Code by Robert C. Martin",
      "Design Patterns (Gang of Four book)",
      "The Pragmatic Programmer"
    ],
    answer: 2
  },
  {
    id: 16,
    type: "fact",
    category: "C++ Fun Fact",
    question: "In C++, if a base class has a virtual destructor, what happens when you delete a derived object through a base class pointer?",
    options: [
      "Only the base destructor runs",
      "Only the derived destructor runs",
      "Both destructors run in the correct order (derived first, then base)",
      "It causes a compile error"
    ],
    answer: 2
  },
  {
    id: 17,
    type: "fact",
    category: "C++ Trivia",
    question: "What C++ inheritance feature makes `sizeof(DerivedClass)` always greater than or equal to `sizeof(BaseClass)`?",
    options: [
      "Private members are duplicated",
      "Derived classes include all base class members plus their own",
      "Derived classes add an extra pointer always",
      "The compiler adds padding automatically"
    ],
    answer: 1
  },
  {
    id: 18,
    type: "fact",
    category: "OOP Trivia",
    question: "The IS-A relationship in inheritance was famously violated by which classic OOP example that confused many beginners?",
    options: [
      "Car IS-A Vehicle",
      "Square IS-A Rectangle (but violates Liskov Substitution Principle)",
      "Dog IS-A Animal",
      "Manager IS-A Employee"
    ],
    answer: 1
  },
  {
    id: 19,
    type: "fact",
    category: "C++ Trivia",
    question: "In C++, calling a virtual function inside a base class constructor is dangerous. What actually happens?",
    options: [
      "The most-derived override is correctly called",
      "A compile error occurs",
      "The base class version of the virtual function is called (derived part not yet constructed)",
      "The program crashes immediately"
    ],
    answer: 2
  },
  {
    id: 20,
    type: "fact",
    category: "C++ Standards",
    question: "The `override` keyword was introduced in which C++ standard to explicitly declare that a function overrides a base virtual function?",
    options: ["C++98", "C++03", "C++11", "C++17"],
    answer: 2
  },
  {
    id: 21,
    type: "fact",
    category: "C++ Trivia",
    question: "What is a 'mixin' in C++ inheritance terminology?",
    options: [
      "A class that cannot be instantiated",
      "A class designed to add specific functionality to other classes via multiple inheritance",
      "A class with only static members",
      "A template specialization"
    ],
    answer: 1
  },
  {
    id: 22,
    type: "fact",
    category: "Inheritance Fun Fact",
    question: "Which operating system's kernel uses C++ inheritance extensively through driver class hierarchies (e.g., IOKit)?",
    options: ["Linux", "Windows NT", "macOS / Darwin (XNU via IOKit)", "Android AOSP"],
    answer: 2
  },
  {
    id: 23,
    type: "fact",
    category: "C++ Trivia",
    question: "What does the `final` keyword (added in C++11) do when applied to a class?",
    options: [
      "Forces all member functions to be constant",
      "Prevents the class from being used as a base class (no further inheritance)",
      "Makes all members private",
      "Ensures the class is deleted after first use"
    ],
    answer: 1
  },
  {
    id: 24,
    type: "fact",
    category: "OOP Trivia",
    question: "Which famous design principle states 'Derived classes must be substitutable for their base classes without altering program correctness'?",
    options: [
      "Open/Closed Principle",
      "Interface Segregation Principle",
      "Dependency Inversion Principle",
      "Liskov Substitution Principle (LSP)"
    ],
    answer: 3
  },
  {
    id: 25,
    type: "fact",
    category: "C++ Trivia",
    question: "If a class inherits from multiple base classes with conflicting function signatures in C++, what must the programmer do to resolve it?",
    options: [
      "Rename all methods in the derived class",
      "Use explicit scope resolution to specify which base's function to call",
      "The compiler automatically picks the first inherited one",
      "Multiple inheritance with conflicts is illegal in C++"
    ],
    answer: 1
  },
  {
    id: 26,
    type: "fact",
    category: "C++ Fun Fact",
    question: "What unusual thing can a class do with constructors that it CANNOT do with regular inheritance in C++ (added in C++11)?",
    options: [
      "Define multiple constructors",
      "Inherit constructors directly from the base class using 'using Base::Base;'",
      "Call the base class constructor by name",
      "Override the constructor signature"
    ],
    answer: 1
  },
  {
    id: 27,
    type: "fact",
    category: "C++ Trivia",
    question: "Which Unreal Engine class is the root of almost every game entity, demonstrating hierarchical inheritance in a real-world game engine?",
    options: ["UObject", "AActor", "APawn", "UClass"],
    answer: 0
  },
  {
    id: 28,
    type: "fact",
    category: "OOP Trivia",
    question: "In C++, what happens to a `protected` member of a base class when inherited with `public` inheritance?",
    options: [
      "It becomes public in the derived class",
      "It stays protected in the derived class",
      "It becomes private in the derived class",
      "It is completely hidden"
    ],
    answer: 1
  },
  {
    id: 29,
    type: "fact",
    category: "C++ Trivia",
    question: "C++ allows a derived class to define a function with the SAME name as a base class non-virtual function. What is this called?",
    options: [
      "Overriding",
      "Overloading",
      "Name Hiding (shadowing)",
      "Polymorphism"
    ],
    answer: 2
  },
  {
    id: 30,
    type: "fact",
    category: "C++ Fun Fact",
    question: "Which famous C++ feature uses inheritance extensively — where a base class defines the algorithm skeleton and derived classes fill in specific steps?",
    options: [
      "Iterator Pattern",
      "Template Method Pattern",
      "Factory Pattern",
      "Decorator Pattern"
    ],
    answer: 1
  },

  // --- C++ DAY 5 CURRICULUM QUESTIONS (30 Questions) ---
  {
    id: 31,
    type: "curriculum",
    category: "Inheritance Basics",
    question: "In C++, what relationship does inheritance represent between a base class and a derived class?",
    options: ["HAS-A relationship", "IS-A relationship", "USES-A relationship", "OWNS-A relationship"],
    answer: 1
  },
  {
    id: 32,
    type: "curriculum",
    category: "Inheritance Syntax",
    question: "What is the correct C++ syntax to derive class `Dog` publicly from class `Animal`?",
    options: [
      "class Dog extends Animal { };",
      "class Dog inherits Animal { };",
      "class Dog : public Animal { };",
      "class Dog -> Animal { };"
    ],
    answer: 2
  },
  {
    id: 33,
    type: "curriculum",
    category: "Access Specifiers",
    question: "In public inheritance, what happens to a `protected` member of the base class in the derived class?",
    options: [
      "It becomes public",
      "It remains protected",
      "It becomes private",
      "It is completely hidden"
    ],
    answer: 1
  },
  {
    id: 34,
    type: "curriculum",
    category: "Access Specifiers",
    question: "In private inheritance, what happens to a `public` member of the base class in the derived class?",
    options: [
      "It remains public",
      "It becomes protected",
      "It becomes private",
      "It is inaccessible from everywhere"
    ],
    answer: 2
  },
  {
    id: 35,
    type: "curriculum",
    category: "Access Specifiers",
    question: "Can a derived class directly access `private` members of its base class regardless of the inheritance type?",
    options: [
      "Yes, always",
      "Only with public inheritance",
      "No — private members are never directly accessible in derived classes",
      "Only if the derived class uses the `friend` keyword"
    ],
    answer: 2
  },
  {
    id: 36,
    type: "curriculum",
    category: "Types of Inheritance",
    question: "Which type of inheritance is demonstrated by: `class B : public A { };` where A and B are the only two classes?",
    options: ["Multiple Inheritance", "Multilevel Inheritance", "Hierarchical Inheritance", "Single Inheritance"],
    answer: 3
  },
  {
    id: 37,
    type: "curriculum",
    category: "Types of Inheritance",
    question: "Which type of inheritance does this represent: `class A {}; class B : public A {}; class C : public B {};`?",
    options: ["Single Inheritance", "Multiple Inheritance", "Multilevel Inheritance", "Hierarchical Inheritance"],
    answer: 2
  },
  {
    id: 38,
    type: "curriculum",
    category: "Types of Inheritance",
    question: "Which type of inheritance is shown here: `class B : public A {}; class C : public A {}; class D : public A {};` (all derive from same A)?",
    options: ["Single Inheritance", "Multiple Inheritance", "Multilevel Inheritance", "Hierarchical Inheritance"],
    answer: 3
  },
  {
    id: 39,
    type: "curriculum",
    category: "Types of Inheritance",
    question: "Which syntax demonstrates Multiple Inheritance?",
    options: [
      "class C : public A { };",
      "class C : public A, public B { };",
      "class C : public A : public B { };",
      "class C inherits A, B { };"
    ],
    answer: 1
  },
  {
    id: 40,
    type: "curriculum",
    category: "Diamond Problem",
    question: "What is the 'diamond problem' in C++ inheritance?",
    options: [
      "When a class has too many private members",
      "When two base classes are identical copies",
      "When a derived class inherits from two classes that both inherit from a common base, causing ambiguity",
      "When virtual functions conflict in a class hierarchy"
    ],
    answer: 2
  },
  {
    id: 41,
    type: "curriculum",
    category: "Virtual Inheritance",
    question: "What keyword is used to solve the diamond problem by ensuring only ONE shared base class instance exists?",
    options: ["abstract", "override", "virtual", "final"],
    answer: 2
  },
  {
    id: 42,
    type: "curriculum",
    category: "Virtual Inheritance",
    question: "Which syntax correctly declares `B` as a virtual base class of `Animal`?",
    options: [
      "class B : abstract public Animal { };",
      "class B : virtual public Animal { };",
      "virtual class B : public Animal { };",
      "class B : public virtual(Animal) { };"
    ],
    answer: 1
  },
  {
    id: 43,
    type: "curriculum",
    category: "Constructor Order",
    question: "When a `class C : public B` object is created (and B : public A), in what order are constructors called?",
    options: [
      "C constructor → B constructor → A constructor",
      "A constructor → B constructor → C constructor",
      "B constructor → A constructor → C constructor",
      "All constructors run at the same time"
    ],
    answer: 1
  },
  {
    id: 44,
    type: "curriculum",
    category: "Constructor Order",
    question: "In what order are destructors called for `class C : public B` (B : public A)?",
    options: [
      "A destructor → B destructor → C destructor",
      "C destructor → B destructor → A destructor",
      "B destructor → C destructor → A destructor",
      "All destructors run simultaneously"
    ],
    answer: 1
  },
  {
    id: 45,
    type: "curriculum",
    category: "Constructor Syntax",
    question: "How does a derived class constructor correctly pass arguments to its base class constructor?",
    options: [
      "By calling the base constructor inside the function body",
      "Using the initialization list: `Derived(args) : Base(args) { }`",
      "By declaring the base constructor as friend",
      "Arguments are passed automatically with the same variable names"
    ],
    answer: 1
  },
  {
    id: 46,
    type: "curriculum",
    category: "Access Specifiers",
    question: "A member declared `protected` in the base class is accessible in:",
    options: [
      "Nowhere — it is completely hidden",
      "Only inside the base class itself",
      "The base class and its derived classes, but NOT from outside objects",
      "Anywhere including outside the class"
    ],
    answer: 2
  },
  {
    id: 47,
    type: "curriculum",
    category: "Inheritance Basics",
    question: "Which of the following is TRUE about a derived class in C++?",
    options: [
      "It cannot have its own members in addition to inherited ones",
      "It inherits all members of the base class including private ones with full access",
      "It can add new members and override base class methods",
      "It automatically deletes base class constructors"
    ],
    answer: 2
  },
  {
    id: 48,
    type: "curriculum",
    category: "Inheritance Basics",
    question: "When `Dog` inherits `eat()` from `Animal` and `Dog myDog(\"Buddy\", 3, \"Labrador\");` is created, how is the inherited method called?",
    options: [
      "Animal::eat(myDog);",
      "myDog->eat();",
      "myDog.eat();",
      "Dog.eat(myDog);"
    ],
    answer: 2
  },
  {
    id: 49,
    type: "curriculum",
    category: "Access Specifiers",
    question: "In protected inheritance, a `public` member of the base class becomes what in the derived class?",
    options: ["public", "protected", "private", "inaccessible"],
    answer: 1
  },
  {
    id: 50,
    type: "curriculum",
    category: "Scope Resolution",
    question: "In a derived class method, how do you explicitly call the BASE class version of an overridden `display()` function?",
    options: [
      "base.display();",
      "super.display();",
      "Base::display();",
      "this->parent->display();"
    ],
    answer: 2
  },
  {
    id: 51,
    type: "curriculum",
    category: "Multiple Inheritance",
    question: "In `class TeachingAssistant : public Student, public Teacher`, if both Student and Teacher inherit from Person, accessing `name` directly causes which error?",
    options: [
      "Syntax error: unexpected member",
      "Linker error: undefined reference",
      "Ambiguity error: name is inherited from both Student::Person and Teacher::Person",
      "Runtime segmentation fault"
    ],
    answer: 2
  },
  {
    id: 52,
    type: "curriculum",
    category: "Multiple Inheritance",
    question: "How do you resolve ambiguity when accessing `name` that exists in both `Student` and `Teacher` paths inside `TeachingAssistant`?",
    options: [
      "Rename the variable in one base class",
      "Use explicit scope resolution: `Student::name`",
      "Use the `using` keyword",
      "Declare `name` again in TeachingAssistant"
    ],
    answer: 1
  },
  {
    id: 53,
    type: "curriculum",
    category: "Common Mistakes",
    question: "What is wrong with this code: `class Manager : public Employee { Manager(int id, string n) { } }` when Employee has a constructor that requires parameters?",
    options: [
      "Nothing — base constructors are called automatically",
      "The derived constructor must use an initialization list to pass arguments to the base constructor",
      "The function body should call Employee::Manager()",
      "Manager cannot inherit from Employee"
    ],
    answer: 1
  },
  {
    id: 54,
    type: "curriculum",
    category: "Common Mistakes",
    question: "Why must a base class have a `virtual` destructor when derived objects are deleted through base class pointers?",
    options: [
      "Virtual destructors allow the class to be inherited",
      "Without it, only the base destructor runs, causing memory leaks in the derived part",
      "Virtual destructors make destruction faster",
      "It is not required — destructors are always virtual"
    ],
    answer: 1
  },
  {
    id: 55,
    type: "curriculum",
    category: "Types of Inheritance",
    question: "Hybrid (virtual) inheritance in C++ combines which two types of inheritance?",
    options: [
      "Single + Hierarchical",
      "Multiple + Multilevel",
      "Single + Multiple",
      "Hierarchical + Single"
    ],
    answer: 1
  },
  {
    id: 56,
    type: "curriculum",
    category: "Virtual Inheritance",
    question: "When virtual inheritance is used, how many instances of the virtual base class exist in the final derived object?",
    options: ["One per inheritance path", "Zero", "Exactly ONE shared instance", "Depends on the compiler"],
    answer: 2
  },
  {
    id: 57,
    type: "curriculum",
    category: "Access Specifiers",
    question: "Which access specifier should you use for inheritance when you want to represent a true IS-A relationship?",
    options: ["private", "protected", "public", "virtual"],
    answer: 2
  },
  {
    id: 58,
    type: "curriculum",
    category: "Constructor Order",
    question: "In multilevel inheritance (A → B → C), which constructor runs LAST when creating a C object?",
    options: ["A constructor", "B constructor", "C constructor", "All run simultaneously"],
    answer: 2
  },
  {
    id: 59,
    type: "curriculum",
    category: "Inheritance Basics",
    question: "Which of these is a correct example of the IS-A relationship that inheritance models?",
    options: [
      "Car HAS-A Engine",
      "Student IS-A Person",
      "Teacher USES-A Classroom",
      "Database CONTAINS-A Table"
    ],
    answer: 1
  },
  {
    id: 60,
    type: "curriculum",
    category: "Common Mistakes",
    question: "A `private` member in a base class is inherited by a derived class but is NOT accessible in it. To allow derived classes access without exposing to outside objects, the member should be declared as?",
    options: ["public", "private", "protected", "static"],
    answer: 2
  }
];

// Export for browser usage (since we are running locally in browser)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTIONS;
}
