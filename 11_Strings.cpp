#include <iostream>
#include <string>
using namespace std;

int main() {
	string a = ""; cin >> a;
    string b = ""; cin >> b;

    int inta = 0; for (int i = 0; i < a.size(); i++) { inta++; }
    int intb = 0; for (int i = 0; i < b.size(); i++) { intb++; }

    cout << inta << " " << intb << endl;
    cout << a + b << endl;

    char t = a[0];
    a[0] = b[0];
    b[0] = t;

    cout << a << " " << b << endl;
  
    return 0;
}