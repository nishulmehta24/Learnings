// Wrong Code after Line 35 

#include <bits/stdc++.h>
using namespace std;
int main (){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    //Code Here

    int n;
    cin>>n;

    int TotalSum = n*(1 + n )/2;
    if(TotalSum%2 == 1 ) {
        cout<<"NO";
        return 0;
    }

    cout<<"YES\n";
    vector<int> Set1;
    vector<int> Set2;

    int SumSet1 = 0;
    int SumSet2 = 0;

    int TotalSetSum = TotalSum/2;
    int last = 0;
    while(TotalSetSum > SumSet1){
        SumSet1 += n;
        Set1.emplace_back(n);
        TotalSetSum -= n;
        last = n;
        n--;
    }
    Set1.emplace_back(n);
    while(last > 0 ){
        if(last != n ){
            Set2.emplace_back(last);
            last--;
        }
        last--;
    }

    // Output

    cout<<Set1.size()<<"\n";
    for(auto it : Set1 ){
        cout<<it<<" ";
    }
    cout<<"\n";

    cout<<Set2.size()<<"\n";
    for(auto it : Set2 ){
        cout<<it<<" ";
    }

}