$('#searchinput').on('keyup', function(event) {
    if (event.keyCode === 13) {
        $('#searchbutton').click();
    }
})