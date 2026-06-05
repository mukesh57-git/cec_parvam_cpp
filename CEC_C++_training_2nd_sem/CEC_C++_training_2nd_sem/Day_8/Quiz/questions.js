const QUESTIONS = [
  // =========================================================================
  // CURRICULUM QUESTIONS: FILE HANDLING & EXCEPTIONS (50 Questions)
  // =========================================================================

  // --- SECTION 1: FILE HANDLING (25 Questions) ---
  {
    type: 'curriculum',
    category: 'File Streams',
    question: "Which header file must be included to perform file operations in C++?",
    options: ["<iostream>", "<fstream>", "<file>", "<filesystem>"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'File Streams',
    question: "Which class is specifically designed for reading data from files in C++?",
    options: ["ofstream", "ifstream", "fstream", "ios_base"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'File Streams',
    question: "Which class is specifically designed for writing data to files in C++?",
    options: ["ifstream", "fstream", "ofstream", "ostream"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'File Streams',
    question: "From which common base class do std::ifstream and std::ofstream inherit?",
    options: ["std::ios_base", "std::istream", "std::ostream", "std::fstream"],
    answer: 0
  },
  {
    type: 'curriculum',
    category: 'File Opening & Modes',
    question: "What is the default file open mode for std::ofstream?",
    options: ["ios::in", "ios::out | ios::trunc", "ios::out | ios::app", "ios::binary"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'File Opening & Modes',
    question: "Which file open mode should be used to append data to the end of a file without truncating it?",
    options: ["ios::out", "ios::ate", "ios::app", "ios::trunc"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'File Opening & Modes',
    question: "How can you combine multiple file open modes in C++?",
    options: ["Using the logical AND operator (&&)", "Using the bitwise OR operator (|)", "Using the comma operator (,)", "Using the addition operator (+)"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'File Opening & Modes',
    question: "What does the 'ios::binary' mode do when opening a file?",
    options: ["Encrypts the file with binary codes", "Opens the file in raw binary format, avoiding translation of newlines", "Restricts file access to only 0s and 1s", "Automatically compresses the file to zip format"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'File Opening & Modes',
    question: "Which file open mode seeks to the end of the file immediately upon opening, but still allows writing anywhere in the file?",
    options: ["ios::app", "ios::ate", "ios::trunc", "ios::binary"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'File Opening & Modes',
    question: "What happens if you open a non-existent file using std::ifstream without extra flags?",
    options: ["A compilation error occurs", "A new empty file is automatically created", "The stream fails to open and its failbit is set", "The program crashes immediately with a segmentation fault"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'File Opening & Modes',
    question: "What happens if you open a non-existent file using std::ofstream without extra flags?",
    options: ["A runtime error is thrown", "The stream fails to open", "A new empty file is created automatically", "The program waits for user permission to create it"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'Stream Operations',
    question: "Which operator is used to write formatted data to a file stream in C++?",
    options: ["Extraction operator (>>)", "Insertion operator (<<)", "Dot operator (.)", "Scope resolution operator (::)"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Stream Operations',
    question: "Which operator is used to read formatted, whitespace-separated data from a file stream?",
    options: ["Extraction operator (>>)", "Insertion operator (<<)", "Pointer operator (->)", "Address-of operator (&)"],
    answer: 0
  },
  {
    type: 'curriculum',
    category: 'Stream Operations',
    question: "Why is 'getline(file, str)' preferred over 'file >> str' when reading user names or sentences?",
    options: ["getline() is faster", "file >> str stops reading at the first whitespace character", "getline() automatically converts text to uppercase", "file >> str can only read numerical digits"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Stream Operations',
    question: "Which member function of a file stream class should be called to ensure all buffered data is written to disk and the file handle is released?",
    options: ["flush()", "close()", "clear()", "release()"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Stream Flags',
    question: "Which stream member function returns 'true' if the file opened successfully and is ready for operations?",
    options: ["good()", "is_open()", "fail()", "eof()"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Stream Flags',
    question: "What does the 'eof()' member function of a stream detect?",
    options: ["Error on file", "End of file condition", "Empty object file", "Entry of file pointer"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Stream Flags',
    question: "Which stream status flag is set when a formatting error occurs, such as trying to read an integer but encountering text?",
    options: ["badbit", "eofbit", "failbit", "goodbit"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'Stream Flags',
    question: "Which member function resets the stream state flags (like eofbit and failbit) back to a good state?",
    options: ["reset()", "clean()", "clear()", "good()"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'Stream Flags',
    question: "What is the difference between 'fail()' and 'bad()' on a C++ stream?",
    options: ["bad() returns true only on severe, unrecoverable hardware/system errors; fail() includes formatting failures too", "fail() returns true only on hardware errors; bad() includes formatting errors", "They are exact synonyms in C++", "fail() is static, while bad() is dynamic"],
    answer: 0
  },
  {
    type: 'curriculum',
    category: 'Stream Positioning',
    question: "Which member function is used to move the read pointer (get pointer) of an ifstream?",
    options: ["seekp()", "seekg()", "tellg()", "tellp()"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Stream Positioning',
    question: "Which member function is used to move the write pointer (put pointer) of an ofstream?",
    options: ["seekg()", "seekp()", "tellg()", "tellp()"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Stream Positioning',
    question: "What does 'file.tellg()' return in C++?",
    options: ["The total size of the file in bytes", "The current byte position of the read pointer", "The number of lines read so far", "Whether the file is open or closed"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Stream Positioning',
    question: "Which seek offset constant represents seeking relative to the beginning of the file?",
    options: ["ios::beg", "ios::cur", "ios::end", "ios::start"],
    answer: 0
  },
  {
    type: 'curriculum',
    category: 'Stream Operations',
    question: "Which function allows reading a raw, unformatted block of bytes directly into a character buffer?",
    options: ["get()", "read()", "getline()", "extract()"],
    answer: 1
  },

  // --- SECTION 2: EXCEPTION HANDLING (20 Questions) ---
  {
    type: 'curriculum',
    category: 'Exception Basics',
    question: "Which keyword is used to declare a block of code where exceptions might be thrown?",
    options: ["catch", "throw", "try", "except"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'Exception Basics',
    question: "Which keyword is used to signal the occurrence of an anomalous runtime condition by transferring control?",
    options: ["try", "catch", "throw", "raise"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'Exception Basics',
    question: "Which keyword is used to define an exception handler block that processes a thrown value?",
    options: ["try", "catch", "except", "finally"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Exception Basics',
    question: "What happens if a thrown exception is never caught by any catch block in the program?",
    options: ["The program ignores it and continues normal execution", "The program calls std::terminate() and exits immediately", "The compiler generates a syntax warning", "The garbage collector deletes the thrown object"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Exception Basics',
    question: "How do you specify a 'catch-all' block that catches any thrown exception type?",
    options: ["catch (const exception& e)", "catch (...)", "catch (any)", "catch (void* ptr)"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Exception Types',
    question: "What is the common base class for all standard C++ exception classes?",
    options: ["std::logic_error", "std::runtime_error", "std::exception", "std::bad_exception"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'Exception Types',
    question: "Which member function of std::exception returns an explanatory string describing the exception?",
    options: ["message()", "what()", "error()", "description()"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Exception Types',
    question: "Which of the following standard C++ exceptions represents a logical error that could theoretically be detected before the program executes?",
    options: ["std::runtime_error", "std::bad_alloc", "std::logic_error", "std::overflow_error"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'Exception Types',
    question: "Which exception is thrown by the 'new' operator if memory allocation fails?",
    options: ["std::out_of_range", "std::bad_alloc", "std::runtime_error", "std::invalid_argument"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Exception Types',
    question: "Which exception is thrown when an invalid index is accessed on a std::vector using the '.at()' method?",
    options: ["std::invalid_argument", "std::out_of_range", "std::length_error", "std::overflow_error"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Custom Exceptions',
    question: "When writing a custom exception class, which class is traditionally inherited from to ensure compatibility with standard catch blocks?",
    options: ["std::exception", "std::iostream", "std::runtime_error (or std::exception)", "No base class is recommended"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'Custom Exceptions',
    question: "What is the correct signature when overriding the 'what()' function in a custom exception?",
    options: ["string what() const;", "const char* what() const noexcept override;", "char* what() override;", "void what(string message) noexcept;"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'noexcept',
    question: "What does the 'noexcept' keyword specify when added to a function declaration?",
    options: ["The function is not allowed to be called inside try blocks", "The function does not throw any exceptions", "The function will throw runtime exceptions on any error", "The function is not compiled unless exception handling is disabled"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'noexcept',
    question: "What happens if a function declared as 'noexcept' actually throws an exception at runtime?",
    options: ["The exception is caught by a default catch block", "The function returns a null pointer", "std::terminate() is called, aborting the program", "The compiler automatically rewrites it to throw a generic exception"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'Exception Safety',
    question: "Which exception safety guarantee promises that if an exception occurs, the program's state remains completely unchanged as if the operation was never called?",
    options: ["Basic Guarantee", "Strong Guarantee", "No-throw Guarantee", "No Guarantee"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Exception Safety',
    question: "Which exception safety guarantee ensures that no resources (memory, file handles) are leaked and all invariants are maintained, though the object's state might be altered?",
    options: ["Strong Guarantee", "Basic Guarantee", "No-throw Guarantee", "Minimal Guarantee"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Exception Basics',
    question: "Why should exceptions never be allowed to escape from a destructor?",
    options: ["It causes a compilation error immediately", "Destructors are implicitly 'noexcept' in modern C++; escaping exceptions during stack unwinding will abort the program", "It prevents garbage collection of variables", "Destructors must return a success integer code"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Exception Basics',
    question: "What is the process called where local stack objects are destroyed in reverse order of construction when an exception is thrown?",
    options: ["Stack Cleanout", "Stack Unwinding", "Garbage Deallocation", "Automatic Reclamation"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Exception Basics',
    question: "Why is it recommended to catch exceptions by reference (e.g., 'catch (const std::exception& e)') rather than by value?",
    options: ["Catching by reference is mandatory in C++ syntax", "Catching by value can cause 'object slicing', losing derived class details and what() messages", "Catching by reference consumes more heap memory", "Catching by value runs in a separate thread"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Exception Basics',
    question: "How do you re-throw the currently caught exception from inside a catch block in C++?",
    options: ["throw e;", "throw;", "rethrow;", "throw current;"],
    answer: 1
  },

  // --- SECTION 3: LIBRARY MANAGEMENT & PRAC (5 Questions) ---
  {
    type: 'curriculum',
    category: 'Serialization',
    question: "In standard serialization/deserialization for text-file storage, what is the role of a delimiter like the pipe character (|)?",
    options: ["It encrypts the data", "It separates different attribute fields of an object in a single line of text", "It marks the absolute end of the file", "It signals that the file is binary"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'LMS Structure',
    question: "In the Day 8 Library Management project, what design logic prevents adding books with duplicate IDs?",
    options: ["The operating system blocks file duplicate writes", "The Library class checks existing book records and throws an invalid_argument exception on ID match", "The compiler issues a warning on duplicate objects", "The Book destructor deletes the duplicate"],
    answer: 1
  },
  {
    type: 'curriculum',
    category: 'Stream Validation',
    question: "How does the project handle clearing invalid input states when a user enters text instead of an integer choice?",
    options: ["It uses 'cin.clear()' to clear error flags, followed by 'cin.ignore()' to discard the bad characters in the buffer", "It crashes and restarts the program", "It calls 'system(\"cls\")'", "It reallocates the cin object"],
    answer: 0
  },
  {
    type: 'curriculum',
    category: 'LMS Structure',
    question: "In the Library Management project, what is the correct stream class used to parse a pipe-delimited record line during deserialization?",
    options: ["std::ifstream", "std::ofstream", "std::stringstream", "std::fstream"],
    answer: 2
  },
  {
    type: 'curriculum',
    category: 'Serialization',
    question: "Why does standard file streaming (like ifstream/ofstream) require closing file objects explicitly in code?",
    options: ["To release OS file descriptors and ensure all buffered modifications are flushed to disk", "Otherwise the computer will run out of hard drive space", "It is required for compile-time optimization", "To prevent global variables from mutating"],
    answer: 0
  },


  // =========================================================================
  // FACT & TRIVIA QUESTIONS: CARDS, MEMORY, FILES, ERRORS (50 Questions)
  // =========================================================================

  // --- SECTION 4: CARDS TRIVIA (13 Questions) ---
  {
    type: 'fact',
    category: 'Cards Trivia',
    question: "How many cards are in a standard deck of playing cards (excluding Jokers)?",
    options: ["50", "52", "54", "48"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Cards Trivia',
    question: "Which card game requires players to count card values and aim for a score of exactly 21?",
    options: ["Poker", "Blackjack", "Bridge", "Rummy"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Cards Trivia',
    question: "What are the four standard suits in a deck of playing cards?",
    options: ["Hearts, Diamonds, Spades, Clubs", "Hearts, Stars, Spades, Clubs", "Crowns, Diamonds, Spades, Clubs", "Hearts, Diamonds, Swords, Clubs"],
    answer: 0
  },
  {
    type: 'fact',
    category: 'Cards Trivia',
    question: "In a standard deck of playing cards, which king is traditionally drawn without a mustache, often called the 'Suicide King'?",
    options: ["King of Spades", "King of Diamonds", "King of Clubs", "King of Hearts"],
    answer: 3
  },
  {
    type: 'fact',
    category: 'Cards Trivia',
    question: "What is the highest possible hand in standard Texas Hold'em poker?",
    options: ["Four of a Kind", "Straight Flush", "Royal Flush", "Full House"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Cards Trivia',
    question: "Which of the following card games is traditionally played as a single-player patience game?",
    options: ["Bridge", "Solitaire", "Cribbage", "Euchre"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Cards Trivia',
    question: "Which trick-taking card game is played by four players in two partnerships and features a bidding phase and a dummy hand?",
    options: ["Poker", "Bridge", "Hearts", "Uno"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Cards Trivia',
    question: "What card deck consists of 78 cards and is historically used for trick-taking games, but today is famous for divination and fortune-telling?",
    options: ["Uno Deck", "Tarot Deck", "Rook Deck", "Magic Deck"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Cards Trivia',
    question: "In what country did playing cards originate, around the 9th century during the Tang Dynasty?",
    options: ["Italy", "Egypt", "China", "France"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Cards Trivia',
    question: "In a standard deck, which jack is traditionally depicted in profile showing only one eye, famously known as the 'One-Eyed Jack'?",
    options: ["Jack of Spades", "Jack of Diamonds", "Jack of Clubs", "Both Spades and Diamonds"],
    answer: 3
  },
  {
    type: 'fact',
    category: 'Cards Trivia',
    question: "Which poker hand consists of three cards of one rank and two cards of another rank?",
    options: ["Flush", "Straight", "Full House", "Three of a Kind"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Cards Trivia',
    question: "What is the name of the mathematical technique used in Blackjack where players track the ratio of high-to-low cards remaining in the deck?",
    options: ["Bidding", "Card Counting", "Shuffling", "Hedging"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Cards Trivia',
    question: "Which card suit represents the military/nobility in French history, derived from the Italian sword suit?",
    options: ["Diamonds", "Clubs", "Hearts", "Spades"],
    answer: 3
  },

  // --- SECTION 5: MEMORY TRIVIA (12 Questions) ---
  {
    type: 'fact',
    category: 'Memory Trivia',
    question: "What is the name of the memory-enhancement technique that uses visualization of spatial environments to recall information?",
    options: ["Method of Loci (Memory Palace)", "Acronyms", "Chaining", "Peg Word System"],
    answer: 0
  },
  {
    type: 'fact',
    category: 'Memory Trivia',
    question: "Which component of computer memory acts as a high-speed buffer between the CPU and the main RAM?",
    options: ["Virtual Memory", "Cache Memory", "EEPROM", "Hard Disk"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Memory Trivia',
    question: "What type of computer memory is non-volatile and contains the essential BIOS instructions for starting up the computer?",
    options: ["RAM", "ROM", "Cache", "SRAM"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Memory Trivia',
    question: "Which part of the human brain is the primary center for long-term memory consolidation and spatial navigation?",
    options: ["Amygdala", "Cerebellum", "Hippocampus", "Hypothalamus"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Memory Trivia',
    question: "What was the storage capacity of the first 3.5-inch high-density floppy disk introduced in the late 1980s?",
    options: ["1.44 Megabytes", "720 Kilobytes", "1.2 Megabytes", "10 Megabytes"],
    answer: 0
  },
  {
    type: 'fact',
    category: 'Memory Trivia',
    question: "What term describes the vivid, highly detailed memory of the moment one learned of a highly significant or shocking event?",
    options: ["Eidetic Memory", "Flashbulb Memory", "Implicit Memory", "Procedural Memory"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Memory Trivia',
    question: "What is the theoretical maximum capacity of the human brain in terms of digital storage equivalents, according to recent neurological estimates?",
    options: ["10 Gigabytes", "1 Terabyte", "2.5 Petabytes", "1 Exabyte"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Memory Trivia',
    question: "What is the psychological term for the temporary inability to retrieve a word or name from memory, despite feeling on the verge of recalling it?",
    options: ["Amnesia", "Tip-of-the-tongue phenomenon", "Retroactive Interference", "Anomia"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Memory Trivia',
    question: "In what year did Toshiba engineer Fujio Masuoka invent Flash Memory, revolutionizing modern portable storage?",
    options: ["1970", "1980", "1991", "2000"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Memory Trivia',
    question: "Which type of human memory stores information about motor skills and habits, such as riding a bicycle?",
    options: ["Semantic Memory", "Episodic Memory", "Procedural Memory", "Sensory Memory"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Memory Trivia',
    question: "What kind of RAM needs to be refreshed thousands of times per second to prevent data loss?",
    options: ["SRAM", "DRAM", "ROM", "Flash"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Memory Trivia',
    question: "What term describes memory loss for events that occurred *before* a brain injury or trauma?",
    options: ["Anterograde Amnesia", "Retrograde Amnesia", "Dementia", "Aphasia"],
    answer: 1
  },

  // --- SECTION 6: FILES & ARCHIVES TRIVIA (12 Questions) ---
  {
    type: 'fact',
    category: 'File & Archive Trivia',
    question: "What classification system, invented in 1876, is widely used by libraries to organize and shelf books by topic numbers?",
    options: ["Library of Congress Classification", "Dewey Decimal System", "Universal Decimal Classification", "Colon Classification"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'File & Archive Trivia',
    question: "Which ancient library in Egypt, founded around 300 BC, was legendary for housing hundreds of thousands of papyrus scrolls before burning down?",
    options: ["Library of Alexandria", "Library of Pergamum", "House of Wisdom", "Villa of the Papyri"],
    answer: 0
  },
  {
    type: 'fact',
    category: 'File & Archive Trivia',
    question: "Which file format, created by Adobe in 1993, is designed to represent documents independently of application software, hardware, and operating systems?",
    options: ["HTML", "PDF", "RTF", "TXT"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'File & Archive Trivia',
    question: "What does the file extension '.zip' stand for or signify?",
    options: ["Zonal Internet Protocol", "A compressed archive file format created by Phil Katz in 1989", "Zero Information Loss program", "Zenith Input Processor"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'File & Archive Trivia',
    question: "What is the name of the oldest continuously operating library in the world, located in Rome and formally established in 1475?",
    options: ["Vatican Apostolic Library", "Bodleian Library", "Bibliothèque Nationale de France", "British Library"],
    answer: 0
  },
  {
    type: 'fact',
    category: 'File & Archive Trivia',
    question: "In physical archiving, what standard ISO paper size measures exactly 210 by 297 millimeters?",
    options: ["Letter", "A3", "A4", "B5"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'File & Archive Trivia',
    question: "Who is credited with inventing the vertical filing cabinet in 1893, revolutionizing office document filing?",
    options: ["Edwin Seibels", "Melvil Dewey", "Thomas Edison", "Alexander Graham Bell"],
    answer: 0
  },
  {
    type: 'fact',
    category: 'File & Archive Trivia',
    question: "Which file extension is traditionally used for tab-separated value database files?",
    options: [".csv", ".tsv", ".json", ".xml"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'File & Archive Trivia',
    question: "What compression algorithm is the primary technology behind the ZIP file format?",
    options: ["Huffman coding", "DEFLATE", "LZW", "Bzip2"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'File & Archive Trivia',
    question: "What type of file system is default for modern Windows drives (HDD/SSD) to support large file sizes and file permissions?",
    options: ["FAT32", "NTFS", "exFAT", "ext4"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'File & Archive Trivia',
    question: "Which archive is the largest library in the world by catalog size and shelf space, containing over 170 million items?",
    options: ["British Library", "Library of Congress", "Russian State Library", "National Library of China"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'File & Archive Trivia',
    question: "What does CSV stand for in computer file handling?",
    options: ["Character Segmented Value", "Comma-Separated Values", "Control Schema Variable", "Common Storage Vector"],
    answer: 1
  },

  // --- SECTION 7: TROUBLESHOOTING & ERRORS TRIVIA (13 Questions) ---
  {
    type: 'fact',
    category: 'Troubleshooting Trivia',
    question: "Why are software defects called 'bugs'? What is the origin of the term?",
    options: ["Computer circuits looked like spiderwebs", "Grace Hopper found a literal moth trapped in a relay of the Harvard Mark II computer in 1947", "A virus program named Bug infected early systems", "Early vacuum tubes attracted beetles"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Troubleshooting Trivia',
    question: "What was the 'Y2K bug' (Year 2000 problem) caused by?",
    options: ["Computers formatting time using Unix epoch", "Storing calendar years using only the last two digits, which would roll over to '00'", "A destructive computer virus scheduled to release in 2000", "Microprocessors overheating at midnight"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Troubleshooting Trivia',
    question: "In 1996, the European Space Agency's Ariane 5 rocket exploded 40 seconds after launch due to what type of software exception?",
    options: ["A division-by-zero error", "A 64-bit floating-point to 16-bit signed integer overflow exception", "A null pointer dereference", "A stack overflow in the guidance loops"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Troubleshooting Trivia',
    question: "What caused the loss of NASA's Mars Climate Orbiter in 1999?",
    options: ["A solar flare damaged RAM", "A software component output values in Imperial units (pound-force seconds) instead of Metric units (Newton-seconds)", "A database file was deleted by an administrative script", "An unhandled array index out of bounds error"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Troubleshooting Trivia',
    question: "During the historic Apollo 11 moon landing in 1969, what error alarms did the lunar module computer trigger, signifying an overload of tasks?",
    options: ["101 Error", "404 Not Found", "1201 and 1202 Program Alarms", "999 System Crash"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Troubleshooting Trivia',
    question: "What color is the screen displayed by Windows systems when they encounter a fatal system error (kernel panic) that they cannot recover from?",
    options: ["Red Screen of Death", "Black Screen of Death", "Green Screen of Death", "Blue Screen of Death (BSOD)"],
    answer: 3
  },
  {
    type: 'fact',
    category: 'Troubleshooting Trivia',
    question: "What is the HTTP status code returned by a web server when a requested file or webpage cannot be found?",
    options: ["500 Internal Error", "403 Forbidden", "404 Not Found", "301 Redirect"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Troubleshooting Trivia',
    question: "What famous error occurred on the USS Yorktown guided-missile cruiser in 1997, paralyzing the ship's propulsion database system?",
    options: ["A division-by-zero error in the database program", "A database stack overflow", "An array bounds write by control loops", "A power outage that corrupted NTFS files"],
    answer: 0
  },
  {
    type: 'fact',
    category: 'Troubleshooting Trivia',
    question: "Which of the following is an industry standard debugging tool used on Linux/Unix systems to inspect core dumps and trace code execution?",
    options: ["GCC", "GDB", "Valgrind", "Make"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Troubleshooting Trivia',
    question: "In Linux systems, what command-line tool is used to trace all system calls and signals received by a process for debugging?",
    options: ["lsof", "ping", "strace", "top"],
    answer: 2
  },
  {
    type: 'fact',
    category: 'Troubleshooting Trivia',
    question: "What was the name of the first computer worm distributed over the Internet in 1988, which caused severe slowdowns by exploiting buffer overflows?",
    options: ["ILOVEYOU", "Morris Worm", "Stuxnet", "Code Red"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Troubleshooting Trivia',
    question: "What does the acronym 'post-mortem debugging' mean in software engineering?",
    options: ["Debugging code while it is running on a live server", "Debugging a program after it has crashed by analyzing its core dump or log file", "An automated test suite running before compilation", "A code review meeting after project release"],
    answer: 1
  },
  {
    type: 'fact',
    category: 'Troubleshooting Trivia',
    question: "What famous game design bug in the original Pac-Man (1980) makes Level 256 unplayable, splitting half the screen into random characters?",
    options: ["Memory corruption due to overflow of the 8-bit level register (wrapping from 255 to 256)", "An unhandled division by zero when calculating points", "A file read error of the sprite map", "A stack overflow in the ghost movement logic"],
    answer: 0
  }
];
