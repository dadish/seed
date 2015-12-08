SEED
====

The seed repo that helps me get started with projects.

This repo contains the predefined build system and a simple Node.js, "Hello World"
app to start testing the project as soon as possible.

### Requirements
You need to have `gulp` installed globally.
You can install it via [npm][npm].
```bash
$ npm install -g gulp
```

### Installation
```bash
$ git clone https://github.com/dadish/seed
$ cd seed
$ rm -rf .git && git init && git commit -m "Initial Commit" # optionally reset git history
$ npm i # install dependencies
$ bower install # install dependencies
```

### Development

##### Dev mode
```bash
$ gulp dev
```

Will populate and inject css and js links into designated files(`e.g. index.html`).

##### Watch Mode
###### Sass
```bash
$ gulp watch-sass
```

Will watch your `.scss` files and compile required once when change occurs.

###### JS
```bash
$ gulp watch-js
```

Will watch your `.js` files and report linting problem if occured. 
Consider changing the `.eslintrc` file to meet your needs.

### Production

##### Build
```bash
$ gulp build
```

Packs everything up for production. Injects production version of your js and css files into
designated files(`e.g. index.html`).

[npm]: https:github.com/npm/npm