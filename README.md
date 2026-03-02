# cs465-fullstack
CS-465 Full Stack Development with MEAN

## Architecture ## 

*Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA). Why did the backend use a NoSQL MongoDB database?*

Throughout this project, I worked with several frontend approaches - the Express framework, Javascript with Handlebars templates, and Angular for the SPA. Under Express, the server generates full HTML pages on each request which is straightforward but means every navigation requires a round trip to the server and full page reload.  Javascript with Handlebars templates improved on this by reducing repetition in the code and allowing for dynamic content.  Angular was the most significant refactor from the original static site, where the entire application loads once in the browser and most interactions occur client-side.  This makes for a very responsive experience for the user.

For the backend, I found MongoDB to be a powerful and flexible solution in contrast to the rigidity of a relational database, and the document format worked well with what we were using the database for - information about upcoming trips. Though I’m more experienced with relational databases, I found that Mongo is an excellent choice for fast iteration and experimenting with how the data is structured; if I don’t need to perform complex queries and joins on data I will consider a NoSQL database for future projects.

## Functionality ##

*How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.*

JavaScript is a programming language, and JSON is simply a text-based data format. While it is derived from JavaScript’s syntax, it doesn’t have functions and variables itself that define a programming language.  Since the entire web app is built on JavaScript, having JSON serving as the common language between the frontend and the backend without “translation” was beneficial.

Refactoring trip information from static HTML into Handlebars templates and then into the Angular SPA was a huge improvement for both the users and administrators of the site.  Moving the trip information into a database and serving it through RESTful endpoints means that clients can instantly see trips on the site the second they’re added to the database, and admins can add trips easily, without the copy-and-pasting that comes from altering a static webpage. Reusable components like Handlebars templates and the trip card component mean that the element only needs to be defined once, and any styling would automatically apply everywhere that component appeared, making the codebase easier to maintain.

## Testing ##

*Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.*

The API methods like GET, POST, PUT, and DELETE all correspond to different operations on the data in the database.  Testing the endpoints in this app involved verifying that each route returns the correct data and status codes, both for valid and invalid requests.  I used Postman to test these endpoints directly which allowed me to confirm behavior without interacting with it through the frontend.  Adding security introduced some difficulty in that the endpoints that require a valid JWT token need to be tested both with a valid token and without it (either by altering or removing the token) and ensuring that unauthorized requests are rejected.  

## Reflection ##

*How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?*

It was incredibly valuable to have the experience of refactoring an older static site into modern technologies by utilizing the MEAN stack. Not only does that reflect real-world situations of working with someone else's codebase,  but I had the chance to learn several new technologies (Namely Angular/Express) and revisit topics I'd learned about before to varying degrees (HTML/CSS, React, MongoDB). In addition to the frameworks used, I also got experience using the Postman platform for testing API calls, and MongoDB Compass for working with the database.  Most of all, I have a greater understanding of how all the components of a web application work with each other, from the database to the frontend.


