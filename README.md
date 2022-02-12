# Social-Network-API ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)


# Description

A REST API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Built with Express, Mongoose, and MongoDB.

# License
This project is licensed under the MIT license.

# Table of Content

* [Installation](#installation)

* [Usage](#usage)

* [Endpoints](#endpoints)

* [Contributing](#contributing)

* [Questions](#questions)

# Installation
If MongoDB is not installed, install MongoDB through [MongoDB Website](https://docs.mongodb.com/manual/installation/))

# Usage
1. Be sure to have MongoDB 
2. Clone the repo
3. Install dependencies with `npm -i`
4. Run `npm start` to start the server 
5. Use your browser or an app like [Insomnia](https://insomnia.rest/) to test the REST API.

# Endpoints
**User**
- Get all users:        `GET /api/users`
- Create a user:        `POST /api/users`
- Get user by ID:       `GET /api/users/:id`
- Update a user:        `PUT /api/users/:id`
- Delete a user:        `DELETE /api/users/:id`
- Add a friend:         `POST /api/users/:userId/friends/:friendId`
- Delete a friend:      `DELETE /api/users/:userId/friends/:friendId`

**Thought**
- Get all thoughts:     `GET /api/thoughts`
- Create a thought:     `POST /api/thoughts/:userId`
- Get thought by ID:    `GET /api/thoughts/:thoughtId`
- Update a thought:     `PUT /api/thoughts/:thoughtId`
- Delete a thought:     `DELETE /api/thoughts/:thoughtId`

**Reaction**
- Add a reaction:       `PUT /api/thoughts/:thoughtId/reaction`
- Delete a reaction:    `DELETE /api/thoughts/:thoughtId/:reactionId`

## Packages
- express
- moment
- mongoose

# Contributing
Michael Li

# Questions 
If you have any questions about the repo, open an issue or contact me directly at thisislimichael@gmail.com. 
You can find more of my work at [Github](https://github.com/limichael97)

