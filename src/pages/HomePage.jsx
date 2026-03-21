import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[921px] flex items-center px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left: Copy */}
          <div className="z-10 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 text-tertiary font-label text-xs uppercase tracking-[0.2em]">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              <span>Celestial Guidance System</span>
            </div>

            <h1 className="font-serif italic text-6xl md:text-8xl text-on-surface leading-tight tracking-tight">
              Your destiny, <br />
              <span className="text-primary">unveiled.</span>
            </h1>

            <p className="text-on-surface-variant font-body text-xl max-w-lg leading-relaxed">
              Experience our{' '}
              <span className="text-on-surface font-semibold italic">
                20-page comprehensive report
              </span>
              . A deep synthesis of ancient palmistry and modern analytical
              precision tailored to your unique lines.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link
                to="/upload"
                className="bg-gradient-to-br from-primary to-primary-dim text-on-primary px-10 py-5 rounded-full font-label font-extrabold text-sm tracking-widest uppercase shadow-xl hover:scale-105 transition-transform text-center"
              >
                Get Started
              </Link>
              <button className="flex items-center space-x-3 text-primary font-label font-bold text-sm tracking-widest uppercase group">
                <span>The Process</span>
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_right_alt
                </span>
              </button>
            </div>
          </div>

          {/* Right: Image Layout */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl transform rotate-2">
              <img
                alt="Celestial Map"
                className="w-full h-full object-cover"
                src="/images/celestial-map.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Overlaid Insight Prism Card */}
            <div className="absolute -bottom-10 -left-10 bg-surface-container-lowest p-8 rounded-xl shadow-2xl max-w-xs border-t-4 border-tertiary transform -rotate-2 animate-float">
              <span
                className="material-symbols-outlined text-tertiary mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                fluid
              </span>
              <h4 className="font-serif italic text-xl mb-2">
                The Life Line Insight
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Your vitality curve suggests a period of significant creative
                expansion starting this lunar cycle.
              </p>
            </div>
          </div>
        </div>

        {/* Background Decorative */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* ─── Bento Grid Section ─── */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center space-y-4">
            <h2 className="font-serif italic text-5xl text-on-surface">
              The Celestial Anthology
            </h2>
            <p className="text-on-surface-variant font-body text-lg max-w-2xl mx-auto">
              Our 20-page report covers every facet of your journey through
              three primary lenses of wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {/* Bento 1: Path of the Soul */}
            <div className="md:col-span-7 bg-surface-container-lowest rounded-xl p-12 flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute inset-0 -z-10 transition-transform duration-700 group-hover:scale-110">
                <img
                  alt="Mystical Hands"
                  className="w-full h-full object-cover opacity-10"
                  src="/images/mystical-hands.png"
                />
              </div>
              <div className="space-y-4">
                <span className="bg-primary/10 text-primary px-4 py-1 rounded-full font-label text-[10px] uppercase tracking-widest font-bold">
                  Volume I
                </span>
                <h3 className="font-serif italic text-4xl text-on-surface">
                  Path of the Soul
                </h3>
                <p className="text-on-surface-variant max-w-md">
                  An 8-page exploration of your core essence, character
                  strengths, and the spiritual blueprints etched into your palms
                  from birth.
                </p>
              </div>
            </div>

            {/* Bento 2: Temporal Flux */}
            <div className="md:col-span-5 bg-inverse-surface rounded-xl p-10 flex flex-col space-y-6">
              <span
                className="material-symbols-outlined text-tertiary-fixed text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                stars
              </span>
              <h3 className="font-serif italic text-3xl text-surface-bright">
                Temporal Flux
              </h3>
              <p className="text-surface-variant text-sm leading-relaxed">
                Mapping the intersections of your heart and head lines to
                forecast upcoming professional and emotional shifts over the
                next 18 months.
              </p>
              <div className="mt-auto border-t border-surface-variant/20 pt-6">
                <button className="text-tertiary-fixed font-label text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                  Preview Section{' '}
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </button>
              </div>
            </div>

            {/* Bento 3: Accuracy */}
            <div className="md:col-span-4 bg-tertiary-container rounded-xl p-8 flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-body font-extrabold text-on-tertiary-container text-xs uppercase tracking-widest">
                  Accuracy Rate
                </h4>
                <p className="font-serif italic text-3xl text-on-tertiary-container">
                  98.4%
                </p>
              </div>
              <span className="material-symbols-outlined text-on-tertiary-container text-5xl">
                verified
              </span>
            </div>

            {/* Bento 4: Testimonial preview */}
            <div className="md:col-span-8 bg-surface-container-highest rounded-xl p-8 flex items-center gap-12">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-12 h-12 rounded-full border-2 border-surface-container-highest bg-gray-${
                      i * 100 + 100
                    } flex items-center justify-center overflow-hidden`}
                  >
                    <span
                      className="material-symbols-outlined text-gray-500"
                      style={{ fontSize: '20px' }}
                    >
                      person
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p className="font-body text-on-surface text-sm font-semibold italic">
                  &ldquo;The clarity I found in my report was transformative. It
                  felt like someone finally read my internal compass.&rdquo;
                </p>
                <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                  — Helena V., Digital Architect
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center space-y-4">
            <h2 className="font-serif italic text-5xl text-on-surface">
              Voices from the Path
            </h2>
            <p className="text-on-surface-variant font-body text-lg max-w-2xl mx-auto">
              Reflections from those who have journeyed through their 20-page
              celestial anthology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-6">
                <span
                  className="material-symbols-outlined text-tertiary/40 text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>
                <p className="font-serif italic text-xl leading-relaxed text-on-surface">
                  &ldquo;The depth of Volume II: Temporal Flux predicted a
                  career shift I was already feeling but hadn&rsquo;t
                  articulated. Truly uncanny.&rdquo;
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/10">
                <p className="font-body font-bold text-on-surface uppercase tracking-widest text-xs">
                  Julian R.
                </p>
                <p className="font-label text-on-surface-variant text-[10px] uppercase tracking-[0.15em] mt-1">
                  Creative Director
                </p>
              </div>
            </div>

            {/* Testimonial 2 (featured) */}
            <div className="bg-inverse-surface p-10 rounded-xl shadow-xl flex flex-col justify-between transform md:-translate-y-4">
              <div className="space-y-6">
                <span
                  className="material-symbols-outlined text-tertiary-fixed text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>
                <p className="font-serif italic text-xl leading-relaxed text-surface-bright">
                  &ldquo;I was skeptical of digital readings until I saw the
                  precision of my heart line analysis. It&rsquo;s a 20-page
                  mirror for the soul.&rdquo;
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-surface-variant/20">
                <p className="font-body font-bold text-surface-bright uppercase tracking-widest text-xs">
                  Helena V.
                </p>
                <p className="font-label text-surface-variant text-[10px] uppercase tracking-[0.15em] mt-1">
                  Digital Architect
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-6">
                <span
                  className="material-symbols-outlined text-tertiary/40 text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>
                <p className="font-serif italic text-xl leading-relaxed text-on-surface">
                  &ldquo;Finally, a tool that bridges ancient wisdom with modern
                  psychological insights. The Soul Path section changed my
                  perspective.&rdquo;
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/10">
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
        <div className="max-w-5xl mx-auto bg-surface-container-lowest rounded-xl p-16 relative shadow-sm text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-tertiary rounded-full" />
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="font-serif italic text-5xl text-on-surface">
              Begin your alchemy.
            </h2>
            <p className="text-on-surface-variant text-lg">
              Your report is waiting. Secure, private, and deeply personal.
              Start your scan and receive your 20-page celestial anthology in
              minutes.
            </p>
            <div className="pt-8">
              <Link
                to="/upload"
                className="inline-block bg-gradient-to-br from-primary to-primary-dim text-on-primary px-16 py-6 rounded-full font-label font-extrabold text-sm tracking-[0.2em] uppercase shadow-2xl hover:scale-105 transition-transform active:scale-95"
              >
                Generate My Report
              </Link>
            </div>
            <div className="pt-12 flex justify-center items-center space-x-8 opacity-40 grayscale">
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
