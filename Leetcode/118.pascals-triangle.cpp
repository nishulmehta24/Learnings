#include <bits/stdc++.h>
using namespace std;

/*
 * @lc app=leetcode id=118 lang=cpp
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
class Solution {
    public:
    long long ncr(long long  n , long long  r ){
        long long num = 1;
        long long deno = 1 ;
        for(long long i = 1 ; i<= r ; i++ ){
            num *= n;
            n--;
            deno *= i;
        }
        return num/deno;
        
    }
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> ans;
        for(long long i = 1; i<= numRows ; i++  ){
            vector<long long> ithRow(i , 0 );
            for(long long j = 0 ; j< i ; i++ ){
                ithRow[j] = ncr(i , j );
            }
            ans.emplace_back(ithRow);
        }
        return ans;
    }
};
// @lc code=end

