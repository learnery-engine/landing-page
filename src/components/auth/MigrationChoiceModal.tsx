import { Loader2 } from 'lucide-react'
import { useTranslation } from '../../i18n'

interface Props {
  open: boolean
  // Google flow only — moving may reset an existing password (see issue #98)
  showPasswordWarning?: boolean
  loading?: boolean
  onMove: () => void
  onStay: () => void
}

// Post-login choice between the upgraded app (aiapp.learneris.com) and the
// current Bubble app. No close button on purpose: the user is mid-login and
// has to pick a destination either way.
export function MigrationChoiceModal({ open, showPasswordWarning, loading, onMove, onStay }: Props) {
  const { t } = useTranslation()
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 sm:p-8">
        <h2 className="text-xl font-bold text-text mb-2">{t.auth.migration.heading}</h2>
        <p className="text-sm text-text-muted mb-4">{t.auth.migration.body}</p>

        {showPasswordWarning && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs rounded-xl px-4 py-3 mb-4">
            {t.auth.migration.passwordWarning}
          </div>
        )}

        <div className="space-y-3">
          <button
            onClick={onMove}
            disabled={loading}
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {t.auth.migration.moveButton}
          </button>
          <button
            onClick={onStay}
            disabled={loading}
            className="w-full border-2 border-gray-200 hover:border-gray-300 text-text font-medium py-3 rounded-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {t.auth.migration.stayButton}
          </button>
        </div>
      </div>
    </div>
  )
}
