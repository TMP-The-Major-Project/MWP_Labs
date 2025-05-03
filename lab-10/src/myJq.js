$(document).ready(function() {
	// $("selector").action();
	$("p").click(function() {
		console.log("you clicked on p");
		// $("p").hide();
		$(this).hide();
	});

	$("#sec").click(function() {
		console.log("2nd p");
	});
});
