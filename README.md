This repo is a fork from the very good project : [este/este](https://github.com/este/este)



> Starter kit for universal full–fledged React apps. One stack for browser, mobile, server.

> You don't have to start with everything. Este is perfect even for plain static pages. You can gracefully add any platform later. Este mission is simple: **Help startups to deliver minimal valuable product asap with the state of the art real-time universal app stack**.

## Techniques

- Universal architecture
  - code shared across platforms (browser, server, native mobile)
  - server side rendering or server-less pre-rendering to HTML files
  - universal internationalization
  - universal crash reporting
  - universal data fetching
  - universal forms with universal validation
  - universal ftw
- Immutable app state
- Stateless functional UI components with JavaScript styles
- Flowtype
- Vanilla hot reloading makes everything hot reloadable
- [Firebase](https://firebase.google.com/) integration ([este.firebaseapp.com](https://este.firebaseapp.com))
  - email and facebook login
  - declarative queryFirebase higher order component for Firebase imperative API
  - users presence

## Libraries

- [redux](http://rackt.github.io/redux/)
- [redux-observable](https://github.com/redux-observable/redux-observable)
- [ramda](http://ramdajs.com/)
- [react-intl](https://github.com/yahoo/react-intl)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [formatjs](http://formatjs.io/)
- [jest](https://facebook.github.io/jest/) Painless JavaScript Testing.
- [raven-js](https://github.com/getsentry/raven-js) Crash reporting client for [Sentry](https://getsentry.com).
- [rebass](https://github.com/jxnblk/rebass) Configurable React Stateless Functional UI Components
- And much more. Explore the repository.

## Prerequisites

- [node.js](http://nodejs.org) Node 6+
- [gulp](http://gulpjs.com/) `npm install -g gulp`
- [git](https://git-scm.com/downloads) git cmd tool is required

#### Optional

- [Facebook SDK for iOS](https://developers.facebook.com/docs/ios/) In order to make Facebook login work on iOS
- [Facebook SDK for Android](https://developers.facebook.com/docs/android/) In order to make Facebook login work on Android
- [firebase-cli](https://firebase.google.com/docs/cli/) `npm install -g firebase-tools`
- [firebase-bolt](https://github.com/firebase/bolt) `npm install -g firebase-bolt`
- [react-native-cli](http://facebook.github.io/react-native/docs/getting-started.html) `npm install -g react-native-cli`

If you are using different node versions on your machine, use [nvm](https://github.com/creationix/nvm) to manage them.

## Create App

```shell
git clone
cd este-app
npm install
``` 

## Start Development

- run `gulp`
- point your browser to [localhost:3000](http://localhost:3000)
- build something beautiful

React Native: [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)

## Dev Tasks

- `gulp` run web app in development mode
- `gulp ios` run iOS app in development mode
- `gulp android` run Android app in development mode
- `gulp -p` run web app in production mode
- `gulp -f` run web app in development mode, but only browser source rebuilds on file changes
- `gulp jest` run jest tests
- `gulp jest-watch` continuous test running for TDD
- `gulp eslint` eslint
- `gulp eslint --fix` fix fixable eslint issues
- `gulp messages-extract` extract messages for translation
- `gulp messages-check` check missing and unused translations
- `gulp messages-clear` remove unused translations
- `gulp favicon` create universal favicon

## Production Tasks

- `gulp build -p` build app for production
- `npm test` run all checks and tests
- `node src/server` start app, remember to set NODE_ENV
- `gulp to-html` render app to HTML for static hosting like [Firebase](https://www.firebase.com/features.html#features-hosting)
- `gulp deploy-heroku` deploy [Heroku](https://www.heroku.com/) app
- `gulp deploy-firebase` deploy [Firebase](https://firebase.google.com/) app
- `gulp deploy-firebase-database` deploy Firebase database only

## Customize Este App

- set name in `package.json`
- set locales, firebaseUrl, sentryUrl, etc. in `src/server/config.js`
- change `src/common/app/favicons/original/favicon.png`, then `gulp favicon` and `gulp -p`
- modify your FB app_id e.g. for [iOS](https://developers.facebook.com/docs/ios/getting-started/#configure-xcode-project)

## Links

- [wiki](https://github.com/este/este/wiki)
- [twitter.com/estejs](https://twitter.com/estejs)

## Tips

- Recommended editor is [Atom](https://atom.io). Check [settings](https://github.com/este/este/wiki/Recommended-Atom.io-Settings).
- Install [nuclide.io](https://nuclide.io/), enable "Use the Flow binary included in each project".

## NEXT ? 

https://medium.com/@jbscript/using-bootstrap-4-from-source-with-react-and-nwb-f26caf395952#.5qqqop5ck

## Credit

Made by [Daniel Steigerwald](https://twitter.com/steida) and the community.
