'use client'

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import DownloadModal from './components/DownloadModal'

export default function Home() {
  const [selectedVisual, setSelectedVisual] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const visuals = [
    {
      id: 1,
      title: 'Light & Glory',
      category: 'Worship',
      description: 'Ethereal light animations perfect for worship songs',
      thumbnail: '🌟',
      color: 'from-amber-400 to-orange-500',
      files: [
        { name: 'Light_Glory_4K.mp4', size: '245 MB', duration: '60s', resolution: '4K' },
        { name: 'Light_Glory_HD.mp4', size: '85 MB', duration: '60s', resolution: 'Full HD' },
        { name: 'Light_Glory_Loop.mp4', size: '65 MB', duration: '30s', resolution: 'Full HD' },
      ],
    },
    {
      id: 2,
      title: 'Water Flow',
      category: 'Baptism',
      description: 'Flowing water with spiritual undertones',
      thumbnail: '💧',
      color: 'from-blue-400 to-cyan-500',
      files: [
        { name: 'Water_Flow_4K.mp4', size: '312 MB', duration: '120s', resolution: '4K' },
        { name: 'Water_Flow_HD.mp4', size: '95 MB', duration: '120s', resolution: 'Full HD' },
      ],
    },
    {
      id: 3,
      title: 'Geometric Grace',
      category: 'Modern',
      description: 'Contemporary geometric patterns with elegant motion',
      thumbnail: '✨',
      color: 'from-purple-400 to-pink-500',
      files: [
        { name: 'Geometric_4K.mp4', size: '198 MB', duration: '45s', resolution: '4K' },
        { name: 'Geometric_HD.mp4', size: '72 MB', duration: '45s', resolution: 'Full HD' },
      ],
    },
    {
      id: 4,
      title: 'Sunrise Awakening',
      category: 'Inspirational',
      description: 'Beautiful sunrise transitions with uplifting energy',
      thumbnail: '🌅',
      color: 'from-yellow-400 to-red-500',
      files: [
        { name: 'Sunrise_4K.mp4', size: '287 MB', duration: '90s', resolution: '4K' },
        { name: 'Sunrise_HD.mp4', size: '92 MB', duration: '90s', resolution: 'Full HD' },
      ],
    },
    {
      id: 5,
      title: 'Celestial Peace',
      category: 'Peaceful',
      description: 'Calming space animations for prayer and meditation',
      thumbnail: '🌌',
      color: 'from-indigo-500 to-blue-600',
      files: [
        { name: 'Celestial_4K.mp4', size: '267 MB', duration: '60s', resolution: '4K' },
        { name: 'Celestial_HD.mp4', size: '88 MB', duration: '60s', resolution: 'Full HD' },
      ],
    },
    {
      id: 6,
      title: 'Forest Path',
      category: 'Nature',
      description: 'Walking through nature with spiritual reflection',
      thumbnail: '🌲',
      color: 'from-green-400 to-emerald-600',
      files: [
        { name: 'Forest_4K.mp4', size: '345 MB', duration: '120s', resolution: '4K' },
        { name: 'Forest_HD.mp4', size: '105 MB', duration: '120s', resolution: 'Full HD' },
      ],
    },
  ]

  const handleDownload = (visual) => {
    setSelectedVisual(visual)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedVisual(null), 300)
  }

  return (
    <div className="min-h-screen bg-church-50">
      <Header />
      <Hero />
      <Gallery visuals={visuals} onDownload={handleDownload} />
      <Footer />
      
      {isModalOpen && selectedVisual && (
        <DownloadModal 
          visual={selectedVisual} 
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}
