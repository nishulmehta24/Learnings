#include <bits/stdc++.h>
using namespace std;

int an(int n ){
    return 1 + (n-1)*2;
}
// baki h
// baki h
// baki h
// baki h
// baki h
// baki h


int main (){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    //Code Here

    //Number Spiral
    int t;
    cin>>t;
    while(t--){
        vector<int> v(2);
        cin>>v[0]>>v[1];
        //{1,4};
        //find max
        int Spiral = max(v[0] , v[1]);

        // Large == even
        if(Spiral%2 == 0 ){

           if(v[0] < v[1]){
            int ans = Spiral*Spiral - v[0] +1;
            cout<<ans<<"\n";
           }
        // 4 > 2
           else if(v[0] > v[1]){
            int Start = Spiral*Spiral - an(Spiral) + 1;
            int ans = Start + v[1];
            cout<<ans<<"\n";

           }
        }

        // large == odd 
        else if(Spiral%2 == 1) {
             if(v[0] < v[1]){
            // --------
            int Start = Spiral*Spiral - an(Spiral) + 1;
            int ans = Start + v[1];
            cout<<ans<<"\n";
        }
        else{
            //      |
            //      |
            int ans = Spiral*Spiral - v[0] +1;
            cout<<ans<<"\n";

           }
        }

    }
    return 0;

}