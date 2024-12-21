export default function ErrorPage({
  searchParams,
}: {
  searchParams: { reason?: string }
}) {
  const getErrorMessage = (reason?: string) => {
    switch (reason) {
      case 'missing-params':
        return 'Invalid confirmation link. Please request a new confirmation email.'
      case 'verification-failed':
        return 'Email verification failed. The link may have expired. Please request a new confirmation email.'
      case 'unexpected-error':
        return 'An unexpected error occurred. Please try again or contact support.'
      default:
        return 'An error occurred. Please try again or contact support.'
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Verification Error</h1>
      <p className="text-center mb-4">{getErrorMessage(searchParams.reason)}</p>
      <a href="/login" className="text-blue-600 hover:text-blue-800 underline">
        Return to login
      </a>
    </div>
  )
}
