#include <iostream>
#include <cstdlib>
using namespace std;
class a
{
    public:
     char name;
    public:
    void get(){
        cout<<"the name is";
       cin>>name;
        
    }
};
class b:public a
{
    public:
    int rollno;
    public:
    void get(){
        cout<<"the rollno is";
        cin>>rollno;
    }
};
int main(){
    b obja;
    obja.get();
}