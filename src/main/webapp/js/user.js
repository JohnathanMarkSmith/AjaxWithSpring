/**

 * 
 */


function doAjaxPost() {  
	  // get the form values
     var content = $('#content').val();
      var name = $('#name').val();
	  var education = $('#education').val();

	  $('#error').hide('fast'); 
	  
	  $.ajax({  
	    type: "POST",  
	    url: contexPath + "/ajax.html",  
	    data: "content=" + content + "&education=" + education + "&name=" + name,
	    success: function(response){
	      // we have the response 
	      $('#error').hide('fast'); 	
	      if(response.status == "SUCCESS"){
	    	$('#error').hide('fast');  
	    	alert("Thanks for submitting.  We will get back to you as asoon as possible.\n\n" + response.result);
       	    $('#error').hide('slow');
	    	//$('#input').hide('slow');
		     
	      }else{
	    	  errorInfo = "";
	    	  for(i =0 ; i < response.result.length ; i++){
	    		  errorInfo += "<br>" + (i + 1) +". " + response.result[i].code;
	    	  }
	    	  $('#error').html("Please correct following errors: " + errorInfo);
	    	  $('#info').hide('slow');
	    	  $('#error').show('slow');
	    	  $('#input').show('slow');
	      }	      
	    },  
	    error: function(e){  
	      alert('Error: ' + e);  
	    }  
	  });  
	}  