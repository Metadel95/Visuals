'use client'

import { useState } from 'react'
import VisualCard from './VisualCard'

export default function Gallery({ visuals, onDownload }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Worship', 'Baptism', 'Modern', 'Inspirational', 'Peaceful', 'Nature']

  const filteredVisuals = selectedCategory === 'All'
    ? visuals
    : visuals.filter(v => v.category === selectedCategory)

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-church-900 mb-4">
            Motion Visual Library
          </h2>
          <p className="text-lg text-church-700 max-w-2xl mx-auto">
            Choose from our carefully curated collection of high-quality motion visuals
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-16 flex flex-wrap gap-3 justify-center animate-slide-up">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedCategory === category
                  ? 'bg-church-800 text-white'
                  : 'bg-church-100 text-church-800 hover:bg-church-200'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Visuals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVisuals.map((visual, index) => (
            <div
              key={visual.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <VisualCard
                visual={visual}
                onDownload={onDownload}
              />
            </div>
          ))}
        </div>

        {/* About Section */}
        <div id="about" className="mt-32 pt-16 border-t border-church-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl font-display font-bold text-church-900">
                Perfect for Any Service
              </h3>
              <p className="text-lg text-church-700 leading-relaxed">
                Whether you're enhancing worship experiences, promoting events, or creating a welcoming atmosphere, our motion visuals are designed to elevate your church's presentation.
              </p>
              <ul className="space-y-4">
                {[
                  '4K and Full HD resolutions',
                  'Easy-to-use formats for any screen',
                  'Loopable versions available',
                  'Royalty-free for church use',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-church-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-8 text-white min-h-64 flex items-center justify-center">
                <p className="text-6xl text-center">🎬</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
