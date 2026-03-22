import { useState } from 'react'
import { Link } from 'react-router-dom'

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-outline-variant/15 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className={`font-body font-semibold text-lg pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-on-surface group-hover:text-primary'}`}>
          {question}
        </span>
        <span className={`material-symbols-outlined text-on-surface-variant/40 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45 text-primary' : ''}`}>
          add
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] pb-6' : 'max-h-0'}`}>
        <div className="text-on-surface-variant leading-relaxed space-y-3">
          {answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0)

  const categories = [
    {
      title: 'About the Report',
      icon: 'menu_book',
      faqs: [
        {
          question: 'What exactly is a palm reading report?',
          answer: (
            <>
              <p>
                It's an extensive, personalized document that analyzes the lines, mounts, and features
                of your palms to build a personality profile. Think of it like a Myers-Briggs or
                Enneagram assessment — but based on the unique physical features of your hands instead
                of a questionnaire.
              </p>
              <p>
                Your report covers your three major lines (heart, head, and life), all seven mounts,
                minor lines (fate, sun, Mercury, and relationship lines), your hand shape classification,
                finger proportions, and a comparison of your left and right palms.
              </p>
            </>
          ),
        },
        {
          question: 'What does the report actually tell me?',
          answer: (
            <>
              <p>
                Your report provides insights into your personality traits, emotional style, thinking
                patterns, communication strengths, creative tendencies, and areas for personal growth.
                Every section explains what was found on your palm and what it means in plain English.
              </p>
              <p>
                For example, your heart line analysis might reveal whether you're naturally expressive
                or reserved in relationships. Your mount readings show where your dominant personality
                traits lie — like leadership, creativity, or communication.
              </p>
              <p>
                You can{' '}
                <Link to="/sample-report" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">
                  view a full sample report
                </Link>{' '}
                to see exactly what's included.
              </p>
            </>
          ),
        },
        {
          question: 'Is this real palmistry or just AI-generated nonsense?',
          answer: (
            <>
              <p>
                Our analysis is based on established palmistry principles that have been practiced and
                documented for centuries — including chirognomy (hand shape analysis) and chiromancy
                (line reading). We use the same frameworks taught in classical palmistry texts.
              </p>
              <p>
                That said, palmistry is not a science. We position our reports as personality assessments
                for entertainment and self-reflection — not as medical, psychological, or predictive
                advice. Many people find the insights remarkably accurate and useful for self-awareness.
              </p>
            </>
          ),
        },
        {
          question: "Does the report predict my future or how long I'll live?",
          answer: (
            <p>
              No. We do not make predictions about your future, health, lifespan, or fate. The life
              line, for example, reflects your energy levels and how you handle change — it has nothing
              to do with how long you'll live. Our report focuses entirely on personality traits,
              strengths, communication style, and areas for growth. It's a mirror, not a crystal ball.
            </p>
          ),
        },
        {
          question: 'How is this different from horoscopes or astrology?',
          answer: (
            <p>
              Horoscopes are based on your birth date and are the same for everyone born in that
              time period. Your palm reading is based on the actual, physical features of <em>your</em> hands
              — which are unique to you. No two people have the same palm prints, lines, or mount
              formations. Your report is generated from your specific photos, not from generic
              zodiac templates.
            </p>
          ),
        },
        {
          question: 'Why do you need both hands?',
          answer: (
            <>
              <p>
                In palmistry, your non-dominant hand represents your innate personality — the traits
                you were born with. Your dominant hand shows who you've become through life experience
                and personal growth.
              </p>
              <p>
                By comparing both, we can identify how you've evolved over time. For example, someone
                might have a straight heart line on their left hand (naturally reserved) but a curved
                one on their right (became more expressive). This comparison is one of the most
                insightful parts of the report.
              </p>
            </>
          ),
        },
      ],
    },
    {
      title: 'Photos & Privacy',
      icon: 'photo_camera',
      faqs: [
        {
          question: 'What kind of photos do I need to take?',
          answer: (
            <>
              <p>You need one clear photo of each palm — left hand and right hand. For best results:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use good, even lighting (natural light works best)</li>
                <li>Hold your hand flat with fingers slightly spread</li>
                <li>Make sure the entire palm is visible, from wrist to fingertips</li>
                <li>Avoid shadows across your palm</li>
                <li>Use your phone's rear camera for better quality</li>
              </ul>
              <p>
                Don't worry about getting a "perfect" photo — our system can work with most
                reasonably clear images.
              </p>
            </>
          ),
        },
        {
          question: 'What happens to my palm photos after the report is generated?',
          answer: (
            <p>
              Your privacy is important to us. Your palm photos are used solely to generate your
              report. We do not sell, share, or use your images for any other purpose. Photos are
              processed securely and are not stored indefinitely. For full details, please review
              our Privacy Policy.
            </p>
          ),
        },
        {
          question: 'Can someone use my palm photos to steal my identity?',
          answer: (
            <p>
              No. While palm prints are unique (like fingerprints), a photo of your palm taken for a
              reading is not the same as a biometric scan. Our photos capture the visible lines and
              shapes of your hand — the same features anyone would see if you held your hand up.
              They cannot be used for biometric authentication or identity theft.
            </p>
          ),
        },
      ],
    },
    {
      title: 'Payment & Pricing',
      icon: 'payments',
      faqs: [
        {
          question: 'How much does the report cost?',
          answer: (
            <p>
              Your complete palm reading report is a one-time purchase of <strong>$29.99</strong>.
              There are no subscriptions, recurring charges, or hidden fees. You pay once
              and the report is yours to keep forever.
            </p>
          ),
        },
        {
          question: 'What payment methods do you accept?',
          answer: (
            <>
              <p>
                We use <strong>Stripe</strong> to process all payments securely. Stripe supports:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>All major credit and debit cards (Visa, Mastercard, American Express, Discover)</li>
                <li>Apple Pay and Google Pay</li>
                <li>Link (Stripe's one-click checkout)</li>
              </ul>
              <p>
                We never see or store your card details — all payment information is handled
                directly by Stripe, which is PCI Level 1 certified (the highest level of
                payment security certification).
              </p>
            </>
          ),
        },
        {
          question: 'Is my payment information secure?',
          answer: (
            <>
              <p>
                Yes. All payments are processed through <strong>Stripe</strong>, one of the world's
                most trusted payment processors. Stripe handles payments for companies like Amazon,
                Google, and Shopify.
              </p>
              <p>Your payment is protected by:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>256-bit SSL encryption</strong> — your connection is fully encrypted</li>
                <li><strong>PCI DSS Level 1</strong> — the highest security standard in the payment industry</li>
                <li><strong>Tokenization</strong> — your card number is never stored on our servers</li>
                <li><strong>3D Secure</strong> — additional verification for supported cards</li>
              </ul>
              <p>
                We never have access to your full card number, CVV, or banking details at any point.
              </p>
            </>
          ),
        },
        {
          question: 'Do you offer refunds?',
          answer: (
            <p>
              Because the report is a digital product delivered instantly, we generally do not offer
              refunds once the report has been generated and downloaded. However, if you experience
              a technical issue (such as a failed download or corrupted file), please contact our
              support team and we'll make it right. If you're unsure whether the report is right for
              you, we encourage you to{' '}
              <Link to="/sample-report" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">
                view the sample report
              </Link>{' '}
              before purchasing.
            </p>
          ),
        },
        {
          question: 'Will I see "The Alchemist" on my bank statement?',
          answer: (
            <p>
              Your bank or credit card statement will show the charge as coming from Stripe on our
              behalf. The descriptor may appear as "The Alchemist" or "THEALCHEMIST" depending on
              your bank. If you don't recognize a charge, please check your email for a receipt
              before contacting your bank.
            </p>
          ),
        },
        {
          question: 'Is this a subscription? Will I be charged again?',
          answer: (
            <p>
              No. This is a <strong>one-time purchase only</strong>. You will never be automatically
              charged again. There is no subscription, no recurring billing, and no auto-renewal.
              You pay $29.99 once and that's it.
            </p>
          ),
        },
      ],
    },
    {
      title: 'Delivery & Access',
      icon: 'download',
      faqs: [
        {
          question: 'How quickly will I receive my report?',
          answer: (
            <p>
              Your report is generated within minutes of uploading your palm photos and completing
              payment. Once ready, you can download it immediately as a PDF. A copy is also sent
              to the email address you provide at checkout.
            </p>
          ),
        },
        {
          question: 'What format is the report in?',
          answer: (
            <p>
              Your report is delivered as a <strong>PDF file</strong> that you can view on any device —
              computer, tablet, or phone. You can also print it if you prefer a physical copy.
              The PDF is yours to keep forever with no expiration date.
            </p>
          ),
        },
        {
          question: 'What if I lose my report or accidentally delete it?',
          answer: (
            <p>
              Don't worry — a copy of your report is sent to the email address you provide at
              checkout. You can re-download it from that email anytime. If you can't find the
              email, contact our support team with the email address you used to purchase and
              we'll resend it.
            </p>
          ),
        },
        {
          question: 'Can I buy a report as a gift for someone else?',
          answer: (
            <p>
              Absolutely! You'll just need photos of <em>their</em> palms (with their permission, of course).
              Upload their photos, complete the purchase, and you can forward the PDF or the download
              email directly to them.
            </p>
          ),
        },
      ],
    },
    {
      title: 'General',
      icon: 'help',
      faqs: [
        {
          question: 'Is palmistry scientifically proven?',
          answer: (
            <>
              <p>
                Palmistry is a traditional practice with a long cultural history, but it is not
                recognized as a science by the scientific community. There is no peer-reviewed
                evidence that palm lines can predict personality traits or life outcomes.
              </p>
              <p>
                We offer palm reading reports as a tool for <strong>entertainment and self-reflection</strong>.
                Many users find the insights thought-provoking and useful for introspection —
                similar to personality quizzes or typology systems like MBTI. We encourage you
                to approach your report with an open mind and a healthy sense of curiosity.
              </p>
            </>
          ),
        },
        {
          question: 'How do I contact support?',
          answer: (
            <p>
              You can reach our support team by emailing us through the Contact link in the footer
              of any page. We typically respond within 24 hours on business days. For payment-related
              issues, please include the email address you used at checkout so we can locate your order.
            </p>
          ),
        },
        {
          question: 'Do you have a mobile app?',
          answer: (
            <p>
              Not currently. Our service is fully web-based and works great on mobile browsers.
              You can take your palm photos directly from your phone, upload them through our
              website, and receive your report — all without downloading an app.
            </p>
          ),
        },
      ],
    },
  ]

  let globalIndex = 0

  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-4xl mx-auto relative">
      {/* Ambient orbs */}
      <div className="fixed top-1/4 -right-32 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[120px] animate-orb pointer-events-none" />
      <div className="fixed bottom-1/3 -left-32 w-[400px] h-[400px] bg-tertiary/3 rounded-full blur-[100px] animate-orb pointer-events-none" style={{ animationDelay: '4s' }} />

      {/* Header */}
      <header className="text-center mb-20 animate-fade-in-up relative z-10">
        <span className="font-label text-sm uppercase tracking-[0.2em] text-primary mb-4 block">
          Help Center
        </span>
        <h1 className="font-serif italic text-5xl md:text-7xl leading-tight tracking-tight mb-6">
          <span className="gradient-text-hero">Frequently Asked Questions</span>
        </h1>
        <p className="text-on-surface-variant font-body text-lg max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about our palm reading reports, payments, privacy, and more.
        </p>
      </header>

      {/* FAQ Categories */}
      <div className="space-y-16 relative z-10">
        {categories.map((category) => {
          const categoryStartIndex = globalIndex
          const items = category.faqs.map((faq, i) => {
            const currentGlobalIndex = globalIndex
            globalIndex++
            return (
              <FAQItem
                key={currentGlobalIndex}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === currentGlobalIndex}
                onClick={() => setOpenIndex(openIndex === currentGlobalIndex ? -1 : currentGlobalIndex)}
              />
            )
          })

          return (
            <section key={category.title}>
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">{category.icon}</span>
                <h2 className="font-serif italic text-2xl text-on-surface">{category.title}</h2>
              </div>
              <div className="glass-card-strong rounded-2xl px-8 md:px-12">
                {items}
              </div>
            </section>
          )
        })}
      </div>

      {/* Still have questions CTA */}
      <section className="mt-20 relative z-10">
        <div className="glass-card-strong rounded-2xl p-12 md:p-16 text-center space-y-6">
          <span className="material-symbols-outlined text-primary text-5xl">contact_support</span>
          <h2 className="font-serif italic text-3xl text-on-surface">
            Still have questions?
          </h2>
          <p className="text-on-surface-variant max-w-lg mx-auto">
            We're here to help. Reach out to our support team and we'll get back to you
            within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="mailto:support@thealchemist.com"
              className="inline-flex items-center gap-3 editorial-gradient text-white px-8 py-4 rounded-full font-label font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              Contact Support
            </a>
            <Link
              to="/sample-report"
              className="inline-flex items-center gap-3 border border-primary/20 text-primary px-8 py-4 rounded-full font-label font-bold text-xs tracking-widest uppercase hover:bg-primary/5 transition-all"
            >
              <span className="material-symbols-outlined text-sm">menu_book</span>
              View Sample Report
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
