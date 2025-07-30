#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

int an(int n) {
    return 1 + (n - 1) * 2; // nth odd number
}

int main() {
    ll t;
    cin >> t;
    while (t--) {
        ll x, y;
        cin >> x >> y;
        ll ans = 0;
        ll n = max(x, y);

        if (n % 2 == 0) { // even layer
            if (y == n) {
                ans = n * n - x + 1;
            } else {
                ans = (n - 1) * (n - 1) + y;
            }
        } else { // odd layer
            if (x == n) {
                ans = n * n - y + 1;
            } else {
                ans = (n - 1) * (n - 1) + x;
            }
        }

        cout << ans << endl;
    }
    return 0;
}