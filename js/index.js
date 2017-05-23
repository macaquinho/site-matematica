$(document).ready(function() {

	$(".dropdown-container").hover(
		function enter(){
			$(this).children(".dropdown-element").addClass("active");
		},
		function leave(){
			$(this).children(".dropdown-element").removeClass("active");
		}
	);

});