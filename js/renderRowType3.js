// Produces the html for a row on a 'top stories' page.
function renderRowType3(article1, article2, article3) {

    // General row
    let newRow = document.createElement('div');
    newRow.classList.add('row', 'justify-content-center', 'my-1', 'pb-4');

    let newCol = document.createElement('div');
    newCol.classList.add('col-12', 'section-container');

    let newRow2 = document.createElement('div');
    newRow2.classList.add('row');

    // For each article
    let newAnchor1 = document.createElement('a');
    newAnchor1.href = article1.url;
    newAnchor1.target = '_blank';

    let newAnchor2 = document.createElement('a');
    newAnchor2.href = article2.url;
    newAnchor2.target = '_blank';

    let newAnchor3 = document.createElement('a');
    newAnchor3.href = article3.url;
    newAnchor3.target = '_blank';

    let newArticle1 = document.createElement('article');
    newArticle1.classList.add('col-12', 'col-sm-4');

    let newArticle2 = document.createElement('article');
    newArticle2.classList.add('col-12', 'col-sm-4');

    let newArticle3 = document.createElement('article');
    newArticle3.classList.add('col-12', 'col-sm-4');

    // Line(s) at the bottom
    
    let newLineRow = document.createElement('div');
    newLineRow.classList.add('row');

    let newLineDiv1 = document.createElement('div');
    let newLine1 = document.createElement('hr');
    newLineDiv1.appendChild(newLine1);
    newLineDiv1.classList.add('col-4', 'd-none', 'd-sm-block');

    let newLineDiv2 = document.createElement('div');
    let newLine2 = document.createElement('hr');
    newLineDiv2.appendChild(newLine2);
    newLineDiv2.classList.add('col-4', 'd-none', 'd-sm-block');

    let newLineDiv3 = document.createElement('div');
    let newLine3 = document.createElement('hr');
    newLineDiv3.appendChild(newLine3);
    newLineDiv3.classList.add('col-4', 'd-none', 'd-sm-block');

    newLineRow.appendChild(newLineDiv1);
    newLineRow.appendChild(newLineDiv2);
    newLineRow.appendChild(newLineDiv3);

    // Images
    let newImg1 = document.createElement('img');
    let newImg2 = document.createElement('img');
    let newImg3 = document.createElement('img');
    
    if (article1.urlToImage) {
        newImg1.src = article1.urlToImage;
    }
    if (article2.urlToImage) {
        newImg2.src = article2.urlToImage;
    }
    if (article3.urlToImage) {
        newImg3.src = article3.urlToImage;
    }

    // Text
    let newText1 = document.createElement('div');
    let newText2 = document.createElement('div');
    let newText3 = document.createElement('div');

    let date1 = new Date(article1.publishedAt);
    let newTime1 = document.createElement('p');
    newTime1.classList.add('published-time', 'mt-3');
    newTime1.innerHTML = date1.toString().slice(0,21);

    let date2 = new Date(article2.publishedAt);
    let newTime2 = document.createElement('p');
    newTime2.classList.add('published-time', 'mt-3');
    newTime2.innerHTML = date2.toString().slice(0,21);

    let date3 = new Date(article3.publishedAt);
    let newTime3 = document.createElement('p');
    newTime3.classList.add('published-time', 'mt-3');
    newTime3.innerHTML = date3.toString().slice(0,21);

    let newHeading1 = document.createElement('h2');
    newHeading1.innerText = removeSourceFromTitle(article1.title);

    let newHeading2 = document.createElement('h2');
    newHeading2.innerText = removeSourceFromTitle(article2.title);

    let newHeading3 = document.createElement('h2');
    newHeading3.innerText = removeSourceFromTitle(article3.title);

    let newParagraph1 = document.createElement('p');
    newParagraph1.classList.add('mb-4');
    newParagraph1.innerText = article1.description;

    let newParagraph2 = document.createElement('p');
    newParagraph2.classList.add('mb-4');
    newParagraph2.innerText = article2.description;

    let newParagraph3 = document.createElement('p');
    newParagraph3.classList.add('mb-4');
    newParagraph3.innerText = article3.description;

    let newSource1 = document.createElement('p')
    newSource1.classList.add('source-text')
    newSource1.innerText = article1.source.name + ' | ';

    let newSource2 = document.createElement('p')
    newSource2.classList.add('source-text')
    newSource2.innerText = article2.source.name + ' | ';

    let newSource3 = document.createElement('p')
    newSource3.classList.add('source-text')
    newSource3.innerText = article3.source.name + ' | ';

    let newCategory1 = document.createElement('span');
    newCategory1.classList.add(article1.source.id, 'uppercase');
    newCategory1.innerHTML = 'news';
    newSource1.appendChild(newCategory1);

    let newCategory2 = document.createElement('span');
    newCategory2.classList.add(article2.source.id, 'uppercase');
    newCategory2.innerHTML = 'news';
    newSource2.appendChild(newCategory2);

    let newCategory3 = document.createElement('span');
    newCategory3.classList.add(article3.source.id, 'uppercase'); 
    newCategory3.innerHTML = 'news';
    newSource3.appendChild(newCategory3);

    // Append it together
    newText1.appendChild(newTime1);
    newText1.appendChild(newHeading1);
    newText1.appendChild(newParagraph1);
    newText1.appendChild(newSource1);
    newArticle1.appendChild(newImg1);
    newArticle1.appendChild(newText1);

    newText2.appendChild(newTime2);
    newText2.appendChild(newHeading2);
    newText2.appendChild(newParagraph2);
    newText2.appendChild(newSource2);
    newArticle2.appendChild(newImg2);
    newArticle2.appendChild(newText2);

    newText3.appendChild(newTime3);
    newText3.appendChild(newHeading3);
    newText3.appendChild(newParagraph3);
    newText3.appendChild(newSource3);
    newArticle3.appendChild(newImg3);
    newArticle3.appendChild(newText3);

    newRow2.appendChild(newArticle1);
    newRow2.appendChild(newArticle2);
    newRow2.appendChild(newArticle3);

    newCol.appendChild(newRow2);
    newCol.appendChild(newLineRow);
    newRow.appendChild(newCol);

    return newRow;
}