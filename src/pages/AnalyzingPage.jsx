import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ANALYSIS_STEPS = [
  {
    label: 'Verifying scan quality...',
    description: 'Luminosity and resolution within acceptable threshold.',
    duration: 2500,
  },
  {
    label: 'Determining eligibility...',
    description: 'Analyzing depth of major lines for a detailed reading.',
    duration: 4000,
  },
  {
    label: 'Generating Oracle Insights',
    description: 'Synthesizing celestial topography data.',
    duration: 3000,
  },
]

export default function AnalyzingPage() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let stepTimeout
    let progressInterval

    const advanceStep = () => {
      if (currentStep < ANALYSIS_STEPS.length - 1) {
        setCurrentStep((prev) => prev + 1)
        setProgress(0)
      } else {
        // All steps complete, navigate to insights
        setTimeout(() => navigate('/insights'), 800)
      }
    }

    const duration = ANALYSIS_STEPS[currentStep].duration

    // Animate progress
    progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + 100 / (duration / 50)
      })
    }, 50)

    stepTimeout = setTimeout(advanceStep, duration)

    return () => {
      clearTimeout(stepTimeout)
      clearInterval(progressInterval)
    }
  }, [currentStep, navigate])

  return (
    <div className="flex-grow flex flex-col items-center justify-center pt-24 pb-12 px-6 min-h-screen">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Visual Scanning Module */}
        <div className="relative group animate-fade-in-up">
          <div className="absolute -inset-4 bg-surface-container-high rounded-[2rem] rotate-1 scale-105 opacity-30" />
          <div className="relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl aspect-[4/5] border border-outline-variant/10">
            <img
              className="w-full h-full object-cover opacity-80 grayscale-[0.3]"
              src="/images/palm-scan.png"
              alt="Palm being scanned"
            />
            {/* Scanline Animation */}
            <div className="analyzing-scanline" />
            {/* Top accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-tertiary" />
            {/* Markers */}
            <div className="absolute top-1/4 left-1/3 w-4 h-4 rounded-full border-2 border-primary-container bg-white/40 backdrop-blur-sm animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full border-2 border-tertiary-fixed bg-white/40 backdrop-blur-sm animate-pulse" />
            {/* Status Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-surface/80 backdrop-blur-lg px-6 py-4 rounded-xl border border-outline-variant/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  flare
                </span>
                <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">
                  Optical Calibration
                </span>
              </div>
              <span className="text-xs font-label text-primary font-bold animate-pulse">
                ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* Right: Status */}
        <div className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-4">
            <h1 className="font-headline font-serif text-5xl lg:text-6xl text-on-surface leading-tight -tracking-[0.02em]">
              Consulting <br />
              <span className="italic text-primary">the Interface.</span>
            </h1>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed max-w-md">
              Our neural network is mapping the celestial geography of your
              palm. This precision requires a moment of stillness.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {ANALYSIS_STEPS.map((step, i) => {
              const isCompleted = i < currentStep
              const isActive = i === currentStep
              const isPending = i > currentStep

              return (
                <div key={i} className={`flex items-start gap-5 ${isPending ? 'opacity-40' : ''}`}>
                  <div
                    className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center ${
                      isCompleted
                        ? 'bg-primary-container text-on-primary-container'
                        : isActive
                        ? 'bg-tertiary-container/30 border border-tertiary-fixed text-tertiary'
                        : 'bg-surface-container border border-outline-variant'
                    }`}
                  >
                    {isCompleted ? (
                      <span
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check
                      </span>
                    ) : isActive ? (
                      <span className="material-symbols-outlined text-[16px] animate-spin">
                        cyclone
                      </span>
                    ) : (
                      <span className="material-symbols-outlined text-[16px]">
                        hourglass_empty
                      </span>
                    )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-label font-bold text-on-surface uppercase tracking-wide text-sm">
                      {step.label}
                    </h3>
                    <p className="text-on-surface-variant text-sm mt-1">
                      {step.description}
                    </p>
                    {isActive && (
                      <div className="mt-4 h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden relative">
                        <div
                          className="absolute inset-0 bg-primary rounded-full overflow-hidden transition-all duration-100"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        >
                          <div className="progress-shimmer w-full h-full" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Flourish */}
          <div className="pt-8 border-t border-outline-variant/10 flex items-center gap-4">
            <span
              className="material-symbols-outlined text-tertiary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            <span className="font-headline font-serif italic text-on-surface-variant">
              The soul&rsquo;s signature is unique.
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 p-12 pointer-events-none opacity-10">
        <span
          className="material-symbols-outlined text-[120px]"
          style={{ fontVariationSettings: "'wght' 100" }}
        >
          temple_hindu
        </span>
      </div>
      <div className="fixed bottom-0 left-0 p-12 pointer-events-none opacity-5">
        <span
          className="material-symbols-outlined text-[180px]"
          style={{ fontVariationSettings: "'wght' 100" }}
        >
          star_half
        </span>
      </div>
    </div>
  )
}
