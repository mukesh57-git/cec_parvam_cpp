# Topic 2: Inside a Neural Network

## 1. What is a Neural Network?
Modern AI (like ChatGPT, Self-Driving Cars, and Facial Recognition) uses **Deep Learning**, which is powered by Artificial Neural Networks.
These networks are inspired by the human brain. The human brain has billions of interconnected cells called **Neurons**. A Neural Network has thousands of software "nodes" called Artificial Neurons.

## 2. The Perceptron (A Single Neuron)
A Neural Network is huge, but we can understand it by looking at just one single neuron, called a **Perceptron**.

A Perceptron takes multiple inputs, multiplies them by "Weights" (like turning dials on a radio), adds them together, and spits out a 1 or a 0.

**How does it learn?**
1. **Guess:** It starts with random weights and makes a random guess.
2. **Check:** It checks its guess against the real answer to see how wrong it was (The Error).
3. **Adjust:** If it was wrong, it adjusts its Weights slightly.
4. **Repeat:** It does this thousands of times (Epochs) until the Error is zero!

## 3. The Logic Gates
In computer science, everything boils down to Logic Gates. 
- **AND Gate:** Only outputs `1` if BOTH inputs are `1`.
- **OR Gate:** Outputs `1` if AT LEAST ONE input is `1`.

Can a single Artificial Neuron learn these rules using just math, without us explicitly programming `if (x == 1 && y == 1)`? Yes!

## 4. 💻 Student Task (Hands-on Practice)
At the end of the lesson, open the **`Student_Task.cpp`** file. 
- **The Mission:** We have successfully trained the Perceptron to act as an **AND** gate. Your job is to modify the training data to teach the Perceptron how to act as an **OR** gate!
- You will need to change the `labels` array so the AI knows what the correct answers for an OR gate are. Then run the code and watch the Neural Network learn the new rule!
