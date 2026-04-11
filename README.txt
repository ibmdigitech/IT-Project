FULL IT BUSINESS APP - QUICK START GUIDE

LOCAL DEVELOPMENT:
1. npm install
2. npm start
3. cd frontend && npm install && npm run dev
4. Open index.html or http://localhost:5173

DEPLOY TO VERCEL (EASIEST METHOD):

Step 1: Create MongoDB Atlas (FREE - 10 minutes)
   - Go to: https://www.mongodb.com/cloud/atlas/register
   - Create free M0 cluster
   - Get connection string
   - See: MONGODB_ATLAS_SETUP.md for full guide

Step 2: Add Environment Variables in Vercel
   - Go to: https://vercel.com/dashboard
   - Select your project
   - Settings → Environment Variables
   - Add:
     * MONGO_URI = mongodb+srv://user:pass@cluster.mongodb.net/it_business_app
     * JWT_SECRET = your_super_secret_random_string
     * NODE_ENV = production

Step 3: Deploy Frontend
   - Vercel auto-deploys when you push to GitHub
   - Or run: npx vercel --prod

Step 4: Create First Admin User
   - Use Postman or curl to POST to: https://your-app.vercel.app/api/auth/setup
   - Body: {"username":"admin","password":"your_password"}

API URL: https://your-app-name.vercel.app/api/health
FRONTEND: https://your-app-name.vercel.app

For detailed setup: See MONGODB_ATLAS_SETUP.md
