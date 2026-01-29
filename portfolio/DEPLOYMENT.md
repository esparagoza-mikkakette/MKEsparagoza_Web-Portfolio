# Deployment Guide

## Fixed Issues ✅
- Build output path corrected to `dist/browser/`
- Added production build scripts
- Proper `_redirects` file for SPA routing
- Added `netlify.toml` for comprehensive Netlify configuration
- Fixed "Page not found" errors for SPA routing

## Deployment Instructions

### For Netlify (RECOMMENDED):
1. **Method 1 - Drag & Drop:**
   - Run: `npm run build`
   - Drag the entire `dist/browser/` folder to Netlify deploy area
   
2. **Method 2 - Git Integration:**
   - Connect your GitHub repo to Netlify
   - Build settings are automatically configured via `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `dist/browser`
   - Deploy will happen automatically on git push

### For Vercel:
1. Connect your GitHub repo
2. Framework preset: Angular
3. Build command: `npm run build`
4. Output directory: `dist/browser`

### For GitHub Pages:
1. Update the repo name in package.json script
2. Run: `npm run deploy:github`
3. Upload the `dist/browser/` folder to your gh-pages branch

### For Firebase Hosting:
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run: `firebase init hosting`
3. Set public directory to: `dist/browser`
4. Configure as SPA: Yes
5. Deploy: `firebase deploy`

## Build Commands:
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm start` - Local development server

## Important Files:
- `dist/browser/` - Deploy this folder (contains all built files)
- `netlify.toml` - Netlify configuration (handles SPA routing & caching)
- `public/_redirects` - Fallback SPA routing configuration
- `index.html` - Entry point with proper meta tags

## Troubleshooting "Page not found" errors:

### If you still get 404 errors:
1. **Check build output**: Ensure `dist/browser/index.html` exists
2. **Verify _redirects**: Make sure `_redirects` file is in the deployed folder
3. **Clear cache**: Clear browser cache and try again
4. **Check Netlify logs**: Look for build errors in Netlify dashboard

### Common fixes:
- Ensure you're deploying the `dist/browser/` folder, not just `dist/`
- Make sure `netlify.toml` is in the root of your repository
- Verify the `_redirects` file is properly formatted