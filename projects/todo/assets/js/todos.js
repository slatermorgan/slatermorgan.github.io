// check off todos
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on x to delete entry
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation(); //stops event bubbling
});

// Adding a new item
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// gets text from input
		var todoText = $(this).val();
		$(this).val("");
		// create new li
		$("ul").append("<li><span> <i class='fas fa-trash-alt'></i>  </span> " + todoText + "</li>") 
	}
});

$("#add").click(function(){
	$("input[type='text']").fadeToggle();
});