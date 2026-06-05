# Church Motion Visuals

A beautiful, modern website for sharing and downloading motion visuals for church presentations and worship experiences. Built with Next.js and designed for easy deployment on Vercel.

## 🎬 Features

- **Modern Design**: Clean, elegant interface inspired by contemporary portfolio websites
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Visual Gallery**: Organized collection of motion visuals with categories
- **Download Management**: Easy-to-use modal for selecting and downloading different file formats
- **Multiple Resolutions**: Support for 4K, Full HD, and loop versions
- **Fast Performance**: Optimized Next.js application for quick load times
- **SEO Ready**: Built with metadata and semantic HTML for search engines
- **Mobile Friendly**: Touch-optimized interface for all screen sizes

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Git account (for GitHub)
- Vercel account (for deployment)

### Local Development

1. **Clone or create the repository**

```bash
# If cloning from GitHub
git clone https://github.com/yourusername/church-motion-visuals.git
cd church-motion-visuals

# Or create new repo locally
cd church-motion-visuals
git init
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open browser**

Visit [http://localhost:3000](http://localhost:3000) to see your website.

## 📂 Project Structure

```
church-motion-visuals/
├── app/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Gallery.jsx         # Main gallery with filtering
│   │   ├── VisualCard.jsx      # Individual visual card
│   │   ├── DownloadModal.jsx   # Download modal
│   │   └── Footer.jsx          # Footer section
│   ├── globals.css             # Global styles
│   ├── layout.jsx              # Root layout
│   └── page.jsx                # Home page
├── public/                     # Static files (add your videos here)
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

## 🎨 Customization

### Update Site Content

Edit `/app/page.jsx` to modify the visuals list:

```javascript
const visuals = [
  {
    id: 1,
    title: 'Your Visual Title',
    category: 'Your Category',
    description: 'Description of the visual',
    thumbnail: '🎬', // emoji or icon
    color: 'from-blue-400 to-cyan-500', // gradient colors
    files: [
      { name: 'file.mp4', size: '245 MB', duration: '60s', resolution: '4K' },
    ],
  },
  // ... more visuals
]
```

### Update Contact Information

1. Header - Edit `/app/components/Header.jsx`
2. Footer - Edit `/app/components/Footer.jsx`
3. Footer links and social media URLs

### Colors & Branding

Edit `/tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  church: {
    50: '#faf9f7',
    // ... customize colors
  },
}
```

### Fonts

Change fonts in `globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

## 📥 Adding Downloads

### Option 1: Static Files (Small Files)

1. Create `/public/downloads/` folder
2. Add your `.mp4` files
3. Update file paths in the modal

### Option 2: Cloud Storage (Recommended)

For large video files, use cloud services:

- **AWS S3**
- **Google Cloud Storage**
- **Cloudflare R2**
- **BunnyCDN**

Update the download handler in `/app/components/DownloadModal.jsx`:

```javascript
const handleDownload = (file) => {
  window.location.href = `https://your-cdn.com/downloads/${file.name}`
}
```

## 🌐 Deploy to Vercel

### Method 1: Deploy via GitHub

1. **Create GitHub Repository**

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/church-motion-visuals.git
git push -u origin main
```

2. **Connect to Vercel**

- Visit [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Click "Deploy"

Vercel will automatically detect Next.js and configure build settings.

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### Environment Variables

If using external services, add environment variables in Vercel:

1. Go to Project Settings → Environment Variables
2. Add your CDN keys, API credentials, etc.

## 📝 Customization Checklist

- [ ] Update site title and description in `/app/layout.jsx`
- [ ] Add your visuals to the gallery in `/app/page.jsx`
- [ ] Update contact email in components
- [ ] Add social media links in footer
- [ ] Configure download method (local or cloud)
- [ ] Test all downloads before going live
- [ ] Update branding colors if desired
- [ ] Add custom favicon (replace `/public/favicon.ico`)

## 🔧 Building for Production

```bash
npm run build
npm start
```

This creates an optimized production build in the `.next` folder.

## 📊 Analytics

To add analytics, install a tracking service:

```bash
npm install @vercel/analytics
```

Then add to `/app/layout.jsx`:

```javascript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🚀 Performance Optimization

- **Images**: Optimize all images to WebP format
- **Videos**: Use optimized codecs (H.264, VP9)
- **Code Splitting**: Next.js handles this automatically
- **Caching**: Vercel automatically caches static assets

## 📱 Mobile Testing

Test on real devices:

```bash
npm run dev
# Access via: http://YOUR_IP:3000
```

## 🆘 Troubleshooting

### Port Already in Use

```bash
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear cache
rm -rf .next node_modules

# Reinstall
npm install
npm run build
```

### Vercel Deployment Issues

- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify environment variables are set correctly

## 📄 License

This project is provided free for church use. Feel free to modify and distribute for your ministry.

## 💡 Tips & Best Practices

1. **Video Optimization**: Use HandBrake to compress videos before uploading
2. **Naming**: Use clear, descriptive filenames
3. **Categories**: Keep categories consistent and organized
4. **Updates**: Regularly add new visuals to keep content fresh
5. **Testing**: Test downloads in different browsers
6. **Backups**: Keep backups of all video files

## 📞 Support

For issues or questions:
- Check the Next.js documentation: [nextjs.org](https://nextjs.org)
- Visit Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Ask in Next.js Discord community

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [React](https://react.dev)

---

**Happy sharing!** 🎬✝️

Last updated: 2024
