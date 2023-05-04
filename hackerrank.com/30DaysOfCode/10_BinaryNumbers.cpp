#include <iostream>
#include <string>

std::string getBinary(int dec);
int GetLongestConsecutiveCountN(std::string number);

int main()
{
    int n;
    std::cin >> n;

    std::string binNumber = getBinary(n);
    int count = GetLongestConsecutiveCountN(binNumber);
    std::cout << count << std::endl;

    return 0;
}

std::string getBinary(int dec)
{
    std::string bin = "";

    while (dec > 0) {
        if (dec % 2 == 0) bin.insert(bin.begin(), '0');
        else bin.insert(bin.begin(), '1');
        dec = dec / 2;
    }

    return bin;
}

int GetLongestConsecutiveCountN(std::string number) {
    int numberSize = number.size();
    //int posBegin = 0;
    //int posEnd = 0;
    int maxCount = 0;
    int count = 0;

    for (int i = 0; i < numberSize; i++) {
        if (number[i] == '1') { count++; }
        else { count = 0; }

        if (count > maxCount) {
            maxCount = count;
            //posBegin = i - count + 1;
            //posEnd = i;
        }
    }

    return maxCount;
}