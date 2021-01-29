# MovieFlix challenge - Instructions from DevSuperior

## Figma: Screen prototypes

[https://www.figma.com/file/cOjZ9zvM7U9hrZrL3AReSA/Desafio-MovieFlix](https://www.figma.com/file/cOjZ9zvM7U9hrZrL3AReSA/Desafio-MovieFlix)

## System overview

The MovieFlix system consists of a movie bank, which can be listed and evaluated by users. Users can be visitors (VISITOR) and members (MEMBER). Only member users can add assessments in the system.

When accessing the system, the user must log in. Only logged-in users can browse movies. Soon after logging in, the user goes to the movie listing, which shows the movies paged, sorted alphabetically by title. The user can filter the movies by genre.

When you select a movie from the listing, a detailpage is shown, where you can see all the information in the movie, as well as its ratings. If you are a member user, you can still record a valuation on this screen.

A user has a name, email, and password, and the email is their username. Each film has a title, subtitle, an image, release year, synopsis, and a genre. Member users can record reviews for movies. A single member user can leave more than one rating for the same movie.

## UML

![alt text](https://github.com/demiandinizdd/MovieFlix/blob/main/uml.png?raw=true)

## Use cases

### Log in

1. [IN] Anonymous user **tells** you your email and password
2. [OCT] The **system** reports a valid token

### List movies

1. [OCT] The **system** features a listing of the names of all genres, as well as a paged listing with title, subtitle, year and image of the films, sorted alphabetically by title.
2. [IN] The visiting **user or member** optionally selects a genre.
3. [OCT] The **system** displays the updated listing, restricting only to the selected genre.

### View movie details

1. [IN] The visiting **user or member selects** a movie
2. [OCT] The **system** informs title, subtitle, year, image and synopsis of the film, and also a list of the texts of the reviews of that film along with the name of the user who made each evaluation.
3. [IN] The member **user** optionally reports a text for movie evaluation.
4. [OCT] The system presents the updated data, and the user&#39;s evaluation is also appearing.

**Exception 3.1 - Empty text**

3.1.1. The system displays a message that empty text is not allowed in the evaluation

# WORK 1: Back end

You must implement the system back end as follows. You must use Java 11 with Spring Boot 2.4.x.

## Important notes on delivery

1. You must deliver the project link on Github
2. Your project should contain the &quot;test&quot; profile using the H2 database
3. Your project should have documentation generated by Swagger on the /swagger-ui path.html

## How will the work be corrected?

1. **Github** Conferencing: Project commits must be on your Github user. There needs to be a reasonable amount of commits in the history so that we can attest that you have implemented the same gradually.
2. **Source code structure:** A conference of the source code will be held to attest to the organization of packages and classes, as well as the use of good practices.
3. **Automated testing: The** project must pass at least 12 of the 15 automated tests provided.

## Important notes about the bank seed (for the tests to pass)

1. Your seed should have **at least 10 movies.**
2. Your seed must have **at least 3 genres,** and at least one film must be of the genre that has **id 1.**
3. Your seed **should** have these two users:
  1. User **only** with VISITOR profile:
    1. email: bob@gmail.com
    2. password: 123456
  2. User with MEMBER profile:
    1. email: ana@gmail.com
    2. password: 123456

## Tips

1. Tip to get movie image URI: [https://youtu.be/m8lnGChdfQ8](https://youtu.be/m8lnGChdfQ8)
2. Tip: capricha of README.md of your Github
  1. Video: [https://www.youtube.com/watch?v=jIa8R69pKh8](https://www.youtube.com/watch?v=jIa8R69pKh8)
3. Deploy your back end to the cloud (Heroku or similar).

## Suggested steps to make the project

If you have trouble knowing where to start, I suggest following these steps:

1. Forkar the design of our Github

[https://github.com/devsuperior/movieflix-backend-tests](https://github.com/devsuperior/movieflix-backend-tests)

1. Implement the domain + seed model in the _bank (see DSLearn domain model implementation classes)_
2. Create the repositories
3. Include security in the project + login _(see lesson: Including security with OAuth 2, login tested)_
4. Configure your Postman with environment variables _(see lesson: WARNING - configure your Postman at this time)_

1. **Focus on making genreresourceit tests pass** :
  1. Implement an end point **GET &quot;/genres&quot;** to list all genres
    1. See the use case &quot;List movies&quot;
    2. Note tests:
      1. It&#39;s a simple search for **everyone, without paging**
      2. There are three scenarios
    3. Check authorization configuration: Any authenticated user can access this end point

1. Add Swagger documentation to your project _(see class: Api documentation generation with Swagger)_

1. **Focus on making movieresourceit tests pass** :
  1. Add **exception handling to** the project _(see lesson: Adding validation and exception handling to the project)_
  2. Implement the GET endpoint **&quot;/movies/{id}&quot;** to get the details of a movie
    1. See the use case &quot;View movie details&quot;
    2. Note the tests (there are four scenarios)
    3. The list of reviews should be a simple list with all reviews of the film, **without paging** , contained in moviedto itself
    4. Check authorization configuration: Any authenticated user can access this end point
  3. Implement the **GET endpoint &quot;/movies&quot;** to return a paged listing of movies, sorted by title
    1. See the use case &quot;List movies&quot;
    2. Note the tests (there are four scenarios)
    3. Assuming the ordering parameters have already come in Pageable, a simplified (but not the most efficient) way to search for movies by optional genre is shown below
    4. Check authorization configuration: Any authenticated user can access this end point

1. **Focus on making reviewresourceit tests** pass:
  1. Implement the **&quot;/review&quot; POST** endpoint to enter a movie review
    1. See the use case &quot;View movie details&quot;
    2. Note the tests:
      1. There are four scenarios
      2. VISITOR users should receive a 403 Forbidden
      3. Remember to validate that the text cannot be empty
    3. In the body of the request you must send the movie id and text. The user ID must be picked up by the back end based on the logged-in user.
    4. Check authorization configuration: Only MEMBER users can access this end point

@Query(&quot;SELECT obj FROM Movie obj WHERE :genre IS NULL OR obj.genre = :genre&quot;)

Page\&lt;Movie\&gt; find(Genre genre, Pageable pageable);

# WORK 2: Web app

You should implement the movieflix system web front end as described, using ReactJS in the current version, and Yarn as dependency manager.

## Important notes on delivery

1. You must deliver the project link on Github
2. You should set the default URL of the back end to be http://localhost:8080 if it is not reported through an environment variable, using the null coalescence _operator (see &quot;Deploying our application in production&quot; class),_for example:

const BASE\_URL = process.env.REACT\_APP\_BACKEND\_URL ??&#39;http://localhost:8080&#39;;

## How will the work be corrected?

1. **Github** Conferencing: Project commits must be on your Github user. There needs to be a reasonable amount of commits in the history so that we can attest that you have implemented the same gradually.
2. **Source code structure:** A conference of the source code will be held to attest to the organization of packages and classes, as well as the use of good practices.
3. **Manual testing:** let&#39;s download and run your project locally, checking all use cases, whether they&#39;re behaving as they should.

## Tips

1. Tip: capricha of README.md of your Github
  1. Video: [https://www.youtube.com/watch?v=jIa8R69pKh8](https://www.youtube.com/watch?v=jIa8R69pKh8)
2. Deploy your app to the cloud (Netlify, or similar).

## Suggested steps to make the project

If you have trouble knowing where to start, I suggest following these steps:

1. Create the ReactJS app in a &quot;frontend-web&quot; subfolder in your Git monorepo.
2. Create the navigation bar component (navbar).
3. Create the Home page with the login form.
4. Integrate login with the back end
  1. Show invalid login message
  2. Go to basic catalog page in case of successful login
5. Exit the exit button on the navigation bar of the catalog screen, and log out by going back to the Home page.
6. Create the movie card component.
7. Create the movie listing and integrate with the back end to bring the movies dynamically.
8. Create paging in the movie listing.
9. Create movie filtering by genre with the genre selection component.
10. Start the movie details page and navigate it by clicking a movie card in the listing.
11. Create the component of displaying movie details (photo, basic data, and synopsis).
12. Create the view a movie evaluation component, then create the component to display the ratings card.
13. Integrate the movie&#39;s details page with the back end, dynamically bringing the details of the film and its ratings.
14. Create the form to enter with an assessment.
15. Either do not display, or lock the form if the logged-in user is VISITOR.
16. Integrate the form with the back end, saving the assessment, and then update the assessment listing below the form if the insertion occurs successfully.
17. Show an error message if the user&#39;s rating is sent blank.

# WORK 3: Mobile app

You should implement the mobile front end of the MovieFlix system as already shown, using React Native and Expo in the current version, and Yarn as dependency manager.

## Important notes sobre delivery

1. You must deliver the project link on Github
2. You should set the default URL of the back end to http://localhost:8080 if it is not reported through the environment variable, similar to what we did on the front end web.

## How will the work be corrected?

1. **Github** Conferencing: Project commits must be on your Github user. There needs to be a reasonable amount of commits in the history so that we can attest that you have implemented the same gradually.
2. **Source code structure:** A conference of the source code will be held to attest to the organization of packages and classes, as well as the use of good practices.
3. **Manual testing:** let&#39;s download and run your project locally, checking all use cases, whether they&#39;re behaving as they should.

## Tips

1. Tip: capricha of README.md of your Github
  1. Video: [https://www.youtube.com/watch?v=jIa8R69pKh8](https://www.youtube.com/watch?v=jIa8R69pKh8)
2. If possible, deploy your app at least to the Play Store.

## Suggested steps to make the project

If you have trouble knowing where to start, I suggest following these steps:

1. Create the app in a &quot;frontend-mobile&quot; subfolder on your Git monorepo.
2. Create the navigation bar component (navbar).
3. Create the home screen with the navigation button for the login screen.
4. Create the login screen.
5. Integrate login with the back end
  1. Show invalid login message
  2. Go to basic catalog page in case of successful login
6. Exit the exit button on the navigation bar of the catalog screen, and log out by going back to the Home page.
7. Create the movie card component.
8. Create the movie listing and integrate with the back end to bring the movies dynamically.
9. Create paging in the list of infinity scroll movies.
10. Create movie filtering by genre with the genre selection component.
11. Start the movie details page and navigate it by clicking a movie card in the listing.
12. Create the component of displaying movie details (photo, basic data, and synopsis).
13. Create the view a movie evaluation component, then create the component to display the ratings card.
14. Integrate the movie&#39;s details page with the back end, dynamically bringing the details of the film and its ratings.
15. Create the form to enter with an assessment.
16. Either do not display, or lock the form if the logged-in user is VISITOR.
17. Integrate the form with the back end, saving the assessment, and then update the assessment listing below the form if the insertion occurs successfully.
18. Show an error message if the user&#39;s rating is sent blank.