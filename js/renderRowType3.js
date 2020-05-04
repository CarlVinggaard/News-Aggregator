// Produces the html for a row on a 'top stories' page.
function renderRowType3(article1, article2, article3) {

    // General row
    let newRow = document.createElement('div');
    newRow.classList.add('row', 'my-1', 'pb-3');

    let newRow2 = document.createElement('div');
    newRow2.classList.add('row', 'bg-gray');

    // For each article
    let newAnchor1 = document.createElement('a');
    newAnchor1.href = article1.url;
    newAnchor1.target = '_blank';
    newAnchor1.classList.add('col-12', 'col-sm-6', 'col-md-4', 'mb-2', 'mb-md-0');

    let newAnchor2 = document.createElement('a');
    newAnchor2.href = article2.url;
    newAnchor2.target = '_blank';
    newAnchor2.classList.add('col-12', 'col-sm-6', 'col-md-4', 'mb-2', 'mb-md-0');

    let newAnchor3 = document.createElement('a');
    newAnchor3.href = article3.url;
    newAnchor3.target = '_blank';
    newAnchor3.classList.add('col-12', 'col-md-4', 'mb-2', 'mb-md-0', 'mt-2', 'mt-md-0');

    let newArticle1 = document.createElement('article');
    
    let newArticle2 = document.createElement('article');

    let newArticle3 = document.createElement('article');

    // Line(s) at the bottom
    
    let newLineRow = document.createElement('div');
    newLineRow.classList.add('row');

    let newLineDiv1 = document.createElement('div');
    let newLine1 = document.createElement('hr');
    newLineDiv1.appendChild(newLine1);
    newLineDiv1.classList.add('col-12', 'col-md-4', 'd-none', 'd-sm-block');

    let newLineDiv2 = document.createElement('div');
    let newLine2 = document.createElement('hr');
    newLineDiv2.appendChild(newLine2);
    newLineDiv2.classList.add('col-4', 'd-none', 'd-md-block');

    let newLineDiv3 = document.createElement('div');
    let newLine3 = document.createElement('hr');
    newLineDiv3.appendChild(newLine3);
    newLineDiv3.classList.add('col-4', 'd-none', 'd-md-block');

    newLineRow.appendChild(newLineDiv1);
    newLineRow.appendChild(newLineDiv2);
    newLineRow.appendChild(newLineDiv3);

    // Images
    if (article1.urlToImage) {
        var newImg1 = document.createElement('img');
        newImg1.classList.add('mb-3');
        newImg1.src = article1.urlToImage;
    }
    if (article2.urlToImage) {
        var newImg2 = document.createElement('img');
        newImg2.classList.add('mb-3');
        newImg2.src = article2.urlToImage;
    }
    if (article3.urlToImage) {
        var newImg3 = document.createElement('img');
        newImg3.classList.add('mb-3');
        newImg3.src = article3.urlToImage;
    }

    // Text
    let newText1 = document.createElement('div');
    let newText2 = document.createElement('div');
    let newText3 = document.createElement('div');

    let date1 = new Date(article1.publishedAt);
    let newTime1 = document.createElement('p');
    newTime1.classList.add('published-time');
    newTime1.innerHTML = date1.toString().slice(0,21);

    let date2 = new Date(article2.publishedAt);
    let newTime2 = document.createElement('p');
    newTime2.classList.add('published-time');
    newTime2.innerHTML = date2.toString().slice(0,21);

    let date3 = new Date(article3.publishedAt);
    let newTime3 = document.createElement('p');
    newTime3.classList.add('published-time');
    newTime3.innerHTML = date3.toString().slice(0,21);

    let newHeading1 = document.createElement('h4');
    newHeading1.innerText = removeSourceFromTitle(article1.title);

    let newHeading2 = document.createElement('h4');
    newHeading2.innerText = removeSourceFromTitle(article2.title);

    let newHeading3 = document.createElement('h4');
    newHeading3.innerText = removeSourceFromTitle(article3.title);

    let newParagraph1 = document.createElement('p');
    newParagraph1.classList.add('mb-4', 'd-none', 'd-sm-block');
    newParagraph1.innerText = article1.description;

    let newParagraph2 = document.createElement('p');
    newParagraph2.classList.add('mb-4', 'd-none', 'd-sm-block');
    newParagraph2.innerText = article2.description;

    let newParagraph3 = document.createElement('p');
    newParagraph3.classList.add('mb-4', 'd-none', 'd-sm-block');
    newParagraph3.innerText = article3.description;

    let newSource1 = document.createElement('p')
    newSource1.classList.add('source-text')
    newSource1.innerText = article1.source.name;

    let newSource2 = document.createElement('p')
    newSource2.classList.add('source-text')
    newSource2.innerText = article2.source.name;

    let newSource3 = document.createElement('p')
    newSource3.classList.add('source-text')
    newSource3.innerText = article3.source.name;

    // Append it together
    newText1.appendChild(newTime1);
    newText1.appendChild(newHeading1);
    newText1.appendChild(newParagraph1);
    newText1.appendChild(newSource1);
    article1.urlToImage ? newArticle1.appendChild(newImg1) : null;
    newArticle1.appendChild(newText1);

    newText2.appendChild(newTime2);
    newText2.appendChild(newHeading2);
    newText2.appendChild(newParagraph2);
    newText2.appendChild(newSource2);
    article2.urlToImage ? newArticle2.appendChild(newImg2) : null;
    newArticle2.appendChild(newText2);

    newText3.appendChild(newTime3);
    newText3.appendChild(newHeading3);
    newText3.appendChild(newParagraph3);
    newText3.appendChild(newSource3);
    article3.urlToImage ? newArticle3.appendChild(newImg3) : null;
    newArticle3.appendChild(newText3);

    newAnchor1.appendChild(newArticle1);
    newAnchor2.appendChild(newArticle2);
    newAnchor3.appendChild(newArticle3);

    newRow2.appendChild(newAnchor1);
    newRow2.appendChild(newAnchor2);
    newRow2.appendChild(newAnchor3);

    newRow.appendChild(newRow2);
    newRow.appendChild(newLineRow);

    return newRow;
}