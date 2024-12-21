export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-[400px] space-y-6">
        <div className="flex flex-col items-center space-y-2 text-center">
          <h1 className="text-2xl font-bold text-foreground">Verify Email</h1>
          <p className="text-muted-foreground">
            Check your email for a verification link
          </p>
        </div>
      </div>
    </div>
  )
}
