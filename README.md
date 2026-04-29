# BudgetKaro

A full-stack budgeting app built with React, Tailwind CSS, Express.js, JWT auth, and MongoDB.

## Features
- User registration + login with JWT
- Add and delete budget items
- Category analytics (pie chart)
- Protected routes on frontend and backend

## Project Structure
- `client/` React + Vite + Tailwind UI
- `server/` Express API + MongoDB models

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure backend env:
   ```bash
   cp server/.env.example server/.env
   ```
3. Start both apps:
   ```bash
   npm run dev
   ```
4. Open frontend at `http://localhost:5173`
