#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int readIntVector(vector<int>& vector);

int main() {
	vector<int> numbersVect;  readIntVector(numbersVect);

	int index = 0; cin >> index;
	int rangeBegin = 0; cin >> rangeBegin;
	int rangeEnd = 0; cin >> rangeEnd;

	numbersVect.erase(numbersVect.begin() + index - 1);
	numbersVect.erase(numbersVect.begin() + rangeBegin - 1, numbersVect.begin() + rangeEnd - 1);

	cout << numbersVect.size() << endl;
	for (size_t i = 0; i < numbersVect.size(); i++)
	{
		cout << numbersVect[i] << " ";
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