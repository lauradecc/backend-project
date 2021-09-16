# backend-project


| Method | Path | Description |
| ------------- | ------------- | ------------- |
| GET   | / | Homepage with motivational phrase uploaded from an api. |
| GET   | /signup	| Displays a form to sign up. |
| POST  | /signup	| A new user it´s added into database if the input fields are not empty and if the user didn´t sign up yet with that email,  otherwise the user gets an error message.	|
| GET   | /login	| Displays a form to log in and redirects to sign up if the user didn´t registered yet.	|
| POST  | /login	| Match the input data with the database and logs in if match with database data. After redirects to (/home), otherwise the user gets an error message. |
| GET   | /logout	| Ends the current session and redirects to home.	|
| GET   | /my-profile	| Displays name, lastname and email. Aswell the user is able to see a couple of buttons and edit it's own personal info. If there is any, shows owner's published advices and it's status(approved, pending, declined), and allows the user to delete advices from the list that has been rejected.	|
| GET   | /my-profile/edit	| Displays a form that allows user to edit personal info. (name, lastname, email, password)	|
| POST	| /my-profile/edit	| Updates user's info at database and redirects to user's profile |
| POST	| /my-profile/delete	| Deletes user's profile.	|
| GET	| /home	| Greets the user with it's own name and ask "How are you?", bellow it has a button display.	|
| POST	| /home	| Adds a mood at the database.	|
| GET	| /calendar	| Displays mood calendar. |
| GET	| /moments	| Displays moment's entire list.	|
| GET	| /moments/create	| Displays a form that allows an user to create places or just moments without any place attached.	|
| POST	| /moments/create	| Adds a new place or moment at database.	|
| GET	| /moments/:momentId/edit	| Displays edit's form and allows an user to edit a place or moment.	|
| POST	| /moments/:momentId/edit	| Updates info at database and after redirects to moment's list.	|
| POST	| /moments/:momentId/delete	| Deletes a moment from database.	|
| GET	| /api/moments	| Returns a json file with a  list of moments.	|
| GET	| /places	| Displays google maps view with every place added for an user when a moment is created. |
| GET	| /api/places	| Returns a json file with every place added for an user.	|
| GET	| /daily-phrase	| Displays an inspirational daily quote from an API.	|
| GET	| /activity	| Displays a daily activity from an API.	|
| GET	| /community-advice	| Displays a whole list of advices published for every user (It has to be accepted or rejected for any Moderator or Admin). Also displays a form that allows users to create new advices. |
| POST	| /community-advice	| Adds user's advice into database and awaits to be accepted. After rediredcts to advice's list.	|
| GET	| /community-advice/control	| Displays a list of advices that needs approval, also allows moderators to edit or delete advices submitted for users. Only access to admins and moderators. |
| GET	| /community-advice/:adviceId/edit	| Displays a edit advice's form. Only access to admins and moderators. |
| POST	| /community-advice/:adviceId/edit	| Updates advice at database and redirects to pending accept advices. Only access to admins and moderators. |
| POST 	| /community-advice/delete	| Deletes advices from users rejected for moderators and admins. Access only from user's profile.  |
| GET	| /moderators	|Displays a list of current moderators	| Admin has permission to edit or delete any of them. |
| GET	| /moderators/:moderatorId/edit	| Shows form to edit moderator. Admin only access.	|
| POST	| /moderators/:moderatorId/edit	| Updates moderator changes in the database. Admin only access.	|
| POST	| /moderators/:moderatorId/delete	| Deletes moderator from database. Admin only access.	|
| GET	| /api/moods	| Displays JSON with all moods of a user. |
