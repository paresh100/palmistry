import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function CheckoutPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [zip, setZip] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePurchase = (e) => {
    e.preventDefault()
    setIsProcessing(true)
    setTimeout(() => {
      navigate('/confirmation')
    }, 2000)
  }

  return (
    <div className="pt-24 pb-12 px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
      {/* Ambient orbs */}
      <div className="fixed top-1/3 -right-40 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] animate-orb pointer-events-none" />
      <div className="fixed bottom-1/4 -left-40 w-[300px] h-[300px] bg-tertiary/3 rounded-full blur-[100px] animate-orb pointer-events-none" style={{ animationDelay: '3s' }} />

      {/* Order Summary */}
      <section className="flex flex-col space-y-12 animate-fade-in-up relative z-10">
        <div className="space-y-4">
          <Link
            to="/insights"
            className="inline-flex items-center text-primary text-sm font-medium hover:opacity-70 transition-opacity"
          >
            <span className="material-symbols-outlined mr-2 text-sm">
              arrow_back
            </span>
            Back to Preview
          </Link>
          <h1 className="font-headline font-serif text-4xl lg:text-5xl font-light italic">
            <span className="gradient-text-hero">Complete Your Purchase</span>
          </h1>
        </div>

        {/* Product Preview */}
        <div className="relative group">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/8 transition-all pointer-events-none" />
          <div className="glass-card-strong rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover-lift">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 aspect-[3/4] rounded-xl overflow-hidden relative">
                <img
                  alt="Palm reading report preview"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="/images/celestial-manuscript.png"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="space-y-2">
                  <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/50">
                    Your Palm Reading Report
                  </span>
                  <h2 className="font-headline font-serif text-2xl text-on-surface italic">
                    20-Page Palm Reading Report
                  </h2>
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  A personalized 20-page report analyzing your major lines, minor
                  lines, seven mounts, hand shape, and finger proportions.
                  Delivered instantly as a PDF.
                </p>
                <div className="flex items-baseline gap-2 pt-4">
                  <span className="font-label text-sm text-on-surface-variant/50">$</span>
                  <span className="font-headline font-serif text-3xl font-bold gradient-text">
                    29.99
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-6 pt-6">
          <div className="flex justify-between items-center text-sm font-label uppercase tracking-widest text-on-surface-variant/50">
            <span>Subtotal</span>
            <span className="text-on-surface">$29.99</span>
          </div>
          <div className="flex justify-between items-center text-sm font-label uppercase tracking-widest text-on-surface-variant/50">
            <span>Taxes</span>
            <span className="text-on-surface">$0.00</span>
          </div>
          <div className="pt-6 border-t border-outline-variant/20 flex justify-between items-center">
            <span className="font-headline font-serif text-lg italic text-on-surface">
              Total Due
            </span>
            <span className="font-headline font-serif text-2xl font-bold gradient-text">
              $29.99
            </span>
          </div>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="flex flex-col justify-center animate-fade-in-up relative z-10" style={{ animationDelay: '0.2s' }}>
        <div className="glass-card-strong rounded-2xl p-8 md:p-12 space-y-10">
          <div className="space-y-2">
            <h3 className="font-headline font-serif text-2xl text-on-surface">
              Payment Information
            </h3>
            <p className="font-body text-sm text-on-surface-variant">
              Payments are encrypted and secured via Stripe.
            </p>
          </div>

          <form className="space-y-8" onSubmit={handlePurchase}>
            <div className="space-y-2">
              <label className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant/50 ml-4">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-surface-container-low border border-outline-variant/30 focus:border-primary/40 focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-on-surface-variant/30 text-on-surface"
                placeholder="you@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant/50 ml-4">
                Card Details
              </label>
              <div className="bg-surface-container-low rounded-[1.5rem] overflow-hidden border border-outline-variant/30">
                <div className="px-6 py-4">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full bg-transparent border-none focus:ring-0 outline-none text-on-surface placeholder:text-on-surface-variant/30"
                    placeholder="Card number"
                  />
                </div>
                <div className="grid grid-cols-3 border-t border-outline-variant/20">
                  <div className="px-6 py-4 border-r border-outline-variant/20">
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      className="w-full bg-transparent border-none focus:ring-0 outline-none text-on-surface placeholder:text-on-surface-variant/30 text-sm"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="px-6 py-4 border-r border-outline-variant/20">
                    <input
                      type="text"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      className="w-full bg-transparent border-none focus:ring-0 outline-none text-on-surface placeholder:text-on-surface-variant/30 text-sm"
                      placeholder="CVC"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <input
                      type="text"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      className="w-full bg-transparent border-none focus:ring-0 outline-none text-on-surface placeholder:text-on-surface-variant/30 text-sm"
                      placeholder="ZIP"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full editorial-gradient text-white font-body font-semibold py-5 rounded-full hover:opacity-90 active:scale-[0.98] transition-all shadow-xl shadow-primary/15 hover:shadow-primary/25 flex items-center justify-center gap-3 ${
                isProcessing ? 'opacity-70 cursor-wait' : ''
              }`}
            >
              {isProcessing ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-sm">
                    cyclone
                  </span>
                  Processing...
                </>
              ) : (
                <>
                  Purchase Report — $29.99
                  <span className="material-symbols-outlined text-sm">
                    lock
                  </span>
                </>
              )}
            </button>
          </form>

          <div className="flex items-center justify-center gap-6 text-on-surface-variant/20">
            <span className="material-symbols-outlined text-3xl">lock</span>
            <span className="font-label text-[10px] uppercase tracking-[0.3em]">
              SSL Secured Transaction
            </span>
          </div>
        </div>

        <p className="text-center mt-8 font-body text-[11px] text-on-surface-variant/40 leading-loose max-w-sm mx-auto">
          By purchasing, you agree to our{' '}
          <a href="#" className="underline hover:text-primary transition-colors">
            Terms of Service
          </a>{' '}
          and acknowledge our{' '}
          <a href="#" className="underline hover:text-primary transition-colors">
            Privacy Policy
          </a>
          . All readings are for entertainment and self-reflection purposes.
        </p>
      </section>
    </div>
  )
}
