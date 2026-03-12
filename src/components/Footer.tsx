const APP_URL = 'https://ai.learneris.com'
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

const footerLinks = {
  Product: [
    { label: 'Quick Quiz', href: `${APP_URL}/quickquiz` },
    { label: 'Lesson Plan', href: `${APP_URL}/lessonplan` },
    { label: 'Smart Diagram', href: `${APP_URL}/diagram` },
    { label: 'Interactive Content', href: `${APP_URL}/interactive` },
    { label: 'All Tools', href: '#features' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: 'mailto:support@learneris.com' },
  ],
  Legal: [
    { label: 'Terms & Conditions', href: `${BASE}/terms` },
    { label: 'Privacy Policy', href: `${BASE}/privacy` },
  ],
}

export function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
          <a href="mailto:support@learneris.com" className="text-sm text-gray-400 hover:text-white transition-colors">
            support@learneris.com
          </a>
        </div>
      </div>
    </footer>
  )
}
