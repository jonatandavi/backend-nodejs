<h2 align="center">
  Simple Back End in NodeJS with JWT Auth and MySQL
</h2>

<p align="center">The project was created by Jonatan Davi initially as a object of study in the course Semana Oministack of <a href="https://rocketseat.com.br">Rocktseat</a>, then he added some resources to the code and shared it to help another people with the studies! The project is a backend model using NodeJS, JWT auth and MySQL.</p>

<p align="center">
  <a href="https://github.com/jonatandavi">
    <img alt="Made by Jonatan Davi" src="https://img.shields.io/badge/made%20by-Jonatan%20Davi-brightgreen">
  </a>

  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/jonatandavi/backend-nodejs">

  <img alt="Contributors" src="https://img.shields.io/github/contributors/jonatandavi/backend-nodejs">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

---

## Table of Contents

<ul>
  <li><a href="#-getting-started">Getting Started</a></li>
  <li><a href="#-features">Features</a></li>
  <li><a href="#-contributing">Contributing</a></li>
  <li><a href="#-support">Support</a></li>
  <li><a href="#-license">License</a></li>
</ul>

---

## 🚀 Getting Started

### Prerequisites

- You have to install the NodeJS first, you can do by clicking [here](https://nodejs.org/en/)

### Clone

- Clone this repo to your local machine using:

```
$ git clone https://github.com/jonatandavi/Estoque.git
```

### Setup

- After clone this repo, go to the folder of the project and run:

```
$ npm install
```
- To setup your MySQL, connect with your database on `knexfile.js` changing the information of `database`, `user` and `password`. Then run the comands:

```
$ npx knex migrate:rollback
$ npx knex migrate:latest
```
- Then run:

```
$ npm start
```

---

## 📋 Features

### Documentation

- [x] Create the structure of the project
- [x] Implement the Controllers
- [x] Test with [Insominia](https://insomnia.rest/download/)
- [x] JWT Auth
- [x] Adding connection with MySQL

### Build with

- Core
  - [Javascript](https://www.javascript.com) - JavaScript is a structured interpreted programming language, high-level script with weak dynamic typing and multiparadigm
  - [NodeJS](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine
- Database
  - [MySQL](https://www.mysql.com) - MySQL, the most popular Open Source SQL database management system, is developed, distributed, and supported by Oracle Corporation
  - [KnexJS](http://knexjs.org) - Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use
- Auth
  - [JWT](https://jwt.io) - JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties
- Other NPM Packages
  - [ExpressJS](https://expressjs.com/pt-br/)
  - Cors
---

## 🤔 Contributing

If you want to contribute with this project, just follow the steps

- Fork this repo!

- Clone this repo to your local machine using `https://github.com/jonatandavi/backend-nodejs.git`

- Create your feature branch using `git checkout -b my-feature`

- Commit your changes using `git commit -m 'feat: My new feature'`

- Push to the branch using `git push origin my-feature`;

- Create a new pull request

After your Pull Request is merged, can you delete your feature branch.

---

## 📌 Support

Contact me if you need more informations about the project!

- Linkedin at [Jonatan Davi Almeida](https://www.linkedin.com/in/jônatan-davi-reis-de-almeida-3b6346117/)

---

## 📝 License

<img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy it!
