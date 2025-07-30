#include <bits/stdc++.h>
using namespace std;
int main (){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    //Code Here

    int n ;
    cin>>n;

    long long  sumMissing = 0;
    for(int i = 0; i< n-1 ; i++ ){
        int val ;
        cin>>val;
        sumMissing += val; 
    }

    // Actual Sum

    long long ActualSum = 1LL * n * (n + 1) / 2;

    cout<< ActualSum - sumMissing;
    

}