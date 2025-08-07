#include <bits/stdc++.h>
using namespace std;
int main (){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    //Code Here
    int t;
    cin>>t;
    while(t--){
        int n , mYtower ;
        cin>>n>>mYtower;
        vector<int> Hieght (n+1 , INT_MIN); 
        for(int i = 1; i<= n ;i++ ) cin>>Hieght[i];
        mYtower = Hieght[mYtower];
        // one Based
        sort(Hieght.begin() , Hieght.end());
        




    }

}