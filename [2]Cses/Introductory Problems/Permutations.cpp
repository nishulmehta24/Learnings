#include <bits/stdc++.h>
using namespace std;

void Even(vector<int>& Permutation , int& n ){
    //Even Next
    for(int i = 1 ; i<= n ; i++ ){
        if(i%2 == 0 ) Permutation.emplace_back(i);
    }
}

void Odd(vector<int>& Permutation , int& n ){
    // odd first
    for(int i = 1 ; i<= n ; i++ ){
        if(i%2 == 1 ) Permutation.emplace_back(i);
    }
}

int main (){

    ios::sync_with_stdio(false);
    cin.tie(NULL);
    //Code Here

    int n ;
    cin>>n;
    if(n == 2 || n == 3 ){
        cout<<"NO SOLUTION";
        return 0;
    }
    
    vector<int> Permutation;

    if(n%2 == 0){
        Even(Permutation, n );
        Odd(Permutation , n);
    }

    else{
        Odd(Permutation , n);
        Even(Permutation , n);
    }

    for(auto it : Permutation){
        cout<<it<<" ";
    }

    return 0;
}



