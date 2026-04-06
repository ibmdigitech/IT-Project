# Smart IT Solutions - SaaS Platform

A fully functional, modern, and scalable MERN stack (React, Node, Express, MongoDB) SaaS application designed for IT service providers. 

## Features
- **Modern Landing Page**: Built with React & Tailwind CSS. Features Glassmorphism interfaces and dynamic layouts.
- **Service Request Tracking**: A fully functional request lifecycle system (Pending -> In Progress -> Completed).
- **Admin Dashboard**: Secure JWT-powered tracking system providing stats, data tables, and quick status manipulations.
- **CSV Data Export**: Easily export your lead lists and secure requests into standard `.csv` files.
- **Modular Backend**: Cleanly separated `models`, `routes`, `controllers`, and `config` ensuring high readability and seamless scalability.

---

## 🚀 Setup Instructions (Local Deployment)

### 1. Database Setup (Local MongoDB)
1. Install [MongoDB Community Server](https://www.mongodb.com/try/download/community) locally.
2. Make sure the MongoDB service is running (`mongod`).
3. The app connects to `mongodb://127.0.0.1:27017/it_business_app` by default. No extra config needed.

### 2. Backend Setup
1. Open terminal and navigate to the project root directory.
2. Run `npm install` to install backend dependencies.
3. Duplicate the `.env.example` file and rename it to `.env`.
4. The `.env` file should contain:
   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/it_business_app
   JWT_SECRET=any_long_secret_random_string
   ```
5. Run the server:
   ```bash
   npm start
   ```
6. **Important First Step:** To create your very first admin user, make a POST request (e.g., using Postman or ThunderClient) to `http://localhost:3000/api/auth/setup` with a JSON body:
   ```json
   {
     "username": "admin",
     "password": "your_secure_password"
   }
   ```
   *(Note: This endpoint automatically disables itself after the first user is created to prevent unauthorized admins).*

### 3. Frontend Setup
1. Open a new terminal and navigate to the `frontend` folder (`cd frontend`).
2. Run `npm install` to install React and Vite dependencies.
3. To point the frontend to your backend securely, create a `.env` file in the `frontend` folder:
   ```env
   VITE_API_URL=http://localhost:3000
   ```
4. Start the frontend:
   ```bash
   npm run dev
   ```
5. Open your browser to the local Vite URL (usually `http://localhost:5173`).

---

## 🌐 Production Deployment Guide

### Backend (Render.com)
1. Push your code to a GitHub repository.
2. Create a new "Web Service" in Render and connect your repository.
3. Set the Build Command to `npm install` and Start Command to `node server.js`.
4. Go to the "Environment" tab and add your `MONGO_URI` and `JWT_SECRET`.
5. Deploy. Render will provide you a URL (e.g., `https://smart-it-api.onrender.com`).

### Frontend (vercel.com / Netlify.com)
1. Go to Vercel/Netlify and import the same repository.
2. Ensure you set the "Root Directory" to `frontend` so it knows where to build.
3. Build command: `npm run build` | Publish directory: `dist`.
4. In Environment Variables, add `VITE_API_URL` and set its value to your Render backend URL (`https://smart-it-api.onrender.com`).
5. Deploy.

---

## Future Enhancements Roadmap
- Implement Nodemailer to send automated confirmation emails to clients upon request submission.
- PDF Invoice generation system directly built into the Admin Dashboard.
