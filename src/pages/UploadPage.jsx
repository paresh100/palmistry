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
      {/* Header */}
      <section className="mb-16 text-center animate-fade-in-up">
        <h1 className="font-headline font-serif italic text-5xl md:text-6xl text-on-surface mb-6 tracking-tight">
          Initiate the Vision
        </h1>
        <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
          Your journey begins with clarity. Upload high-resolution captures of
          your palms to allow the Oracle to decipher the celestial geometry
          within your lines.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Guidelines */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-tertiary">
            <h3 className="font-headline font-serif text-xl mb-6 text-on-surface">
              Guidance for Clarity
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">
                  light_mode
                </span>
                <div>
                  <p className="font-label font-bold text-xs uppercase tracking-widest text-on-surface mb-1">
                    Illumination
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    Use soft, natural daylight. Avoid harsh shadows or direct
                    flash.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">
                  center_focus_strong
                </span>
                <div>
                  <p className="font-label font-bold text-xs uppercase tracking-widest text-on-surface mb-1">
                    Precision
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    Keep your hand flat and fingers together. Ensure the entire
                    palm is visible.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">
                  photo_camera
                </span>
                <div>
                  <p className="font-label font-bold text-xs uppercase tracking-widest text-on-surface mb-1">
                    Resolution
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    Hold the camera parallel to your palm. Focus on the major
                    lines.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Insight Prism */}
          <div className="bg-surface-container-lowest p-6 rounded-xl relative shadow-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-tertiary rounded-t-xl" />
            <h4 className="font-label font-bold text-xs uppercase tracking-widest text-tertiary mb-3 mt-2">
              The Oracle&rsquo;s Tip
            </h4>
            <p className="text-sm text-on-surface italic">
              &ldquo;The left hand reveals your potential at birth; the right
              hand shows what you have made of it.&rdquo;
            </p>
          </div>
        </div>

        {/* Right: Upload Zones */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Palm */}
          <div className="group relative">
            <div
              onClick={() => handleFileSelect('left')}
              className={`aspect-[3/4] rounded-xl bg-surface-container-lowest border-2 border-dashed flex flex-col items-center justify-center p-8 text-center transition-all cursor-pointer ${
                leftPreview
                  ? 'border-primary/50 bg-white'
                  : 'border-outline-variant/30 hover:border-primary/50 hover:bg-white'
              }`}
            >
              {leftPreview ? (
                <div className="w-full h-full relative rounded-lg overflow-hidden">
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
                  <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      front_hand
                    </span>
                  </div>
                  <h3 className="font-headline font-serif text-xl mb-2">
                    The Past
                  </h3>
                  <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6">
                    Left Palm Capture
                  </p>
                  <span className="bg-surface-container-high text-primary font-medium px-6 py-3 rounded-full hover:bg-primary hover:text-on-primary transition-colors text-sm">
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
              className={`aspect-[3/4] rounded-xl bg-surface-container-lowest border-2 border-dashed flex flex-col items-center justify-center p-8 text-center transition-all cursor-pointer ${
                rightPreview
                  ? 'border-primary/50 bg-white'
                  : 'border-outline-variant/30 hover:border-primary/50 hover:bg-white'
              }`}
            >
              {rightPreview ? (
                <div className="w-full h-full relative rounded-lg overflow-hidden">
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
                  <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      pan_tool
                    </span>
                  </div>
                  <h3 className="font-headline font-serif text-xl mb-2">
                    The Future
                  </h3>
                  <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6">
                    Right Palm Capture
                  </p>
                  <span className="bg-surface-container-high text-primary font-medium px-6 py-3 rounded-full hover:bg-primary hover:text-on-primary transition-colors text-sm">
                    Select Image
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Action Bar */}
          <div className="md:col-span-2 mt-8 flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-inverse-surface rounded-xl text-on-primary">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-full">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <div>
                <p className="font-bold">Neural Synthesis Ready</p>
                <p className="text-xs opacity-70">
                  {bothUploaded
                    ? 'Both images received. Ready to begin analysis.'
                    : 'AI will begin analysis once both images are present.'}
                </p>
              </div>
            </div>
            <button
              onClick={handleAnalyze}
              disabled={!bothUploaded}
              className={`w-full md:w-auto px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full font-bold shadow-lg transition-all ${
                bothUploaded
                  ? 'hover:opacity-90 hover:scale-105 cursor-pointer'
                  : 'opacity-50 cursor-not-allowed'
              }`}
            >
              Analyze Palms
            </button>
          </div>
        </div>
      </div>

      {/* Decorative */}
      <div className="mt-24 opacity-20 flex justify-center">
        <img
          className="w-64 grayscale mix-blend-multiply"
          src="/images/celestial-decorative.png"
          alt="Celestial decoration"
        />
      </div>
    </div>
  )
}
