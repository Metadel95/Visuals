import './globals.css'

export const metadata = {
  title: 'Church Motion Visuals | Download Beautiful Screen Content',
  description: 'Free and premium motion visuals designed for church screens. Download high-quality videos for worship, announcements, and gatherings.',
  keywords: 'church visuals, motion graphics, worship videos, screen content',
  authors: [{ name: 'Church Visuals' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
