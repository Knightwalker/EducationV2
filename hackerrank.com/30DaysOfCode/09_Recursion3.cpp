#include <iostream>

using std::cin;
using std::cout;
using std::endl;

int factorial_recursive(int n);

int main()
{
    int n = 0; cin >> n; cin.ignore();
    int fact = factorial_recursive(n);
    std::cout << fact << std::endl;

    return 0;
}

int factorial_recursive(int n) {

    if (n == 1) {
        return 1;
    }

    int fact = n * factorial_recursive(n - 1);
    return fact;
}