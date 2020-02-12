// Search with keywords
function searchEverything(query) {
    let url = 'https://newsapi.org/v2/everything?q=' + query + '&apiKey=081f564d356d457982b0cf109a72aea8';
    
    makeList(fetchData(url));
}

function showTopStories() {
    let url = 'https://newsapi.org/v2/top-headlines?country=gb&apiKey=081f564d356d457982b0cf109a72aea8';

    fetchData(url);
}

// Sends the request and returns the data
function fetchData(url) {

    axios.get(url)
            .then(response => {
                
                console.log(response);

                renderFrontPage(response.data.articles);

            })
            .catch(err =>
                console.log(err)
            );
}

// Renders the contents of an array to the front page.
function renderFrontPage(responseArray) {

    let canvas = document.createElement('div');

    // Each item contains a row, a col-X, an image and a paragraph.
    for (article of responseArray) {
        
        newRow = renderFrontPageItem(article);
        canvas.appendChild(newRow);
    }

    document.getElementById('frontpage').innerHTML = canvas.innerHTML;
}

// Creates an html row with the contents of an article. 
function renderFrontPageItem(article) {

    let newRow = document.createElement('div');
    newRow.classList.add('row', 'justify-content-center', 'my-1', 'p-4');

    let newCol = document.createElement('div');
    newCol.classList.add('col-12', 'section-container');

    let newAnchor = document.createElement('a');
    newAnchor.href = article.url;
    newAnchor.target = '_blank';

    let newRow2 = document.createElement('div');
    newRow2.classList.add('row');

    // Image
    let newImgCol = document.createElement('div');
    newImgCol.classList.add('col-12', 'col-sm-7', 'col-md-5', 'mb-2');

    let newImg = document.createElement('img');
    newImg.src = article.urlToImage;

    // Text
    let newTextCol = document.createElement('div');
    newTextCol.classList.add('col-12', 'col-sm-5', 'col-md-7');

    let newTime = document.createElement('p');
    newTime.classList.add('published-time');
    newTime.innerHTML = article.publishedAt;

    let newHeading = document.createElement('h2');
    newHeading.innerText = removeSourceFromTitle(article.title);

    let newParagraph = document.createElement('p');
    newParagraph.classList.add('mb-4');
    newParagraph.innerText = article.description;

    let newSource = document.createElement('p')
    newSource.classList.add('source-text')
    newSource.innerText = article.source.name;

    // Put it together
    newImgCol.appendChild(newImg);
    newTextCol.appendChild(newTime);
    newTextCol.appendChild(newHeading);
    newTextCol.appendChild(newParagraph);
    newTextCol.appendChild(newSource);
    newRow2.appendChild(newImgCol);
    newRow2.appendChild(newTextCol);
    newAnchor.appendChild(newRow2);
    newCol.appendChild(newAnchor);
    newRow.appendChild(newCol);

    return newRow;
}

// News source (e.g. bbc.co.uk) is included in the title after " - ", so this function removes it.
function removeSourceFromTitle(string) {

    index = string.indexOf(" - ");
    return string.slice(0, index);
}