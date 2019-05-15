
#include <iostream>
#include <cstdlib>
using namespace std;
class a
{
public:
    char name;
    int rollno;
public:
    void getname(){
        cout<<"enter the name"<<endl;
        cin>>name;
    }    
    void getrollno(){
        cout<<"enter the rollno"<<endl;
        cin>>rollno;
    }
};
class b:public  a
{
public:
    int marks;
public:
    void getmarks(){
        cout<<"enter the marks"<<endl;
        cin>>marks;
    }
};
int main() {
    b objb;
    objb.getname();
    objb.getrollno();
    objb.getmarks();
    
            
  
   
}

