#include <iostream>
#include <vector>
#include <string>
#include <set>

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::set;

int main()
{
	int n = 0; cin >> n;
	for (int i = 0; i < n; i++) {
		string word1 = ""; cin >> word1;
		string word2 = ""; cin >> word2;
		
		set<char> wordSet;
		for (int j = 0; j < word1.size(); j++) {
			char letter = word1[j];
			wordSet.emplace(letter);
		}

		bool check_common_substring = false;
		for (int j = 0; j < word2.size(); j++) {
			char letter = word2[j];

			if (wordSet.find(letter) != wordSet.end()) {
				check_common_substring = true;
				break;
			}
		}

		if (check_common_substring) {
			cout << "YES" << endl;
		}
		else {
			cout << "NO" << endl;
		}

	}

}