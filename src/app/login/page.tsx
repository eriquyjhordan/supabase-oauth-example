import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { LoginForm } from '@/components/login-form'
import { SignUp } from '@/components/sign-up'

export default function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-[400px] space-y-6">
        <div className="flex flex-col items-center space-y-2 text-center">
          <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in to your account or create a new one
          </p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <LoginForm />
          </TabsContent>

          <TabsContent value="register">
            <SignUp />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
