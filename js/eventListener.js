// Enables searching with the 'enter' key, when writing in the search input field
$('#searchinput').on('keyup', function(event) {
    if (event.keyCode === 13) {
        $('#searchbutton').click();
    }
})