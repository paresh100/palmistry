import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UploadPage() {
  const navigate = useNavigate()
  const [leftPalm, setLeftPalm] = useState(null)
  const [rightPalm, setRightPalm] = useState(null)
  const [leftPreview, setLeftPreview] = useState(null)
  const [rightPreview, setRightPreview] = useState(null)

  const handleFileSelect = (side) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = (e) => {
      const file = e.target.files[0]
      if (file) {
        const url = URL.createObjectURL(file)
        if (side === 'left') {
          setLeftPalm(file)
          setLeftPreview(url)
        } else {
          setRightPalm(file)
          setRightPreview(url)
        }
      }
    }
    input.click()
  }

  const handleAnalyze = () => {
    navigate('/analyzing')
  }

  const bothUploaded = leftPalm && rightPalm

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto w-full">
      {/* Ambient orbs */}
      <div className="fixed top-1/3 -right-40 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] animate-orb pointer-events-none" />
      <div className="fixed bottom-1/3 -left-40 w-[400px] h-[400px] bg-tertiary/3 rounded-full blur-[100px] animate-orb pointer-events-none" style={{ animationDelay: '3s' }} />

      {/* Header */}
      <section className="mb-16 text-center animate-fade-in-up relative z-10">
        <h1 className="font-headline font-serif italic text-5xl md:text-6xl text-on-surface mb-6 tracking-tight">
          Upload Your Palms
        </h1>
        <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
          Take a clear photo of each palm. Our analysis examines the lines,
          mounts, and shape of your hands to build your personalized report.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        {/* Left: Guidelines */}
        <div className="lg:col-span-4 space-y-8">
          <div className="glass-card-strong p-8 rounded-2xl border-l-4 border-tertiary">
            <h3 className="font-headline font-serif text-xl mb-6 text-on-surface">
              Photo Tips
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">
                  light_mode
                </span>
                <div>
                  <p className="font-label font-bold text-xs uppercase tracking-widest text-on-surface mb-1">
                    Good Lighting
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    Use natural light. Avoid flash — it washes out the fine
                    lines we need to read.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">
                  center_focus_strong
                </span>
                <div>
                  <p className="font-label font-bold text-xs uppercase tracking-widest text-on-surface mb-1">
                    Flat Hand
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    Hold your hand flat with fingers together, palm facing up.
                    Make sure we can see from fingertips to wrist.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">
                  photo_camera
                </span>
                <div>
                  <p className="font-label font-bold text-xs uppercase tracking-widest text-on-surface mb-1">
                    Clear Photo
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    Hold your phone about 8 inches above your palm. Make sure
                    the image is sharp and in focus.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Why Both Hands */}
          <div className="glass-card p-6 rounded-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary to-primary rounded-t-2xl" />
            <h4 className="font-label font-bold text-xs uppercase tracking-widest text-tertiary mb-3 mt-2">
              Why Both Hands?
            </h4>
            <p className="text-sm text-on-surface-variant">
              Your non-dominant hand shows your natural personality — the traits
              you were born with. Your dominant hand shows who you&rsquo;ve
              become through experience. Comparing both reveals your personal
              growth.
            </p>
          </div>
        </div>

        {/* Right: Upload Zones */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Palm */}
          <div className="group relative">
            <div
              onClick={() => handleFileSelect('left')}
              className={`aspect-[3/4] rounded-2xl flex flex-col items-center justify-center p-8 text-center transition-all duration-300 cursor-pointer ${
                leftPreview
                  ? 'glass-card-strong border-primary/20'
                  : 'glass-card hover:shadow-lg hover:shadow-primary/5'
              }`}
            >
              {leftPreview ? (
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                  <img
                    src={leftPreview}
                    alt="Left palm"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-6">
                    <span className="text-white font-label text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      Left Palm Ready
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-primary-container/50 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">
                      front_hand
                    </span>
                  </div>
                  <h3 className="font-headline font-serif text-xl mb-2 text-on-surface">
                    Left Hand
                  </h3>
                  <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6">
                    Non-Dominant Hand
                  </p>
                  <span className="bg-primary-container/30 text-primary font-medium px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors text-sm border border-primary/10">
                    Select Image
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Right Palm */}
          <div className="group relative">
            <div
              onClick={() => handleFileSelect('right')}
              className={`aspect-[3/4] rounded-2xl flex flex-col items-center justify-center p-8 text-center transition-all duration-300 cursor-pointer ${
                rightPreview
                  ? 'glass-card-strong border-primary/20'
                  : 'glass-card hover:shadow-lg hover:shadow-primary/5'
              }`}
            >
              {rightPreview ? (
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                  <img
                    src={rightPreview}
                    alt="Right palm"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-6">
                    <span className="text-white font-label text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      Right Palm Ready
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-primary-container/50 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">
                      pan_tool
                    </span>
                  </div>
                  <h3 className="font-headline font-serif text-xl mb-2 text-on-surface">
                    Right Hand
                  </h3>
                  <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6">
                    Dominant Hand
                  </p>
                  <span className="bg-primary-container/30 text-primary font-medium px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors text-sm border border-primary/10">
                    Select Image
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Action Bar */}
          <div className="md:col-span-2 mt-8 flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-inverse-surface text-inverse-on-surface">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-full">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <div>
                <p className="font-bold">Ready to Analyze</p>
                <p className="text-xs opacity-60">
                  {bothUploaded
                    ? 'Both palms received. Ready to generate your report.'
                    : 'Upload both palms to begin your reading.'}
                </p>
              </div>
            </div>
            <button
              onClick={handleAnalyze}
              disabled={!bothUploaded}
              className={`w-full md:w-auto px-10 py-4 editorial-gradient text-white rounded-full font-bold shadow-lg transition-all ${
                bothUploaded
                  ? 'hover:opacity-90 hover:scale-105 cursor-pointer'
                  : 'opacity-30 cursor-not-allowed'
              }`}
            >
              Analyze Palms
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
