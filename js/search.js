// String the URL together from the user input and call the fetchData function.
function showSearchResults() {
    let query = window.sessionStorage.getItem('query');

    let url = 'https://newsapi.org/v2/everything?q=' + query;
    
    if (window.sessionStorage.getItem('language')) {
            url += '&language=' + $('#language').val();
    }

    if ($('#sortby')) { if ($('#sortby').val()) {
        url += '&sortBy=' + $('#sortby').val();
    }}

    url += '&page=' + window.sessionStorage.getItem('page');

    url += '&pageSize=10';

    url += '&apiKey=081f564d356d457982b0cf109a72aea8';

    window.sessionStorage.setItem('url', url);
    
    fetchDataForSearch(url);
}

// Send GET request and call the renderListFromResponseObject function with the response data.
function fetchDataForSearch(url) {

    console.log(url);

    axios.get(url)
    .then(response => {

        window.sessionStorage.setItem('totalResults', response.data.totalResults);

        renderListFromResponseObject(response.data.articles);
        showSearchMetaInfo();
        showPaginationButtons();

    })
    .catch(err =>
        console.log(err)
    );
}

// Renders the contents of an array to the search results page.
function renderListFromResponseObject(responseArray) {

    let canvas = document.createElement('div');

    for (article of responseArray) {
        
        newRow = showSearchItem(article);
        canvas.appendChild(newRow);
    }

    $('#searchresults').html(canvas.innerHTML);
}

// Renders the html for a search result.
function showSearchItem(article) {

    let newRow = document.createElement('div');
    newRow.classList.add('row', 'justify-content-center', 'my-1', 'pb-4');

    let newCol = document.createElement('div');
    newCol.classList.add('col-12', 'section-container');

    let newAnchor = document.createElement('a');
    newAnchor.href = article.url;
    newAnchor.target = '_blank';

    let newArticle = document.createElement('article');
    newArticle.classList.add('row');

    let newLine = document.createElement('hr');
    newLine.classList.add('col-12', 'd-none', 'd-sm-block', 'px-3');

    // Image
    var newImgCol = document.createElement('div');
    newImgCol.classList.add('col-12', 'col-sm-3');

    if (article.urlToImage) {
        var newImg = document.createElement('img');
        newImg.classList.add('img-mh');
        newImg.src = article.urlToImage;
    }

    // Text
    let newTextCol = document.createElement('div');
    newTextCol.classList.add('col-12', 'col-sm-9');

    let date = new Date(article.publishedAt);
    let newTime = document.createElement('p');
    newTime.classList.add('published-time');
    newTime.innerHTML = date.toString().slice(0,21);

    let newHeading = document.createElement('h4');
    newHeading.innerText = article.title;

    let newParagraph = document.createElement('p');
    newParagraph.classList.add('mb-4');
    newParagraph.innerText = article.description;

    let newSource = document.createElement('p')
    newSource.classList.add('source-text')
    newSource.innerText = article.source.name;

    // Append it together
    newTextCol.appendChild(newTime);
    newTextCol.appendChild(newHeading);
    newTextCol.appendChild(newSource);

    if (article.urlToImage) {
        newImgCol.appendChild(newImg);
    }

    newArticle.appendChild(newImgCol);
    newArticle.appendChild(newTextCol);
    newAnchor.appendChild(newArticle);
    newCol.appendChild(newAnchor);
    newRow.appendChild(newCol);
    newRow.appendChild(newLine);

    return newRow;
}

// Renders html for the metainfo for the search.
function showSearchMetaInfo() {
    let startNum = (window.sessionStorage.getItem('page') * 10) - 9;
    let endNum = Math.min(window.sessionStorage.getItem('page') * 10, window.sessionStorage.getItem('totalResults'));

    let newRow = document.createElement('div');
    newRow.classList.add('row', 'justify-content-center', 'p-1');

    let newCol = document.createElement('div');
    newCol.classList.add('col-12', 'section-container');

    let newSpan = document.createElement('span');
    newSpan.classList.add('ml-2', 'font-weight-normal', 'current-query');
    newSpan.innerHTML = window.sessionStorage.getItem('query');

    let newParagraph = document.createElement('p');
    newParagraph.classList.add('mb-1', 'font-weight-bold', 'text-gray');
    newParagraph.innerHTML = 'Showing results for ';
    newParagraph.appendChild(newSpan);

    let newParagraph2 = document.createElement('p');
    newParagraph2.innerHTML = 'Showing results ' + startNum + ' - ' + endNum + ' of ' + window.sessionStorage.getItem('totalResults');

    let newParagraph3 = document.createElement('p');
    newParagraph3.innerHTML = newParagraph2.innerHTML;

    // Put it together
    newCol.appendChild(newParagraph);
    newCol.appendChild(newParagraph2);
    newRow.appendChild(newCol);

    $('#metainfo').html(newRow);
    $('#results-shown').html(newParagraph3);
}

// Saves the entries from the user input fields to session storage.
function saveUserInputToSessionStorage() {

    if ($('#searchinput').val()) {
        window.sessionStorage.setItem('query', $('#searchinput').val());
    }

    if ($('#language').val()) {
        window.sessionStorage.setItem('language', $('#language').val());
    }

    if ($('#sortby').val()) {
        window.sessionStorage.setItem('sortby', $('#sortby').val());
    }
}

function updateSearchPage() {
    setPage(1);
    showSearchResults();
    showSearchMetaInfo();
    document.title = window.sessionStorage.getItem('query');
}