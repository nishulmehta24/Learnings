#include <bits/stdc++.h>
using namespace std;


int main (){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    //Code Here

    int n;
    cin>>n;

    for(int k = 1; k<= n ; k++ ){
        long long TotalPosition = 1LL *(k*k)*(k*k -1)/2;
        int Attack = 4*(k-1)*(k-2);
        cout<<TotalPosition - Attack<<"\n";
    }
    return 0;

}