//Prevent default form submission
$('#new-cat').on('submit', function(event){
	console.log("clicked");
	event.preventDefault();
	//push to api
});



//Collected forms data into object

	// #cat-name
	// #cat-note




//Send object to API
	//https://ga-cat-rescue.herokuapp.com/api/cats

$.post('https://ga-cat-rescue.herokuapp.com/api/cats', '{"name": " ", "note": " "}');




//Display API contents in list below forms
	//#cats(ul)
// <li>obj.name + " - " + obj.note</li>
$.ajax({
	type: 'GET',
	url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
	dataType: 'JSON',
	success: function (data) {
		data.forEach(function(el) {
			$('#cats').append("<li>" + el.name + "-" + el.note + "</li>");
		});
	}

});