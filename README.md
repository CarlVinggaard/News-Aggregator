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
interface design tool. The prototype can be accessed in Figma in the browser with the link: ..

## Features

### Existing Features

- Navbar - Allows the user to navigate the site seamlessly. Implemented with Bootstrap's navbar component which is responsive.
- ..

## Technologies Used

- HTML5
    - Defines the structure of the site.

- CSS3
    - Defines custom styles of the components on the site.
    - All CSS code written as part of this project is contained in assets/css/style.css.

- Javascript

- jQuery 3.5.1
    - Used for easy DOM manipulation.

- Bootstrap 4.4.1
    - Used extensively to produce responsive layout, padding, margins, sizing etc.
    - Resource: https://getbootstrap.com
    - CDN: https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css

- Font Awesome
    - Used to easily embed high quality icons.
    - Resource: https://fontawesome.com
    - https://kit.fontawesome.com/d9c8a97a10.js

- Git
    - Used for version control during the project.
    - Files are stored on Github.

## Testing

- Testing was done along the development process using the devTools in Google Chrome.
    - Responsiveness was tested using the device toolbar.
    - Troubleshooting CSS was done using the styles section of devTools.

- Tests of javascript functions were done with Jasmine.

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
    - Test that the navbar menu collapses on small screens
    - Test that the collapsed navbar works correctly
    - Test that the links work correctly in all row 'types' (the top story, and rows with one, two or three articles in them)
    - Test that the navigation between categories works
    - Test that navigating between countries works
    - Test that searching a keyword works
    - Test that the search filters work 


## Deployment

The website is deployed to GitHub pages and can be accessed at: ..

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

- newsapi.org