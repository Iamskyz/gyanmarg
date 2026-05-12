# GyanMarg - Backend

Node.js + Express + MongoDB backend for the GyanMarg educational platform.

## Setup

```bash
npm install
```

Create a `.env` file (refer `.env.example`):

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_api_key
```

## Run

```bash
node server.js
```

## Seed Data

```bash
node seedAll.js
node seedGames.js
```
