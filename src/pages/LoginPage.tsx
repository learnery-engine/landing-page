import { useState, type FormEvent } from 'react'
import { Loader2 } from 'lucide-react'
import { AuthLayout } from '../components/auth/AuthLayout'
import { FormInput } from '../components/auth/FormInput'
import { GoogleSignIn } from '../components/auth/GoogleSignIn'
import { useTranslation } from '../i18n'
import { auth } from '../lib/api'
import { navigate } from '../lib/navigate'

export function LoginPage() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [apiError, setApiError] = useState('')
  const [loading, setLoading] = useState(false)
  const resetSuccess = new URLSearchParams(window.location.search).get('reset') === 'success'

  function validate() {
    const errs: Record<string, string> = {}
    if (!email.trim()) errs.email = t.auth.errors.required
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = t.auth.errors.invalidEmail
    if (!password) errs.password = t.auth.errors.required
    return errs
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setApiError('')
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return

    setLoading(true)
    try {
      const res = await auth.login(email, password)
      window.location.href = res.response.login_url
    } catch {
      setApiError(t.auth.errors.invalidCredentials)
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <h1 className="text-2xl sm:text-3xl font-bold text-text mb-1">{t.auth.login.heading}</h1>
      <p className="text-text-muted mb-8">{t.auth.login.subheading}</p>

      {resetSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-3 mb-6">
          {t.auth.login.resetSuccess}
        </div>
      )}

      {apiError && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-6">
          {apiError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label={t.auth.login.emailLabel}
          type="email"
          placeholder={t.auth.login.emailPlaceholder}
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={errors.email}
          autoComplete="email"
        />
        <div>
          <FormInput
            label={t.auth.login.passwordLabel}
            type="password"
            placeholder={t.auth.login.passwordPlaceholder}
            value={password}
            onChange={e => setPassword(e.target.value)}
            error={errors.password}
            autoComplete="current-password"
          />
          <div className="text-right mt-1.5">
            <a
              href="/forgot-password"
              onClick={(e) => { e.preventDefault(); navigate('/forgot-password') }}
              className="text-xs text-primary hover:text-primary-dark font-medium transition-colors"
            >
              {t.auth.login.forgotPassword}
            </a>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {t.auth.login.submit}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-text-muted">{t.auth.login.orContinueWith}</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Google */}
      <GoogleSignIn
        label={t.auth.login.googleButton}
        disabled={loading}
        onError={setApiError}
        onLoading={setLoading}
      />

      {/* Signup link */}
      <p className="text-sm text-text-muted text-center mt-6">
        {t.auth.login.noAccount}{' '}
        <a
          href="/signup"
          onClick={(e) => { e.preventDefault(); navigate('/signup') }}
          className="font-semibold text-primary hover:text-primary-dark transition-colors"
        >
          {t.auth.login.signupLink}
        </a>
      </p>
    </AuthLayout>
  )
}
