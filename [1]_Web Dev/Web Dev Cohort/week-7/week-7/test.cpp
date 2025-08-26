#include<bits/stdc++.h>
using namespace std;

void merge(vector<int>& arr , int low , int mid , int high ){
	vector<int> temp ;
	int i = low ;
	int j = mid +1;
	while(i <= mid && j <= high){
		if(arr[i] <= arr[j]){
			temp.push_back(arr[i]);
			i++;
			}
		else{
			temp.push_back(arr[j]);
			j++;
		}
	}
	while(i<= mid ){
		temp.push_back(arr[i]);
		i++;
	}
	while(j<= high ){
		temp.push_back(arr[j]);
		j++;
	}
	// we have sorted temp;
	// 0 -> temp
	// 
	for(int i = low ; i<= high ; i++ ){
		arr[i] = temp[i-low];
	}
	// two array sort
}

void divide(vector<int>& arr , int low , int high ){
	if(low >= high) return ;
	int mid = (low + high )/2;
	divide(arr , low , mid );
	divide(arr , mid+1 , high);
	merge(arr , low , mid , high );
}

int main (){
	vector<int> arr {7,2,6,1,7,9,3,7,2};
	divide(arr , 0 , arr.size()-1);
	for(auto it : arr ){
		cout<<it<<",";
	}

}