'use client'

export default function Hero() {
  const scrollToGallery = () => {
    const gallery = document.getElementById('gallery')
    if (gallery) {
      gallery.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-church-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Main content */}
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-church-900 leading-tight">
            Beautiful Motion
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              for Worship
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-church-700 max-w-2xl mx-auto leading-relaxed">
            High-quality motion visuals designed specifically for church screens. From worship experiences to announcements, we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={scrollToGallery}
              className="px-8 py-4 bg-church-800 text-white rounded-lg hover:bg-church-900 transition font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Browse Visuals
            </button>
            <button
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-church-800 text-church-800 rounded-lg hover:bg-church-50 transition font-semibold text-lg"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-24 pt-16 border-t border-church-200">
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-4xl font-display font-bold text-church-800">6+</p>
            <p className="text-church-600 mt-2">Visual Sets</p>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-4xl font-display font-bold text-church-800">2K+</p>
            <p className="text-church-600 mt-2">Downloads</p>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-4xl font-display font-bold text-church-800">100%</p>
            <p className="text-church-600 mt-2">Free</p>
          </div>
        </div>
      </div>
    </section>
  )
}
