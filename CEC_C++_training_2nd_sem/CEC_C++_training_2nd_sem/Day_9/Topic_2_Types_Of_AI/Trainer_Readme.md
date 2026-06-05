# 👨‍🏫 Trainer's README: Types & Characteristics of AI

*This script uses the "Kitchen Appliance" analogy to explain the differences between Narrow AI, General AI, and Superintelligence.*

---

## 1. The "Hook" (How to start the class)
**Trainer Script:**
> "When people hear 'Artificial Intelligence', they often think of the Terminator or robots taking over the world. But that is pure Hollywood fiction! 
> 
> Today, we are going to look at the three levels of AI. We will see that current AI is actually quite 'weak', and we are going to build a real Machine Learning algorithm from scratch in C++!"

## 2. The Core Analogy 🧑‍🍳

**Trainer Script:**
> **1. Narrow AI (The Microwave)**
> - "All AI that exists in the world right now is Narrow AI. It is like a microwave. It is incredibly good at ONE thing (heating food). But if you ask a microwave to chop an onion, it is completely useless.
> - ChatGPT is amazing at text, but it can't drive a car. A self-driving car is amazing at driving, but it can't write a poem. They are task-specific!"
>
> **2. General AI (The Human Sous-Chef)**
> - "General AI is an AI that has human-level intelligence across ALL domains. It's like a human Sous-Chef. You can teach them to cook, to clean, to drive a car, and to do math.
> - Does General AI exist today? NO! It is currently purely theoretical."
>
> **3. Superintelligence (The Magical Master Chef)**
> - "Superintelligence is an AI that surpasses human intelligence in every way. It would be like a Chef who can cook 1,000 unique, perfect meals in a millisecond.
> - This only exists in sci-fi movies!"

## 3. Explaining the Code (Linear Regression)
Project `LinearRegressionDemo.cpp` onto the board. 
- Explain that Machine Learning is a subset of AI where the computer uses math to find patterns in data.
- The `LinearRegression` class draws a "line of best fit" through a bunch of dots on a graph.
- Walk through the code: We feed it two vectors (House Sizes and House Prices). The AI trains itself by calculating the slope and intercept. Then, we can give it a brand new house size, and it predicts the price!

## 4. "Pop Quiz" to check understanding
*Ask the class:*
1. *"Is ChatGPT an example of Narrow AI or General AI?"* (Answer: Narrow AI! It is only good at text generation. It cannot physically drive a car or wash dishes).
2. *"What does 'Training' mean in Machine Learning?"* (Answer: Training is when the AI looks at lots of old data to find a mathematical pattern so it can predict future data).
3. *"If I only give my AI data about red apples, what will happen if I ask it to identify a green apple?"* (Answer: It will fail! This is called Data Bias).

---

## ▶️ How to Run the Code in this Folder
**Method 1: Using VS Code (Recommended)**
1. Open the `.cpp` file you want to run.
2. Click the **"Play" button** (▷) in the top-right corner.
3. Look at the terminal at the bottom!
