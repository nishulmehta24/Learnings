#include <bits/stdc++.h>
using namespace std;
int main (){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    //Code Here

    long long n ;
    cin>>n;
    cout << (1LL << n); // 2^n using bit-shift
    return 0;
}