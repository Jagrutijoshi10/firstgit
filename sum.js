function sum(arg1,arg2){
	 var arg1=parseInt(document.getElementById("arg1").value);
	 var arg2=parseInt(document.getElementById("arg2").value);
	 var arg3=arg1+arg2;
	 document.getElementById("result").value=arg3;
}
function avg(arg1,arg2){
	 var arg1=parseInt(document.getElementById("arg1").value);
	 var arg2=parseInt(document.getElementById("arg2").value);
	 var arg3=arg1+arg2;
	 arg3=arg3/2;
	 document.getElementById("result").value=arg3;
}
function iszero(arg1){
	 var arg1=parseInt(document.getElementById("arg1").value);
	 var result;
	if(arg1==0){
	result="true";}
	else
         result="false";
		 
	 document.getElementById("result").value=result;
}

function isodd(arg1){
	 var arg1=parseInt(document.getElementById("arg1").value);
	 var result;
	if(arg1%2==0){
	result="false";
	}
	else
         result="true";
		 
	 document.getElementById("result").value=result;
}
