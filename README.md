# Naksh Jewels – Mini E-Commerce Module

This project is a mini e-commerce module built as part of the **Naksh Jewels ReactJS & Node.js Internship Assessment**.  
It demonstrates real-world frontend development, backend API design, state management, Dockerization, and production deployment.

---

## 🚀 Live Deployment (Production)

The application is fully deployed using **Railway**, with separate Dockerized services for the frontend and backend.

- **Frontend (React – Production Build)**  
  https://naksh-jewels-production-52f1.up.railway.app

- **Backend API (Node.js + Express)**  
  https://naksh-jewels-production-5dfc.up.railway.app

This deployment was done to showcase real-world DevOps readiness beyond local development.

---

## 🛠 Tech Stack

### Frontend
- React (Functional Components only)
- Context API for state management
- Custom CSS (No UI libraries)
- Fetch API

### Backend
- Node.js
- Express.js
- In-memory data store
- Environment variables with `.env`

### DevOps
- Docker
- Docker Compose
- Railway (Production Deployment)

---

## 📦 Features

### Frontend
- Product listing page
- Product cards with image, name, price, and Add to Cart functionality
- Cart with quantity update and remove item options
- Responsive layout
- Clean and scalable folder structure

### Backend
- `GET /products` – fetch product list
- `POST /cart` – add or update cart items
- Validation middleware
- Centralized error handling

---

## 🐳 Docker Setup (Mandatory)

### Run Locally Using Docker

```bash
docker-compose up --build
