Welcome,

<img src="https://res.cloudinary.com/allan-gerald-sserwanga/image/upload/v1668253275/Screenshot_2022-11-12_143813_ea5wm1.jpg">

Squawk is a Social Network that allows for posting, replying and re-broadcast of posts. A social feed is created for every user and Users can follow others. 

The User acceptance criteria is for users to be able to post, reply, follow another user to see their posts on a social feed and re-broadcast another user's posts

The system uses a React front end with a Django Rest Framework backend.
The back end repository can be found [here](https://github.com/alig2039/project5_squawk_front)

## User Experience(UX)

-    ### User Stories

    -   ### Anonymous/Unregistered/First time User Goals
        -  As an anonymous user, I want to be able to Log into the system with an existing account so that i can like, reply and re post other users' posts.
        -  As an anonymous user, I want to be able to Register for an account so that i can Log in and like, reply and re post other users' posts.
        -  As an anonymous user, I want to be able to view public posts on the system without logging in or registering for an account so that i can see the activity and popularity of the social media platform.

    -   ### Registered User Goals
        -   As a Registered user, I want to be able to add a post so that other users can see it on their home pages. 
        -   As a Registered user, I want to be able to view posts of users that i follow so that i can like, comment and re post them.
        -   As a Registered user, I want to be able to re-post posts i see so that users that follow me can see those posts as well and they can appear on my home page. 
        -   As a Registered user, I want to be able to send a private message to users i follow and that follow me so that i can have conversations with other users. 
        -   As a Registered user, I want to be able to see notifications of interactions with my posts and of new followers so that i can interact with other users on the platform.

### Design

-   ### Colour Scheme
    -   The main colours used are a Brown background with white text, with the default Bootstrap button styles.

-   ### Imagery
    -   The site contains a cupcake logo and favicon as logo. Default Avatar and cover images are provided with the option for users to upload custom images to replace these. All images are stored in Cloudinary

## Features
<img src="https://res.cloudinary.com/allan-gerald-sserwanga/image/upload/v1668250485/5_sdjpzo.jpg">
<img src="https://res.cloudinary.com/allan-gerald-sserwanga/image/upload/v1668250485/2_q4fixm.jpg">
<img src="https://res.cloudinary.com/allan-gerald-sserwanga/image/upload/v1668250485/4_hu3qve.jpg">
<img src="https://res.cloudinary.com/allan-gerald-sserwanga/image/upload/v1668250485/3_qnctu1.jpg">
<img src="https://res.cloudinary.com/allan-gerald-sserwanga/image/upload/v1668250486/1_la1z8t.jpg">
<img src="https://res.cloudinary.com/allan-gerald-sserwanga/image/upload/v1668253274/Screenshot_2022-11-12_143742_afjg6m.jpg">

-   Post status updates in text and media that can be seen by users that follow you.
-   Like and Comment on other updates.
-   Follow other users to see their posts and send them private messages.
-   Responsive on all device sizes
-   Interactive Elements

## Technologies Used

### Languages Used
-   [Python](https://www.python.org/)
-   [HTML5](https://html.com/html5/)
-   CSS3
-   [React](https://reactjs.org/)

### Frameworks, Libraries & Programs Used
1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Django](http://www.djangoproject.com/)
    - Django was used as a web framework to build the api backend.
1. [Django Rest Framework](https://www.django-rest-framework.org/)
    - Django Rest Frameworks is a webAPI toolkit based on Django and Python used to build the API that supports the backend.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Heroku](heroku.com) 
    - Heroku is used as a backend host server.
1. [Vercel](https://vercel.com) 
    - Vercel is used as a frontend host server.
1. [Npm](https://www.npmjs.com/)
    - Npm is used as a Node package manager for the installation and maintenance of React related packages.
1. Django [Channels](https://github.com/django/channels) 
    - Django Channels is used to provide chat and private messaging functionality.
1. [VSCode](https://code.visualstudio.com/) 
    - VSCode used as a code editor
    

## Testing
Validation of .js and .jsx files to detect syntax errors automtically done by Code Editor and interpretor when running npm start locally.

### Testing User Stories from User Experience (UX) Section

-   ### Anonymous/Unregistered/First time User Goals

    1.  As an anonymous user, I want to be able to Log into the system with an existing account so that i can like, reply and re post other users' posts.

        1.  On loading the site, a user that is not logged in is able to see the Login button on the home page left side Menu. This lets the user click the button to go to the Login page where they can login and interact with the platform. Without logging in, a user will not be able to like, comment or re-post a post. This is seen via an on-screen prompt if the user attempts this.

    2.  As an anonymous user, I want to be able to Register for an account so that i can Log in and like, reply and re post other users' posts.

        1.  A first time user coming to the site is able to Register for an account by clicking the Register button on the home page left side menu and then provding a username, email and password to create an account. After successful creation, which will be confirmed with an on-screen notification, the user can go back to the Login page via a link at the end of the Registration form, to Log into the site.
        2.  A first time user coming to the site is able to Register for an account by clicking the Register link at the bottom of the Login page. At the Registration page they will then provde a username, email and password to create an account. After successful creation, which will be confirmed with an on-screen notification, the user can go back to the Login page via a link at the end of the Registration form, to Log into the site.

    3.  As an anonymous user, I want to be able to view public posts on the system without logging in or registering for an account so that i can see the activity and popularity of the social media platform.

        1.  An unauthenticated user is able to view but not interact with posts from other users on the platform by following the Explore link at the bottom of the Login and Register pages.

-   ### Registered User Goals
    -   As a Registered user, I want to be able to add a post so that users that follow me can see it on their home pages. 
    -   As a Registered user, I want to be able to view posts of users that i follow so that i can like, comment and re post them.
    -   As a Registered user, I want to be able to re-post posts i see so that users that follow me can see those posts as well and they can appear on my home page. 
    -   As a Registered user, I want to be able to send a private message to users i follow and that follow me so that i can have conversations with other users. 
    -   As a Registered user, I want to be able to see notifications of interactions with my posts and of new followers so that i can interact with other users on the platform.

### Testing User Stories from User Experience (UX) Section
* The site was tested on Google chrome and Ms Edge browsers.
* A local SQLite database is used for testing data and values with a Postgres database used in production

## Deployment
The project was developed and deployed to Heroku using the following steps.
* Cloned the Heroku django starter template following this [guide](https://devcenter.heroku.com/articles/getting-started-with-python)
* Created two Github repositories, added it as a remote and pushed to this repository.
* Modified the Heroku template to suite my needs.

## Credits
### Acknowledgements


