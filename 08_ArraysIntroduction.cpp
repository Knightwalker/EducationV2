#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int readIntVector(vector<int>& vector);

int main() {
    vector<int> inputIntVect; readIntVector(inputIntVect);

    for (int i = inputIntVect.size() - 1; i >= 0; i--)
    {
        cout << inputIntVect[i] << " ";
    }

    return 0;
}

int readIntVector(vector<int>& vector) {

    int n = 0; cin >> n;
    int el = 0;
    for (size_t i = 0; i < n; i++)
    {
        cin >> el;
        vector.push_back(el);
    }

    return 0;
}