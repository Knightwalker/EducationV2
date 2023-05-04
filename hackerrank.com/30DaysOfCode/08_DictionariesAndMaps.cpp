#include <iostream>
#include <string>
#include <unordered_map>

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::unordered_map;

int main()
{
    int n = 0;
    cin >> n; cin.ignore();

    unordered_map<string, string> phoneBook;
    for (int i = 0; i < n; i++) {
        string name = "";
        string phone = "";
        cin >> name; cin >> phone; cin.ignore();

        auto it = phoneBook.find(name);
        if (it == phoneBook.end()) {
            std::pair<string, string> element(name, phone);
            phoneBook.insert(element);
        }
    }

    string name = "";
    while (cin >> name) {
        auto it = phoneBook.find(name);
        if (it != phoneBook.end()) {
            cout << it->first << "=" << it->second << endl;
        }
        else {
            cout << "Not found" << endl;
        }
        
    }

    return 0;
}