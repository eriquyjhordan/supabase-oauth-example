import { ModeToggle } from '@/components/toggle-theme'

export default function Home() {
  return (
    <div className="flex flex-1 justify-center items-center h-screen">
      <div className="hidden lg:block fixed top-4 right-4">
        <ModeToggle />
      </div>
      <h1 className="font-inter font-bold text-2xl">Home</h1>
    </div>
  )
}
