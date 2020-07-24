#include <iostream>
#include <vector>
using namespace std;

int max_of_four(const vector<int>& args);

int main() {
    int a, b, c, d;
    scanf_s("%d %d %d %d", &a, &b, &c, &d);
    int ans = max_of_four({ a, b, c, d });
    printf("%d", ans);

    return 0;
}

int max_of_four(const vector<int>& args) {

    int argsLen = args.size();
    int maxN = args[0];
    for (int i = 1; i < argsLen; i++) {
        if (args[i] > maxN) {
            maxN = args[i];
        }
    }
 
    return maxN;
}