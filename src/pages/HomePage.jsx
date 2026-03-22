import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[90vh] flex items-center px-8 overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-orb pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-tertiary/4 rounded-full blur-[100px] animate-orb pointer-events-none" style={{ animationDelay: '4s' }} />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
          {/* Left: Copy */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-3 text-tertiary font-label text-xs uppercase tracking-[0.25em] bg-tertiary-container/40 px-5 py-2 rounded-full border border-tertiary/10">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              <span>Personality Assessment Through Palmistry</span>
            </div>

            <h1 className="font-serif italic text-6xl md:text-8xl leading-[0.95] tracking-tight">
              <span className="text-on-surface">Your personality,</span> <br />
              <span className="gradient-text-hero">read from your palms.</span>
            </h1>

            <p className="text-on-surface-variant font-body text-lg max-w-lg leading-relaxed">
              Get your{' '}
              <span className="text-on-surface font-semibold">
                20-page palm reading report
              </span>{' '}
              — a detailed personality profile based on the lines, mounts, and
              shape of your hands. No two palms are alike. No two reports are alike.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link
                to="/upload"
                className="editorial-gradient text-white px-10 py-5 rounded-full font-label font-extrabold text-sm tracking-widest uppercase shadow-xl shadow-primary/15 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300 text-center"
              >
                Get My Palm Reading
              </Link>
              <button className="flex items-center space-x-3 text-on-surface-variant font-label font-bold text-sm tracking-widest uppercase group hover:text-primary transition-colors">
                <span>See What&rsquo;s Inside</span>
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_right_alt
                </span>
              </button>
            </div>
          </div>

          {/* Right: Image Layout */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl glow-purple transform rotate-2">
              <img
                alt="Palm reading illustration"
                className="w-full h-full object-cover"
                src="/images/celestial-map.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-primary/5 to-transparent" />
            </div>

            {/* Overlaid Insight Card */}
            <div className="absolute -bottom-10 -left-10 glass-card-strong p-8 rounded-2xl max-w-xs transform -rotate-2 animate-float">
              <span
                className="material-symbols-outlined text-tertiary mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                fluid
              </span>
              <h4 className="font-serif italic text-xl mb-2 text-on-surface">
                Life Line Preview
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Your life line&rsquo;s depth and curvature indicate strong
                resilience and a pattern of bouncing back from major transitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What Your Report Covers ─── */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center space-y-4">
            <h2 className="font-serif italic text-5xl text-on-surface">
              What Your Report Covers
            </h2>
            <p className="text-on-surface-variant font-body text-lg max-w-2xl mx-auto">
              A 20-page deep dive into the lines, mounts, and features of your
              palms — organized into four detailed chapters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {/* Card 1: Heart, Head & Life Lines */}
            <div className="md:col-span-7 glass-card rounded-2xl p-12 flex flex-col justify-end relative overflow-hidden group hover-lift">
              <div className="absolute inset-0 -z-10 transition-transform duration-700 group-hover:scale-110">
                <img
                  alt="Palm lines diagram"
                  className="w-full h-full object-cover opacity-10"
                  src="/images/mystical-hands.png"
                />
              </div>
              <div className="space-y-4 relative z-10">
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label text-[10px] uppercase tracking-widest font-bold border border-primary/10">
                  Chapter 1 — 8 Pages
                </span>
                <h3 className="font-serif italic text-4xl text-on-surface">
                  Heart, Head &amp; Life Lines
                </h3>
                <p className="text-on-surface-variant max-w-md">
                  The three lines everyone can see on their palm, decoded. Your
                  heart line reveals your emotional style. Your head line shows
                  how you think and decide. Your life line maps your energy and
                  major transitions.
                </p>
              </div>
            </div>

            {/* Card 2: The Seven Mounts */}
            <div className="md:col-span-5 bg-inverse-surface rounded-2xl p-10 flex flex-col space-y-6 hover-lift">
              <span
                className="material-symbols-outlined text-tertiary-fixed text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star_rate
              </span>
              <h3 className="font-serif italic text-3xl text-inverse-on-surface">
                The Seven Mounts
              </h3>
              <p className="text-inverse-on-surface/60 text-sm leading-relaxed">
                The raised pads across your palm each map to a personality
                trait — from ambition (Jupiter) to creativity (Apollo) to
                intuition (Moon). Their prominence reveals your natural strengths.
              </p>
              <div className="mt-auto border-t border-inverse-on-surface/10 pt-6">
                <button className="text-tertiary-fixed font-label text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
                  Preview Section{' '}
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </button>
              </div>
            </div>

            {/* Card 3: Features Analyzed */}
            <div className="md:col-span-4 bg-tertiary-container rounded-2xl p-8 flex items-center justify-between hover-lift">
              <div className="space-y-1">
                <h4 className="font-body font-extrabold text-on-tertiary-container text-xs uppercase tracking-widest">
                  Per Hand
                </h4>
                <p className="font-serif italic text-3xl text-on-tertiary-container">
                  30+ Features
                </p>
              </div>
              <span className="material-symbols-outlined text-on-tertiary-container/40 text-5xl">
                search
              </span>
            </div>

            {/* Card 4: Testimonial */}
            <div className="md:col-span-8 glass-card rounded-2xl p-8 flex items-center gap-12 hover-lift">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white bg-surface-container-high flex items-center justify-center overflow-hidden"
                  >
                    <span
                      className="material-symbols-outlined text-on-surface-variant/40"
                      style={{ fontSize: '20px' }}
                    >
                      person
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p className="font-body text-on-surface text-sm font-semibold italic">
                  &ldquo;I was skeptical, but the report nailed my personality.
                  The head line section explained why I overthink everything —
                  like a user manual for my own brain.&rdquo;
                </p>
                <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mt-2 block">
                  — Sarah K., Marketing Manager
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center space-y-4">
            <h2 className="font-serif italic text-5xl text-on-surface">
              What People Are Saying
            </h2>
            <p className="text-on-surface-variant font-body text-lg max-w-2xl mx-auto">
              Real reactions from people who got their palm reading report.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-2xl flex flex-col justify-between hover-lift">
              <div className="space-y-6">
                <span
                  className="material-symbols-outlined text-tertiary/40 text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>
                <p className="font-serif italic text-xl leading-relaxed text-on-surface">
                  &ldquo;The mounts section described my personality so
                  accurately it was unsettling. It identified my ambition and
                  creativity as dominant traits, which is exactly what drives
                  my career.&rdquo;
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/20">
                <p className="font-body font-bold text-on-surface uppercase tracking-widest text-xs">
                  Julian R.
                </p>
                <p className="font-label text-on-surface-variant text-[10px] uppercase tracking-[0.15em] mt-1">
                  Creative Director
                </p>
              </div>
            </div>

            <div className="bg-primary-container/40 border border-primary/10 p-10 rounded-2xl flex flex-col justify-between transform md:-translate-y-4 glow-purple">
              <div className="space-y-6">
                <span
                  className="material-symbols-outlined text-tertiary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>
                <p className="font-serif italic text-xl leading-relaxed text-on-surface">
                  &ldquo;I sent this to three friends and every one of them said
                  the same thing: &lsquo;How did it know that about me?&rsquo;
                  My heart line analysis described my relationship patterns
                  better than my therapist.&rdquo;
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-primary/10">
                <p className="font-body font-bold text-on-surface uppercase tracking-widest text-xs">
                  Maya T.
                </p>
                <p className="font-label text-on-surface-variant text-[10px] uppercase tracking-[0.15em] mt-1">
                  Product Designer
                </p>
              </div>
            </div>

            <div className="glass-card p-10 rounded-2xl flex flex-col justify-between hover-lift">
              <div className="space-y-6">
                <span
                  className="material-symbols-outlined text-tertiary/40 text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>
                <p className="font-serif italic text-xl leading-relaxed text-on-surface">
                  &ldquo;I&rsquo;ve done Myers-Briggs, Enneagram, all of it.
                  This was different because it&rsquo;s based on something
                  physically unique to me. The hand shape analysis alone was
                  worth the price.&rdquo;
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/20">
                <p className="font-body font-bold text-on-surface uppercase tracking-widest text-xs">
                  Marcus L.
                </p>
                <p className="font-label text-on-surface-variant text-[10px] uppercase tracking-[0.15em] mt-1">
                  Strategy Consultant
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-32 px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto glass-card-strong rounded-2xl p-16 relative text-center glow-purple">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary via-tertiary to-primary rounded-full" />
          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <h2 className="font-serif italic text-5xl gradient-text-hero">
              Ready to read your palms?
            </h2>
            <p className="text-on-surface-variant text-lg">
              Upload two photos of your palms and get your personalized 20-page
              report in minutes. Secure, private, and unique to your hands.
            </p>
            <div className="pt-8">
              <Link
                to="/upload"
                className="inline-block editorial-gradient text-white px-16 py-6 rounded-full font-label font-extrabold text-sm tracking-[0.2em] uppercase shadow-2xl shadow-primary/15 hover:shadow-primary/30 hover:scale-105 transition-all duration-300 active:scale-95"
              >
                Get My Palm Reading
              </Link>
            </div>
            <div className="pt-12 flex justify-center items-center space-x-8 text-on-surface-variant/30">
              <span className="material-symbols-outlined text-3xl">
                fingerprint
              </span>
              <span className="material-symbols-outlined text-3xl">
                security
              </span>
              <span className="material-symbols-outlined text-3xl">
                psychology
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
