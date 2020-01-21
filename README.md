# digital-certificate-ncku

Digital certificate web for School.

#### pre-requirement

[yarn](https://yarnpkg.com/lang/en/)
[pm2](https://pm2.keymetrics.io/)

#### Environment

Language: [typescript 3.6](https://www.typescriptlang.org/)
Framework: [next.js](https://nextjs.org/)

### Install

Install package which listed in `package.json`

```
$ yarn install
```

### Development

Run frontend at `localhost:3000` with hot mode

```
$ yarn dev
```

### Production

Run frontend with process manager

```
$ bash bin/deploy
```

### Export static HTML file

Build and export `*.html` and `assets` in `./out` folder

```
$ yarn export
```

### Deploy to github public pages

**If you want to deploy to github public pages**
You can use following command, and go to repo's public page

```
$ yarn deploy:github
```
