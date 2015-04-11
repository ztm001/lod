
// Author: Zachary Maguire
// Custom JS for Lords of dogtown index
// Project 3 




$(document).ready(function(){

		$( ".story-content, .cast-content" ).hide();

	// Show and hide Story Content

		$( ".thirdbox" ).click(function() {
		  $( ".story-content" ).toggle( "slow", function() {
		    // Animation complete.
		  });
		});

	// Show and hide Cast Content

		$( ".forthbox" ).click(function() {
		  $( ".cast-content" ).toggle( "slow", function() {
		    // Animation complete.
		  });
		});


	// fancy box plug in 


		$(".fancybox").fancybox();













});  //   closing document