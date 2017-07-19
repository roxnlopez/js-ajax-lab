$(document).ready(function(){
	console.log('ready');

	//Prevent default form submission
	$('#new-cat').on('submit', function(){
			console.log("clicked");

		//push to api
	});

	//Display API contents in list below forms
		//#cats(ul)
	// <li>obj.name + " - " + obj.note</li>
	$.ajax({
		type: 'GET',
		url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
		dataType: 'JSON',
		success: (function (data) {
			data.forEach(function(el) {
				$('#cats').append("<li>" + el.name + "-" + el.note + "</li>");
			});
		})

	});
//cat list is there, now add preventdefault so it doesn't refresh
	$("form").on("submit", function(event) {
		event.preventDefault();

	var newCat = $('#cat-name').val();
	var newNote = $('#cat-note').val();

	var newCatObject = {
		name: newCat,
		note: newNote
	};
	console.log(newCatObject);
	//console log that shit yo

	$.post('https://ga-cat-rescue.herokuapp.com/api/cats', JSON.stringify(newCatObject))
			.done(function (data) {
			 var newCatData = JSON.parse(data);
        $('#cats').append('<li>' + newCatData.name + ' - <em>' + newCatData.note + '</em></li>');
      }); 

			console.log('Roxann');
	});
//create some new cool cats
//$('.results').append("Once upon a time there was a Developer named " + $("#name").val().split(" ").join("") + ". "
	
//create object with new info 

	
	//add cat or note and refresh list
	//$('#new-name').serialize();
	//$.ajax({
	//	type: 'POST',
	//	url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
	//	data: $('#new-name').serialize(),
	//	success: function(el){
	//		console.log('hi');
	//	}
});