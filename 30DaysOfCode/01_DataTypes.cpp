#include <iostream>
#include <iomanip>
#include <limits>

using namespace std;

int main() {
    int i = 4;
    double d = 4.0;
    string s = "HackerRank ";

    int n1 = 0;
    double n2 = 0.0;
    string s1 = "";

    cin >> n1 >> n2;
    cin.ignore();
    getline(cin, s1);

    cout << n1 + i << endl;
    cout << fixed << setprecision(1) << n2 + d << endl;
    cout << s + s1 << endl;

    return 0;
}