/*
 * =====================================================================
 * ✅ SOLUTION FILE: LOBOTOMIZE THE AI!
 * =====================================================================
 */

#include <iostream>
#include <vector>
#include <string>
#include <climits>
#include <cstdlib>
#include <ctime>

using namespace std;

class TicTacToeAI {
private:
    vector<char> board;
    
    bool checkWin(char player) {
        for (int i = 0; i < 3; i++)
            if (board[i*3] == player && board[i*3+1] == player && board[i*3+2] == player) return true;
        for (int i = 0; i < 3; i++)
            if (board[i] == player && board[i+3] == player && board[i+6] == player) return true;
        if (board[0] == player && board[4] == player && board[8] == player) return true;
        if (board[2] == player && board[4] == player && board[6] == player) return true;
        return false;
    }
    bool isBoardFull() {
        for (char c : board) if (c == ' ') return false;
        return true;
    }
    
    int minimax(bool isMaximizing) {
        if (checkWin('O')) return 10;
        if (checkWin('X')) return -10;
        if (isBoardFull()) return 0;
        
        if (isMaximizing) {
            int best = INT_MIN;
            for (int i = 0; i < 9; i++) {
                if (board[i] == ' ') {
                    board[i] = 'O'; best = max(best, minimax(false)); board[i] = ' ';
                }
            }
            return best;
        } else {
            int best = INT_MAX;
            for (int i = 0; i < 9; i++) {
                if (board[i] == ' ') {
                    board[i] = 'X'; best = min(best, minimax(true)); board[i] = ' ';
                }
            }
            return best;
        }
    }

public:
    TicTacToeAI() { board = vector<char>(9, ' '); srand(time(0)); }
    
    int getBestMove() {
        // SOLUTION: We replaced the complex Minimax logic with a random number generator!
        // The AI is now officially "dumb".
        
        vector<int> emptySpots;
        for (int i = 0; i < 9; i++) {
            if (board[i] == ' ') {
                emptySpots.push_back(i);
            }
        }
        
        // Pick a random index from the empty spots
        int randomIndex = rand() % emptySpots.size();
        return emptySpots[randomIndex];
    }
    
    bool makeMove(int pos, char player) {
        if (pos < 0 || pos > 8 || board[pos] != ' ') {
            cout << "Invalid move! Try again.\n"; return false;
        }
        board[pos] = player; return true;
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
    cout << "=== Tic-Tac-Toe: Human vs DUMB AI ===" << endl;
    cout << "You are 'X'. The AI is 'O'." << endl;
    
    TicTacToeAI game;
    game.display();
    
    while (game.getGameResult() == "Playing...") {
        int humanMove;
        cout << "Enter your move (1-9): ";
        cin >> humanMove;
        
        if (game.makeMove(humanMove - 1, 'X')) {
            game.display();
            if (game.getGameResult() != "Playing...") break;
            
            cout << "AI is thinking (randomly guessing)..." << endl;
            int aiMove = game.getBestMove();
            game.makeMove(aiMove, 'O');
            game.display();
        }
    }
    
    cout << "\nResult: " << game.getGameResult() << endl;
    return 0;
}
