import { Link } from 'react-router-dom'

export default function ConfirmationPage() {
  return (
    <div className="flex-grow flex items-center justify-center px-6 pt-24 pb-12 min-h-screen">
      <div className="max-w-3xl w-full text-center space-y-12 animate-fade-in-up">
        {/* Celestial Illustration */}
        <div className="relative flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary/10 via-tertiary-container/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full border border-primary/10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border border-tertiary/10" />
            <div className="relative z-10 flex flex-col items-center">
              <span
                className="material-symbols-outlined text-primary text-7xl md:text-8xl"
                style={{
                  fontVariationSettings: "'FILL' 0, 'wght' 200",
                }}
              >
                auto_awesome
              </span>
              <div className="mt-4 text-primary-dim font-serif italic text-xl tracking-wide">
                Aligned.
              </div>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-headline font-serif italic font-light text-on-surface tracking-tighter leading-tight">
            Your Celestial Journey Awaits
          </h1>
          <p className="text-on-surface-variant max-w-lg mx-auto font-body text-lg leading-relaxed">
            The stars have aligned for your arrival. Your personal manuscript is
            ready for contemplation and discovery.
          </p>
        </div>

        {/* Download Button */}
        <div className="py-8 space-y-8">
          <div className="inline-block group">
            <a
              href="#"
              className="flex items-center gap-4 bg-gradient-to-r from-primary to-primary-dim text-on-primary px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 group-hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-3xl">
                picture_as_pdf
              </span>
              <span className="font-body font-semibold text-lg tracking-wide">
                Download My 20-Page Manuscript
              </span>
            </a>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2 text-on-surface-variant/80 text-sm font-label uppercase tracking-widest">
              <span className="material-symbols-outlined text-base">mail</span>
              <span>A digital copy has been sent to your email</span>
            </div>
          </div>
        </div>

        {/* Insight Prism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {[
            {
              icon: 'menu_book',
              title: 'Wisdom',
              desc: '20 pages of personalized palmistry insights and planetary alignments.',
              color: 'tertiary',
            },
            {
              icon: 'history_edu',
              title: 'Rituals',
              desc: 'Guided practices specifically tailored to your unique hand markings.',
              color: 'primary',
            },
            {
              icon: 'hourglass_empty',
              title: 'Continuity',
              desc: 'Lifetime access to your celestial archive through your account.',
              color: 'tertiary-fixed-dim',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-surface-container-low p-8 rounded-xl text-left space-y-4 relative overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-${card.color}`}
              />
              <span
                className={`material-symbols-outlined text-${card.color}`}
              >
                {card.icon}
              </span>
              <h3 className="font-headline font-serif italic text-xl text-indigo-900">
                {card.title}
              </h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
