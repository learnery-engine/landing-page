import { useState } from 'react'
import { Send } from 'lucide-react'

const APP_URL = 'https://ai.learneris.com'
const LOGIN_URL = `${APP_URL}/profile?from=profile&tab=login`
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

const footerLinks = {
  Product: [
    { label: 'Quick Quiz', href: LOGIN_URL },
    { label: 'Lesson Plan', href: LOGIN_URL },
    { label: 'Smart Diagram', href: LOGIN_URL },
    { label: 'Interactive Content', href: LOGIN_URL },
    { label: 'All Tools', href: '#features' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Contact', href: 'mailto:support@learneris.com' },
  ],
  Legal: [
    { label: 'Terms & Conditions', href: `${BASE}/terms` },
    { label: 'Privacy Policy', href: `${BASE}/privacy` },
  ],
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter subscription */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1">Stay updated with Learneris</h3>
              <p className="text-sm text-gray-400">Get the latest AI teaching tools, tips, and updates delivered to your inbox.</p>
            </div>
            {subscribed ? (
              <div className="text-sm text-green-400 font-medium">
                ✓ Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border border-white/20 text-white placeholder:text-gray-500 text-sm rounded-xl px-4 py-2.5 w-full sm:w-64 focus:outline-none focus:border-primary transition-colors"
                />
                <button type="submit"
                  className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2 shrink-0">
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold">Learneris</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              AI-powered teaching tools for educators. Create better materials in less time.
            </p>
            <div className="text-xs text-gray-500 space-y-1">
              <div>Learneris Pte. Ltd.</div>
              <div>68 Circular Road #02-01</div>
              <div>Singapore 049422</div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            © 2023–{new Date().getFullYear()} Learneris Pte. Ltd. All rights reserved.
          </div>
          <span className="text-sm text-gray-400">
            support@learneris.com
          </span>
        </div>
      </div>
    </footer>
  )
}
