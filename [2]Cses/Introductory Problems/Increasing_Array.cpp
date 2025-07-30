#include <bits/stdc++.h>
using namespace std;
int main (){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    //Code Here

/*
You are given an array of n integers. You want to modify the array so that it is increasing,
 i.e., every element is at least as large as the previous element.
On each move, you may increase the value of any element by one. What is the minimum number of moves required?
*/

    int n;
    cin >> n;
    vector<int> arr(n); 
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int large = 0;
    int small = 1;
    long long moves = 0;
    while(small < n ){
        if(arr[large] > arr[small]){
            long long current_move = arr[large] - arr[small];
            moves += current_move;
            small++;
        }
        else{
            large = small;
            small++;
        }
    }
    cout<<moves;
}