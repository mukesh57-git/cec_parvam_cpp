/*
 * AI MAZE SOLVER DEMO (Breadth-First Search)
 * This is how GPS routing and Video Game Enemy AI works!
 * The AI explores a 2D grid to find the shortest path from Start to End.
 */

#include <iostream>
#include <vector>
#include <queue>
#include <algorithm> // For reverse

using namespace std;

// A simple struct to hold X,Y coordinates
struct Point {
    int x, y;
    Point(int x = 0, int y = 0) : x(x), y(y) {}
};

class MazeSolver {
private:
    vector<vector<int>> maze;
    int rows, cols;
    // Directions the AI can move: Up, Down, Left, Right
    vector<Point> directions = {{-1,0}, {1,0}, {0,-1}, {0,1}};  
    
public:
    MazeSolver(vector<vector<int>> m) {
        maze = m;
        rows = maze.size();
        cols = maze[0].size();
    }
    
    // The AI Search Algorithm!
    vector<Point> solveBFS(Point start, Point end) {
        // Keep track of where we've been
        vector<vector<bool>> visited(rows, vector<bool>(cols, false));
        
        // Keep track of how we got there (Breadcrumbs)
        vector<vector<Point>> parent(rows, vector<Point>(cols, Point(-1, -1)));
        
        queue<Point> q; // The list of places to check next
        
        q.push(start);
        visited[start.x][start.y] = true;
        
        while (!q.empty()) {
            Point curr = q.front();
            q.pop();
            
            // Did we find the exit?!
            if (curr.x == end.x && curr.y == end.y) {
                // Follow the breadcrumbs backward to get the path
                vector<Point> path;
                Point p = end;
                while (p.x != -1 && p.y != -1) {
                    path.push_back(p);
                    p = parent[p.x][p.y];
                }
                reverse(path.begin(), path.end());
                return path;
            }
            
            // Look in all 4 directions
            for (Point dir : directions) {
                int nx = curr.x + dir.x;
                int ny = curr.y + dir.y;
                
                // If it's inside the maze, NOT a wall (0), and we haven't visited it yet
                if (nx >= 0 && nx < rows && ny >= 0 && ny < cols 
                    && !visited[nx][ny] && maze[nx][ny] == 0) {
                    
                    visited[nx][ny] = true;
                    parent[nx][ny] = curr; // Leave a breadcrumb
                    q.push(Point(nx, ny)); // Add to our list to check later
                }
            }
        }
        
        return {};  // We checked everything. No path exists!
    }
    
    // A helper function to draw the maze on the screen
    void displayMaze(vector<Point> path = {}) {
        vector<vector<char>> display(rows, vector<char>(cols, ' '));
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                display[i][j] = (maze[i][j] == 1) ? '#' : '.';
            }
        }
        
        // Draw the AI's path
        for (Point p : path) {
            display[p.x][p.y] = '*';
        }
        
        // Draw Start and End
        if (!path.empty()) {
            display[path[0].x][path[0].y] = 'S';
            display[path.back().x][path.back().y] = 'E';
        }
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                cout << display[i][j] << " ";
            }
            cout << endl;
        }
    }
};

int main() {
    // The Maze! 0 = Path, 1 = Wall
    vector<vector<int>> maze = {
        {0, 0, 0, 1, 0, 0, 0},
        {0, 1, 0, 1, 0, 1, 0},
        {0, 1, 0, 0, 0, 1, 0},
        {0, 0, 0, 1, 0, 0, 0},
        {0, 1, 1, 1, 0, 1, 0},
        {0, 0, 0, 0, 0, 1, 0},
        {1, 1, 1, 0, 0, 0, 0}
    };
    
    MazeSolver solver(maze);
    Point start(0, 0);  // Top-left
    Point end(6, 6);    // Bottom-right
    
    cout << "=== MAZE (S=Start, E=End, #=Wall, .=Path) ===" << endl;
    solver.displayMaze();
    
    cout << "\n[AI] Calculating shortest path..." << endl;
    vector<Point> path = solver.solveBFS(start, end);
    
    if (!path.empty()) {
        cout << "\n=== Solution Found! (" << path.size() << " steps) ===" << endl;
        solver.displayMaze(path);
    } else {
        cout << "\n[AI] I explored the whole maze. There is NO path to the end!" << endl;
    }
    
    return 0;
}
