# 🚀 Church Motion Visuals - Easy Setup Guide

This guide will help you get your motion visuals website live in just a few steps!

## 📋 What You'll Need

1. A **GitHub account** (free at github.com)
2. A **Vercel account** (free at vercel.com)
3. Your motion visual files
4. This code (you already have it!)

## Step 1: Create a GitHub Repository

GitHub is like a free storage locker for your code that's also easy to update.

### Steps:

1. Go to [github.com](https://github.com) and sign in (or create an account)
2. Click the **+** icon in the top right corner
3. Select **"New repository"**
4. Name it: `church-motion-visuals`
5. Click **"Create repository"**
6. Copy the commands shown (you'll use these next)

## Step 2: Upload Your Code to GitHub

You have two options:

### Option A: Using GitHub Desktop (Easiest)

1. Download [GitHub Desktop](https://desktop.github.com)
2. Open it and click "Clone a repository"
3. Paste your repository URL
4. Click "Clone"
5. Move all the project files into this folder
6. GitHub Desktop will show changes - click "Commit to main"
7. Click "Push origin"

### Option B: Using Command Line (Advanced)

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/church-motion-visuals.git
git push -u origin main
```

## Step 3: Deploy to Vercel

Vercel automatically deploys your site when you push to GitHub!

### Steps:

1. Go to [vercel.com](https://vercel.com)
2. Sign in (create free account if needed)
3. Click "New Project"
4. Select "Import Git Repository"
5. Paste your GitHub repo URL
6. Click "Import"
7. Click "Deploy"
8. Wait 2-3 minutes...
9. **Your site is live!** 🎉

Vercel will give you a URL like: `https://your-site.vercel.app`

## Step 4: Update Your Content

### To Change Visuals:

1. Open `/app/page.jsx` in a text editor
2. Find the `visuals` array
3. Update the titles, descriptions, and file names
4. Save the file
5. Upload to GitHub
6. Vercel will automatically update your site!

### To Change Contact Info:

1. Open `/app/components/Footer.jsx`
2. Find the email address
3. Change `contact@example.com` to your email
4. Save and upload to GitHub

## Step 5: Add Your Videos

### Simple Method (For Small Files):

1. Create a folder: `/public/downloads/`
2. Add your `.mp4` files there
3. Update the filenames in `/app/page.jsx`
4. Upload to GitHub

### Professional Method (For Large Files):

Use cloud storage like:
- **Google Drive** (free)
- **Dropbox** (free)
- **AWS S3** (very cheap)

This keeps your GitHub repo small and fast.

## ✨ Customization

### Change Colors

1. Open `/tailwind.config.js`
2. Look for the `colors` section
3. Change the hex colors (like `#faf9f7`)
4. Save and upload

### Change Fonts

1. Open `/app/globals.css`
2. Find the Google Fonts import
3. Change the font names
4. Save and upload

### Change Title

1. Open `/app/layout.jsx`
2. Find "Church Motion Visuals"
3. Replace with your church name
4. Save and upload

## 🎯 Quick Checklist

- [ ] Created GitHub account
- [ ] Created GitHub repository
- [ ] Uploaded code to GitHub
- [ ] Created Vercel account
- [ ] Deployed project on Vercel
- [ ] Site is live! (check your URL)
- [ ] Updated contact information
- [ ] Added your motion visuals
- [ ] Tested all downloads
- [ ] Shared with church team

## 🆘 Common Issues & Fixes

### "Build failed on Vercel"

**Solution:** Check that `package.json` is in the root folder

### "Files won't download"

**Solution:** Make sure file paths in `/app/page.jsx` match actual file locations

### "Site looks broken"

**Solution:** 
1. Clear your browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+F5)
3. Wait 5 minutes for Vercel to finish deploying

### "Need to update something"

**Simple Steps:**
1. Edit the file
2. Save it
3. Upload to GitHub
4. Vercel updates automatically (2-3 minutes)

## 📞 Getting Help

**If something doesn't work:**

1. Check the [Vercel docs](https://vercel.com/docs)
2. Visit [Next.js docs](https://nextjs.org/docs)
3. Ask in the Vercel Discord community

## 🎓 Learning More

Want to do more advanced customization?

- Learn React: [react.dev](https://react.dev)
- Learn Next.js: [nextjs.org](https://nextjs.org)
- Learn Tailwind: [tailwindcss.com](https://tailwindcss.com)

## 💪 You've Got This!

Setting up a website sounds complicated, but you just:
1. ✅ Created a GitHub repository
2. ✅ Uploaded your code
3. ✅ Deployed on Vercel
4. ✅ Have a live website!

Congratulations! Your church now has a beautiful motion visuals portal.

---

**Questions?** This setup is designed to be church-team friendly. Don't hesitate to reach out to tech-savvy church members - they can help with any hiccups!
