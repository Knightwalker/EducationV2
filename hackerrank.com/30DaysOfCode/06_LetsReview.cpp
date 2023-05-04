#include <iostream>
#include <string>
using std::cin;
using std::cout;
using std::endl;
using std::string;

int main() {

    int t = 0;
    cin >> t;
    cin.ignore();

    for (int i = 0; i < t; i++) {
        string word = "";
        string evenParts = "";
        string oddParts = "";
        getline(cin, word);
        int wordLen = word.size();

        for (int i2 = 0; i2 < wordLen; i2++) {
            if (i2 % 2 == 0) {
                oddParts += word[i2];
            }
            else {
                evenParts += word[i2];
            }
        }

        cout << oddParts << " " << evenParts << endl;

    }

    return 0;
}