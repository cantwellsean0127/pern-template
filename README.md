# PERN Template
Basic PERN (PostgreSQL, Express.js, React, Node.js) project template.

## Table of Contents
- [Introduction](#introduction)
- [File Structure](#file-structure)
- [Running the Server](#running-the-server)
- [PostgreSQL](#postgresql)
- [Express](#express)
- [React](#react)
- [Node](#node)
- [Static Content](#static-content)
- [Vite Configuration](#vite-configuration)
- [License](#license)
- [How To Use](#how-to-use)

## Introduction
This template is designed to give you a boilerplate project for any web applications using PostgreSQL, Express, React, and Node (the PERN stack).

## File Structure
```
├── LICENSE
├── package.json
├── public
│   ├── dist
│   └── media
│       └── images
│           └── favicon.png
├── README.md
├── src
│   ├── database
│   │   ├── Entity Relationship Diagram.png
│   │   ├── database.js
│   │   ├── migration.sql
│   │   └── seed.sql
│   ├── main.js
│   ├── react
│   │   ├── components
│   │   │   └── App.jsx
│   │   ├── css
│   │   │   └── main.css
│   │   ├── index.html
│   │   └── react.jsx
│   └── server
│       ├── middleware.js
│       ├── routes.js
│       ├── server.js
│       └── settings.js
└── vite.config.js
```

## Running the Server
To build the React application into files that can be statically served, run `npm run build`.
To launch the server, run `npm run server`.
To perform both actions, run `npm run start`.

## PostgreSQL
Database related files can be found in the `/src/database` directory. This directory includes 4 files:
1. `migration.sql` - This file is used to create tables and columns in your database.
2. `seed.sql` - This file is used to seed your database tables with data.
3. `Entity Relationship Diagram.png` - This file is an image of your database's ERD. We recommend using [DrawSQL](https://drawsql.app).
4. `database.js` - This file is the JavaScript code that connects to your PostgreSQL database and exports the database pool object.

## Express
Express server files can be found in the `/src/server` directory. This directory includes 4 files:
1. `server.js` - This file creates an instance of an Express server and exports it.
2. `middleware.js` - This file exports a function which takes in your server instance as a parameter and adds middlewares to said server instance.
3. `setttings.js` - This file exports a function which takes in your server instance as a parameter and adds settings to said server instance.
4. `routes.js` - This file exports a function which takes in your server instance as a parameter and adds routes to said server instance.

## React
React files can be found in the `/src/react` directory. These files are then built using the vite module and the output is stored in the `/public/dist` directory which is statically served by the Express server instance.

## Node
Node is a JavaScript runtime enviroment that is designed to run on the back-end. A `.node-version` file is found at the project root to specify which version of Node is being used.
This is often used by hosting services to determine which Node version to use. (We recommend using [Render](https://www.render.com))

## Static Content
Static content can be found in the `/public/` directory. All of `public`'s sub-directories are meant to be statically served (the `public` directory itself is not). For example, media files like images, videos, etc can be found in the `/public/media` directory.
As discussed earlier, the build output from vite is also meant to be statically served and can be found in the `/public/dist` directory.

## Vite Configuration
The vite configuration file can be found at `/vite.config.js`. Vite's root directory is `/src/react` and the build output directory is `/public/dist` (this directory gets completely wiped before each build).

## License
The license (MIT) can be found at `/LICENSE`.

## How to Use
The recommended usage for this template is as follows:
1. Use this template to create your own PERN web application repository.
2. Run `npm install` to install all dependencies.
3. Edit the `package.json` file to more accurately reflect your project (name, description, author, etc)
4. Edit the `LICENSE` file to more accurately reflect your project. Even if you plan on using the MIT license as we did, you still need to change the name in the license (right now it says "Sean Cantwell").
6. Edit the `README.md` file to more accurately reflect your project. Only do this once you become familiar with the structure of this template and no longer need this file's information.
7. Create a `.env` file using the `.env.template` file to hold your enviroment variables.
8. Edit the `.node-version` file to contain your version of Node. This can be found by running `node --version` (not including the "v").
9. Customize your web application to fit your needs and happy coding!
