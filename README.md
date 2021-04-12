# Bandbook frontend project

Frontend project built with Next JS and styled-components
Consists of a web application with a login to auth a user and a dashboard to handle various operations such as filter bands ad dynamically enter a band route to check it's information

## Run project

First of all clone this repo and run `yarn install` to install every dependency

Then you need to create at root level a `.env` file with the following fields


`NEXT_PUBLIC_HOST=http://localhost:3000`
`SECRET_KEY=your_secret_key`

Then run `yarn dev` and it will start the development server at `http://localhost:3000`

To authenticate there's a mock with two users to test in `pages/api/login.ts` you can change it at your free will. The users are

- *username*: Test | *password*: Test123
- *username*: admin | *password*: admin123

## Eslint and Husky
The project has set up a basic eslint and prettier configuration to check code syntax and rules. Additionally there's a pre-commit hook with husky and lint-staged to trigger `eslint --fix` when you commit a change

