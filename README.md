# SmartIT Solutions - IT Business SaaS Platform

A modern, scalable MERN stack application for IT service providers with admin dashboard, contact management, and service tracking.

## 🚀 Quick Deploy to Vercel

### Step 1: Connect GitHub to Vercel
1. Go to https://vercel.com/new
2. Import this repository: `https://github.com/ibmdigitech/IT-Project`
3. Vercel will auto-detect the project settings

### Step 2: Add MongoDB Atlas Connection
1. Create free MongoDB Atlas cluster: https://www.mongodb.com/cloud/atlas/register
2. Create database user & whitelist all IPs (0.0.0.0/0)
3. Copy connection string

### Step 3: Configure Environment Variables in Vercel
Go to **Settings → Environment Variables** and add:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/it_business_app?retryWrites=true&w=majority
JWT_SECRET=any_long_random_secret_string_here
NODE_ENV=production
```

### Step 4: Deploy
Click **Deploy** - Vercel handles the rest!

---

## 📁 Project Structure

```
IT-Project/
├── server.js                 # Express backend entry point
├── vercel.json              # Vercel deployment config
├── config/
│   └── db.js               # MongoDB connection
├── controllers/
│   ├── authController.js   # Authentication logic
│   └── contactController.js # Contact management
├── middleware/
│   └── auth.js             # JWT authentication middleware
├── models/
│   ├── User.js             # Admin user model
│   └── Contact.js          # Contact request model
├── routes/
│   ├── authRoutes.js       # Auth endpoints
│   └── contactRoutes.js    # Contact endpoints
└── frontend/               # React + Vite frontend
    ├── src/
    │   ├── App.jsx         # Main app component
    │   ├── components/     # Reusable UI components
    │   ├── pages/          # Page components
    │   ├── context/        # React context (Auth)
    │   └── data/           # Service data
    └── package.json
```

---

## 🛠 Local Development Setup

### Prerequisites
- Node.js 16+ installed
- MongoDB running locally OR MongoDB Atlas account

### Backend Setup
```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your settings
# MONGO_URI=mongodb://127.0.0.1:27017/it_business_app
# JWT_SECRET=your_secret_key

# Start server
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

### Create First Admin User
```bash
curl -X POST http://localhost:3000/api/auth/setup \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"your_secure_password"}'
```

---

## 🌐 API Endpoints

### Public
- `GET /api/health` - Health check
- `POST /api/contacts` - Submit contact request
- `POST /api/auth/login` - Admin login
- `POST /api/auth/setup` - Create first admin (one-time)

### Protected (Requires JWT Token)
- `GET /api/contacts` - Get all contacts
- `GET /api/contacts/stats` - Get dashboard stats
- `PUT /api/contacts/:id/status` - Update contact status
- `DELETE /api/contacts/:id` - Delete contact

---

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO_URI` or `MONGODB_URI` | MongoDB connection string | Yes (for production) |
| `JWT_SECRET` | Secret key for JWT tokens | Yes |
| `NODE_ENV` | `development` or `production` | No |
| `PORT` | Server port (default: 3000) | No |

---

## 📊 Features

- **Modern Landing Page** - React + Tailwind CSS with glassmorphism
- **Service Catalog** - 18 IT services with detailed pages
- **Contact Management** - Track customer requests (Pending → In Progress → Completed)
- **Admin Dashboard** - Secure JWT-powered tracking system
- **CSV Export** - Export lead lists and requests
- **Responsive Design** - Mobile-first approach
- **Dark Mode** - Toggle between light and dark themes

---

## 🚧 Tech Stack

**Frontend:**
- React 19
- Vite
- Tailwind CSS
- React Router
- Axios
- Lucide Icons

**Backend:**
- Node.js
- Express
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs

**Deployment:**
- Vercel (Frontend + Backend)
- MongoDB Atlas (Database)

---

## 📝 License

MIT License - feel free to use this project for your business.

---

## 🤝 Support

For issues or questions, create an issue on GitHub.
