#include <bits/stdc++.h>
using namespace std;
int main (){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    //Code Here

    string s;
    cin>>s;

    int previous = 0 ;
    int current = 0;
    int ans = 0;
    int cnt = 0;
    int size = s.size();
    while(current < size){
        if(s[previous] == s[current]) {
            cnt++;
            current++;
        }
        else{
            ans = max(ans , cnt);
            cnt = 0;
            previous = current;
        }

    }
    ans = max(ans , cnt);
    cout<<ans;

}