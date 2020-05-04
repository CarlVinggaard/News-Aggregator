const searchField = document.getElementById('searchinput');

searchField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        document.getElementById('searchbutton').click();
    }
})