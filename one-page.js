//function for empty field

function myFunction(){
	var txt="";
	if(document.getElementById("name").validity.valueMissing){
		txt="plz enter the name";
	}
	else
	{
		txt="";
	}

		  document.getElementById("demo").innerHTML = txt;

    
	
	
	var txt2="";
	if(document.getElementById("fathername").validity.valueMissing){
		txt2="plz enter the father-name";
	}
	else
	{
		txt2="";
	}
	 document.getElementById("demo1").innerHTML = txt;

	
	
	//function for name,fathers name,email and address validity	 

		  var name=document.forms["myform"]["name"].value;
	      var fathername=document.forms["myform"]["fathername"].value;
			var email=document.forms["myform"]["email"].value;
	      var address=document.forms["myform"]["address"].value;
   
         
		 if((name.length)>20){
		         document.getElementById('demo').innerHTML="name is too large";
	    }
		else{
			     document.getElementById('demo').innerHTML="";
		
		}
		
	
		
		if((fathername.length)>20){
		         document.getElementById('demo1').innerHTML="name is too large";
	    }
		else{
			     document.getElementById('demo1').innerHTML="";
		}
	

	    if((address.length)>25){
		         document.getElementById('demo3').innerHTML="address is too large";
	    }
		else{
			     document.getElementById('demo3').innerHTML="";
		
		}
	
         
                if(! /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/i.test(email)){
					
                     document.getElementById('demo2').innerHTML="not ok";
               }
                     else
                {
                   document.getElementById('demo2').innerHTML="ok";
                    
                }

}	
	
				$( function(date) {
                        $( "#datepicker" ).datepicker();
                   } );
				   
			   $( function(time) {
                        $( "#timepicker" ).timepicker();
                   } );
				$( function() {
                            $( "#draggable" ).draggable();
                     } );
			
                $( function() {
                            $( "#draggable" ).draggable();
                            $( "#droppable" ).droppable({
                            drop: function( event, ui ) {
                            $( this )
                            .addClass( "ui-state-highlight" )
                            .find( "#droppable" )
                            .html( "Dropped!" );
                           }
                      });
                   } );
                 

