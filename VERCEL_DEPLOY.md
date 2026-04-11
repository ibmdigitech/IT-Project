# Quick Vercel Deployment Commands

# Build frontend
cd frontend
npm install
npm run build
cd ..

# Deploy to Vercel
npx vercel --prod

# Or if already linked, just push to GitHub and Vercel auto-deploys
git add -A
git commit -m "deploy to vercel"
git push origin main
