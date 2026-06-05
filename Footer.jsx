'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'About', href: '#' },
    { label: 'Contact', href: 'mailto:contact@example.com' },
    { label: 'License', href: '#' },
    { label: 'Privacy', href: '#' },
  ]

  const socialLinks = [
    { icon: '📘', label: 'Facebook', href: '#' },
    { icon: '🐦', label: 'Twitter', href: '#' },
    { icon: '📷', label: 'Instagram', href: '#' },
    { icon: '▶️', label: 'YouTube', href: '#' },
  ]

  return (
    <footer className="bg-church-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-church-700">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✝️</span>
              <h3 className="text-lg font-display font-bold">Motion Visuals</h3>
            </div>
            <p className="text-church-300 text-sm leading-relaxed">
              Beautiful, free motion visuals designed specifically for church ministries and worship experiences.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 2).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-church-300 hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-church-300 hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-church-300 hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-church-300 hover:text-white transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Connect</h4>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-church-800 hover:bg-church-700 transition text-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-church-400 text-sm">
            © {currentYear} Motion Visuals. All rights reserved.
          </p>
          <p className="text-church-400 text-sm">
            Made with <span className="text-red-400">♥</span> for churches everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
