# Cloudflare Pages Deployment Guide

This document provides instructions for deploying the ChronoCoder portfolio website to Cloudflare Pages.

## Option 1: Direct Upload (Recommended for Static Sites)

1. **Build the project locally**:
   ```
   npm run build
   ```

2. **Prepare your files**:
   - Navigate to the `dist/public` directory
   - This contains all your static files ready for deployment

3. **Upload to Cloudflare Pages**:
   - Go to Cloudflare Dashboard > Pages
   - Click "Create a project" > "Direct upload"
   - Drag and drop the contents of `dist/public` folder
   - Click "Deploy site"

4. **Configure custom domain**:
   - After deployment, go to "Custom domains"
   - Add your domain name "chronocoder.dev"
   - Follow the verification and DNS setup instructions

## Option 2: Git Integration

1. **Push your code to a GitHub repository**:
   - Make sure your repository includes all configuration files
   - Include `wrangler.toml`, `_redirects`, etc.

2. **Connect to Cloudflare Pages**:
   - Go to Cloudflare Dashboard > Pages
   - Click "Create a project" > "Connect to Git"
   - Select your repository
   
3. **Configure build settings**:
   - Framework preset: None/Custom
   - Build command: `npm run build`
   - Build output directory: `dist/public`
   - Root directory: `/` (or leave blank)
   - Environment variables: Add any necessary env vars here

4. **Deploy**:
   - Click "Save and Deploy"
   - Cloudflare will build and deploy your site

## Troubleshooting

If you encounter deployment failures:

1. **Check build output**: Verify your build produces the expected files in `dist/public`

2. **Examine build logs**: Look for specific errors in the Cloudflare Pages build logs

3. **Simplify configuration**: Try deploying without the Worker scripts first to isolate issues

4. **Contact Cloudflare Support**: If persistent issues occur, reach out to Cloudflare support

5. **Direct upload fallback**: If Git deployment fails, use direct upload method

## Important Files

- `_redirects`: Handles SPA routing
- `_headers`: Sets security headers
- `wrangler.toml`: Configuration for Workers/Pages
- `_worker.js`: Custom worker for advanced routing

Remember to configure these files properly for your specific needs.