# Deployment Guide: Frontend & Backend Communication

This guide explains how to configure your deployed frontend and backend to communicate properly.

## Overview

Your application consists of:
- **Frontend**: React application (client folder)
- **Backend**: Node.js/Express API (server folder)

## Configuration Steps

### 1. Backend Configuration

#### Environment Variables
Create a `.env` file in the `server` folder with these variables:

```env
# MongoDB Connection
MONGODB_URL=your_mongodb_connection_string

# Frontend URL - IMPORTANT: Update this with your deployed frontend URL
CLIENT_URL=https://your-frontend-domain.com

# Server Port (optional)
PORT=5000

# Other configurations...
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

#### Key Points:
- Replace `https://your-frontend-domain.com` with your actual deployed frontend URL
- Ensure no trailing slash in the CLIENT_URL
- The backend will use this URL for CORS configuration

### 2. Frontend Configuration

#### Environment Variables
Create a `.env` file in the `client` folder with:

```env
# Backend API URL - IMPORTANT: Update this with your deployed backend URL
VITE_API_URL=https://your-backend-domain.com
```

#### Key Points:
- Replace `https://your-backend-domain.com` with your actual deployed backend URL
- Ensure no trailing slash in the VITE_API_URL
- The prefix `VITE_` is required for Vite to expose the variable

### 3. Deployment Platform Examples

#### Vercel (Frontend)
1. Deploy your `client` folder to Vercel
2. Add environment variable in Vercel dashboard:
   - Name: `VITE_API_URL`
   - Value: `https://your-backend-domain.com`

#### Netlify (Frontend)
1. Deploy your `client` folder to Netlify
2. Add environment variable in Netlify dashboard:
   - Name: `VITE_API_URL`
   - Value: `https://your-backend-domain.com`

#### Heroku (Backend)
1. Deploy your `server` folder to Heroku
2. Add environment variables in Heroku dashboard:
   - `CLIENT_URL`: `https://your-frontend-domain.com`
   - `MONGODB_URL`: Your MongoDB connection string
   - Other required variables...

#### Railway (Backend)
1. Deploy your `server` folder to Railway
2. Add environment variables in Railway dashboard:
   - `CLIENT_URL`: `https://your-frontend-domain.com`
   - `MONGODB_URL`: Your MongoDB connection string
   - Other required variables...

#### Render (Backend)
1. Deploy your `server` folder to Render
2. Add environment variables in Render dashboard:
   - `CLIENT_URL`: `https://your-frontend-domain.com`
   - `MONGODB_URL`: Your MongoDB connection string
   - Other required variables...

## Example Configuration

### If your domains are:
- Frontend: `https://my-ecommerce-app.vercel.app`
- Backend: `https://my-ecommerce-api.herokuapp.com`

### Backend .env:
```env
CLIENT_URL=https://my-ecommerce-app.vercel.app
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/database
PORT=5000
```

### Frontend .env:
```env
VITE_API_URL=https://my-ecommerce-api.herokuapp.com
```

## Testing the Connection

### 1. Check Frontend Console
Open your deployed frontend and check the browser console for:
- Network requests going to the correct backend URL
- No CORS errors
- Successful API responses

### 2. Check Backend Logs
Monitor your backend logs for:
- Incoming requests from your frontend domain
- No CORS rejection messages
- Successful database connections

### 3. Test Authentication
Try to:
- Register a new user
- Login with existing credentials
- Access protected routes

## Common Issues & Solutions

### CORS Errors
**Problem**: `Access to fetch at 'backend-url' from origin 'frontend-url' has been blocked by CORS policy`

**Solution**: 
- Ensure `CLIENT_URL` in backend matches your exact frontend domain
- No trailing slashes in URLs
- Redeploy backend after environment variable changes

### 404 API Errors
**Problem**: API calls return 404 errors

**Solution**:
- Verify `VITE_API_URL` in frontend matches your backend domain
- Ensure backend is deployed and accessible
- Check API endpoint paths are correct

### Environment Variables Not Working
**Problem**: Environment variables not being read

**Solution**:
- Ensure `.env` files are in correct directories
- For frontend: Variables must start with `VITE_`
- For backend: Restart application after adding variables
- Check deployment platform's environment variable settings

### Authentication Issues
**Problem**: Login/logout not working across domains

**Solution**:
- Ensure `credentials: true` in CORS configuration
- Check cookie settings for cross-domain compatibility
- Verify JWT token handling

## Verification Checklist

- [ ] Backend `.env` file has correct `CLIENT_URL`
- [ ] Frontend `.env` file has correct `VITE_API_URL`
- [ ] Both applications deployed successfully
- [ ] Environment variables set in deployment platforms
- [ ] No CORS errors in browser console
- [ ] API calls reaching backend successfully
- [ ] Authentication working properly
- [ ] Database operations functioning

## Need Help?

If you're still experiencing issues:

1. Check browser network tab for failed requests
2. Review backend logs for error messages
3. Verify all environment variables are set correctly
4. Ensure both frontend and backend are deployed and accessible
5. Test API endpoints directly using tools like Postman

Remember: After changing environment variables, you typically need to redeploy your applications for the changes to take effect.