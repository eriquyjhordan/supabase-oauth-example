import { logout } from '@/app/login/actions'
import { Button } from './ui/button'

export async function LogOut() {
  return (
    <form action={logout}>
      <Button variant="ghost" type="submit">
        Logout
      </Button>
    </form>
  )
}
