#include <bits/stdc++.h>
using namespace std;
int main (){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    //Code Here

    int t;
    cin>>t;
    while(t--){
        int n ;
        cin>>n;
        vector<int> nums(n,0);
        for(int i = 0 ; i< n ;i++ ) cin>>nums[i];
        int ans = 0;
        for(int i = 0 ; i< n ;i++ ){
            int minm = INT_MAX;
            vector<int> temp;
            for(int j = i; j < n; j++) {
                temp.push_back(nums[j]);
                minm = min(minm, nums[j]);
                vector<int> sorted_temp = temp;
                sort(sorted_temp.begin(), sorted_temp.end());

                int sz = sorted_temp.size();
                int median = sorted_temp[sz / 2];

                ans = max(ans, median - minm);
            }
        }
        cout<<"\n"<<ans<<"\n";
    }

}