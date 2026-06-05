/*
 * THE DIAMOND PROBLEM DEMONSTRATION
 * This file shows how Multiple Inheritance can cause the Diamond Problem,
 * and how to fix it using 'virtual' inheritance.
 */

#include <iostream>
using namespace std;

// 1. The Top-Level Base Class
class Animal {
public:
    int age;
    Animal() {
        cout << "[System] Spawning an Animal body..." << endl;
    }
};

// =========================================================================
// THE FIX: Notice the word 'virtual' below!
// If you delete the word 'virtual' from both lines below, the compiler 
// will spawn TWO Animals, and frog.age will throw an Ambiguity Error!
// =========================================================================

// 2. Left side of the Diamond
class LandAnimal : virtual public Animal {
public:
    void walk() { cout << "Walking on land!" << endl; }
};

// 3. Right side of the Diamond
class WaterAnimal : virtual public Animal {
public:
    void swim() { cout << "Swimming in water!" << endl; }
};

// 4. The Bottom of the Diamond (Multiple Inheritance)
class Amphibian : public LandAnimal, public WaterAnimal {
public:
    void brag() {
        cout << "I can do both!" << endl;
    }
};

int main() {
    cout << "--- THE DIAMOND PROBLEM ---" << endl;

    // When we create the Amphibian, how many Animals spawn?
    // Because we used 'virtual', only ONE Animal spawns!
    Amphibian frog;
    
    // The frog can use functions from both parents!
    frog.walk();
    frog.swim();
    frog.brag();

    // Since there is only one Animal body, setting the age is perfectly safe!
    frog.age = 5;
    cout << "The frog is " << frog.age << " years old." << endl;

    return 0;
}
