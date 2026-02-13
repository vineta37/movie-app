# Movie App

A full-stack movie listing application built with **React** (frontend) and **Express.js** (backend).  
This project fetches movie data from a local JSON file and displays it in a searchable, interactive interface.

---

## Features

- List all movies with title and rating
- Search movies by title
- Click a movie to view details (tagline, rating)
- Fully functional backend API with Express
- Development and production-ready setup

---

## Folder Structure

movie-app/
├── server/ # Express backend
│ ├── index.js # Main server file
│ └── movies_metadata.json # Movie data
├── src/ # React frontend
│ ├── App.js
│ └── index.js
├── build/ # Production build (after npm run build)
├── package.json
└── README.md

## Screenshots

### Home Page
![Home Page](movie-app/screenshots/screenshot-home.png.png)

### Search Page
![Search Page](movie-app/screenshots/screenshot-search.png.png)

### Install dependencies
```bash
npm install
Run in development mode
bash
Copy code
npm run development
Frontend: http://localhost:3000

Backend API: http://localhost:3001/api/movies

Build for production
bash
Copy code
npm run build
npm run production
Express serves both frontend and backend

Access app at http://localhost:3001

Technologies Used
Frontend: React, HTML, CSS

Backend: Node.js, Express.js

Data: JSON file (movies_metadata.json)

Author
vineta christy
GitHub: https://github.com/vineta37

