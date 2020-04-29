const categoryColors = {
        "business": ["darkblue", "white"],
        "science": ["darkslategray", "white"],
        "health": ["pink", "darkred"],
        "technology": ["lightblue", "black"],
        "sports": ["darkred", "white"],
        "entertainment": ["orange", "darkred"]
    }

// String the URL together from the user input and call the fetchData function.
function showTopStories() {
    let url = 'https://newsapi.org/v2/top-headlines?pageSize=38';
    let category = window.sessionStorage.getItem('category');
    let country = document.getElementById('region').value
    
    if (country !== "") {
        url += '&country=' + country;
    } else {
        url += '&country=gb'
    }
    
    url += '&category=' + category;

    url += '&apiKey=081f564d356d457982b0cf109a72aea8';
    
    console.log(url);

    fetchDataForTopStories(url);
}

// Send GET request and call the renderPageFromResponseObject() function with the response.
function fetchDataForTopStories(url) {

    axios.get(url)
    .then(response => {
        
        console.log(response);
        renderPageFromResponseObject(response.data.articles);

    })
    .catch(err => {
        console.log(err);
    });
}

// Renders the contents of an array to the page.
function renderPageFromResponseObject(responseArray) {

    let canvas = document.createElement('div');

    let counter = 1;
    let randomNumber;

    topStory = renderTopStory(responseArray[0]);
    canvas.appendChild(topStory);

    // Feeds all the articles into the front page generator. There are X types of rows that include a different amount of articles. 'counter' keeps track of the articles.
    while (counter < responseArray.length - 2) {
        
        randomNumber = Math.random();

        if (randomNumber < 0.33 && responseArray.length - counter > 2) {
            newRow = renderRowType3(responseArray[counter], responseArray[counter + 1], responseArray[counter + 2]);
            counter += 3;
            
        } else if (randomNumber < 0.66 && responseArray.length - counter > 1) {
            newRow = renderRowType2(responseArray[counter], responseArray[counter + 1]);
            counter += 2;
        } else {
            newRow = renderRowType1(responseArray[counter]);
            counter++;
        }

        canvas.appendChild(newRow);
    }

    document.getElementById('content').innerHTML = canvas.innerHTML;
}

// News source (e.g. bbc.co.uk) is included in the title after " - ", so this function removes it.
function removeSourceFromTitle(string) {

    let index = string.indexOf(" - ");
    return string.slice(0, index);
}

function showSearchBar() {
    document.getElementById('searchinput').classList.toggle('w-0', 'py-2', 'px-4');
}

function updateCategoryBar() {

    let currentCategory = window.sessionStorage.getItem('category');
    
    // Show or hide the category bar
    if ( currentCategory === 'general') {
        document.getElementById('category-bar').classList.add('d-none');
    } else {
        document.getElementById('category-bar').classList.remove('d-none');
    }

    document.getElementById('category-heading').innerHTML = currentCategory;
    document.getElementById('category-bar').style.backgroundColor = categoryColors[currentCategory][0];
    document.getElementById('category-bar').style.color = categoryColors[currentCategory][1];
}