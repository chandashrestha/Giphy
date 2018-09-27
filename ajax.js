//Setup variables
var apiKey = "r2V4rhd8P9BLaz9AZiwcgPcOr0Scq24Q ";
var buttonArray = ["Dad reflexes", "Karate chop", "Back flip", "Vince Young", "Dallas Cowboys", "Jet Engine"];

//Functions
//When you click a button, ajax get the images
//Main function
//populate page with buttons
$(document).ready(function(){
	function displaySingerInfo(){
		var player = $(this).attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + player + "&limit=10&offset=0&rating=G&lang=en";		
		$.ajax({
				url: queryURL,
				method: "GET"
			}).done(function(choice){
				console.log(choice.data[0]);
				for(i= 0; i<choice.data.length; i++){
					$('#players').prepend("<img src=" + choice.data[i].images.original_still.url +" data state = 'still' style = 'height = 400px' class= 'gif'>");
				}
				})
	}
	function showButtons(){
		$("playerBtns").empty();
		for(i=0; i< buttonArray.length; i++){
			var getBtn = $('<button>');
			getBtn.addClass("playa");
			getBtn.attr("data-name", buttonArray[i]);
			getBtn.text(buttonArray[i]);
			$(".playerBtns").append(getBtn);
		}
	}
	$(".gif").on("click", function(){
          $('img').attr("src", "choice.data[i].images.original.webp");
    })
	//When you click a button, ajax get the images
	$(document).on("click", ".playa", displayPlayerInfo);
	showButtons();

})