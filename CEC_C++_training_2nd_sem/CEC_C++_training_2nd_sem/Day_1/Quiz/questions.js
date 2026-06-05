/**
 * Day 1 Quiz Questions Database
 * Contains:
 * - 30 Tech/OOP/C++ Specific Trivia & Fun Facts (50%)
 * - 30 C++ Day 1 Curriculum Questions (50%)
 */

const QUESTIONS = [
  // --- C++ & OOP TRIVIA / FUN FACTS (30 Questions) ---
  {
    id: 1,
    type: "fact",
    category: "C++ Trivia",
    question: "Who suggested the name 'C++' to Bjarne Stroustrup in 1983, referencing the C increment operator?",
    options: ["Dennis Ritchie", "Rick Mascitti", "Ken Thompson", "Grace Hopper"],
    answer: 1
  },
  {
    id: 2,
    type: "fact",
    category: "C++ Trivia",
    question: "Bjarne Stroustrup once joked: 'C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it...'",
    options: [
      "crashes the entire computer grid",
      "heals your foot automatically",
      "blows your whole leg off",
      "compiles a warning message first"
    ],
    answer: 2
  },
  {
    id: 3,
    type: "fact",
    category: "OOP History",
    question: "Which language, created in 1967, is considered the first OOP language and heavily inspired Bjarne Stroustrup's design of C++?",
    options: ["Smalltalk", "Simula 67", "Lisp", "Fortran"],
    answer: 1
  },
  {
    id: 4,
    type: "fact",
    category: "C++ Trivia",
    question: "What was the name of Bjarne Stroustrup's first C++-to-C compiler developed at Bell Labs in 1983?",
    options: ["Cfront", "G++", "Clang", "Turbo C++"],
    answer: 0
  },
  {
    id: 5,
    type: "fact",
    category: "C++ Trivia",
    question: "Which character was chosen for C++ destructors because it represents negation or complement in mathematics?",
    options: ["Exclamation mark (!)", "Tilde (~)", "Caret (^)", "Asterisk (*)"],
    answer: 1
  },
  {
    id: 6,
    type: "fact",
    category: "C++ Philosophy",
    question: "Which of Bjarne Stroustrup's design philosophies states that you shouldn't pay overhead for features you don't use?",
    options: [
      "Write once, run anywhere",
      "Zero-overhead principle",
      "Keep it simple, stupid",
      "Batteries included"
    ],
    answer: 1
  },
  {
    id: 7,
    type: "fact",
    category: "C++ Trivia",
    question: "Why did Bjarne Stroustrup choose C as the foundation for C++ instead of creating a new language from scratch?",
    options: [
      "He was forced to do so by AT&T management.",
      "C was highly portable, fast, and close to hardware.",
      "C already had built-in classes.",
      "C compile times were the fastest in the world."
    ],
    answer: 1
  },
  {
    id: 8,
    type: "fact",
    category: "C++ Standards",
    question: "Before standard C++11 was officially named, what placeholder name was used by the committee during its long delay?",
    options: ["C++0x", "C++Next", "C++2.0", "C++Beta"],
    answer: 0
  },
  {
    id: 9,
    type: "fact",
    category: "C++ Trivia",
    question: "Which operating system kernel is famously NOT written in C++ because its creator strongly dislikes C++?",
    options: ["Windows NT", "macOS", "Linux", "iOS"],
    answer: 2
  },
  {
    id: 10,
    type: "fact",
    category: "OOP History",
    question: "Which Xerox PARC programming language in the 1970s popularized terms like 'object', 'class', and 'methods'?",
    options: ["Smalltalk", "Pascal", "Algol", "BASIC"],
    answer: 0
  },
  {
    id: 11,
    type: "fact",
    category: "C++ Trivia",
    question: "In what research facility did Bjarne Stroustrup create C++ in 1979?",
    options: ["Xerox PARC", "AT&T Bell Labs", "MIT AI Lab", "IBM Watson"],
    answer: 1
  },
  {
    id: 12,
    type: "fact",
    category: "C++ Trivia",
    question: "Why are C++ class declarations terminated with a semicolon, unlike functions?",
    options: [
      "To signal the compiler to allocate memory.",
      "To distinguish them from structs.",
      "Because you can declare objects immediately after the closing brace.",
      "It was a syntax error in the early C compiler."
    ],
    answer: 2
  },
  {
    id: 13,
    type: "fact",
    category: "C++ Trivia",
    question: "Which header file was originally named 'stream.h' in early C++ before the standard library adopted namespaces?",
    options: ["<iostream>", "<fstream>", "<sstream>", "<stdio.h>"],
    answer: 0
  },
  {
    id: 14,
    type: "fact",
    category: "C++ Trivia",
    question: "What is Bjarne Stroustrup's nationality?",
    options: ["Norwegian", "Swedish", "Danish", "German"],
    answer: 2
  },
  {
    id: 15,
    type: "fact",
    category: "C++ Trivia",
    question: "Which standard C++ keyword was repurposed in C++11 from specifying local variable storage to automatic type inference?",
    options: ["register", "static", "extern", "auto"],
    answer: 3
  },
  {
    id: 16,
    type: "fact",
    category: "C++ Standards",
    question: "What is the official ISO standard number family that governs C++ specification?",
    options: ["ISO/IEC 14882", "ISO 9001", "ISO/IEC 27001", "ISO 8601"],
    answer: 0
  },
  {
    id: 17,
    type: "fact",
    category: "C++ Trivia",
    question: "Which C++ features were famously omitted from the original 1985 release and only standard-defined in C++98?",
    options: ["Classes and Objects", "Templates and Exceptions", "Pointers and Structs", "Functions and Comments"],
    answer: 1
  },
  {
    id: 18,
    type: "fact",
    category: "OOP History",
    question: "Who won the Turing Award in 2001 for inventing Simula and pioneering Object-Oriented concepts?",
    options: ["Bjarne Stroustrup", "Ole-Johan Dahl and Kristen Nygaard", "Alan Kay", "Dennis Ritchie"],
    answer: 1
  },
  {
    id: 19,
    type: "fact",
    category: "C++ Trivia",
    question: "Bjarne Stroustrup began working on 'C with Classes' because he wanted the speed of C mixed with the abstraction of which language?",
    options: ["Fortran", "COBOL", "Simula", "Smalltalk"],
    answer: 2
  },
  {
    id: 20,
    type: "fact",
    category: "C++ Trivia",
    question: "Which C++ standard is widely considered the launch of 'Modern C++' due to its addition of smart pointers, lambdas, and move semantics?",
    options: ["C++98", "C++03", "C++11", "C++17"],
    answer: 2
  },
  {
    id: 21,
    type: "fact",
    category: "C++ Trivia",
    question: "In C++, what was the original keyword used to declare a function as exception-free before 'noexcept' was introduced?",
    options: ["throw()", "try", "catch", "final"],
    answer: 0
  },
  {
    id: 22,
    type: "fact",
    category: "C++ Trivia",
    question: "Which keyword did C++ introduce to represent a reference to the active object inside member functions?",
    options: ["self", "this", "me", "base"],
    answer: 1
  },
  {
    id: 23,
    type: "fact",
    category: "C++ Trivia",
    question: "What is the name of the oldest active C++ compiler still widely used today, originally released in 1987?",
    options: ["GCC (G++)", "Clang", "MSVC", "Turbo C++"],
    answer: 0
  },
  {
    id: 24,
    type: "fact",
    category: "C++ Trivia",
    question: "Why does standard C++ allow `std::ios_base::sync_with_stdio(false)` to be called?",
    options: [
      "To compile code faster.",
      "To speed up C++ stream input/output by disconnecting it from C standard I/O.",
      "To prevent system crashes.",
      "To enable multi-threading."
    ],
    answer: 1
  },
  {
    id: 25,
    type: "fact",
    category: "C++ Trivia",
    question: "Which operator is the only ternary operator available in the C++ language?",
    options: ["sizeof", "new", "Conditional operator (?:)", "Scope resolution (::)"],
    answer: 2
  },
  {
    id: 26,
    type: "fact",
    category: "C++ Trivia",
    question: "Why did Bjarne Stroustrup use the keyword 'virtual' for dynamic polymorphism?",
    options: [
      "To represent functions that do not consume memory.",
      "He borrowed the keyword Simula used for runtime-bound functions.",
      "It represents compiler macros.",
      "It was a placeholder that he forgot to change."
    ],
    answer: 1
  },
  {
    id: 27,
    type: "fact",
    category: "C++ Trivia",
    question: "What was the main purpose of introducing namespaces in C++?",
    options: [
      "To force developers to write clean code.",
      "To group functions by memory usage.",
      "To avoid global variable naming conflicts when mixing multiple libraries.",
      "To allow classes to inheritance multiple bases."
    ],
    answer: 2
  },
  {
    id: 28,
    type: "fact",
    category: "C++ Trivia",
    question: "Before C++ support was standard in compilers, Cfront translated C++ code directly into which language?",
    options: ["Assembly", "Pure C", "Machine Code", "BCPL"],
    answer: 1
  },
  {
    id: 29,
    type: "fact",
    category: "C++ Trivia",
    question: "Which of the following is true about Bjarne Stroustrup's current C++ work?",
    options: [
      "He retired in 1998.",
      "He remains active in the C++ standards committee design.",
      "He now primarily develops in Rust.",
      "He is the chief executive of Morgan Stanley's AI division."
    ],
    answer: 1
  },
  {
    id: 30,
    type: "fact",
    category: "C++ Trivia",
    question: "Which major database engine's core is written almost entirely in C++ for performance?",
    options: ["MySQL", "Redis", "MongoDB", "All of the above"],
    answer: 3
  },

  // --- C++ CURRICULUM QUESTIONS (30 Questions) ---
  {
    id: 31,
    type: "curriculum",
    category: "C++ History",
    question: "Who is the original creator and designer of the C++ programming language?",
    options: ["Dennis Ritchie", "Bjarne Stroustrup", "Ken Thompson", "Linus Torvalds"],
    answer: 1
  },
  {
    id: 32,
    type: "curriculum",
    category: "C++ History",
    question: "In which year was the first commercial release of C++ (with its first edition book published)?",
    options: ["1972", "1979", "1985", "1998"],
    answer: 2
  },
  {
    id: 33,
    type: "curriculum",
    category: "C++ History",
    question: "C++ was designed as an extension of which programming language?",
    options: ["Pascal", "C", "Assembly", "Simula"],
    answer: 1
  },
  {
    id: 34,
    type: "curriculum",
    category: "C++ History",
    question: "What was Bjarne Stroustrup's original name for C++ before it was officially renamed in 1983?",
    options: ["C with Classes", "C Plus", "New C", "Simula-C"],
    answer: 0
  },
  {
    id: 35,
    type: "curriculum",
    category: "Basic Structure",
    question: "Which standard header file must be included in C++ to write messages to the screen or read from the keyboard?",
    options: ["<stdio.h>", "<stdlib>", "<conio.h>", "<iostream>"],
    answer: 3
  },
  {
    id: 36,
    type: "curriculum",
    category: "Basic Structure",
    question: "What is the purpose of the standard object 'std::cout' in C++?",
    options: [
      "To read input from the keyboard",
      "To display output to the screen",
      "To handle file errors",
      "To compile the source code"
    ],
    answer: 1
  },
  {
    id: 37,
    type: "curriculum",
    category: "Basic Structure",
    question: "Which operator is the 'stream insertion operator' used to send data to std::cout?",
    options: [">>", "<<", "::", "->"],
    answer: 1
  },
  {
    id: 38,
    type: "curriculum",
    category: "Basic Structure",
    question: "Which operator is the 'stream extraction operator' used to retrieve data from std::cin?",
    options: ["<<", ">>", "::", "."],
    answer: 1
  },
  {
    id: 39,
    type: "curriculum",
    category: "Basic Structure",
    question: "What does the namespace name 'std' stand for in C++ standard libraries?",
    options: ["Static", "System", "Standard", "Structure"],
    answer: 2
  },
  {
    id: 40,
    type: "curriculum",
    category: "Basic Structure",
    question: "What is the standard return type of the primary 'main()' entry point function in C++?",
    options: ["void", "int", "float", "char"],
    answer: 1
  },
  {
    id: 41,
    type: "curriculum",
    category: "Basic Structure",
    question: "Which C++ language mechanism is used to group classes and functions under a name to prevent naming collisions?",
    options: ["Classes", "Structs", "Namespaces", "Libraries"],
    answer: 2
  },
  {
    id: 42,
    type: "curriculum",
    category: "OOP Paradigms",
    question: "What is a major conceptual difference between Procedural Programming and Object-Oriented Programming (OOP)?",
    options: [
      "Procedural is faster to execute, whereas OOP cannot run on modern hardware.",
      "Procedural organizes programs around actions/functions, while OOP organizes them around data/objects.",
      "Procedural supports class inheritance, whereas OOP only supports struct nesting.",
      "OOP requires compilation, while Procedural programs are always interpreted."
    ],
    answer: 1
  },
  {
    id: 43,
    type: "curriculum",
    category: "Four Pillars",
    question: "Which of the following is NOT one of the traditional Four Pillars of Object-Oriented Programming?",
    options: ["Encapsulation", "Polymorphism", "Compilation", "Inheritance"],
    answer: 2
  },
  {
    id: 44,
    type: "curriculum",
    category: "Four Pillars",
    question: "Which OOP pillar involves bundling variables and methods together into a single unit and restricting direct access?",
    options: ["Inheritance", "Abstraction", "Encapsulation", "Polymorphism"],
    answer: 2
  },
  {
    id: 45,
    type: "curriculum",
    category: "Four Pillars",
    question: "Which OOP pillar allows a new class (derived class) to reuse the fields and methods of an existing class (base class)?",
    options: ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"],
    answer: 0
  },
  {
    id: 46,
    type: "curriculum",
    category: "Four Pillars",
    question: "Which OOP pillar hides complex implementation details and exposes only a clean, simple interface to the user?",
    options: ["Polymorphism", "Abstraction", "Inheritance", "Overloading"],
    answer: 1
  },
  {
    id: 47,
    type: "curriculum",
    category: "Four Pillars",
    question: "Which OOP pillar translates to 'many forms' and allows a single interface to represent different underlying actions?",
    options: ["Encapsulation", "Inheritance", "Abstraction", "Polymorphism"],
    answer: 3
  },
  {
    id: 48,
    type: "curriculum",
    category: "Classes & Objects",
    question: "What is a 'class' in C++?",
    options: [
      "A built-in variable type similar to int",
      "A user-defined blueprint or template for creating objects",
      "An instance of an object stored in memory",
      "A command-line flag used to compile C++ source code"
    ],
    answer: 1
  },
  {
    id: 50,
    type: "curriculum",
    category: "Classes & Objects",
    question: "If no access modifier (like public or private) is declared in a C++ class, what is the default access level for members?",
    options: ["private", "public", "protected", "global"],
    answer: 0
  },
  {
    id: 51,
    type: "curriculum",
    category: "Classes & Objects",
    question: "In a C++ struct, what is the default access level for members if no access modifier is explicitly declared?",
    options: ["private", "protected", "public", "internal"],
    answer: 2
  },
  {
    id: 52,
    type: "curriculum",
    category: "Classes & Objects",
    question: "Which keyword is used to declare members that can be accessed and modified from outside the class scope?",
    options: ["private", "public", "protected", "friend"],
    answer: 1
  },
  {
    id: 53,
    type: "curriculum",
    category: "Classes & Objects",
    question: "Which keyword is used to restrict member access to inside the class, hiding them from the outside world?",
    options: ["private", "public", "protected", "static"],
    answer: 0
  },
  {
    id: 54,
    type: "curriculum",
    category: "Classes & Objects",
    question: "Given a class named 'Car', which of the following is the correct syntax to instantiate a Car object named 'myCar'?",
    options: ["Car object = new Car();", "Car myCar;", "object Car myCar;", "Car::myCar;"],
    answer: 1
  },
  {
    id: 55,
    type: "curriculum",
    category: "Classes & Objects",
    question: "Given a class object named 'myCar' with a public member function 'accelerate()', how do you invoke it?",
    options: ["myCar->accelerate();", "myCar::accelerate();", "myCar.accelerate();", "myCar.accelerate"],
    answer: 2
  },
  {
    id: 56,
    type: "curriculum",
    category: "Basic Structure",
    question: "Which character is used to terminate statements, variable declarations, and class definitions in C++?",
    options: ["Period (.)", "Colon (:)", "Semicolon (;)", "Comma (,)"],
    answer: 2
  },
  {
    id: 57,
    type: "curriculum",
    category: "Basic Structure",
    question: "Which of the following is the correct syntax for a single-line comment in C++?",
    options: ["# Comment", "// Comment", "/* Comment", "<!-- Comment -->"],
    answer: 1
  },
  {
    id: 58,
    type: "curriculum",
    category: "Basic Structure",
    question: "What escape sequence is used inside a string to represent a newline character?",
    options: ["\\t", "\\n", "\\r", "\\a"],
    answer: 1
  },
  {
    id: 59,
    type: "curriculum",
    category: "Basic Structure",
    question: "What is a main difference between 'std::endl' and the newline character '\\n' in C++?",
    options: [
      "\\n flushes the stream, whereas std::endl does not.",
      "std::endl flushes the output buffer, whereas '\\n' only prints a newline character.",
      "std::endl is faster than '\\n' in all scenarios.",
      "std::endl can only be used with files, not with console output."
    ],
    answer: 1
  },
  {
    id: 60,
    type: "curriculum",
    category: "Basic Structure",
    question: "C++ is called a 'statically-typed' language. What does this mean?",
    options: [
      "Variables cannot change their values after initialization.",
      "Data types of variables are checked and enforced at compile-time.",
      "Only static variables can be defined in classes.",
      "The program must be run on static computers with physical storage."
    ],
    answer: 1
  },
  {
    id: 49,
    type: "curriculum",
    category: "Classes & Objects",
    question: "What is an 'object' in C++?",
    options: [
      "A file that contains the compiled machine code",
      "A keyword used to start a C++ program",
      "A specific runtime instance of a class stored in memory",
      "The header block that lists class methods"
    ],
    answer: 2
  }
];

// Export for browser usage (since we are running locally in browser)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTIONS;
}
