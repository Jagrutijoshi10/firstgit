function bigsmall(){
	var arr=[1,2,3,5,6,-1];
	var small=arr[0],big=arr[0];
	for(var i=0;i<arr.length;i++){
		if(arr[i]>big){
			big=arr[i];
		}
	}
	for(var j=0;j<arr.length;j++){
		if(arr[j]<small)
		{
			small=arr[j];
	}
 }
 console.log(small,big);
 document.write(big-small);
}