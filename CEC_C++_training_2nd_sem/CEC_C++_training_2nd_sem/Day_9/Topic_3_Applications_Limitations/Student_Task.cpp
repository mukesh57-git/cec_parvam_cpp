/*
 * =====================================================================
 * 💻 STUDENT TASK: STUMP THE AI!
 * =====================================================================
 * 
 * YOUR MISSION:
 * You are the Level Designer for a new video game.
 * The AI is too good at solving mazes. Your job is to test its limits!
 * 
 * 1. Change the 1s and 0s in the `customMaze` array to build your own maze.
 * 2. CHALLENGE 1: Can you build a maze that takes the AI exactly 20 steps?
 * 3. CHALLENGE 2: Can you build a trap so the AI cannot reach the end?
 *    Run the code and see how the AI handles an impossible maze!
 */

#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

struct Point {
    int x, y;
    Point(int x = 0, int y = 0) : x(x), y(y) {}
};

class MazeSolver {
private:
    vector<vector<int>> maze;
    int rows, cols;
    vector<Point> directions = {{-1,0}, {1,0}, {0,-1}, {0,1}};  
    
public:
    MazeSolver(vector<vector<int>> m) {
        maze = m; rows = maze.size(); cols = maze[0].size();
    }
    
    vector<Point> solveBFS(Point start, Point end) {
        vector<vector<bool>> visited(rows, vector<bool>(cols, false));
        vector<vector<Point>> parent(rows, vector<Point>(cols, Point(-1, -1)));
        queue<Point> q;
        
        q.push(start); visited[start.x][start.y] = true;
        
        while (!q.empty()) {
            Point curr = q.front(); q.pop();
            
            if (curr.x == end.x && curr.y == end.y) {
                vector<Point> path;
                Point p = end;
                while (p.x != -1 && p.y != -1) {
                    path.push_back(p); p = parent[p.x][p.y];
                }
                reverse(path.begin(), path.end()); return path;
            }
            
            for (Point dir : directions) {
                int nx = curr.x + dir.x; int ny = curr.y + dir.y;
                if (nx >= 0 && nx < rows && ny >= 0 && ny < cols 
                    && !visited[nx][ny] && maze[nx][ny] == 0) {
                    visited[nx][ny] = true; parent[nx][ny] = curr; q.push(Point(nx, ny));
                }
            }
        }
        return {}; 
    }
    
    void displayMaze(vector<Point> path = {}) {
        vector<vector<char>> display(rows, vector<char>(cols, ' '));
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                display[i][j] = (maze[i][j] == 1) ? '#' : '.';
            }
        }
        for (Point p : path) display[p.x][p.y] = '*';
        if (!path.empty()) {
            display[path[0].x][path[0].y] = 'S'; display[path.back().x][path.back().y] = 'E';
        }
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) cout << display[i][j] << " ";
            cout << endl;
        }
    }
};

int main() {
    // 🛑 EDIT THIS MAZE! 0 = Path, 1 = Wall
    // Make sure (0,0) and (9,9) stay as 0!
    vector<vector<int>> customMaze = {
        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0}
    };
    
    MazeSolver solver(customMaze);
    Point start(0, 0);  // Top-left
    Point end(9, 9);    // Bottom-right
    
    cout << "=== YOUR CUSTOM MAZE ===" << endl;
    solver.displayMaze();
    
    cout << "\n[AI] Calculating shortest path..." << endl;
    vector<Point> path = solver.solveBFS(start, end);
    
    if (!path.empty()) {
        cout << "\n=== Solution Found! (" << path.size() << " steps) ===" << endl;
        solver.displayMaze(path);
    } else {
        cout << "\n[AI] ERROR: I explored the whole maze. There is NO path to the end!" << endl;
        cout << "[AI] You have defeated me, Level Designer!" << endl;
    }
    
    return 0;
}
