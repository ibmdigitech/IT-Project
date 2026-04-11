# MongoDB Atlas Setup Guide for Vercel Deployment

## Step 1: Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up for a free account (Google, GitHub, or email)

## Step 2: Create a Free Cluster
1. After logging in, click **"Build a Database"**
2. Select **M0 FREE** tier
3. Choose a cloud provider (AWS recommended)
4. Select a region closest to your users (e.g., **AWS - Middle East (UAE) me-central-1**)
5. Click **Create Cluster**

## Step 3: Create Database User
1. Click **"Database Access"** in left sidebar
2. Click **"+ Add New Database User"**
3. Choose **Password** authentication
4. Enter username and password (save these!)
5. Set permissions to **"Read and write to any database"**
6. Click **"Add User"**

## Step 4: Whitelist IP Address
1. Click **"Network Access"** in left sidebar
2. Click **"+ Add IP Address"**
3. For Vercel (serverless), click **"Allow Access From Anywhere"** (0.0.0.0/0)
   - ⚠️ This is safe because MongoDB uses password authentication
4. Click **Confirm**

## Step 5: Get Connection String
1. Click **"Database"** in left sidebar
2. Click **"Connect"** button on your cluster
3. Select **"Connect your application"**
4. Choose **Node.js** driver, version **5.5 or later**
5. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Replace `<username>` and `<password>` with your actual credentials

## Step 6: Add to Vercel Environment Variables
1. Go to https://vercel.com/dashboard
2. Select your project: **IT-Project**
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

   **Variable 1:**
   - Key: `MONGO_URI`
   - Value: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/it_business_app?retryWrites=true&w=majority`
   - Environment: ✅ Production ✅ Preview ✅ Development
   - Click **Save**

   **Variable 2:**
   - Key: `JWT_SECRET`
   - Value: `your_super_secret_random_string_here`
     (Generate one at: https://randomkeygen.com/)
   - Environment: ✅ Production ✅ Preview ✅ Development
   - Click **Save**

5. **Redeploy** your application (Settings → Deployments → Redeploy latest)

## Step 7: Test the Connection
After redeployment, test your API:
```
https://your-domain.vercel.app/api/health
```

Should return:
```json
{
  "status": "OK",
  "message": "SmartIT API is running",
  "timestamp": "2026-04-11T19:10:46.782Z"
}
```

## Local Development
For local testing, create a `.env` file in the root directory:
```env
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/it_business_app?retryWrites=true&w=majority
JWT_SECRET=your_secret_key
PORT=3000
```

Or keep using local MongoDB (default when MONGO_URI is not set in development).

## Troubleshooting
- **FUNCTION_INVOCATION_FAILED**: Check Vercel logs (Functions tab)
- **MongoDB connection error**: Verify credentials and IP whitelist
- **JWT errors**: Make sure JWT_SECRET is set in Vercel
