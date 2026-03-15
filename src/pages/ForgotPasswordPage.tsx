import { useState, type FormEvent } from 'react'
import { Loader2, ArrowLeft, MailCheck } from 'lucide-react'
import { AuthLayout } from '../components/auth/AuthLayout'
import { FormInput } from '../components/auth/FormInput'
import { useTranslation } from '../i18n'
import { auth } from '../lib/api'
import { navigate } from '../lib/navigate'

export function ForgotPasswordPage() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [apiError, setApiError] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setApiError('')
    if (!email.trim()) { setError(t.auth.errors.required); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError(t.auth.errors.invalidEmail); return }
    setError('')

    setLoading(true)
    try {
      await auth.resetPassword(email)
      setSent(true)
    } catch {
      setApiError(t.auth.errors.genericError)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      {sent ? (
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <MailCheck className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-text mb-2">{t.auth.forgotPassword.successHeading}</h1>
          <p className="text-text-muted mb-8">{t.auth.forgotPassword.successMessage}</p>
          <a
            href="/login"
            onClick={(e) => { e.preventDefault(); navigate('/login') }}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.auth.forgotPassword.backToLogin}
          </a>
        </div>
      ) : (
        <>
          <h1 className="text-2xl sm:text-3xl font-bold text-text mb-1">{t.auth.forgotPassword.heading}</h1>
          <p className="text-text-muted mb-8">{t.auth.forgotPassword.subheading}</p>

          {apiError && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-6">
              {apiError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              label={t.auth.forgotPassword.emailLabel}
              type="email"
              placeholder={t.auth.forgotPassword.emailPlaceholder}
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={error}
              autoComplete="email"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {t.auth.forgotPassword.submit}
            </button>
          </form>

          <div className="text-center mt-6">
            <a
              href="/login"
              onClick={(e) => { e.preventDefault(); navigate('/login') }}
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.auth.forgotPassword.backToLogin}
            </a>
          </div>
        </>
      )}
    </AuthLayout>
  )
}
