import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import PasswordInput from './ui/password-input'
import { Button } from './ui/button'
import { Twitter } from 'lucide-react'
import { login } from '@/app/login/actions'
import { GoogleOauth } from './google-oauth'

export async function LoginForm() {
  return (
    <Card>
      <form>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <PasswordInput isLogin id="password" name="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" formAction={login}>
            Login
          </Button>
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <GoogleOauth />
            <Button variant="outline">
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  )
}
