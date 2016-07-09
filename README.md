## Note
This branch has edits and updates from the comments given from [the article](https://scotch.io/tutorials/build-a-mobile-app-with-angular-2-and-ionic-2)

### The changes include
* Using and Interface instead of a class for the user model
* Reduce model properties to match only the values that we use for the sample app
* Using `do` and `toPromise` Rx/Js operator in the github-users service

## Github Ionic
This is a sample Ionic 2 App that consumes the github API. To follow along on how it was built please [read  through this article](https://scotch.io/tutorials/build-a-mobile-app-with-angular-2-and-ionic-2)

## Run the app
Make sure you have [nodejs](https://nodejs.org/en/) installed.

Install typecript and typings
```bash
$ npm install -g typescript
$ npm install -g typings
```

Install Ionic 2
```bash
$ npm install -g ionic@beta
```

Install Cordova
```bash
$ npm install -g cordova
```

Clone this repo
```bash
$ git clone https://github.com/gangachris/githubionic
```

cd into the githubionic folder run npm install
```bash
$ npm install
```
install typings
```bash
$ typings install
```

Serve the app
```bash
$ ionic serve
```

Head to *http://localhost:8100* in your browser and you'll see the app running

### License
MIT