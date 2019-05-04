#include <iostream>
#include <string> 

using namespace std;

int main() {

	int num,count=0;
	cin >> num;
	for (int i = 1; i <= num; i++) {
		if (i % 15 == 0) {
			count++;
		}
		else {
			if (i % 3 == 0 || i % 5 == 0) {
				continue;
			}
			else {
				count++;
			}
		}
		//cout << "i " << i << endl;
		
	}
	cout << "count= " << count << endl;

	system("pause");
	return 0;
}