// Search with keywords
function searchEverything(query) {
    window.sessionStorage.setItem('query', query);

    let url = 'https://newsapi.org/v2/everything?q=' + query + '&apiKey=081f564d356d457982b0cf109a72aea8';

    console.log(url);
    
    fetchDataForSearch(url);

}

// Send GET request and do something with the response data
function fetchDataForSearch(url) {

    axios.get(url)
    .then(response => {

        window.location.pathname = '/searchresults.html';
    
        window.sessionStorage.setItem('currentSearchResults', JSON.stringify(response.data.articles));

    })
    .catch(err =>
        console.log(err)
    );
}

// Renders the contents of an array to the search results page.
function renderSearchResults(responseArray) {

    let canvas = document.createElement('div');

    console.log(responseArray);

    for (article of responseArray) {
        
        newRow = renderSearchItem(article);
        canvas.appendChild(newRow);
    }

    document.getElementById('searchresults').innerHTML = canvas.innerHTML;
}

// Renders the html for a search result.
function renderSearchItem(article) {

    let newRow = document.createElement('div');
    newRow.classList.add('row', 'justify-content-center', 'my-1', 'pb-4');

    let newCol = document.createElement('div');
    newCol.classList.add('col-12', 'section-container');

    let newAnchor = document.createElement('a');
    newAnchor.href = article.url;
    newAnchor.target = '_blank';

    let newLine = document.createElement('hr');
    newLine.classList.add('col-12');

    // Text
    let newTextCol = document.createElement('div');
    newTextCol.classList.add('col-12');

    let date = new Date(article.publishedAt);
    let newTime = document.createElement('p');
    newTime.classList.add('published-time');
    newTime.innerHTML = date.toString().slice(0,21);

    let newHeading = document.createElement('h2');
    newHeading.innerText = article.title;

    let newParagraph = document.createElement('p');
    newParagraph.classList.add('mb-4');
    newParagraph.innerText = article.description;

    let newSource = document.createElement('p')
    newSource.classList.add('source-text')
    newSource.innerText = article.source.name;

    // Put it together
    newTextCol.appendChild(newTime);
    newTextCol.appendChild(newHeading);
    newTextCol.appendChild(newParagraph);
    newTextCol.appendChild(newSource);
    newAnchor.appendChild(newTextCol);
    newCol.appendChild(newAnchor);
    newRow.appendChild(newCol);
    newRow.appendChild(newLine);

    return newRow;
}

function renderSearchMetaInfo() {
    let newRow = document.createElement('div');
    newRow.classList.add('row', 'justify-content-center', 'p-1');

    let newCol = document.createElement('div');
    newCol.classList.add('col-12', 'section-container');

    let newParagraph = document.createElement('p');
    newParagraph.classList.add('mx-3');
    newParagraph.innerHTML = "Showing results for: " + window.sessionStorage.getItem('query');

    // Put it together
    newCol.appendChild(newParagraph);
    newRow.appendChild(newCol);

    document.getElementById('metainfo').appendChild(newRow);
}