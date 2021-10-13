// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "taxid") {
         $("#feedback").css("color","blue");
         $("#feedback").html("If the donor was audited, this would be used to verify the non-profit's status.");
      }

      if ($(this).attr("id") == "nonprofitname") {
         $("#feedback").css("color","green");
         $("#feedback").html("It's important you include your non-profit's name here so the IRS knows who this donation is tied to.");
      }

      if ($(this).attr("id") == "amount") {
         $("#feedback").css("color","blue");
         $("#feedback").html("This amount is critical - it's how the IRS verifies the donation in the event of an audit.");
		 
      }
	         if ($(this).attr("id") == "sig") {
				 $("#feedback").css("color","blue");
				 $("#feedback").html("This has to be signed by an official rep from the organization or it won't be valid in an audit.");
				 
			 }

  $("#feedback").css("backgroundColor","#CBC3E3");
	   $('#myModal').modal("show");
   });
}); //end main jQuery function
