import { Link } from 'react-router-dom'

export default function InsightsPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-16 md:mb-24 max-w-3xl animate-fade-in-up">
        <span className="font-label text-sm uppercase tracking-[0.2em] text-primary mb-4 block">
          The Celestial Editorial
        </span>
        <h1 className="font-headline font-serif text-5xl md:text-7xl font-bold text-on-surface leading-tight -tracking-[0.02em] italic">
          Your Path is Written in the Stars and Your Palms.
        </h1>
      </header>

      {/* Insights Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
        {/* Main Preview */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-10 flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-1/2 aspect-[3/4] rounded-xl overflow-hidden relative">
            <img
              className="w-full h-full object-cover"
              src="/images/palm-insights.png"
              alt="Palm insights"
            />
            <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-headline font-serif text-3xl mb-6">
              Major heart line detected
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8 text-lg">
              The curvature of your heart line suggests a deep capacity for
              emotional resilience and an upcoming period of interpersonal
              growth. We&rsquo;ve identified 14 unique markers that indicate a
              significant shift in your professional alignment.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-on-surface-variant">
                <span className="material-symbols-outlined text-tertiary">
                  flare
                </span>
                <span className="font-label text-sm">
                  Vitality Index: High
                </span>
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant">
                <span className="material-symbols-outlined text-tertiary">
                  storm
                </span>
                <span className="font-label text-sm">
                  Emotional Depth: Expansive
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Side Teasers */}
        <div className="md:col-span-4 space-y-8">
          <div className="bg-surface-container-low rounded-xl p-8 border-l-4 border-tertiary">
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 block">
              Quick Insight
            </span>
            <h3 className="font-headline font-serif text-xl mb-3">
              Mount of Apollo
            </h3>
            <p className="text-on-surface-variant text-sm">
              Your artistic temperament is reaching a zenith. A creative venture
              awaits in the coming moon cycle.
            </p>
          </div>
          <div className="bg-inverse-surface text-on-secondary rounded-xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <span className="font-label text-[10px] uppercase tracking-widest opacity-60 mb-2 block">
                Dark Moon Insight
              </span>
              <h3 className="font-headline font-serif text-xl mb-3 text-white">
                Hidden Shadows
              </h3>
              <p className="opacity-80 text-sm">
                Reveal the unconscious patterns that have been holding back your
                career trajectory.
              </p>
              <Link
                to="/checkout"
                className="mt-4 block font-label text-xs text-tertiary-fixed underline underline-offset-4 cursor-pointer"
              >
                Unlock with Pro
              </Link>
            </div>
            <span
              className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-10"
              style={{ fontVariationSettings: "'FILL' 1", fontSize: '120px' }}
            >
              bedtime
            </span>
          </div>
        </div>
      </div>

      {/* Paywall / Upgrade */}
      <section className="relative bg-surface-container-low rounded-xl overflow-hidden py-20 px-8 md:px-20">
        <div className="absolute inset-0 editorial-gradient opacity-5" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Your 20-Page Celestial Manuscript.
            </h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
              Go beyond the surface. Our advanced AI alchemists have synthesized
              your palm topography into a comprehensive editorial report. This
              is not just a reading; it is a roadmap for your next decade.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-12">
              {[
                {
                  title: 'Health & Vitality',
                  desc: 'Complete lifespan analysis.',
                },
                {
                  title: 'Karmic Debt',
                  desc: 'Patterns from past lineage.',
                },
                {
                  title: 'Wealth Forecast',
                  desc: 'Financial peaks and troughs.',
                },
                {
                  title: 'The 12 Houses',
                  desc: 'Astrological palm alignment.',
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <div>
                    <span className="block font-bold text-sm">
                      {item.title}
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Card */}
          <div className="flex flex-col items-center justify-center p-8 bg-surface-container-lowest rounded-xl shadow-2xl shadow-primary/5 border-[0.5px] border-outline-variant/15">
            <div className="w-full text-center mb-8">
              <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2 block">
                One-Time Offering
              </span>
              <div className="flex justify-center items-end gap-1">
                <span className="text-2xl font-headline font-serif mb-2 text-on-surface-variant">
                  $
                </span>
                <span className="text-7xl font-headline font-serif font-bold text-primary">
                  29
                </span>
                <span className="text-lg font-label text-on-surface-variant mb-2">
                  .99
                </span>
              </div>
              <p className="text-sm text-on-surface-variant mt-4">
                Lifetime access to your digital manuscript.
              </p>
            </div>
            <Link
              to="/checkout"
              className="w-full editorial-gradient text-on-primary py-5 rounded-full font-label text-sm uppercase tracking-widest font-bold shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform active:scale-95 text-center block"
            >
              Purchase Full Report
            </Link>
            <div className="mt-8 flex items-center gap-6 opacity-40">
              <span className="material-symbols-outlined">payments</span>
              <span className="material-symbols-outlined">shield</span>
              <span className="material-symbols-outlined">verified_user</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
