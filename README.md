[![Netlify Status](https://api.netlify.com/api/v1/badges/98c2577a-7873-4628-a157-28d72080dfd4/deploy-status)](https://app.netlify.com/sites/thesocialcensus/deploys)

# The Social Census

A simple, fun-to-use question-and-answer platform which provokes thought and discussion about social issues involving diversity in Singapore, by illuminating the differences in our views and experiences.

This is a prototype built for Hack For Good 2021 and is currently deployed at: https://thesocialcensus.netlify.app/

Link to backend repository: https://github.com/wenhaogoh/hack4good2021api

## Features Implemented

1. Question and response interface
2. Real time response statistics
3. Mobile responsive interface

## Inital Setup

1. Install `node` and Docker
2. Run `npm install -g yarn` to install `yarn`
3. Run `yarn` in the working directory to install required packages

## Development

1. Run `yarn start` to start the development server
2. Run `yarn lint` to check for code style violations

## Stack

### Frontend

* NodeJS
* React
* Typescript
* Deployed on Netlify

### Backend

* NodeJS
* Postgresql (Using Sequelize)
* Deployed on Heroku
