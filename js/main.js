const categoryColors = {
        "general": ["#1e3257", "white"],
        "business": ["darkblue", "white"],
        "science": ["darkslategray", "white"],
        "health": ["pink", "darkred"],
        "technology": ["lightblue", "black"],
        "sports": ["darkred", "white"],
        "entertainment": ["orange", "darkred"]
    };

// String the URL together from the user input and call the fetchData function.
function showTopStories() {
    let url = 'https://newsapi.org/v2/top-headlines?pageSize=38';
    let category = window.sessionStorage.getItem('category');
    let country = $('#region').val();
    
    if (country !== null) {
        url += '&country=' + country;
    } else {
        url += '&country=gb';
    }
    
    url += '&category=' + category;

    url += '&apiKey=081f564d356d457982b0cf109a72aea8';

    fetchDataForTopStories(url);
}

// Send GET request and call the renderPageFromResponseObject() function with the response.
function fetchDataForTopStories(url) {

    console.log(url)

    const proxy = {
        host: '127.0.0.1',
        port: 9000
    };
    
    axios.get(url)
        .then(response => {
            
            console.log(response.status)
            renderPageFromResponseObject(response.data.articles);

        })
        /*.catch(err => {
            console.log(err);
        });*/
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

    $('#content').html(canvas.innerHTML);
}

// News source (e.g. bbc.co.uk) is included in the title after " - ", so this function removes it.
function removeSourceFromTitle(string) {

    let index = string.indexOf(" - ");
    if (index > 0) {
        return string.slice(0, index);
    } else {
        return string;
    }
}

function setRegion() {
    let newRegion = $('#region').val();
    window.sessionStorage.setItem('region', newRegion);
}

function showSearchBar() {
    $('#searchinput').toggleClass(['w-0', 'h-0', 'search-border']);
    $('#searchheading').toggleClass('opacity-0');
    $('#searchinput').focus();
}

function goToSearchPage() {
    if ($('#searchinput').val()) {
        window.sessionStorage.setItem('query', $('#searchinput').val());
        window.location.href = window.location.href + 'search.html';
    }
    $('#searchinput').val('');
}

function goToCategoryPage(category) {
    window.sessionStorage.setItem('category', category);
    window.location.href = window.location.href.replace('/search.html', '');
    updateFrontPage();
}

// The category bar changes color and text based on the chosen category
function updateCategoryBar() {
    let currentCategory = window.sessionStorage.getItem('category') || 'general';
    let currentRegion = $('#region').val();

    if (currentCategory === 'general') {
        $('#category-heading').html('top stories');
    } else {
        $('#category-heading').html(currentCategory);
    }

    $('#region-heading').html(currentRegion);

    $('#category-bar').css('background-color', categoryColors[currentCategory][0]);
    $('#category-bar').css('color', categoryColors[currentCategory][1]);
}

function setActiveNavItem() {
    currentCategory = window.sessionStorage.getItem('category');
    
    $('#navbar li').removeClass('navitem-active');
    $('#navbar li').each(function() {
        if ($(this).attr('id') === currentCategory) {
            $(this).addClass('navitem-active');
        }
    });
}

function updateFrontPage() {
    updateCategoryBar();
    showTopStories();
    setActiveNavItem();
}

function changeCategory(category) {
    window.sessionStorage.setItem('category', category);
    updateFrontPage();
}