# Contact List App

This is a React project, created with React Hooks, Sass and [Randomuser.me](https://randomuser.me/).

## Instructions to run the project

Once you've cloned or downloaded the project, navigate to it's folder and run the following commands in a terminal:
```
npm install

npm start
```

The project will start in development mode, and you'll be able to access it on this url: [http://localhost:3000](http://localhost:3000)

## About

The goal of this project was to create a contact list based on tabs that would filter users by their name's first letters.
The users are fetched from [Randomuser.me](https://randomuser.me/) as an easy way of filling up the list with fake data.

Throughout the app, I used React hooks as the primary method to manage state, and to pass some of these values down the component tree, I also used props. 
Due to the size of this project, I've decided that using something like Redux would end up being a bit overkill, and the available hooks would suffice my state management needs. However, if this project were to get further developed and the component and code complexity increased, using a more robust state management together with the hooks would be a must.

In `App.js` you can find the most of the state management, which is then used in all the main components render. It also imports the `useUsers` custom hook, located inside `/UserData.jsx`, which handles the loading and grouping of users coming from the API.
When the users are grouped, the app uses `groupedUsers` to create the tabs, the list and to get the selected user to be displayed in the contact card.

The contact card also uses some CSS animations to show and hide it, and some media queries throughout the project keep eveything responsive even on mobile devices.
