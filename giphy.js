//Initial array of singers
var singers = ["Michael Jackson", "Pearl Jam", "Elvis Presley", "Etta James", "Beyonce"];
var singerName = $(this).attr("data-name");

$(".singer").on("click", giphy);

// Function for displaying singers data
function renderButtons() {
	$("#button-view").empty();
	$(".button").empty();

	//Looping through the array of singers
	for (var i = 0; i < singers.length; i++) {
		// Then dynamicaly generating buttons for each singer in the array
		// This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
		var a = $("<button>");
		// Adding a class of singer to our button
		a.addClass("singer");
		// Adding a data-attribute
		a.attr("data-person", singers[i]);

		a.attr("id", singers[i]);

		// Providing the initial button text
		a.text(singers[i]);

		// Adding the button to the HTML
		$(".button").append(a);
	}
}
// This function handles events where one button is clicked
$("#add-singer").on("click", function (event) {
	// Preventing the buttons default behavior when clicked (which is submitting a form)
	event.preventDefault();
	// This line grabs the input from the textbox
	var singer = $("#singer-input").val().trim();
	// Adding the singer from the textbox to our array
	singers.push(singer);
	// Calling renderButtons which handles the processing of our singers array
    renderButtons();

    // Event listener for all button elements

    $(".singer").on("click", giphy);

});


function giphy() {
    // In this case, the "this" keyword refers to the button that was clicked
    var person = $(this).attr("id");
	//This is our API Key
    var APIKey = "&api_key=dc6zaTOxFJmzC&limit=10";
    // Example queryURL for Giphy API
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&" + APIKey;

        console.log(person);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        // Storing an array of results in the results variable

        var results = response.data;
        // Looping through each result item

        for (var i = 0; i < 10; i++) {
			// Creating and storing a div tag

            var personDiv = $("<span>");
			// Creating a paragraph tag with the result item's rating

            var p = $("<p>").text("Rating: " + results[i].rating);
			// Creating and storing an image tag

            var personImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item

            personImage.attr("src", results[i].images.fixed_height.url);
			// Appending the paragraph and image tag to the animalDiv

            personDiv.append(p);
            personDiv.append(personImage);
			// Prependng the personDiv to the HTML page in the "#gifs-appear-here" div

            $("#gifs-appear-here").prepend(personDiv);
        }
    });
};