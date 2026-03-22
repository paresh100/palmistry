export default function ConfirmationPage() {
  return (
    <div className="flex-grow flex items-center justify-center px-6 pt-24 pb-12 min-h-screen">
      {/* Ambient orbs */}
      <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[120px] animate-orb pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] bg-tertiary/3 rounded-full blur-[100px] animate-orb pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="max-w-3xl w-full text-center space-y-12 animate-fade-in-up relative z-10">
        {/* Success Icon */}
        <div className="relative flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary-container/40 via-tertiary-container/20 to-primary-container/10 flex items-center justify-center relative overflow-hidden glow-purple">
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full border border-primary/10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border border-tertiary/10" />
            <div className="relative z-10 flex flex-col items-center">
              <span
                className="material-symbols-outlined text-primary text-7xl md:text-8xl"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}
              >
                check_circle
              </span>
              <div className="mt-4 font-serif italic text-xl tracking-wide gradient-text">
                Complete.
              </div>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-headline font-serif italic font-light tracking-tighter leading-tight gradient-text-hero">
            Your Report is Ready
          </h1>
          <p className="text-on-surface-variant max-w-lg mx-auto font-body text-lg leading-relaxed">
            Your palm reading report is ready to download. A copy has
            also been sent to your email.
          </p>
        </div>

        {/* Download Button */}
        <div className="py-8 space-y-8">
          <div className="inline-block group">
            <a
              href="#"
              className="flex items-center gap-4 editorial-gradient text-white px-10 py-5 rounded-full shadow-xl shadow-primary/15 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 active:scale-95 group-hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-3xl">
                picture_as_pdf
              </span>
              <span className="font-body font-semibold text-lg tracking-wide">
                Download My Full Report
              </span>
            </a>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2 text-on-surface-variant/60 text-sm font-label uppercase tracking-widest">
              <span className="material-symbols-outlined text-base">mail</span>
              <span>A copy has been sent to your email</span>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {[
            {
              icon: 'menu_book',
              title: 'Lines & Mounts',
              desc: 'Heart, head, and life lines plus all seven mounts — analyzed and explained in plain English.',
              accent: 'tertiary',
            },
            {
              icon: 'back_hand',
              title: 'Hand Profile',
              desc: 'Your hand shape type, finger proportions, and a comparison of both palms.',
              accent: 'primary',
            },
            {
              icon: 'download',
              title: 'Yours Forever',
              desc: 'Download your report anytime. No subscription, no expiration.',
              accent: 'tertiary',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="glass-card p-8 rounded-2xl text-left space-y-4 relative overflow-hidden hover-lift"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-${card.accent}`} />
              <span className={`material-symbols-outlined text-${card.accent}`}>
                {card.icon}
              </span>
              <h3 className="font-headline font-serif italic text-xl text-on-surface">
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
