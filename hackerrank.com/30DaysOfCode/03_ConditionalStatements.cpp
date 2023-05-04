#include <bits/stdc++.h>
#include <iostream>
using namespace std;

int main()
{
    int n;
    const char* message;
    cin >> n;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    if (n % 2 == 0) {
        if (n >= 2 && n <= 5) {
            message = "Not Weird";
        } else if (n >= 6 && n <= 20) {
            message = "Weird";
        } else if (n > 20) {
            message = "Not Weird";
        }
    } else {
        message = "Weird";
    }

    cout << message << endl;

    return 0;
}