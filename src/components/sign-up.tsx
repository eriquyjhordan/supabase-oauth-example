import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import PasswordInput from '@/components/ui/password-input'

import { Twitter } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signUp } from '@/app/login/actions'
import { GoogleOauth } from './google-oauth'

export async function SignUp() {
  return (
    <Card>
      <form action={signUp}>
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>
            Enter your information to create a new account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="full-name" name="full_name" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email-register">Email</Label>
            <Input
              id="email-register"
              type="email"
              name="email"
              placeholder="m@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password-register">Password</Label>
            <PasswordInput name="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" type="submit">
            Create Account
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
