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
      {/* Order Summary */}
      <section className="flex flex-col space-y-12 animate-fade-in-up">
        <div className="space-y-4">
          <Link
            to="/insights"
            className="inline-flex items-center text-primary text-sm font-medium hover:opacity-70 transition-opacity"
          >
            <span className="material-symbols-outlined mr-2 text-sm">
              arrow_back
            </span>
            Return to Rituals
          </Link>
          <h1 className="font-headline font-serif text-4xl lg:text-5xl font-light italic text-on-surface tracking-tight">
            Secure your celestial path.
          </h1>
        </div>

        {/* Product Preview */}
        <div className="relative group">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-tertiary-container/20 rounded-full blur-3xl group-hover:bg-tertiary-container/30 transition-all" />
          <div className="bg-surface-container-lowest rounded-xl p-8 relative overflow-hidden transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 aspect-[3/4] rounded-lg overflow-hidden relative">
                <img
                  alt="Celestial Manuscript"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="/images/celestial-manuscript.png"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="space-y-2">
                  <span className="font-label text-[10px] uppercase tracking-[0.2em] text-outline">
                    Exclusive Manuscript
                  </span>
                  <h2 className="font-headline font-serif text-2xl text-on-surface italic">
                    20-Page Celestial Manuscript
                  </h2>
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  A bespoke analysis of your birth chart, planetary transits,
                  and elemental alignment. Hand-crafted insights delivered
                  digitally.
                </p>
                <div className="flex items-baseline gap-2 pt-4">
                  <span className="font-label text-sm text-outline">$</span>
                  <span className="font-headline font-serif text-3xl font-bold text-on-surface">
                    29.99
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-6 pt-6">
          <div className="flex justify-between items-center text-sm font-label uppercase tracking-widest text-outline">
            <span>Subtotal</span>
            <span className="text-on-surface">$29.99</span>
          </div>
          <div className="flex justify-between items-center text-sm font-label uppercase tracking-widest text-outline">
            <span>Taxes</span>
            <span className="text-on-surface">$0.00</span>
          </div>
          <div className="pt-6 border-t border-outline-variant/15 flex justify-between items-center">
            <span className="font-headline font-serif text-lg italic text-on-surface">
              Total Due
            </span>
            <span className="font-headline font-serif text-2xl font-bold text-primary">
              $29.99
            </span>
          </div>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="bg-surface-container-low rounded-xl p-8 md:p-12 space-y-10">
          <div className="space-y-2">
            <h3 className="font-headline font-serif text-2xl text-on-surface">
              Payment Information
            </h3>
            <p className="font-body text-sm text-on-surface-variant">
              Payments are encrypted and secured via Stripe.
            </p>
          </div>

          <form className="space-y-8" onSubmit={handlePurchase}>
            {/* Email */}
            <div className="space-y-2">
              <label className="font-label text-[11px] uppercase tracking-widest text-outline ml-4">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-tertiary-fixed outline-none transition-all placeholder:text-outline-variant text-on-surface"
                placeholder="oracle@alchemist.com"
              />
            </div>

            {/* Card Info */}
            <div className="space-y-2">
              <label className="font-label text-[11px] uppercase tracking-widest text-outline ml-4">
                Card Details
              </label>
              <div className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden">
                <div className="px-6 py-4">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full bg-transparent border-none focus:ring-0 outline-none text-on-surface placeholder:text-outline-variant"
                    placeholder="Card number"
                  />
                </div>
                <div className="grid grid-cols-3 ghost-border border-x-0 border-b-0">
                  <div className="px-6 py-4 border-r border-outline-variant/15">
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      className="w-full bg-transparent border-none focus:ring-0 outline-none text-on-surface placeholder:text-outline-variant text-sm"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="px-6 py-4 border-r border-outline-variant/15">
                    <input
                      type="text"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      className="w-full bg-transparent border-none focus:ring-0 outline-none text-on-surface placeholder:text-outline-variant text-sm"
                      placeholder="CVC"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <input
                      type="text"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      className="w-full bg-transparent border-none focus:ring-0 outline-none text-on-surface placeholder:text-outline-variant text-sm"
                      placeholder="ZIP"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full bg-gradient-primary text-on-primary font-body font-semibold py-5 rounded-full hover:opacity-90 active:scale-[0.98] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 ${
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
                  Purchase Report
                  <span className="material-symbols-outlined text-sm">
                    auto_awesome
                  </span>
                </>
              )}
            </button>
          </form>

          <div className="flex items-center justify-center gap-6 opacity-40 grayscale">
            <span className="material-symbols-outlined text-3xl">lock</span>
            <span className="font-label text-[10px] uppercase tracking-[0.3em]">
              SSL Secured Transaction
            </span>
          </div>
        </div>

        <p className="text-center mt-8 font-body text-[11px] text-outline leading-loose max-w-sm mx-auto">
          By purchasing, you agree to our{' '}
          <a href="#" className="underline">
            Terms of Insight
          </a>{' '}
          and acknowledge our{' '}
          <a href="#" className="underline">
            Celestial Privacy Policy
          </a>
          . All readings are for spiritual guidance.
        </p>
      </section>
    </div>
  )
}
