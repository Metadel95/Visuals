'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-church-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">✝️</span>
            <h1 className="text-lg font-display font-bold text-church-800">
              Motion Visuals
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-church-700 hover:text-church-900 font-medium transition"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-church-700 hover:text-church-900 font-medium transition"
            >
              About
            </button>
            <a
              href="mailto:contact@example.com"
              className="px-6 py-2 bg-church-800 text-white rounded-full hover:bg-church-900 transition font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-church-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-church-200 animate-fade-in">
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-4 py-2 text-church-700 hover:bg-church-100 rounded"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-church-700 hover:bg-church-100 rounded"
            >
              About
            </button>
            <a
              href="mailto:contact@example.com"
              className="block px-4 py-2 mt-2 bg-church-800 text-white rounded hover:bg-church-900 transition font-medium text-center"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
