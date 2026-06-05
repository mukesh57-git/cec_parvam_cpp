# Topic 2: Types & Characteristics of AI

## 1. The Three Levels of AI
1. **Narrow AI (Weak AI):** AI designed for one specific task. It cannot generalize. Examples include Siri, Google Translate, Netflix Recommendations, and ChatGPT. *(This is where we are today).*
2. **General AI (Strong AI):** AI with human-level intelligence that can learn and perform *any* intellectual task that a human can. *(This does not exist yet).*
3. **Superintelligence:** AI that surpasses human intelligence across all domains. *(Theoretical / Sci-Fi).*

## 2. Characteristics of AI Systems
Modern AI systems, specifically Machine Learning models, have unique characteristics:
- **Learning:** They improve their performance based on data.
- **Pattern Recognition:** They find hidden rules in massive datasets that humans might miss.
- **Data Dependency:** They need HUGE amounts of data to learn. If you give an AI bad data, it will learn bad patterns (Garbage In = Garbage Out).

## 3. What is Machine Learning (ML)?
Machine Learning is a type of AI. Instead of writing `if/then` rules by hand, we give the computer a bunch of data and let it find the rules using math!

One of the simplest ML algorithms is **Linear Regression**. It looks at data points on a graph and draws a straight "Line of Best Fit". We can use this line to predict the future!
- **Formula:** `y = mx + b` (where `m` is the slope and `b` is the intercept).

## 4. 🙋‍♂️ Interactive Classroom Activity: "The Bias Experiment"
**Goal:** Understand how AI inherits human bias through bad data.
**Activity Steps:**
1. The Trainer tells the class they are going to train a "Teacher AI" to predict who the smartest students are.
2. The Trainer says: "To train the AI, I am only feeding it data of students who are wearing RED shirts."
3. The Trainer asks: "If a genius student wearing a BLUE shirt walks into the room, what will the AI predict?"
4. The class realizes the AI will predict the blue-shirt student is not smart, simply because the training data was biased and incomplete!

## 5. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** We have provided a full `LinearRegression` AI class. Your job is to create vectors representing the "Hours Studied" and "Test Scores" of previous students. You will train the AI, and then ask it to predict what score a student will get if they study for exactly 5 hours!
- **The Solution:** A separate file named **`Task_Solution.cpp`** is provided.
