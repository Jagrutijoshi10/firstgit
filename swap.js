
function swap(){
	
var arr=[1,2,3,4,5,6,7,8,9,10];

for(var i=0;i<=arr.length-1;i=i+2){
	
	temp=arr[i];
	arr[i]=arr[i+1];
	arr[i+1]=temp;
	document.write("("+arr[i]+","+arr[i+1]+")");
	continue;
	
}

}
swap();
	