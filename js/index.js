$(document).ready(function() {

	$(".dropdown-container").hover(
		function enter(){
			$(this).children(".dropdown-content").addClass("active");
		},
		function leave(){
			$(this).children(".dropdown-content").removeClass("active");
		}
	);

});