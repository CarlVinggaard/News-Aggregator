// Produces the html for a row on a 'top stories' page.
function renderRowType1(article) {

    // General row
    let newRow = document.createElement('div');
    newRow.classList.add('row', 'justify-content-center', 'my-1', 'pb-4');

    let newCol = document.createElement('div');
    newCol.classList.add('col-12', 'section-container');

    // For each article
    let newAnchor = document.createElement('a');
    newAnchor.href = article.url;
    newAnchor.target = '_blank';

    let newArticle = document.createElement('article');
    newArticle.classList.add('row');

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

    let newSource = document.createElement('p');
    newSource.classList.add('source-text');
    newSource.innerText = article.source.name + ' | ';

    let newCategory = document.createElement('span');
    newCategory.classList.add(article.source.id, 'uppercase');
    newCategory.innerHTML = 'news';
    newSource.appendChild(newCategory);

    // Append it together
    if (article.urlToImage) {
        newImgCol.appendChild(newImg);
        newArticle.appendChild(newImgCol);
    }

    newTextCol.appendChild(newTime);
    newTextCol.appendChild(newHeading);
    newTextCol.appendChild(newParagraph);
    newTextCol.appendChild(newSource);
    newArticle.appendChild(newTextCol);
    newArticle.appendChild(newLine);

    newAnchor.appendChild(newArticle);
    newCol.appendChild(newAnchor);
    newRow.appendChild(newCol);

    return newRow;
}