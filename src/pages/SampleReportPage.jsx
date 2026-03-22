import { Link } from 'react-router-dom'

export default function SampleReportPage() {
  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-5xl mx-auto relative">
      {/* Ambient orbs */}
      <div className="fixed top-1/4 -right-32 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[120px] animate-orb pointer-events-none" />
      <div className="fixed bottom-1/3 -left-32 w-[400px] h-[400px] bg-tertiary/3 rounded-full blur-[100px] animate-orb pointer-events-none" style={{ animationDelay: '4s' }} />

      {/* Sample Badge */}
      <div className="fixed top-28 right-6 z-40 bg-tertiary/90 text-white px-4 py-2 rounded-full font-label text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg">
        Sample Report
      </div>

      {/* ─── Cover ─── */}
      <header className="text-center mb-24 animate-fade-in-up relative z-10">
        <span className="font-label text-sm uppercase tracking-[0.2em] text-primary mb-4 block">
          Sample Palm Reading Report
        </span>
        <h1 className="font-serif italic text-5xl md:text-7xl leading-tight tracking-tight mb-6">
          <span className="gradient-text-hero">The Alchemist</span>
        </h1>
        <p className="font-serif italic text-2xl text-on-surface-variant mb-8">
          Comprehensive Palm Reading Report
        </p>
        <div className="flex justify-center items-center gap-8 text-on-surface-variant/40 text-sm font-label uppercase tracking-widest">
          <span>Prepared for: Jane Doe</span>
          <span className="w-1 h-1 rounded-full bg-on-surface-variant/30" />
          <span>March 2026</span>
        </div>
        <div className="mt-8 glass-card inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm text-on-surface-variant">
          <span className="material-symbols-outlined text-tertiary text-base">info</span>
          This is a sample report using example data to show what your report will look like.
        </div>
      </header>

      {/* ─── Table of Contents ─── */}
      <section className="glass-card-strong rounded-2xl p-10 md:p-14 mb-16 relative z-10">
        <h2 className="font-serif italic text-3xl text-on-surface mb-8">Table of Contents</h2>
        <div className="space-y-4">
          {[
            { num: '01', title: 'Hand Profile & Shape Classification', page: 'Earth Type' },
            { num: '02', title: 'Heart Line Analysis', page: 'Emotional Style' },
            { num: '03', title: 'Head Line Analysis', page: 'Thinking Patterns' },
            { num: '04', title: 'Life Line Analysis', page: 'Energy & Vitality' },
            { num: '05', title: 'The Seven Mounts', page: 'Personality Map' },
            { num: '06', title: 'Minor Lines', page: 'Fate, Sun & More' },
            { num: '07', title: 'Left vs. Right Comparison', page: 'Nature vs. Nurture' },
            { num: '08', title: 'Personal Summary', page: 'Your Profile' },
          ].map((item) => (
            <div key={item.num} className="flex items-center gap-6 py-3 border-b border-outline-variant/10 last:border-0">
              <span className="font-label text-primary font-bold text-sm w-8">{item.num}</span>
              <span className="font-body text-on-surface font-medium flex-grow">{item.title}</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50">{item.page}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Section 1: Hand Profile ─── */}
      <section className="mb-20 relative z-10 animate-fade-in-up">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-label text-primary font-bold text-sm">01</span>
          <div className="h-px flex-grow bg-primary/20" />
        </div>
        <h2 className="font-serif italic text-4xl md:text-5xl gradient-text-hero mb-6">
          Hand Profile &amp; Shape Classification
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-3xl">
          Your hand shape is the foundation of any palm reading. It tells us about your
          temperament, how you interact with the world, and your core approach to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="glass-card-strong rounded-2xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">landscape</span>
              <h3 className="font-serif italic text-2xl text-on-surface">Your Type: Earth Hand</h3>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              Your palm is broad and square with short, sturdy fingers. This is the hallmark of
              an <strong className="text-on-surface">Earth hand</strong> — people with this shape tend to be grounded,
              practical, and reliable. You prefer tangible results over abstract ideas and are
              often described as the &ldquo;rock&rdquo; in your social circle.
            </p>
            <div className="pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Palm Shape</span>
                <span className="text-on-surface font-medium">Square, wide</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Finger Length</span>
                <span className="text-on-surface font-medium">Short relative to palm</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Skin Texture</span>
                <span className="text-on-surface font-medium">Firm, thick</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h3 className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50 mb-2">
              The Four Hand Types
            </h3>
            {[
              { type: 'Earth', icon: 'landscape', desc: 'Square palm, short fingers — practical & grounded', active: true },
              { type: 'Air', icon: 'air', desc: 'Square palm, long fingers — intellectual & curious', active: false },
              { type: 'Water', icon: 'water_drop', desc: 'Rectangular palm, long fingers — sensitive & intuitive', active: false },
              { type: 'Fire', icon: 'local_fire_department', desc: 'Rectangular palm, short fingers — energetic & bold', active: false },
            ].map((hand) => (
              <div
                key={hand.type}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                  hand.active
                    ? 'bg-primary/10 border border-primary/20'
                    : 'bg-surface-container-low border border-outline-variant/10'
                }`}
              >
                <span className={`material-symbols-outlined ${hand.active ? 'text-primary' : 'text-on-surface-variant/40'}`}>
                  {hand.icon}
                </span>
                <div>
                  <span className={`font-body font-semibold text-sm ${hand.active ? 'text-primary' : 'text-on-surface'}`}>
                    {hand.type}
                  </span>
                  <p className="text-xs text-on-surface-variant">{hand.desc}</p>
                </div>
                {hand.active && (
                  <span className="material-symbols-outlined text-primary ml-auto text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8">
          <h3 className="font-serif italic text-xl text-on-surface mb-4">Finger Proportions</h3>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            Your index finger (Jupiter finger) is slightly longer than your ring finger (Apollo finger),
            which suggests a personality that leans toward leadership and ambition over risk-taking.
            Your pinky (Mercury finger) reaches past the top crease of your ring finger — an indicator
            of strong communication skills.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { finger: 'Index (Jupiter)', trait: 'Leadership', strength: 'Strong' },
              { finger: 'Middle (Saturn)', trait: 'Responsibility', strength: 'Moderate' },
              { finger: 'Ring (Apollo)', trait: 'Creativity', strength: 'Strong' },
              { finger: 'Pinky (Mercury)', trait: 'Communication', strength: 'Very Strong' },
            ].map((f) => (
              <div key={f.finger} className="bg-surface-container-low rounded-xl p-4 text-center space-y-2">
                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50 block">{f.finger}</span>
                <span className="font-body font-semibold text-on-surface block">{f.trait}</span>
                <span className={`font-label text-xs ${f.strength === 'Very Strong' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                  {f.strength}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 2: Heart Line ─── */}
      <section className="mb-20 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-label text-primary font-bold text-sm">02</span>
          <div className="h-px flex-grow bg-primary/20" />
        </div>
        <h2 className="font-serif italic text-4xl md:text-5xl gradient-text-hero mb-6">
          Heart Line Analysis
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-3xl">
          The heart line runs across the top of your palm and is the first line most palmists
          examine. It reflects your emotional nature — how you process feelings, connect with
          others, and approach relationships.
        </p>

        <div className="glass-card-strong rounded-2xl p-10 md:p-14 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center space-y-3 p-6">
              <span className="material-symbols-outlined text-tertiary text-4xl">favorite</span>
              <h4 className="font-body font-bold text-on-surface text-sm uppercase tracking-widest">Emotional Style</h4>
              <p className="font-serif italic text-2xl text-primary">Expressive</p>
              <p className="text-xs text-on-surface-variant">You wear your emotions openly and value authenticity in feelings.</p>
            </div>
            <div className="text-center space-y-3 p-6 border-x border-outline-variant/10">
              <span className="material-symbols-outlined text-tertiary text-4xl">diversity_1</span>
              <h4 className="font-body font-bold text-on-surface text-sm uppercase tracking-widest">Relationship Approach</h4>
              <p className="font-serif italic text-2xl text-primary">Deep Connector</p>
              <p className="text-xs text-on-surface-variant">You prefer a small circle of meaningful relationships over a wide network.</p>
            </div>
            <div className="text-center space-y-3 p-6">
              <span className="material-symbols-outlined text-tertiary text-4xl">volunteer_activism</span>
              <h4 className="font-body font-bold text-on-surface text-sm uppercase tracking-widest">Empathy Level</h4>
              <p className="font-serif italic text-2xl text-primary">High</p>
              <p className="text-xs text-on-surface-variant">You naturally absorb the emotions of those around you.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif italic text-2xl text-on-surface">Detailed Findings</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Your heart line is <strong className="text-on-surface">long and curved</strong>, beginning beneath your
              index finger and sweeping across the full width of your palm. This curvature indicates
              an openly emotional personality — someone who expresses affection freely and craves
              deep, reciprocal connections.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              The line is <strong className="text-on-surface">smooth and well-defined</strong>, without significant
              breaks or islands. In traditional palmistry, this consistency suggests emotional stability
              — you rarely swing between extremes. When you commit to someone emotionally, you tend to
              stay committed. You process heartbreak slowly but thoroughly.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              A small <strong className="text-on-surface">fork at the starting point</strong> (beneath the index finger)
              is visible on your dominant hand. This is sometimes called the &ldquo;writer&rsquo;s fork&rdquo;
              and is associated with people who are good at articulating their feelings — whether through
              conversation, writing, or creative expression.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Comparing both hands: your non-dominant hand shows a slightly straighter heart line,
              suggesting that your natural emotional baseline is more reserved than the person you&rsquo;ve
              become. Over time, you&rsquo;ve grown into a more open and expressive version of yourself.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Head Line ─── */}
      <section className="mb-20 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-label text-primary font-bold text-sm">03</span>
          <div className="h-px flex-grow bg-primary/20" />
        </div>
        <h2 className="font-serif italic text-4xl md:text-5xl gradient-text-hero mb-6">
          Head Line Analysis
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-3xl">
          The head line runs across the middle of your palm and represents your intellectual
          style — how you think, learn, and make decisions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass-card-strong rounded-2xl p-10 space-y-6">
            <div className="space-y-3">
              <h3 className="font-serif italic text-2xl text-on-surface">Thinking Style</h3>
              <p className="font-serif italic text-xl text-primary">Creative-Analytical Blend</p>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              Your head line begins attached to your life line before separating about a centimeter in.
              This shared origin is extremely common and indicates a cautious, considered thinking style
              — you think before you leap, especially in unfamiliar territory.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              The line then takes a <strong className="text-on-surface">gentle downward slope toward the Luna mount</strong>
              (the fleshy area at the base of your palm on the pinky side). This slope indicates a
              creative imagination. You&rsquo;re not purely logical — you have an active inner world
              and often approach problems with unconventional solutions.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              The line is of <strong className="text-on-surface">moderate length</strong>, ending roughly below your
              ring finger. This means you don&rsquo;t overthink endlessly — you can gather enough
              information and commit to a decision. You trust your gut once you&rsquo;ve done
              reasonable due diligence.
            </p>
          </div>

          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h4 className="font-body font-bold text-on-surface text-sm uppercase tracking-widest">Decision-Making Profile</h4>
              <div className="space-y-4">
                {[
                  { label: 'Logic vs. Intuition', value: '60/40', desc: 'Slightly favors logic but trusts gut feelings' },
                  { label: 'Processing Speed', value: 'Moderate', desc: 'Prefers to think things through carefully' },
                  { label: 'Adaptability', value: 'High', desc: 'Comfortable adjusting plans when new info arrives' },
                  { label: 'Focus Style', value: 'Deep Diver', desc: 'Prefers fewer tasks with full attention' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-start py-3 border-b border-outline-variant/10 last:border-0">
                    <div>
                      <span className="font-body font-medium text-on-surface text-sm block">{item.label}</span>
                      <span className="text-xs text-on-surface-variant">{item.desc}</span>
                    </div>
                    <span className="font-serif italic text-primary font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-container/30 border border-primary/10 rounded-2xl p-8 space-y-3">
              <span className="material-symbols-outlined text-primary">lightbulb</span>
              <h4 className="font-body font-bold text-on-surface text-sm">Key Insight</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                The slight separation between your head and life lines at their origin point shows
                you&rsquo;ve developed independence from family thinking patterns. You respect
                tradition but form your own conclusions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 4: Life Line ─── */}
      <section className="mb-20 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-label text-primary font-bold text-sm">04</span>
          <div className="h-px flex-grow bg-primary/20" />
        </div>
        <h2 className="font-serif italic text-4xl md:text-5xl gradient-text-hero mb-6">
          Life Line Analysis
        </h2>

        <div className="bg-tertiary-container/30 border border-tertiary/10 rounded-2xl p-6 mb-10 flex items-start gap-4">
          <span className="material-symbols-outlined text-tertiary mt-0.5">info</span>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            <strong className="text-on-surface">Common misconception:</strong> The life line does <em>not</em>
            predict how long you will live. It reflects your vitality, energy levels, and how you
            experience major life changes. A short life line does not mean a short life.
          </p>
        </div>

        <div className="glass-card-strong rounded-2xl p-10 md:p-14 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-surface-container-low rounded-xl space-y-2">
              <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
              <h4 className="font-body font-bold text-on-surface text-xs uppercase tracking-widest">Energy Type</h4>
              <p className="font-serif italic text-xl text-primary">Steady & Resilient</p>
            </div>
            <div className="text-center p-6 bg-surface-container-low rounded-xl space-y-2">
              <span className="material-symbols-outlined text-primary text-3xl">change_history</span>
              <h4 className="font-body font-bold text-on-surface text-xs uppercase tracking-widest">Change Response</h4>
              <p className="font-serif italic text-xl text-primary">Adaptive</p>
            </div>
            <div className="text-center p-6 bg-surface-container-low rounded-xl space-y-2">
              <span className="material-symbols-outlined text-primary text-3xl">spa</span>
              <h4 className="font-body font-bold text-on-surface text-xs uppercase tracking-widest">Vitality</h4>
              <p className="font-serif italic text-xl text-primary">Strong</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-on-surface-variant leading-relaxed">
              Your life line is <strong className="text-on-surface">deep, well-defined, and sweeps wide</strong> around
              the base of your thumb. This wide arc is one of the most positive indicators in palmistry
              — it suggests abundant vitality, enthusiasm for life, and a warm personality that draws
              others in.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              The depth and clarity of the line indicate <strong className="text-on-surface">consistent energy levels</strong>.
              You&rsquo;re not the type to burn hot and then crash — instead, you maintain a steady
              output. You handle stress through action rather than withdrawal, and you recover from
              setbacks faster than most.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              There is a <strong className="text-on-surface">small branch line</strong> shooting upward from your life
              line toward the Jupiter mount (below your index finger) on your dominant hand. In
              classical palmistry, this is an &ldquo;effort line&rdquo; — it signifies a period where
              personal ambition and self-improvement became a major focus. This often corresponds to
              a career change, educational pursuit, or personal breakthrough.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Your life line does not break at any point, but there is a <strong className="text-on-surface">slight
              thinning</strong> in the middle section of the line. This suggests a period of lower
              energy or a transitional phase — not a health concern, but a time when you may have
              felt less certain about your path. The line regains depth and clarity after this point,
              indicating renewed purpose and energy.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Section 5: The Seven Mounts ─── */}
      <section className="mb-20 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-label text-primary font-bold text-sm">05</span>
          <div className="h-px flex-grow bg-primary/20" />
        </div>
        <h2 className="font-serif italic text-4xl md:text-5xl gradient-text-hero mb-6">
          The Seven Mounts
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-3xl">
          The &ldquo;mounts&rdquo; are the fleshy raised areas on your palm. Each one corresponds
          to a personality trait. Their prominence (flat, moderate, or raised) shows how strongly
          that trait features in your personality.
        </p>

        <div className="space-y-6">
          {[
            {
              name: 'Mount of Jupiter',
              location: 'Below the index finger',
              icon: 'military_tech',
              prominence: 'Raised',
              trait: 'Ambition & Leadership',
              reading: 'Your Jupiter mount is noticeably raised, which is consistent with your Earth hand type. This indicates a natural confidence and desire to lead. You\'re comfortable taking charge of situations and tend to have clear goals. People with prominent Jupiter mounts are often drawn to positions of authority — not for ego, but because they genuinely believe they can improve outcomes.',
              color: 'primary',
            },
            {
              name: 'Mount of Saturn',
              location: 'Below the middle finger',
              icon: 'balance',
              prominence: 'Moderate',
              trait: 'Responsibility & Discipline',
              reading: 'Your Saturn mount is moderately developed, suggesting a balanced approach to duty and structure. You take your responsibilities seriously but don\'t let them consume you. You appreciate routine as a tool, not a prison. This moderate development often shows up in people who are disciplined when it matters but know when to relax.',
              color: 'primary',
            },
            {
              name: 'Mount of Apollo (Sun)',
              location: 'Below the ring finger',
              icon: 'wb_sunny',
              prominence: 'Raised',
              trait: 'Creativity & Self-Expression',
              reading: 'This is one of your most prominent mounts, and it tells us a lot. A raised Apollo mount indicates a strong creative drive and natural charisma. You express yourself well — whether through art, conversation, design, writing, or your personal style. People are drawn to your warmth. You likely have strong aesthetic sensibilities and an eye for beauty in everyday things.',
              color: 'tertiary',
            },
            {
              name: 'Mount of Mercury',
              location: 'Below the pinky finger',
              icon: 'forum',
              prominence: 'Raised',
              trait: 'Communication & Quick Thinking',
              reading: 'Your Mercury mount is well-developed, which aligns with the strong pinky finger noted in your hand profile. This combination signals a skilled communicator — someone who can read a room, adapt their message, and think quickly on their feet. You\'re likely good with words, whether spoken or written, and you pick up new concepts fast.',
              color: 'primary',
            },
            {
              name: 'Mount of Venus',
              location: 'Base of the thumb',
              icon: 'favorite',
              prominence: 'Raised',
              trait: 'Warmth, Passion & Vitality',
              reading: 'The Venus mount is the large, fleshy pad at the base of your thumb, and yours is full and firm. This is another strong indicator in your reading — it reflects physical vitality, warmth, and a generous nature. People with prominent Venus mounts tend to be tactile, affectionate, and genuinely enjoy life\'s pleasures. You likely have strong physical energy and a magnetic presence.',
              color: 'tertiary',
            },
            {
              name: 'Mount of Luna (Moon)',
              location: 'Base of the palm, opposite the thumb',
              icon: 'dark_mode',
              prominence: 'Moderate',
              trait: 'Imagination & Intuition',
              reading: 'Your Luna mount is moderately developed, which complements your head line\'s gentle downward slope. This tells us your imagination is active but grounded. You have good intuition — you can sense when something feels "off" before you can explain why — but you don\'t let it override your practical nature. You dream, but you act on those dreams rather than getting lost in them.',
              color: 'primary',
            },
            {
              name: 'Mount of Mars (Inner & Outer)',
              location: 'Center of the palm',
              icon: 'shield',
              prominence: 'Moderate',
              trait: 'Courage & Resilience',
              reading: 'Both your inner Mars (below Jupiter, reflecting assertiveness) and outer Mars (below Mercury, reflecting endurance) are moderately developed. This creates a balanced temperament — you can stand your ground when needed and endure difficult situations, but you\'re not aggressive or combative by nature. You pick your battles wisely and have a calm strength that others rely on.',
              color: 'primary',
            },
          ].map((mount) => (
            <div key={mount.name} className="glass-card rounded-2xl p-8 md:p-10 space-y-4 hover-lift">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className={`material-symbols-outlined text-${mount.color} text-3xl`}>{mount.icon}</span>
                  <div>
                    <h3 className="font-serif italic text-xl text-on-surface">{mount.name}</h3>
                    <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50">{mount.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:ml-auto flex-shrink-0">
                  <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant/50">Prominence:</span>
                  <span className={`font-body font-semibold text-sm text-${mount.color} bg-${mount.color}/10 px-3 py-1 rounded-full`}>
                    {mount.prominence}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant/50">Associated Trait:</span>
                <span className="font-serif italic text-primary">{mount.trait}</span>
              </div>
              <p className="text-on-surface-variant leading-relaxed pt-2">{mount.reading}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Section 6: Minor Lines ─── */}
      <section className="mb-20 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-label text-primary font-bold text-sm">06</span>
          <div className="h-px flex-grow bg-primary/20" />
        </div>
        <h2 className="font-serif italic text-4xl md:text-5xl gradient-text-hero mb-6">
          Minor Lines
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-3xl">
          Not everyone has all of the minor lines — their presence (or absence) adds depth
          and nuance to your reading. These lines tend to develop and change over time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card-strong rounded-2xl p-10 space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">route</span>
              <h3 className="font-serif italic text-2xl text-on-surface">Fate Line</h3>
            </div>
            <span className="inline-block font-label text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
              Present — Moderate Depth
            </span>
            <p className="text-on-surface-variant leading-relaxed">
              Your fate line runs from the base of your palm upward toward the Saturn mount (below your
              middle finger). It&rsquo;s visible but not deeply etched, which suggests your career path
              has been shaped by a mix of intention and circumstance rather than a rigid plan.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              The line begins in the center of your palm rather than at the wrist, which palmists
              interpret as someone whose career direction became clear later in life — perhaps in your
              mid-to-late twenties rather than from childhood. This is very common and simply means
              you found your path through experience rather than early certainty.
            </p>
          </div>

          <div className="glass-card-strong rounded-2xl p-10 space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary">wb_sunny</span>
              <h3 className="font-serif italic text-2xl text-on-surface">Sun Line (Apollo Line)</h3>
            </div>
            <span className="inline-block font-label text-[10px] uppercase tracking-widest text-tertiary bg-tertiary/10 px-3 py-1 rounded-full">
              Present — Clear
            </span>
            <p className="text-on-surface-variant leading-relaxed">
              You have a visible sun line running toward the Apollo mount. This line is associated with
              personal fulfillment, creativity, and public recognition. Its presence reinforces what
              we see in your prominent Apollo mount — you have a natural ability to attract positive
              attention and find joy in creative expression.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              The line is clearest on your dominant hand, suggesting this is something you&rsquo;ve
              cultivated through effort and experience. Your creative confidence has grown over time.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-10 space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">health_and_safety</span>
              <h3 className="font-serif italic text-2xl text-on-surface">Mercury Line (Health Line)</h3>
            </div>
            <span className="inline-block font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50 bg-surface-container-low px-3 py-1 rounded-full">
              Faint
            </span>
            <p className="text-on-surface-variant leading-relaxed">
              Your Mercury line is faintly visible. Interestingly, in traditional palmistry, the
              <em> absence</em> of a strong health line is actually considered a positive sign — it suggests
              robust health and a strong constitution. The faintness of yours simply means there are
              no strong indicators of health-related stress showing in your palms.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-10 space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary">diversity_3</span>
              <h3 className="font-serif italic text-2xl text-on-surface">Relationship Lines</h3>
            </div>
            <span className="inline-block font-label text-[10px] uppercase tracking-widest text-tertiary bg-tertiary/10 px-3 py-1 rounded-full">
              Two Lines Present
            </span>
            <p className="text-on-surface-variant leading-relaxed">
              You have two clear horizontal lines on the edge of your palm below the pinky finger.
              These are commonly called relationship or marriage lines. Two lines typically indicate
              two significant, deeply impactful relationships in your life — not necessarily marriages,
              but connections that profoundly shape who you are.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              The upper line is deeper and longer, suggesting that the more significant of these
              two relationships comes later in life or is the one that endures.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Section 7: Left vs Right ─── */}
      <section className="mb-20 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-label text-primary font-bold text-sm">07</span>
          <div className="h-px flex-grow bg-primary/20" />
        </div>
        <h2 className="font-serif italic text-4xl md:text-5xl gradient-text-hero mb-6">
          Left vs. Right Palm Comparison
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-3xl">
          In palmistry, your non-dominant hand reflects your innate personality — the traits you
          were born with. Your dominant hand shows who you&rsquo;ve become through life experience.
          Comparing the two reveals how you&rsquo;ve grown.
        </p>

        <div className="glass-card-strong rounded-2xl p-10 md:p-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h3 className="font-serif italic text-2xl text-on-surface text-center">Left Hand (Innate)</h3>
              <div className="space-y-4">
                {[
                  { trait: 'Emotional Expression', value: 'Reserved' },
                  { trait: 'Thinking Style', value: 'Cautious' },
                  { trait: 'Energy Pattern', value: 'Steady' },
                  { trait: 'Communication', value: 'Moderate' },
                  { trait: 'Ambition', value: 'Present' },
                ].map((item) => (
                  <div key={item.trait} className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                    <span className="text-sm text-on-surface-variant">{item.trait}</span>
                    <span className="font-body font-medium text-sm text-on-surface">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center space-y-4">
                <span className="material-symbols-outlined text-primary text-5xl">compare_arrows</span>
                <p className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Growth Map</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-serif italic text-2xl text-on-surface text-center">Right Hand (Developed)</h3>
              <div className="space-y-4">
                {[
                  { trait: 'Emotional Expression', value: 'Expressive', changed: true },
                  { trait: 'Thinking Style', value: 'Creative-Analytical', changed: true },
                  { trait: 'Energy Pattern', value: 'Steady', changed: false },
                  { trait: 'Communication', value: 'Very Strong', changed: true },
                  { trait: 'Ambition', value: 'Strong', changed: true },
                ].map((item) => (
                  <div key={item.trait} className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                    <span className="text-sm text-on-surface-variant">{item.trait}</span>
                    <span className={`font-body font-medium text-sm ${item.changed ? 'text-primary' : 'text-on-surface'}`}>
                      {item.value} {item.changed && '↑'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-outline-variant/10 space-y-4">
            <h4 className="font-serif italic text-xl text-on-surface">What This Tells Us</h4>
            <p className="text-on-surface-variant leading-relaxed">
              The differences between your two palms tell a story of personal growth. You were born with
              a more reserved, cautious temperament — and through experience, you&rsquo;ve developed into
              someone more expressive, communicative, and ambitious. Your core steadiness (reflected in
              the consistent life line on both hands) has remained your anchor throughout this evolution.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              The most significant growth area is in <strong className="text-on-surface">communication</strong>.
              Your dominant hand shows a notably more developed Mercury mount and a stronger heart line
              fork — both indicators that you&rsquo;ve worked hard (consciously or not) to become a
              better communicator and emotional connector.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Section 8: Personal Summary ─── */}
      <section className="mb-20 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-label text-primary font-bold text-sm">08</span>
          <div className="h-px flex-grow bg-primary/20" />
        </div>
        <h2 className="font-serif italic text-4xl md:text-5xl gradient-text-hero mb-6">
          Personal Summary
        </h2>

        <div className="glass-card-strong rounded-2xl p-10 md:p-14 space-y-10">
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Based on the complete analysis of both your palms, here is your personality profile
            at a glance:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="font-serif italic text-2xl text-on-surface flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                Core Strengths
              </h3>
              <ul className="space-y-4">
                {[
                  { strength: 'Emotional intelligence', desc: 'Expressive heart line + high empathy indicators' },
                  { strength: 'Creative expression', desc: 'Prominent Apollo mount + sun line presence' },
                  { strength: 'Communication skills', desc: 'Strong Mercury mount + developed pinky finger' },
                  { strength: 'Resilience', desc: 'Deep life line with consistent energy pattern' },
                  { strength: 'Natural leadership', desc: 'Raised Jupiter mount + Earth hand type' },
                ].map((item) => (
                  <li key={item.strength} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <div>
                      <span className="font-body font-semibold text-on-surface text-sm block">{item.strength}</span>
                      <span className="text-xs text-on-surface-variant">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-serif italic text-2xl text-on-surface flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                Growth Areas
              </h3>
              <ul className="space-y-4">
                {[
                  { area: 'Patience with process', desc: 'Earth types can get frustrated when results are slow' },
                  { area: 'Emotional boundaries', desc: 'High empathy + expressive nature can lead to over-giving' },
                  { area: 'Embracing uncertainty', desc: 'Cautious head line origin suggests discomfort with ambiguity' },
                  { area: 'Delegation', desc: 'Strong Jupiter mount types may struggle to let go of control' },
                ].map((item) => (
                  <li key={item.area} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary text-sm mt-1">arrow_forward</span>
                    <div>
                      <span className="font-body font-semibold text-on-surface text-sm block">{item.area}</span>
                      <span className="text-xs text-on-surface-variant">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-inverse-surface rounded-2xl p-10 mt-8">
            <h3 className="font-serif italic text-2xl text-inverse-on-surface mb-4">Your Personality in One Paragraph</h3>
            <p className="text-inverse-on-surface/70 leading-relaxed text-lg font-serif italic">
              You are a grounded, practical person with a surprisingly rich creative and emotional
              inner world. Your Earth hand gives you stability and reliability, while your prominent
              Apollo and Venus mounts add warmth, charisma, and creative fire. You&rsquo;ve grown
              significantly from a more reserved baseline into someone who communicates with confidence
              and emotional depth. You lead naturally, think carefully, and care deeply. Your palms
              show a person who has done real inner work — and it shows in the difference between
              your two hands.
            </p>
          </div>
        </div>
      </section>

      {/* ─── End of Sample / CTA ─── */}
      <section className="relative z-10">
        <div className="glass-card-strong rounded-2xl p-12 md:p-16 text-center glow-purple space-y-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary via-tertiary to-primary rounded-full" />
          <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
            End of Sample Report
          </span>
          <h2 className="font-serif italic text-4xl md:text-5xl gradient-text-hero">
            Get Your Own Report
          </h2>
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
            This was a sample using example data. Your report will be completely unique —
            based on the actual lines, mounts, and features of <em>your</em> palms.
          </p>
          <div className="pt-4">
            <Link
              to="/upload"
              className="inline-block editorial-gradient text-white px-14 py-5 rounded-full font-label font-extrabold text-sm tracking-[0.2em] uppercase shadow-2xl shadow-primary/15 hover:shadow-primary/30 hover:scale-105 transition-all duration-300 active:scale-95"
            >
              Get My Palm Reading
            </Link>
          </div>
          <p className="text-on-surface-variant/40 text-xs max-w-md mx-auto">
            One-time purchase. Instant PDF download. No subscription.
          </p>
        </div>
      </section>
    </div>
  )
}
