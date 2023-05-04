#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int readIntVector(vector<int>& vector);

int main() {
	vector<int> intVect; readIntVector(intVect);

	int n = 0; cin >> n;
	for (int i = 0; i < n; i++) {
		int val = 0; cin >> val;

		vector<int>::iterator it = lower_bound(intVect.begin(), intVect.end(), val);
		if (*it == val) {
			cout << "Yes " << (it - intVect.begin() + 1) << endl;
		}
		else {
			cout << "No " << (it - intVect.begin() + 1) << endl;
		}
	}

	return 0;

}
int readIntVector(vector<int>& vector) {

	int n = 0; cin >> n;
	int el = 0;
	for (int i = 0; i < n; i++)
	{
		cin >> el;
		vector.push_back(el);
	}

	return 0;
}