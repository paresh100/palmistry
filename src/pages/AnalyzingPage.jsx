import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ANALYSIS_STEPS = [
  {
    label: 'Verifying scan quality...',
    description: 'Luminosity and resolution within acceptable threshold.',
    duration: 2500,
  },
  {
    label: 'Mapping palm lines...',
    description: 'Tracing heart, head, and life lines for detailed reading.',
    duration: 4000,
  },
  {
    label: 'Generating Palm Insights',
    description: 'Synthesizing line patterns and mount formations.',
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
        setTimeout(() => navigate('/insights'), 800)
      }
    }

    const duration = ANALYSIS_STEPS[currentStep].duration

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
      {/* Ambient orbs */}
      <div className="fixed top-1/4 right-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[120px] animate-orb pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-[300px] h-[300px] bg-tertiary/3 rounded-full blur-[100px] animate-orb pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Visual Scanning Module */}
        <div className="relative group animate-fade-in-up">
          <div className="absolute -inset-4 bg-primary/3 rounded-[2rem] rotate-1 scale-105 blur-sm" />
          <div className="relative glass-card-strong rounded-2xl overflow-hidden aspect-[4/5] glow-purple">
            <img
              className="w-full h-full object-cover opacity-80"
              src="/images/palm-scan.png"
              alt="Palm being scanned"
            />
            {/* Scanline Animation */}
            <div className="analyzing-scanline" />
            {/* Top accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-tertiary to-primary" />
            {/* Markers */}
            <div className="absolute top-1/4 left-1/3 w-4 h-4 rounded-full border-2 border-primary bg-white/60 backdrop-blur-sm animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full border-2 border-tertiary bg-white/60 backdrop-blur-sm animate-pulse" />
            {/* Status Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-lg px-6 py-4 rounded-xl border border-outline-variant/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  flare
                </span>
                <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">
                  Line Detection
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
              Reading <br />
              <span className="italic gradient-text">your palms.</span>
            </h1>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed max-w-md">
              Our analysis is mapping the lines and mounts of your
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
                <div key={i} className={`flex items-start gap-5 transition-opacity duration-500 ${isPending ? 'opacity-30' : ''}`}>
                  <div
                    className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isCompleted
                        ? 'bg-primary text-white'
                        : isActive
                        ? 'bg-tertiary-container border border-tertiary text-tertiary'
                        : 'bg-surface-container-high border border-outline-variant'
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
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant/40">
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
                          className="absolute inset-0 editorial-gradient rounded-full overflow-hidden transition-all duration-100"
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
          <div className="pt-8 border-t border-outline-variant/20 flex items-center gap-4">
            <span
              className="material-symbols-outlined text-tertiary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            <span className="font-headline font-serif italic text-on-surface-variant">
              Every palm tells a unique story.
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 p-12 pointer-events-none opacity-5">
        <span
          className="material-symbols-outlined text-primary text-[120px]"
          style={{ fontVariationSettings: "'wght' 100" }}
        >
          temple_hindu
        </span>
      </div>
    </div>
  )
}
