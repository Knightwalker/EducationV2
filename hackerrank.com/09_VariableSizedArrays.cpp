#include <iostream>
#include <vector>
#include <string>
using namespace std;

int splitStringToIntVector(vector<int>& originalVector, string inputString, char delimiter);

int main() {
    int n = 0; cin >> n;
    int q = 0; cin >> q;
    cin.ignore();

    vector<vector<int>> numbersVect;
    for (int i = 0; i < n; i++) {
        string inputString = ""; getline(cin, inputString);
        vector<int> intVect; splitStringToIntVector(intVect, inputString, ' ');
        numbersVect.push_back(intVect);
    }

    vector<vector<int>> queriesVect;
    for (int i = 0; i < n; i++) {
        string inputString = ""; getline(cin, inputString);
        vector<int> intVect; splitStringToIntVector(intVect, inputString, ' ');
        queriesVect.push_back(intVect);
    }

    for (int i = 0; i < queriesVect.size(); i++) { 
        int row = queriesVect[i][0];
        int col = queriesVect[i][1];
        cout << numbersVect[row][col + 1] << "\n";
    }

    return 0;
}

int splitStringToIntVector(vector<int>& originalVector, string inputString, char delimiter) {
    string element = "";

    int inputStringLength = inputString.length();
    for (int i = 0; i < inputStringLength; i++) {
        if (inputString[i] == delimiter) {
            originalVector.push_back(stoi(element));
            element = "";
        }
        else {
            element += inputString[i];
        }
    }
    originalVector.push_back(stoi(element));
 
    return 0;
}