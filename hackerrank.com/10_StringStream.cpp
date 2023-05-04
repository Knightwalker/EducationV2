#include <iostream>
#include <sstream>
#include <vector>
using namespace std;

void readIntVectorFromStringStream(vector<int>& intVect);

int main() {
    vector<int> intVect; readIntVectorFromStringStream(intVect);

    for (int i = 0; i < intVect.size(); i++) {
        cout << intVect[i] << "\n";
    }

    return 0;
}

void readIntVectorFromStringStream(vector<int>& intVect) {
    string inputStr; cin >> inputStr;
    stringstream ss(inputStr);

    int int32;
    char ch;

    while (ss >> int32) {
        intVect.push_back(int32);
        ss >> ch;
    }
}