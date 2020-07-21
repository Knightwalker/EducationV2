#include <iostream>
using namespace std;

class Person {
private:
	int age;

public:
	Person(int initialAge) {
		if (initialAge < 0) {
			cout << "Age is not valid, setting age to 0." << endl;
			age = 0;
		}
		else {
			age = initialAge;
		}
	}

	void amIOld() {
		if (age >= 18) {
			cout << "You are old." << endl;
		}
		else if (age >= 13) {
			cout << "You are a teenager." << endl;
		}
		else {
			cout << "You are young." << endl;
		}
	}

	void yearPasses() {
		this->age++;
	}

};

int main() {
	int t;
	int age;
	cin >> t;
	for (int i = 0; i < t; i++) {
		cin >> age;
		Person p(age);
		p.amIOld();
		for (int j = 0; j < 3; j++) {
			p.yearPasses();
		}
		p.amIOld();

		cout << '\n';
	}

	return 0;
}