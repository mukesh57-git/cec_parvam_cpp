/*
 * TIC-TAC-TOE AI (MINIMAX ALGORITHM)
 * This AI uses the Minimax algorithm to look into the future.
 * It simulates every possible move to ensure it NEVER loses!
 */

#include <iostream>
#include <vector>
#include <string>
#include <climits>

using namespace std;

class TicTacToeAI {
private:
    vector<char> board;
    
    // Check if someone won
    bool checkWin(char player) {
        // Rows
        for (int i = 0; i < 3; i++)
            if (board[i*3] == player && board[i*3+1] == player && board[i*3+2] == player) return true;
        // Columns
        for (int i = 0; i < 3; i++)
            if (board[i] == player && board[i+3] == player && board[i+6] == player) return true;
        // Diagonals
        if (board[0] == player && board[4] == player && board[8] == player) return true;
        if (board[2] == player && board[4] == player && board[6] == player) return true;
        return false;
    }
    
    bool isBoardFull() {
        for (char c : board) if (c == ' ') return false;
        return true;
    }
    
    // The "Crystal Ball" - This function simulates the entire future of the game!
    int minimax(bool isMaximizing) {
        if (checkWin('O')) return 10;  // AI wins! Good!
        if (checkWin('X')) return -10; // Human wins! Bad!
        if (isBoardFull()) return 0;   // Draw. Okay.
        
        if (isMaximizing) {
            int best = INT_MIN;
            for (int i = 0; i < 9; i++) {
                if (board[i] == ' ') {
                    board[i] = 'O'; // Try move
                    best = max(best, minimax(false)); // Look into the future
                    board[i] = ' '; // Undo move
                }
            }
            return best;
        } else {
            int best = INT_MAX;
            for (int i = 0; i < 9; i++) {
                if (board[i] == ' ') {
                    board[i] = 'X'; // Try move
                    best = min(best, minimax(true)); // Look into the future
                    board[i] = ' '; // Undo move
                }
            }
            return best;
        }
    }

public:
    TicTacToeAI() : board(9, ' ') {}
    
    // Ask the Crystal Ball for the best move
    int getBestMove() {
        int bestVal = INT_MIN;
        int bestMove = -1;
        
        for (int i = 0; i < 9; i++) {
            if (board[i] == ' ') {
                board[i] = 'O';
                int moveVal = minimax(false); // Calculate future score
                board[i] = ' ';
                
                if (moveVal > bestVal) {
                    bestMove = i;
                    bestVal = moveVal;
                }
            }
        }
        return bestMove;
    }
    
    bool makeMove(int pos, char player) {
        if (pos < 0 || pos > 8 || board[pos] != ' ') {
            cout << "Invalid move! Try again.\n";
            return false;
        }
        board[pos] = player;
        return true;
    }
    
    void display() {
        cout << "\n";
        for (int i = 0; i < 3; i++) {
            cout << " " << (board[i*3] == ' ' ? char('1' + i*3) : board[i*3]);
            cout << " | " << (board[i*3+1] == ' ' ? char('2' + i*3) : board[i*3+1]);
            cout << " | " << (board[i*3+2] == ' ' ? char('3' + i*3) : board[i*3+2]);
            cout << " \n";
            if (i < 2) cout << "---+---+---\n";
        }
        cout << "\n";
    }
    
    string getGameResult() {
        if (checkWin('O')) return "🔴 AI Wins! The machines have taken over!";
        if (checkWin('X')) return "🟢 You Win! (Wait, that's impossible...)";
        if (isBoardFull()) return "🟡 Draw! (The best a human can hope for.)";
        return "Playing...";
    }
};

int main() {
    cout << "=== Tic-Tac-Toe: Human vs AI ===" << endl;
    cout << "The AI uses Minimax. It is impossible to beat." << endl;
    cout << "You are 'X'. The AI is 'O'." << endl;
    
    TicTacToeAI game;
    game.display();
    
    while (game.getGameResult() == "Playing...") {
        int humanMove;
        cout << "Enter your move (1-9): ";
        cin >> humanMove;
        
        // Human Turn
        if (game.makeMove(humanMove - 1, 'X')) {
            game.display();
            if (game.getGameResult() != "Playing...") break;
            
            // AI Turn
            cout << "AI is thinking (looking into the future)..." << endl;
            int aiMove = game.getBestMove();
            game.makeMove(aiMove, 'O');
            game.display();
        }
    }
    
    cout << "\nResult: " << game.getGameResult() << endl;
    return 0;
}
