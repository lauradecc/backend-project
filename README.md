# Happi

#### App demo: https://happiapp.herokuapp.com

### Description

**Happi** is a web application to recall the good things in life and to help people to be happier. 

### Usage

The app allows the user to track their mood by adding it to their calendar. Users are also able to register all the good moments they live in order to remember them easier and also offer the possibility to add a place to them and see them later on a map. There is also a community oriented space, where users can share advice with each other about how to feel or make others feel better, and vote other's advice. Happi also includes inspirational quotes and daily activities ideas.

### Endpoints

| Method | Path | Description |
| ------------- | ------------- | ------------- |
| GET   | / | Homepage with an inspitarional quote brougth from an API that changes every time the page is reloaded |
| GET   | /signup	| Displays a form to sign up. |
| POST  | /signup	| A new user is added to the database if the input fields are not empty and the user does not exist yet,  otherwise the user gets an error message.	A link to log in page is also available to the user. |
| GET   | /login	| Displays a form to log in and gives the user the choice to visit the sign up page if the user does not have an account yet.	|
| POST  | /login	| If the data introduced corresponds to a registered user and the password is correct, the user is logged in and gets redirected to /home, otherwise the user gets an error message. |
| GET   | /logout	| Ends the current session and redirects to homepage.	|
| GET   | /my-profile	| Displays user info and allows the user to edit or delete the profile. If community advice had been written by the user, they will be displayed on this page with their corresponding status (published, pending, rejected); the user is able to delete all rejected advice from the list.	|
| GET   | /my-profile/edit	| Displays a form that allows user to edit personal info (name, last name, email).	|
| POST	| /my-profile/edit	| Updates user info at database and redirects to personal profile |
| POST	| /my-profile/delete	| Deletes user's account.	|
| GET	| /home	| Greets the user by name and ask "How do you feel today?"; below the question, the user is able to select a date and press one of five faces to choose the one that best represent how they feel. Buttons to the main pages of the app are also displayed on this page.	|
| POST	| /home	| Adds a mood to the database.	|
| GET	| /calendar	| Displays a calendar that shows a different colour for each mood. |
| GET	| /moments	| Displays all the moments that the user has added.	|
| GET	| /moments/create	| Displays a form to create new moments. Moments can either have or not a place included.	|
| POST	| /moments/create	| Adds a new moment to database.	|
| GET	| /moments/:momentId/edit	| Displays a form to edit a specific moment.	|
| POST	| /moments/:momentId/edit	| Updates info at database and redirects to moment's list.	|
| POST	| /moments/:momentId/delete	| Deletes a moment from database.	|
| GET	| /places	| Displays a map with all the places added by the user. |
| GET	| /daily/phrase	| Displays an inspirational quote brought from an API.	|
| GET	| /daily/activity	| Displays an activity brought from an API.	|
| GET	| /community-advice	| Displays all advice published by users and accepted by moderators. It also displays a form that allows users to create new advice. |
| POST	| /community-advice	| Adds user's advice to database and shows a success message afterwards. |
| GET	| /community-advice/control	| Displays a list of advice that need to be reviewed. It also allows moderators to edit any of them in order to improved them. Only access to admins and moderators. |
| GET	| /community-advice/:adviceId/edit	| Displays a form to edit an advice. Only access to admins and moderators. |
| POST	| /community-advice/:adviceId/edit	| Updates advice at database and redirects to advice control page. Only access to admins and moderators. |
| POST 	| /community-advice/delete	| Deletes advice from database. Available to users when any advice has been rejected by moderators or admins. Access only from user's profile.  |
| GET	| /moderators	| Displays a list of current moderators. Admin has permission to edit or delete any of them. It also shows a search bar to look for active users in order to make them moderators. |
| GET	| /moderators/:moderatorId/edit	| Displays form to edit a moderator. Admin only access.	|
| POST	| /moderators/:moderatorId/edit	| Updates moderator changes in the database. Admin only access.	|
| POST	| /moderators/:moderatorId/delete	| Deletes moderator from database. Admin only access.	|
| GET	| /api/moods	| Displays JSON with all moods of a user. |
| GET	| /api/places	| Returns a JSON file with every place added by the user.	|
| GET	| /api/users	| Returns a JSON file with all users with USER as a role.	|

### Technologies

- MongoDB
- Express
- Node
- Javascript (ES6)
- Handlebars
- AJAX
- HTML & CSS
- Bootstrap

### Additional info

This project has been developed by Ramón Bohopo and Laura de Cos as the second project of Ironhack's Web Development Bootcamp and it has been created in five days.
