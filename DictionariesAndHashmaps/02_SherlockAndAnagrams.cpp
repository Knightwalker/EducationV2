#include <iostream>
#include <vector>
#include <string>
#include <map>
#include <algorithm>

using std::cin;
using std::cout;
using std::endl;
using std::vector;
using std::string;
using std::map;

void GetAllSubstringsFromString(vector<string>& strVect);

int main()
{
	
	int q = 0; cin >> q;
	for (int i = 0; i < q; i++) {
		
		int anagramCounter = 0;
		map<string, int> anagramsMap;
		vector<string> strVect; GetAllSubstringsFromString(strVect);

		for (int j = 0; j < strVect.size(); j++) {
			string word = strVect[j];
			sort(word.begin(), word.end());
			anagramsMap[word]++;
		}

		// check how many anagrams we have
		int counter = 0;
		for (auto it = anagramsMap.begin(); it != anagramsMap.end(); it++) {
			int n = it->second;
			counter += (n * (n - 1)) / 2; // how many pairs of items do we have
		}

		cout << counter << endl;

	}	

}

void GetAllSubstringsFromString(vector<string>& strVect) {
	string word = ""; cin >> word;

	for (int i1 = 0; i1 < word.size(); i1++) {
		for (int i2 = 0; i2 < word.size() - i1; i2++) {
			strVect.push_back(word.substr(i1, i2 + 1));
		}
	}

}

void shit(vector<string>& strVect) {
	string word = ""; cin >> word;
	

	for (int i1 = 0; i1 < word.size(); i1++) {
		for (int i2 = 0; i2 < word.size() - i1; i2++) {	

			vector<char> sortedWordVect;
			for (int i3 = i1; i3 < (i2 + i1 + 1); i3++) {
				sortedWordVect.push_back(word[i3]);
			}

			for (auto el : sortedWordVect) {
				cout << el << " ";
			}
			cout << endl;

			
		}
	}

}