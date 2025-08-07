#include <bits/stdc++.h>
using namespace std;
int main() {
  int t;
  cin >> t;
  while(t--) {
    int n,k;
    cin >> n >> k;
    int a[n] = {0};
    for(int i = 0;i < n;i++) cin >> a[i];
    int Hike = 0;
    int cnt =0;
    for(int i = 0 ; i< n ; i++ ){
        if(a[i] == 1 ) cnt = 0;
        else{
            cnt++;
        }
        if(cnt == k ){
            cnt = 0 ;
            Hike++;
            i++;
        }
    }
    cout<<Hike<<"\n";
  }
} 