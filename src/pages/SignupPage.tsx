import { useState, type FormEvent } from 'react'
import { Loader2 } from 'lucide-react'
import { AuthLayout } from '../components/auth/AuthLayout'
import { FormInput } from '../components/auth/FormInput'
import { GoogleSignIn } from '../components/auth/GoogleSignIn'
import { useTranslation } from '../i18n'
import { auth } from '../lib/api'
import { redirectToApp } from '../lib/redirect'
import { navigate } from '../lib/navigate'

export function SignupPage() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [apiError, setApiError] = useState('')
  const [loading, setLoading] = useState(false)

  function validate() {
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = t.auth.errors.required
    if (!email.trim()) errs.email = t.auth.errors.required
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = t.auth.errors.invalidEmail
    if (!password) errs.password = t.auth.errors.required
    else if (password.length < 8) errs.password = t.auth.errors.passwordTooShort
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
      const res = await auth.signup(email, password, name)
      redirectToApp(res.response.token)
    } catch (err) {
      const msg = (err as Error).message || ''
      if (msg.toLowerCase().includes('already') || msg.toLowerCase().includes('exist')) {
        setApiError(t.auth.errors.emailTaken)
      } else {
        setApiError(msg || t.auth.errors.genericError)
      }
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <h1 className="text-2xl sm:text-3xl font-bold text-text mb-1">{t.auth.signup.heading}</h1>
      <p className="text-text-muted mb-8">{t.auth.signup.subheading}</p>

      {apiError && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-6">
          {apiError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label={t.auth.signup.nameLabel}
          placeholder={t.auth.signup.namePlaceholder}
          value={name}
          onChange={e => setName(e.target.value)}
          error={errors.name}
          autoComplete="name"
        />
        <FormInput
          label={t.auth.signup.emailLabel}
          type="email"
          placeholder={t.auth.signup.emailPlaceholder}
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={errors.email}
          autoComplete="email"
        />
        <FormInput
          label={t.auth.signup.passwordLabel}
          type="password"
          placeholder={t.auth.signup.passwordPlaceholder}
          value={password}
          onChange={e => setPassword(e.target.value)}
          error={errors.password}
          autoComplete="new-password"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {t.auth.signup.submit}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-text-muted">{t.auth.signup.orContinueWith}</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Google */}
      <GoogleSignIn
        label={t.auth.signup.googleButton}
        disabled={loading}
        onError={setApiError}
        onLoading={setLoading}
      />

      {/* Login link */}
      <p className="text-sm text-text-muted text-center mt-6">
        {t.auth.signup.hasAccount}{' '}
        <a
          href="/login"
          onClick={(e) => { e.preventDefault(); navigate('/login') }}
          className="font-semibold text-primary hover:text-primary-dark transition-colors"
        >
          {t.auth.signup.loginLink}
        </a>
      </p>
    </AuthLayout>
  )
}
