function amount()
{
var num=parseInt(document.getElementById("number").value);
console.log(num);
    var result;
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    result=num_parts.join(".");
    
      console.log(result);
      document.getElementById("result").value=result;
}






















/*
function comma(){
	 var str=document.getElementById("str").value;
	 var result=str.split(".");
	 console.log(result);
	 var arr=[];
	 arr=result;
	 for(var i=arr.length-1;i>0;i--){
		if(arr[i]%3==0){
		 result=(insert ',' at i-1);
		}
		result=arr.join();
	 }
	 document.write(result);
}
		  */
		  
		  
	 