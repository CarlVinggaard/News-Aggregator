// Renders the html for the top story on the page.
function renderTopStory(article) {
    // General row
    let newRow = document.createElement('div');
    newRow.classList.add('row', 'my-1', 'pb-4');

    let newAnchor = document.createElement('a');
    newAnchor.href = article.url;
    newAnchor.target = '_blank';

    let newArticle = document.createElement('article');
    newArticle.classList.add('row', 'top-story');

    let newLine = document.createElement('hr');
    newLine.classList.add('d-none', 'd-sm-block');

    // Text
    let newTextCol = document.createElement('div');
    newTextCol.classList.add('col-12');

    let date = new Date(article.publishedAt);
    let newTime = document.createElement('p');
    newTime.classList.add('published-time');
    newTime.innerHTML = date.toString().slice(0,21);

    let newHeading = document.createElement('h1');
    newHeading.innerText = removeSourceFromTitle(article.title);

    let newParagraph = document.createElement('p');
    newParagraph.classList.add('mb-4', 'd-none', 'd-sm-block');
    newParagraph.innerText = article.description;

    let newSource = document.createElement('p')
    newSource.classList.add('source-text')
    newSource.innerText = article.source.name;

    newTextCol.appendChild(newTime);
    newTextCol.appendChild(newHeading);
    newTextCol.appendChild(newParagraph);
    newTextCol.appendChild(newSource);
    newArticle.appendChild(newTextCol);
    newArticle.appendChild(newLine);

    newAnchor.appendChild(newArticle);
    newRow.appendChild(newAnchor);

    return newRow;
}