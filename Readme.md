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
```

### Development

##### Dev mode
```bash
$ gulp dev [--port 3000]
```

Will start the server on `localhost:[port]`. Keep watching your `.scss` and `.js` files
and warn you if something goes wrong. The `port` is optional and defaults to `3000`.

##### Testing
```bash
$ gulp test
```

### Production

##### Build
```bash
$ gulp build
```

Packs everything up for production.

[npm]: https:github.com/npm/npm