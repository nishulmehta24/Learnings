#include <bits/stdc++.h>
using namespace std;

bool check(vector<vector<char>>& board , int row , int col ){
	int element = board[row][col];
	// checking in row
	char row_cnt = 0;
	for(int i = 0; i< 9 ; i++ ){
		if(board[row][i] == element){
			row_cnt++;
			if(row_cnt == 2 ) return false;
		}
	}
	//vertical
	int col_cnt = 0;
	for(int i = 0; i< 9 ; i++ ){
		if(board[i][col] == element){
			col_cnt++;
			if(col_cnt == 2 ) return false;
		}
	}
	//for box
	int box_row = (row/3)*3;
	int box_col = (col/3)*3;
	int cnt_box = 0;
	for(int i = box_row ; i< box_row+3 ; i++ ){
		for(int j = box_col ; j < box_col+3 ; j++ ){
			if(board[i][j] == element) {
				cnt_box++;
				if(cnt_box == 2) return false;
			}
		}
	}
	return true;
}

class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        for(int i = 0 ; i< 9 ; i++ ){
			for(int j = 0 ; j < 9 ; j++ ){
				if (board[i][j] == '.' && check(board, i, j) == false) {
					return false;
				}
			}
		}
		return true;
    }

};

