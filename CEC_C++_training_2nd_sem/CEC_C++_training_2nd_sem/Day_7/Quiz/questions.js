const QUESTIONS = [
  // ---------------------------------------------------------
  // CATEGORY 1: DYNAMIC MEMORY & STL (30 Questions)
  // ---------------------------------------------------------
  {
    type: 'curriculum',
    category: 'Memory Management',
    question: "Which operator is used to allocate dynamic memory in C++?",
    options: ["alloc", "malloc", "new", "dynamic"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'Memory Management',
    question: "Which memory region is used for dynamic memory allocation?",
    options: ["Stack", "Heap", "BSS", "Data Segment"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Memory Management',
    question: "What is the correct way to deallocate an array allocated with 'new int[10]'?",
    options: ["delete int[10];", "delete[] arr;", "delete arr;", "free(arr);"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Memory Management',
    question: "What happens if you use 'new' but forget to use 'delete'?",
    options: ["Compilation error", "Syntax error", "Memory leak", "Automatic garbage collection"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'Pointers',
    question: "When accessing a member of an object through a pointer, which operator is used?",
    options: ["Dot (.)", "Arrow (->)", "Asterisk (*)", "Ampersand (&)"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Templates',
    question: "What does a C++ template allow you to do?",
    options: ["Create GUI windows", "Write generic code for any data type", "Connect to databases", "Manage memory automatically"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Templates',
    question: "Which keyword is used to declare a template?",
    options: ["template", "generic", "type", "class_template"],
    answer: 0
  },
  {
    type: 'curriculum',
    category: 'STL Containers',
    question: "What does STL stand for in C++?",
    options: ["Standard Type Library", "Standard Template Library", "System Template Library", "Standard Test Library"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'STL Containers',
    question: "Which STL container provides a dynamic array that can grow in size?",
    options: ["list", "vector", "deque", "stack"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'STL Containers',
    question: "Which function adds an element to the end of a std::vector?",
    options: ["add()", "push()", "insert_back()", "push_back()"],
    answer: 3
  },
  {
    type: 'curriculum',
    category: 'STL Containers',
    question: "Which STL container is implemented as a Doubly Linked List?",
    options: ["std::vector", "std::list", "std::deque", "std::forward_list"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'STL Containers',
    question: "What is the Big-O time complexity of inserting an element at the front of a std::list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: 0
  },
  {
    type: 'curriculum',
    category: 'STL Containers',
    question: "Which STL container follows the LIFO (Last-In-First-Out) principle?",
    options: ["queue", "vector", "list", "stack"],
    answer: 3
  },
  {
    type: 'curriculum',
    category: 'STL Containers',
    question: "Which function removes the top element from a std::stack?",
    options: ["remove()", "pop()", "delete()", "erase()"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'STL Containers',
    question: "Which STL container follows the FIFO (First-In-First-Out) principle?",
    options: ["stack", "deque", "queue", "vector"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'Iterators',
    question: "What are Iterators in the STL used for?",
    options: ["To sort arrays", "To point to and traverse elements in a container", "To allocate memory", "To declare templates"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Iterators',
    question: "Which function returns an iterator pointing to the first element of a container?",
    options: ["front()", "start()", "first()", "begin()"],
    answer: 3
  },
  {
    type: 'curriculum',
    category: 'Iterators',
    question: "What does vec.end() return in a std::vector?",
    options: ["The last element", "An iterator to the last element", "An iterator pointing to one-past-the-last element", "The size of the vector"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'Algorithms',
    question: "Which header file must be included to use std::sort()?",
    options: ["<vector>", "<algorithm>", "<sort>", "<math>"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Algorithms',
    question: "How do you sort a std::vector named 'v' in ascending order?",
    options: ["v.sort();", "sort(v.begin(), v.end());", "std::sort(v);", "order(v);"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Algorithms',
    question: "Which STL algorithm is used to count the occurrences of a specific value in a container?",
    options: ["count_if()", "find()", "accumulate()", "count()"],
    answer: 3
  },
  {
    type: 'curriculum',
    category: 'Algorithms',
    question: "What does std::accumulate() do?",
    options: ["Calculates the sum of elements in a range", "Finds the maximum element", "Counts the total number of elements", "Concatenates strings"],
    answer: 0
  },
  {
    type: 'curriculum',
    category: 'Memory Management',
    question: "If 'ptr' is a dangling pointer, what does that mean?",
    options: ["It points to null", "It points to memory that has already been deleted", "It points to a function", "It has not been initialized"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'STL Containers',
    question: "What is the difference between vector::size() and vector::capacity()?",
    options: ["They are exactly the same", "size() is bytes, capacity() is elements", "size() is elements currently held, capacity() is total allocated space", "capacity() is elements currently held, size() is total allocated space"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'STL Containers',
    question: "Which function empties all elements from a std::vector?",
    options: ["empty()", "delete_all()", "erase()", "clear()"],
    answer: 3
  },
  {
    type: 'curriculum',
    category: 'Iterators',
    question: "Which iterator traverses a container backwards?",
    options: ["back_iterator", "rbegin()", "end()", "reverse()"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Algorithms',
    question: "Which algorithm searches for a specific value and returns an iterator to it?",
    options: ["search()", "locate()", "find()", "binary_search()"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'Algorithms',
    question: "What is a requirement for using std::binary_search()?",
    options: ["The container must be a std::vector", "The container must be sorted", "The elements must be integers", "The container size must be even"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Templates',
    question: "In 'template <typename T>', what does 'T' represent?",
    options: ["A specific variable", "A placeholder for any data type", "The Time complexity", "A Template object"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Memory Management',
    question: "What is the modern C++ feature used to automatically prevent memory leaks?",
    options: ["Garbage Collector", "Smart Pointers", "Auto-Delete", "Memory Manager"],
    answer: 1
  },

  // ---------------------------------------------------------
  // CATEGORY 2: "CONTAINERS, MEMORY & SORTING" TRIVIA (30 Questions)
  // ---------------------------------------------------------
  {
    type: 'fact',
    category: 'Memory & Brains',
    question: "Which part of the human brain is primarily responsible for forming new memories?",
    options: ["Cerebellum", "Hippocampus", "Amygdala", "Frontal Lobe"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Containers',
    question: "The standard shipping container that revolutionized global trade is known by which acronym?",
    options: ["TEU", "BOX", "CON", "ISO"],
    answer: 0
  },
  {
    type: 'fact',
    category: 'Data Storage',
    question: "What was the storage capacity of the first commercially available hard disk drive (IBM 350) in 1956?",
    options: ["3.75 Megabytes", "100 Kilobytes", "1 Gigabyte", "512 Bytes"],
    answer: 0
  },
  {
    type: 'fact',
    category: 'Sorting Algorithms',
    question: "Which simple sorting algorithm repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order?",
    options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Bogo Sort"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Containers',
    question: "What brand name became synonymous with plastic food storage containers?",
    options: ["Rubbermaid", "Glad", "Ziploc", "Tupperware"],
    answer: 3
  },
  {
    type: 'fact',
    category: 'Animal Memory',
    question: "Which animal is famous for its exceptional long-term memory, often associated with the phrase 'an [animal] never forgets'?",
    options: ["Dolphin", "Elephant", "Crow", "Octopus"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Sorting',
    question: "In the Harry Potter universe, what magical object is responsible for 'sorting' students into their houses?",
    options: ["The Sorting Hat", "The Goblet of Fire", "The Marauder's Map", "The Elder Wand"],
    answer: 0
  },
  {
    type: 'fact',
    category: 'Computer Memory',
    question: "What does RAM stand for?",
    options: ["Read Access Memory", "Random Access Memory", "Rapid Action Memory", "Run Allocator Memory"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Containers',
    question: "What is a 'Matryoshka'?",
    options: ["A type of Russian shipping crate", "A set of wooden dolls of decreasing size placed one inside another", "A metal lunchbox", "A Japanese puzzle box"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Memory Loss',
    question: "What is the medical term for the loss of memories, such as facts, information and experiences?",
    options: ["Insomnia", "Aphasia", "Amnesia", "Anemia"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Sorting',
    question: "In laundry, what are you traditionally told to sort your clothes by before washing?",
    options: ["Size and weight", "Brand and cost", "Whites and Colors", "Age of clothing"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Data Structures',
    question: "A stack of plates in a cafeteria perfectly demonstrates which data structure principle?",
    options: ["FIFO (First-In-First-Out)", "LIFO (Last-In-First-Out)", "Random Access", "Binary Search"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Data Structures',
    question: "People waiting in a line at a ticket counter perfectly demonstrate which data structure principle?",
    options: ["LIFO (Last-In-First-Out)", "Random Access", "FIFO (First-In-First-Out)", "Hash Map"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Containers',
    question: "Which software platform uses 'containers' to package up code and all its dependencies so the application runs quickly and reliably from one computing environment to another?",
    options: ["Docker", "GitHub", "Linux", "Windows"],
    answer: 0
  },
  {
    type: 'fact',
    category: 'Storage',
    question: "Before USB flash drives, what was the most common portable, removable magnetic storage medium in the 1990s?",
    options: ["CD-ROM", "Floppy Disk", "Cassette Tape", "Punch Cards"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Memory',
    question: "How many bytes are in a Kilobyte (KB) in the traditional binary system?",
    options: ["1000", "1024", "1048", "8000"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Memory Games',
    question: "Which classic 1978 electronic memory game requires players to repeat a growing sequence of lights and sounds?",
    options: ["Bop It", "Simon", "Tetris", "Rubik's Cube"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Sorting',
    question: "What do you call the process of arranging a deck of playing cards in a random order?",
    options: ["Sorting", "Dealing", "Shuffling", "Cutting"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Memory',
    question: "What is a 'photographic memory' officially called in psychology?",
    options: ["Eidetic memory", "Perfect recall", "Visual acuity", "Hyperthymesia"],
    answer: 0
  },
  {
    type: 'fact',
    category: 'Containers',
    question: "What is a 'bento box'?",
    options: ["A Japanese puzzle", "A single-portion take-out or home-packed meal container", "A storage device for hard drives", "A martial arts ring"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Sorting',
    question: "Which profession is primarily responsible for sorting mail by ZIP code and route?",
    options: ["Courier", "Postman / Postal Worker", "Librarian", "Archivist"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Memory',
    question: "In the movie 'Inside Out', what color are the 'Core Memories' that represent Joy?",
    options: ["Blue", "Red", "Yellow", "Green"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Sorting Algorithms',
    question: "Which highly efficient sorting algorithm uses a 'divide and conquer' strategy and a 'pivot' element?",
    options: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Quick Sort"],
    answer: 3
  },
  {
    type: 'fact',
    category: 'Memory',
    question: "What does ROM stand for?",
    options: ["Random Operating Memory", "Read-Only Memory", "Running Output Machine", "Rapid Overwrite Memory"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Containers',
    question: "What is an 'amphora'?",
    options: ["A type of ancient Greek/Roman ceramic container with two handles", "A modern plastic water bottle", "A specialized shipping container for liquids", "A biological cell membrane"],
    answer: 0
  },
  {
    type: 'fact',
    category: 'Memory',
    question: "The character Dory from 'Finding Nemo' suffers from what condition?",
    options: ["Prosopagnosia", "Short-term memory loss", "Color blindness", "Vertigo"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Storage',
    question: "Which of the following is an optical storage medium?",
    options: ["SSD", "Hard Drive", "Blu-ray Disc", "USB Flash Drive"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Sorting',
    question: "What is the Dewey Decimal System used to sort?",
    options: ["Mail", "Groceries", "Library Books", "Computer Files"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Memory',
    question: "A 'flash mob' is an event, but what is a 'flash memory'?",
    options: ["Electronic non-volatile computer memory", "A momentary lapse of reason", "A memory that only lasts a few seconds", "A bright light used to take photos"],
    answer: 0
  },
  {
    type: 'fact',
    category: 'Algorithms',
    question: "Which mathematical concept is named after an ancient Persian scholar and refers to a step-by-step set of operations?",
    options: ["Algebra", "Algorithm", "Geometry", "Calculus"],
    answer: 1
  }
];
