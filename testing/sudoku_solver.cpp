#include <bits/stdc++.h>
using namespace std;

bool shouldReturn(unordered_map<int,bool>&mpp , int& ElemntInMpp  , int& cnt_dots , int& mppSum , vector<vector<char>>& board , int& row , int& col){
        for (auto& [key, value] : mpp) {
            ElemntInMpp++;
            if (value) mppSum += key;
        }
        if(ElemntInMpp == 8 ){
            cnt_dots--;
            board[row][col] = char(45 - mppSum + '0');
            return true;
        }
        ElemntInMpp = 0;
        mppSum = 0;
        return false;
}

void Solver(vector<vector<char>>& board , int row , int col , int& cnt_dots){
    // we got . row , col
    // finding not element usng Hashmap
    unordered_map<int,bool> mpp;
    // 
    int ElemntInMpp = 0;
    int mppSum = 0;
    // going in row
    for(int i = 0 ; i < 9 ; i++ ){
        if(board[row][i] != '.'){
            mpp[board[row][i] - '0'] = true; // this is element
        }
    }
    if(shouldReturn(mpp , ElemntInMpp , cnt_dots , mppSum , board , row , col)) return ;
   
    // going in col
    for(int i = 0 ; i < 9 ; i++ ){
        if(board[i][col] != '.'){
            mpp[board[i][col] - '0'] = true; // this is element
        }
    }
    if(shouldReturn(mpp , ElemntInMpp , cnt_dots , mppSum , board , row , col)) return ;
    
    // for box
    int box_row = (row/3)*3;
	int box_col = (col/3)*3;
	for(int i = box_row ; i< box_row+3 ; i++ ){
		for(int j = box_col ; j < box_col+3 ; j++ ){
			if(board[i][j] != '.'){
                mpp[board[i][j] - '0'] = true; // this is element
            }
		}
	}
    if(shouldReturn(mpp , ElemntInMpp , cnt_dots , mppSum , board , row , col)) return ;
    
    return;
}

class Solution {
public:
    void solveSudoku(vector<vector<char>>& board) {
        int cnt_dots = 0; // assuing all cell are empty
        //count empty cell 
        for(int i = 0 ; i< 9 ; i++ ){
            for(int j = 0 ; j < 9 ; j++ ){
                if (board[i][j] == '.' ) {
                    cnt_dots++;
                }
            }
        }
        
        while(cnt_dots){
            for(int i = 0 ; i< 9 ; i++ ){
               for(int j = 0 ; j < 9 ; j++ ){
                   if (board[i][j] == '.' ) {
                       // placing if single Value
                       Solver(board , i , j , cnt_dots);
                   }
               }
           }
        }
        return ;
    }
};