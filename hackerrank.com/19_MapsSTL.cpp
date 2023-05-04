#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <set>
#include <map>
#include <algorithm>
using namespace std;

int main() {

	map<string, int> studentsDict;
	int q = 0; cin >> q;

	for (int i = 0; i < q; i++) {
		int command = 0; cin >> command;

		if (command == 1) {
			string name = ""; cin >> name;
			int marks = 0; cin >> marks;

			studentsDict[name] += marks;
		}
		else if (command == 2) {
			string name = ""; cin >> name;

			studentsDict.erase(name);
		}
		else if (command == 3) {
			string name = ""; cin >> name;

			auto it = studentsDict.find(name);
			if (it != studentsDict.end()) {
				cout << studentsDict[name] << endl;
			}
			else {
				cout << 0 << endl;
			}

		}

	}

	return 0;
}