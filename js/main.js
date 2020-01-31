// Search with keywords
function searchEverything(query) {
    let url = 'https://newsapi.org/v2/everything?q=' + query + '&apiKey=081f564d356d457982b0cf109a72aea8';

    fetchData(url);
}

function getTopStories() {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=081f564d356d457982b0cf109a72aea8';

    fetchData(url);
}

// Sends the request and returns the data
function fetchData(url) {

    axios.get(url)
            .then(response => {
                
                console.log(response);

                makeList(response.data.articles);

            })
            .catch(err =>
                console.log(err)
            );
}

// Creates an unordered list from the contents of an array
function makeList(array) {
    var listElement = document.createElement('ul');
    var listItem;

    for (item of array) {
        listItem = document.createElement('li');

        listItem.innerHTML = item.title;
        
        listElement.appendChild(listItem);
    }

    document.getElementById('response').innerHTML = listElement.innerHTML;

    return listElement;
}
