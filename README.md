# Click here to see AWS deployed CryptoLive [https://s3-us-west-2.amazonaws.com/cryptolive/index.html](https://s3-us-west-2.amazonaws.com/cryptolive/index.html)

![Mobile-Page](/public/mobile.png?raw=true "mobile_landing_page")

CryptoLive Mobile Landing - Note the ability to use a dropdown to pick different cryptos

![Mobile-Page-menu](/public/mobileSecondary.png?raw=true "mobile_landing_page-menu")

CryptoLive Mobile Landing - Note the menu

![Mobile-Page](/public/desktop.png?raw=true "desktop_landing_page")

CryptoLive Desktop Landing Page

![Mobile-Page](/public/loadScreen.png?raw=true "loading_screen")

CryptoLive Loading Screen with Skeleton Loader

## Project Overview

CryptoLive is a easy way to watch the price action and news of the 7 most popular cryptos. It was built with a focus on using React, Redux, API's, Typescript and CSS with SASS to achieve data visualization and presentation. It features responsive design to work on both mobile and desktop screen sizes. It is a single page app and a lot of focus has been put into building code with semantic clarity as well. Typescript was also added to this project to improve maintainability.

Deployment is done on the cloud using an Amazon Web Services S3 bucket.

### Setup

This README would normally document whatever steps are necessary to get the
application up and running.

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Idea's for later development: Use env file for additional privacy. You need to make the key name start with 'REACT_APP_' in the project root directory so REACT_APP_SECRET_KEY = 123456  
console.log(process.env) to see your keys.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

MIT License
Author: Dan Kiss Jan 1 2019
