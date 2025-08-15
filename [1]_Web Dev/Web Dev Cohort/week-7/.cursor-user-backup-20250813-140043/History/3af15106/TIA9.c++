#include<bits/stdc++.h>
using namespace std;
int main (){
    vector<int> v;
    for(int i = 0 ; i< 10 ; i++ ){
        v.emplace_back(i);  
    }

    for(auto it : v ) cout<<it<<"\n";
    return 0;
}