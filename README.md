# NewsWorld - The latest news from around the world

This is an interactive frontend programming assignment, done as part of the full-stack developer course at Code Institute. The purpose of the project
is to implement and display what I have learned about Javascript, APIs and web design.

The project is a news aggregator website called NewsWorld. The purpose of the website is to allow users to view top stories from various countries, 
and search news by keyword from more than 50,000 sources worldwide. The website displays the headlines, images and summaries of news articles, and links
to the actual sources.

The website is powered by newsapi.org, a powerful news aggregation API.

The website is written in HTML5, CSS3 and Javascript. A number of javascript libraries were used to ... The code was written in the Gitpod IDE.

## User Experience

The target audience consists of people who want to get an overview of news from multiple countries and a variety of sources across the world.

The functional and usability requirements for the site include:
- The site should provide an easily digestible overview of news stories
- The site layout should not be too monotone or boring
- The site should display top news headlines from a variety of countries within a variety of categories
- Navigation between the categories should be seamless and easy to understand
- The user should be able to search globally for news by keywords
- The user should be able to sort the search results by recency, popularity or relevancy
- The user should be able to search the news by language
- The user should be able to easily navigate to the original news source

### User Flow

User flow no. 1:
1. A user wants to check out news and business headlines in a number of countries (e.g. Great Britain, China and the United States).
2. The default selection is Great Britain.
3. The user can easily view top news from other countries by selecting a different country in the region selector in the top right corner.
4. The user can easily find business news by clicking the business tab.

User flow no. 2:
1. The user wants to search specific news about a topic in their native language, e.g. Portuguese.
2. The user opens the search field and enters the topic.
3. The user can simply select Portuguese in the language select menu and filter by relevancy to the topic.

### Style and Design

The style of the site is very simple without too many 'disturbing' elements. The attention of the user should naturally be directed towards 
the images and headlines, so a plain white background with a plain navigation menu and buttons makes the most sense. Structure is conveyed 
with spacing, horizontal lines below some articles and in some cases with a light gray box around a set of articles.

In order to make the design more interesting, a design function has been implemented that places the articles into different 'rows' with 
different layouts. The rows are selected randomly by the design function. The different types of rows and the varying layout makes the page
more interesting to the reader.

When searching by keyword, the results are presented in a more ordered manner, as is common with search results.

### Clickable Prototype

A clickable prototype was created to display the structure and style of the site. The prototype is made in Figma, a powerful 
interface design tool. The prototype can be accessed in Figma in the browser with the link: https://www.figma.com/file/oTn9ynIBqNCIqKqOQyhnp2/Global-News?node-id=0%3A1

## Features

### Existing Features

#### Navbar
Allows the user to navigate seamlessly between the different category pages. Implemented with Bootstrap's navbar component which is responsive.

#### Country selector
Allows the user to select which country they want to see top stories from. Implemented with the library selectize.js in order to make custom
rendering of select options with a flag icon. The search results update immediately on change.

#### Search bar
Allow the user to search news by keyword. The search bar is opened by clicking the search icon in the navbar. An event listener is added,
so search is executed when clicking 'enter'.

#### Category bar
A category bar that changes color and text depending on the category, and displays the current country as well.

#### Varied and dynamic display of news articles on front page
A design function, renderPageFromResponseObject(), creates a unique and varied structure of the articles on the front page. It does this by
combining different row types and allocatig the news articles from the response object. The rows are generated in separate functions (found
in files 'render...' in the folder 'js').

#### Footer
The footer contains required attribution to newsapi.org, the simple and powerful API that delivers the news data.

#### Search filters
On the search page, results can be filtered by language, and sorted by 'relevancy', 'recency' or 'popularity'.

#### Metainfo
The user can see the total number of results for a search query, as well as the search results that are currently displayed (e.g. 1 - 10 of
308).

#### Pagination
10 search results are shown at a time. The user can click through the pages if there are more than 10 results of a query. 'Previous' and 'Next'
buttons are disabled if they can't be used. The buttons are hidden if there are less than 10 results.

### Future features
#### Make the site truly singe-page
Currently, the site includes two HTML-pages, index.html for top stories and search.html for search results (a decision that was made at the
start of the project). In hindsight, this is probably not necessary. Navigating between the pages is done by adding and removing 'search.html'
from the window.location.href, which might not be the most robust way to do it. Instead, the search results page should be generated with
javascript and rendered on the same page (including filters, pagination etc.).

#### Use URL object
Using an URL object to construct the API request would be a better way of controlling the api requests parameters (rather than simply
adding strings together). This would also allow manipulation of the window.location URL, as is known from e.g. a Google search.

## Technologies Used

- HTML5
    - Defines the structure of the site.

- CSS3
    - Defines custom styles of the components on the site.
    - All CSS code written as part of this project is contained in assets/css/style.css.

- Javascript

- jQuery 3.5.1
    - Used for easy DOM manipulation with simpler code.
    - Resource: https://jquery.com
    - CDN: "https://code.jquery.com/jquery-3.5.1.min.js"

- Bootstrap 4.4.1
    - Used extensively to produce responsive layout, padding, margins, sizing etc.
    - Resource: https://getbootstrap.com
    - CDN: https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css

- Font Awesome
    - Used to easily embed high quality icons.
    - Resource: https://fontawesome.com
    - https://kit.fontawesome.com/d9c8a97a10.js

- Jasmine
    - Used for programmatic Testing
    - Resource: https://jasmine.github.iOS
    - CDN: https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.5.0/jasmine.min.js

- Git
    - Used for version control during the project.

## Testing

- Testing was done along the development process using the devTools in Google Chrome.
    - Responsiveness was tested using the device toolbar.
    - Troubleshooting CSS was done using the styles section of devTools.

- The code was tested in the HTML and CSS code validator (https://validator.w3.org/).

- Responsiveness tests were done on different devices:
    - Desktop computer with wide monitor (Windows)
    - Smartphone (OnePlus 6/Android)
    - Tablet (iPad/iOS)
    - Laptop (Acer/Windows)

- Tests were also done in different browsers:
    - Mozilla Firefox
    - Google Chrome
    - Safari

- Important tests are:
    - Test that the content is displayed properly on small and large screens (both front page and search results)
    - Test that the navbar menu collapses correctly on small screens
    - Test that the collapsed navbar works correctly
    - Test that links to articles work correctly in all row 'types' (the top story, and rows with one, two or three articles in them)
    - Test that the navigation between categories works
    - Test that navigating between countries works
    - Test that searching a keyword works
    - Test that the search filters work
    - Test that links to articles work in search results
    - Test that the selected country is saved when navigating to search page and back to front page
    - Test that selected language is saved when navigation from search to front page and back

### Programmatic testing
- Programmatic tests were done with Jasmine. Most of the Javascript functions written have side effects or product html. Therefore,
automatic testing was only implemented on a single function, removeSourceFromTitle(). The function takes the title (a string) and removes
news source, which is included in the headling after a hyphen wrapped in spaces (i.e. " - "). The test suite is located in js/jasmineTests.js.

The tests are done automatically when the page loads. To see the test report:
    1. Go to css/style.css and scroll to the bottom.
    2. Comment out (or remove) the 'display: none' from the class .jasmine_html-report
    3. The report will appear at the bottom of the front page (index.html)

## Deployment

The website is deployed to GitHub pages and can be accessed at: https://carlvinggaard.github.io/NewsWorld/

- The process of deployment:
    1. Go to 'Settings' in the Github repository
    2. Under section 'Github Pages', select Source: 'master branch' in the dropdown menu
    3. Use the link provided to access the website

- Local deployment:

    If you want to deploy this project on your own local computer, do the following:

        1. Clone the git repository with the command: git clone ...
        2. This will create a folder where the files can be accessed.

The development and deployment versions are identical.

## Credits

- https://newsapi.org