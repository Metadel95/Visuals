'use client'

import { useState } from 'react'

export default function VisualCard({ visual, onDownload }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-xl bg-church-50 border border-church-200 transition-all duration-300 hover:border-church-500 hover:shadow-lg">
        
        {/* Image/Thumbnail Area */}
        <div className={`relative w-full aspect-video bg-gradient-to-br ${visual.color} overflow-hidden flex items-center justify-center transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}>
          <span className="text-8xl opacity-80">{visual.thumbnail}</span>
          
          {/* Overlay on Hover */}
          <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={() => onDownload(visual)}
              className="px-6 py-3 bg-white text-church-800 rounded-lg font-semibold hover:bg-church-50 transition transform"
            >
              Download
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-display font-bold text-church-900">
                {visual.title}
              </h3>
              <p className="text-sm text-church-600 mt-1">{visual.category}</p>
            </div>
          </div>

          <p className="text-sm text-church-700 leading-relaxed">
            {visual.description}
          </p>

          {/* File Count */}
          <div className="pt-3 border-t border-church-200">
            <p className="text-xs text-church-600 font-medium">
              {visual.files.length} {visual.files.length === 1 ? 'file' : 'files'} available
            </p>
          </div>

          {/* Download Button (Mobile) */}
          <button
            onClick={() => onDownload(visual)}
            className="w-full md:hidden mt-4 px-4 py-2 bg-church-800 text-white rounded-lg hover:bg-church-900 transition font-semibold"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  )
}
