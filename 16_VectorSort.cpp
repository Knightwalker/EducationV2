#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int readIntVector(vector<int>& vector);

int main() {
	vector<int> numbersVect;  readIntVector(numbersVect);
	sort(numbersVect.begin(), numbersVect.end());

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