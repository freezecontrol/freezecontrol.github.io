$(document).ready(function(){

	$("#toggle").click(function(){
		$("#togglee").toggleClass("a b");
	});
	
	$("#toggle").click(function(){
		$("#arrowtoggle").toggleClass("arrowimg1 arrowimg2");
	});
	
	$("#menubars").click(function(){
		
		$("#menutoggle").toggleClass("hide show");
	});
	
	$("#menubars").click(function(){
		
		$("#menubars").toggleClass("menu menuon");
	});
	

});


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}