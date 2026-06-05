'use client'

export default function DownloadModal({ visual, onClose }) {
  const handleDownload = (file) => {
    // In a real application, this would trigger an actual download
    alert(`Downloading: ${file.name}\n\nFile: ${file.size}\nDuration: ${file.duration}\nResolution: ${file.resolution}`)
    // For actual implementation:
    // const link = document.createElement('a')
    // link.href = `/downloads/${file.name}`
    // link.download = file.name
    // document.body.appendChild(link)
    // link.click()
    // document.body.removeChild(link)
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Modal */}
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        
        {/* Header */}
        <div className={`bg-gradient-to-r ${visual.color} p-8 text-white`}>
          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="text-sm font-medium opacity-90">Download</p>
              <h2 className="text-3xl font-display font-bold mt-2">{visual.title}</h2>
              <p className="mt-2 opacity-90">{visual.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-church-50 p-4 rounded-lg">
              <p className="text-xs text-church-600 uppercase font-semibold">Category</p>
              <p className="text-lg font-display font-bold text-church-900 mt-2">{visual.category}</p>
            </div>
            <div className="bg-church-50 p-4 rounded-lg">
              <p className="text-xs text-church-600 uppercase font-semibold">Files</p>
              <p className="text-lg font-display font-bold text-church-900 mt-2">{visual.files.length}</p>
            </div>
            <div className="bg-church-50 p-4 rounded-lg">
              <p className="text-xs text-church-600 uppercase font-semibold">License</p>
              <p className="text-lg font-display font-bold text-church-900 mt-2">Free</p>
            </div>
          </div>

          {/* Files List */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-church-900 text-lg">Available Downloads</h3>
            <div className="space-y-3">
              {visual.files.map((file, index) => (
                <div key={index} className="border border-church-200 rounded-lg p-4 hover:border-church-500 transition">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-church-900 truncate">{file.name}</h4>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-church-600">
                        <span className="flex items-center gap-1">
                          <span>📦</span> {file.size}
                        </span>
                        <span className="flex items-center gap-1">
                          <span>⏱️</span> {file.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <span>🎬</span> {file.resolution}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownload(file)}
                      className="flex-shrink-0 px-6 py-2 bg-church-800 text-white rounded-lg hover:bg-church-900 transition font-semibold whitespace-nowrap"
                    >
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
            <p className="font-semibold text-blue-900 flex items-center gap-2">
              <span>ℹ️</span> About This Visual
            </p>
            <p className="text-sm text-blue-800">
              This motion visual is provided free for use in church settings. It's available in multiple formats to suit different screen setups and playback systems.
            </p>
          </div>

          {/* Usage Tips */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
            <p className="font-semibold text-green-900 flex items-center gap-2">
              <span>💡</span> Usage Tips
            </p>
            <ul className="text-sm text-green-800 space-y-1">
              <li>• Choose 4K for projection on large screens</li>
              <li>• Use Full HD for standard presentations</li>
              <li>• Loop versions are perfect for background playback</li>
              <li>• Test on your system before using in service</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-church-50 px-8 py-4 border-t border-church-200 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 text-church-800 hover:bg-church-100 rounded-lg transition font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
