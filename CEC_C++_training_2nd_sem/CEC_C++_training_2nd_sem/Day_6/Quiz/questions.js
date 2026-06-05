const QUESTIONS = [
  // ---------------------------------------------------------
  // CATEGORY 1: POLYMORPHISM & C++ CURRICULUM (30 Questions)
  // ---------------------------------------------------------
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "What does the word 'Polymorphism' literally mean?",
    options: ["One form", "Many forms", "Hidden forms", "No forms"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "Which of the following is an example of Compile-time Polymorphism?",
    options: ["Virtual Functions", "Method Overriding", "Function Overloading", "Abstract Classes"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "Which of the following is an example of Runtime Polymorphism?",
    options: ["Operator Overloading", "Function Overloading", "Templates", "Method Overriding"],
    answer: 3
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "Compile-time polymorphism is also known as:",
    options: ["Dynamic Binding", "Static Binding", "Late Binding", "Virtual Binding"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "Runtime polymorphism is also known as:",
    options: ["Early Binding", "Static Binding", "Dynamic Binding", "Compile Binding"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "Which keyword is required in the base class to enable Runtime Polymorphism?",
    options: ["polymorph", "virtual", "override", "dynamic"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "In function overloading, functions must have the same name but different:",
    options: ["Return types only", "Parameters (type, count, or order)", "Access modifiers", "Class names"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "Can two functions be overloaded if they only differ by their return type?",
    options: ["Yes, always", "Yes, if they are in a class", "No, it causes a compiler error", "Yes, if one is virtual"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "Which of the following operators CANNOT be overloaded in C++?",
    options: ["+ (Addition)", "== (Equality)", ":: (Scope Resolution)", "<< (Insertion)"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "Which operator cannot be overloaded?",
    options: ["sizeof", "[] (Subscript)", "() (Function call)", "++ (Increment)"],
    answer: 0
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "When overloading the postfix increment operator (e.g., c++), what dummy parameter is used to distinguish it from prefix (++c)?",
    options: ["double", "float", "char", "int"],
    answer: 3
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "What is a 'Pure Virtual Function' in C++?",
    options: ["A function with no return type", "A function declared with '= 0'", "A function with an empty body {}", "A function that cannot be inherited"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "If a class contains at least one pure virtual function, it becomes a(n):",
    options: ["Abstract Class", "Concrete Class", "Virtual Class", "Static Class"],
    answer: 0
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "Can you create an object (instantiate) an Abstract Class?",
    options: ["Yes", "No", "Only dynamically using 'new'", "Only inside main()"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "How does C++ achieve dynamic binding internally at runtime?",
    options: ["Using Switch Statements", "Using the VTable (Virtual Table)", "Using Templates", "Using the Preprocessor"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "Every object of a class with virtual functions contains a hidden pointer called:",
    options: ["this pointer", "null pointer", "vptr (virtual pointer)", "dptr (dynamic pointer)"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "What is the purpose of the 'override' specifier (introduced in C++11)?",
    options: ["To force late binding", "To tell the compiler to check if a base virtual function is actually being overridden", "To prevent inheritance", "To make a function pure virtual"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "What does the 'final' specifier do when applied to a virtual function?",
    options: ["Makes the function run faster", "Prevents derived classes from overriding it further", "Makes it a pure virtual function", "Deletes the function from memory"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "What does the 'final' specifier do when applied to a class?",
    options: ["Prevents the class from being instantiated", "Prevents the class from having virtual functions", "Prevents any class from inheriting from it", "Makes all its members private"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "Why should a base class destructor always be declared 'virtual'?",
    options: ["To make it run faster", "To save memory", "To ensure the derived class destructor is called when deleting via a base pointer", "Because it is required by the compiler"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "If 'void eat()' is in the base class, and 'void eat()' is in the derived class (NO virtual keyword), what happens?",
    options: ["Method Overriding", "Method Hiding", "Compiler Error", "Method Overloading"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "Which of the following is TRUE about Static Binding?",
    options: ["Resolved at runtime", "Slower than dynamic binding", "Resolved at compile-time", "Requires virtual functions"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "Which of the following is TRUE about Dynamic Binding?",
    options: ["Resolved at compile-time", "Slightly slower due to vtable lookup", "Does not support overriding", "Cannot use pointers"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "Can we have 'virtual constructors' in C++?",
    options: ["Yes, always", "Yes, but only in abstract classes", "No, constructors cannot be virtual", "Yes, if they are public"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "When writing operator<<(ostream&, const ClassName&), it is usually declared as:",
    options: ["A virtual function", "A private member function", "A friend function", "A static function"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "In the expression 'c1 + c2', if '+' is overloaded as a member function, how is it internally called?",
    options: ["c1.operator+(c2)", "c2.operator+(c1)", "operator+(c1, c2)", "c1.add(c2)"],
    answer: 0
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "What is an interface in C++ terms?",
    options: ["A class with the keyword 'interface'", "An abstract class with ONLY pure virtual functions and no data members", "Any class with virtual functions", "A header file"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "Which is a valid pure virtual function declaration?",
    options: ["virtual void draw() {}", "void draw() = 0;", "virtual void draw() = 0;", "virtual draw() = NULL;"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "If a derived class does NOT override a pure virtual function from its base class, what happens?",
    options: ["The derived class becomes abstract too", "It causes a runtime error", "The program crashes", "The compiler provides a default implementation"],
    answer: 0
  },
  {
    type: 'curriculum',
    category: 'C++ Polymorphism',
    question: "Which keyword prevents silent bugs by throwing a compile error if you misspell a virtual function name in a derived class?",
    options: ["virtual", "final", "override", "static"],
    answer: 2
  },

  // ---------------------------------------------------------
  // CATEGORY 2: SHAPE-SHIFTERS & GENERAL TRIVIA (30 Questions)
  // ---------------------------------------------------------
  {
    type: 'fact',
    category: 'Shape-Shifting Trivia',
    question: "Which Marvel superhero is known for shape-shifting and has blue skin?",
    options: ["Jean Grey", "Mystique", "Rogue", "Storm"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Shape-Shifting Trivia',
    question: "Which real-world animal is famous for changing its color and texture to blend in?",
    options: ["Cuttlefish", "Jellyfish", "Starfish", "Clownfish"],
    answer: 0
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Transformers',
    question: "In Transformers, what is the name of the faction of robots led by Optimus Prime?",
    options: ["Decepticons", "Autobots", "Maximals", "Predacons"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Transformers',
    question: "What does Bumblebee primarily transform into in the movies?",
    options: ["A yellow helicopter", "A yellow Camaro", "A yellow bulldozer", "A yellow jet"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Mythology',
    question: "In Greek mythology, who was the god of the sea who could also shape-shift?",
    options: ["Zeus", "Apollo", "Poseidon", "Ares"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Harry Potter',
    question: "What potion in Harry Potter allows the drinker to take the form of someone else?",
    options: ["Felix Felicis", "Polyjuice Potion", "Amortentia", "Veritaserum"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Animals',
    question: "Which insect undergoes a complete 'metamorphosis' (shape-shift) from caterpillar to flying insect?",
    options: ["Spider", "Butterfly", "Ant", "Grasshopper"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Movies',
    question: "In Terminator 2, the T-1000 villain is made of what shape-shifting material?",
    options: ["Adamantium", "Vibranium", "Liquid Metal", "Carbon Fiber"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Science',
    question: "What do we call the three states (forms) of water?",
    options: ["Hot, Cold, Warm", "Solid, Liquid, Gas", "Rain, Snow, Hail", "River, Lake, Ocean"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "What planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mars", "Mercury"],
    answer: 3
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "Which of these is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Mount Kilimanjaro", "Mount Fuji"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "Which bird is known for its ability to mimic human speech?",
    options: ["Eagle", "Parrot", "Penguin", "Owl"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Gaming',
    question: "Which Nintendo character is a pink puffball that inhales enemies to copy their abilities (shape-shift)?",
    options: ["Mario", "Yoshi", "Kirby", "Luigi"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Gaming',
    question: "In Pokémon, which Pokémon is famous for being able to transform into any other Pokémon?",
    options: ["Pikachu", "Ditto", "Charizard", "Mewtwo"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Mythology',
    question: "A human who shape-shifts into a wolf during a full moon is called a:",
    options: ["Vampire", "Zombie", "Werewolf", "Ghost"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "What is the chemical symbol for Gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "What is the capital city of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "Who painted the Mona Lisa?",
    options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "What is the smallest country in the world by land area?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "How many bones are in the adult human body?",
    options: ["206", "195", "215", "250"],
    answer: 0
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "What is the primary language spoken in Brazil?",
    options: ["Spanish", "Portuguese", "English", "French"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "Which planet is known as the Red Planet?",
    options: ["Jupiter", "Venus", "Mars", "Saturn"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "In what year did the Titanic sink?",
    options: ["1905", "1912", "1920", "1918"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Animals',
    question: "Which mammal is capable of true flight?",
    options: ["Flying Squirrel", "Bat", "Lemur", "Sugar Glider"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "What is the largest organ of the human body?",
    options: ["Heart", "Liver", "Skin", "Brain"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'General Trivia',
    question: "How many legs does a spider have?",
    options: ["6", "8", "10", "12"],
    answer: 1
  }
];
