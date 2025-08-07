#include <bits/stdc++.h>
using namespace std;
int main (){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    //Code Here
    int t ;
    cin>>t;
    while(t--){
        string n ;
        cin>>n;
        char ans = 'a';
        for(auto it : n ){
            ans = min(ans , it);
        }
        cout<<ans<<"\n";
    }

}