#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;
template <typename T>
class scoremanager
{
    private:
    vector<T> scores;
    public: 
    void addscore(T score)
    {
        scores.push_back(score);
    }
    T getaverage()
    {
        f (scores.empty()) return T();
        T sum = 0;
        for (T s : scores) sum += s;
        return sum / scores.size();
    }
    T gethighest() 
    {
        return *max_element(scores.begin(), scores.end());
    }
    T getlowest()
    {
        return *min_element(scores.begin(), scores.end());
    }
    void displayall()
    {
        cout<< "score: ";
        for (T s: scores) cout << s << " ";
        cout << endl;
    }
    int getcount() {return scores.size(); }

};
int main()
{
    scoremanager<int> mathscores;
    
    mathscores.addscore(85);
    mathscores.addscore(92);
    mathscores.addscore(78);
    mathscores.addscore(95);
    mathscores.addscore(88);
    cout << "=== Math scores (int) ===" << endl;
    mathscores.displayall();
    cout <<"count: " << mathscores.getcount() <<endl;
    cout << "average: " << mathscores.getaverage() << endl;
    cout << "highest: " << mathscores.gethighest() << endl;
    cout << "lowest: " << mathscores.getlowest() <<endl;

    scoremanager<double> sciencescores;
    sciencescores.addscore(88.5);
    sciencescores.addscore(91.2);
    sciencescores.addscore(76.8);
    
    cout << "\n=== Science scores (double) ===" << endl;
    sciencescores.displayall();
    cout << "count: " << sciencescores.getaverage() << endl;
    return 0;
}