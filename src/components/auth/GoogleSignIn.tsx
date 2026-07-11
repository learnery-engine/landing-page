import { useState } from 'react'
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'
import { AIAPP_URL, GOOGLE_CLIENT_ID } from '../../lib/constants'
import { auth, aiappBridgeUrl, bubbleLoginUrl, trackLogin } from '../../lib/api'
import { MigrationChoiceModal } from './MigrationChoiceModal'

interface Props {
  label: string
  disabled?: boolean
  next?: string
  onError: (msg: string) => void
  onLoading: (loading: boolean) => void
}

// Google identity verified by OAuth, held while the user picks a destination
// in MigrationChoiceModal. The choice decides the `move` param sent to the
// google-auth workflow — move=yes triggers the temp-password login (may reset
// an existing password), so it must not run before the user consents.
interface PendingGoogle {
  email: string
  accessToken: string
  name: string
}

function GoogleButton({ label, disabled, next, onError, onLoading }: Props) {
  const [pending, setPending] = useState<PendingGoogle | null>(null)
  const [finishing, setFinishing] = useState(false)

  async function finishGoogleAuth(p: PendingGoogle, move: boolean) {
    setFinishing(true)
    onLoading(true)
    try {
      const res = await auth.googleAuth(p.email, p.accessToken, p.name, move)
      trackLogin(p.email, 'google')
      const target = move ? aiappBridgeUrl(res.response, next) : null
      window.location.href = target ?? bubbleLoginUrl(res.response, next)
    } catch {
      onError('Something went wrong. Please try again.')
      setPending(null)
      setFinishing(false)
      onLoading(false)
    }
  }

  const googleLogin = useGoogleLogin({
    scope: 'openid email profile',
    onSuccess: async (tokenResponse) => {
      onLoading(true)
      try {
        const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        }).then(r => r.json())

        const p: PendingGoogle = {
          email: userInfo.email,
          accessToken: tokenResponse.access_token,
          name: userInfo.name || '',
        }
        if (AIAPP_URL) {
          // Let the user pick stay/move before committing to the workflow
          setPending(p)
          onLoading(false)
        } else {
          await finishGoogleAuth(p, false)
        }
      } catch {
        onError('Something went wrong. Please try again.')
        onLoading(false)
      }
    },
    onError: () => {
      onError('Something went wrong. Please try again.')
    },
  })

  return (
    <>
    <MigrationChoiceModal
      open={!!pending}
      showPasswordWarning
      loading={finishing}
      onMove={() => { if (pending) finishGoogleAuth(pending, true) }}
      onStay={() => { if (pending) finishGoogleAuth(pending, false) }}
    />
    <button
      onClick={() => googleLogin()}
      disabled={disabled}
      className="w-full border-2 border-gray-200 hover:border-gray-300 text-text font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-60"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      {label}
    </button>
    </>
  )
}

export function GoogleSignIn(props: Props) {
  if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID_HERE') {
    // Google OAuth not configured — show disabled button
    return (
      <button
        disabled
        className="w-full border-2 border-gray-200 text-text-muted font-medium py-3 rounded-xl flex items-center justify-center gap-3 opacity-50 cursor-not-allowed"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        {props.label}
      </button>
    )
  }

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <GoogleButton {...props} />
    </GoogleOAuthProvider>
  )
}
