function showTopStories(category = null) {
    let url = 'https://newsapi.org/v2/top-headlines?country=gb';

    if (category) {
        url = url + '&category=' + category;
    }

    url = url + '&apiKey=081f564d356d457982b0cf109a72aea8';

    console.log(url);

    fetchDataForTopStories(url);
}

// Send GET request and do something with the response data
function fetchDataForTopStories(url) {

    axios.get(url)
    .then(response => {
        
        console.log(response);
        renderPage(response.data.articles);

    })
    .catch(err => {
        console.log(err);
    });
}

// Renders the contents of an array to the page.
function renderPage(responseArray) {

    let canvas = document.createElement('div');

    // Each item contains a row, a col-X, an image and a paragraph.
    for (article of responseArray) {
        
        newRow = renderPageItem(article);
        canvas.appendChild(newRow);
    }

    document.getElementById('content').innerHTML = canvas.innerHTML;
}

// Creates an html row with the contents of an article. 
function renderPageItem(article) {

    let newRow = document.createElement('div');
    newRow.classList.add('row', 'justify-content-center', 'my-1', 'pb-4');

    let newCol = document.createElement('div');
    newCol.classList.add('col-12', 'section-container');

    let newAnchor = document.createElement('a');
    newAnchor.href = article.url;
    newAnchor.target = '_blank';

    let newRow2 = document.createElement('div');
    newRow2.classList.add('row');

    let newLine = document.createElement('hr');
    newLine.classList.add('col-12');

    // Image
    let newImgCol = document.createElement('div');
    let newImg = document.createElement('img');
    
    if (article.urlToImage) {
        newImgCol.classList.add('col-12', 'col-sm-7', 'col-md-5', 'mb-2');
        newImg.src = article.urlToImage;
    }

    // Text
    let newTextCol = document.createElement('div');
    newTextCol.classList.add('col-12');
    article.urlToImage ? newTextCol.classList.add('col-sm-5', 'col-md-7'): null;

    let date = new Date(article.publishedAt);
    let newTime = document.createElement('p');
    newTime.classList.add('published-time');
    newTime.innerHTML = date.toString().slice(0,21);

    let newHeading = document.createElement('h2');
    newHeading.innerText = removeSourceFromTitle(article.title);

    let newParagraph = document.createElement('p');
    newParagraph.classList.add('mb-4');
    newParagraph.innerText = article.description;

    let newSource = document.createElement('p')
    newSource.classList.add('source-text')
    newSource.innerText = article.source.name;

    // Put it together
    if (article.urlToImage) {
        newImgCol.appendChild(newImg);
        newRow2.appendChild(newImgCol);
    }

    newTextCol.appendChild(newTime);
    newTextCol.appendChild(newHeading);
    newTextCol.appendChild(newParagraph);
    newTextCol.appendChild(newSource);
    newRow2.appendChild(newTextCol);
    newAnchor.appendChild(newRow2);
    newCol.appendChild(newAnchor);
    newRow.appendChild(newCol);
    newRow.appendChild(newLine);

    return newRow;
}

// News source (e.g. bbc.co.uk) is included in the title after " - ", so this function removes it.
function removeSourceFromTitle(string) {

    index = string.indexOf(" - ");
    return string.slice(0, index);
}