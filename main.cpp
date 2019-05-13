/* 
 * File:   main.cpp
 * Author: Jagruti
 *
 * Created on 13 May, 2019, 6:04 PM
 */

#include <cstdlib>

using namespace std;

/*
 * 
 */

int main() {
    string str,str1;
    char arr[50];
    cout<<"enter the string";
    cin>>str;
    str=string& replace(" ",",");
    arr=str;
    for(int i=0;i<arr.length;i++){
        cout<<"enter the word to be replaced";
        cin>>str1;
        cout<<"enter position to be replaced";
        cin>>pos;
        if(pos[i]==str1){
            str=string& replace(pos,str.length,pos[i])
        
        }
    }
    cout<<"the string after replacement is"<<str;
    return 0;
}



