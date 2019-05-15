/* 
 * File:   main.cpp
 * Author: Jagruti
 *
 * Created on 13 May, 2019, 5:53 PM
 */

#include <cstdlib>

using namespace std;

int main(){
    int a,b;
    cout<<"enter the value of a and b;"
            cin>>a>>b;
    if(a^b){
        cout<<"both are not equal";
    }
    else
    {
        cout<<"both numbers are  equal";
    }
}