## Introduction
FAN FINDR is an app for sports fans to locate bars and lounges that host
specific sports and/or teams at their venue. This is a marketing tool for sports
bars and restaurants, and this fills a niche that is currently not addressed in the
industry.
Sports bar and other bar owners/managers are able to create an account, their
profile and give a description, choose their sports and teams, upload photos, and
market themselves.
Patrons are also able to create their profiles and choose their sports and teams,
and they can use the mobile app to help them locate bars nearby for specific
games and teams.
This is a matchmaking service of sorts, based on location, for fans to locate bars
for watching their favorite games.
Bar Owners.Manager also can market to returning patrons and those in their
area, via push notifications. The system will remember patrons favorite the bars they come in liked with.

## Final product

![Login](https://github.com/SwaniEryani/FAN-FINDR/blob/master/DOCs/Login.gif)
![Search Bar](https://github.com/SwaniEryani/FAN-FINDR/blob/master/DOCs/Search-bar.gif)
![Favourites](https://github.com/SwaniEryani/FAN-FINDR/blob/master/DOCs/favourites.gif)
![Profile](https://github.com/SwaniEryani/FAN-FINDR/blob/master/DOCs/Avatar-Profile.gif)
![Venue page](https://github.com/SwaniEryani/FAN-FINDR/blob/master/DOCs/Venue%20Page.gif)

## Getting Started

- Fork this repository.
- clone your fork to your local machine.
- Install dependencies using `npm install` command in the root folder of the "server" folder.
- Install dependencies using `npm install` command in the root folder of the "client" folder.
- Start the web server using the `npm run dev` or `npm run start` command while in the "server" folder.
- You will also need to start the client by navigating to the root folder and running this `npm start` command there as well. 
- The app will be served at http://localhost:3000/.
- the server will served at http://localhost:3001/
- Go to http://localhost:3000/ in your browser. you will see the logoin page.

## Tech Stack

- Axios
- Express
- Node
- PostgreSQL
- React
- React Router
- Bootstrap
- Sass
- JWT
- RESTful api

## Setup the DATABASE 

create user called labber
`CREATE ROLE labber WITH LOGIN password 'labber';`
create the database owned by labber user
`createdb fan_findr -O labber`
to reset the database inside the vagrant
`npm run db:reset`
this commend will create the tables and seeds the data
to open the database by 
`psql -U labber -d fan_findr`
then insert the labber password 

