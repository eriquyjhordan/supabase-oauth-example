'use client'

import Image from 'next/image'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useState } from 'react'

export function ImagePreview() {
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <Label htmlFor="profile-image">Profile Image</Label>
      <div className="flex items-center gap-4">
        <div className="relative size-16 overflow-hidden rounded-full border">
          {imagePreview ? (
            <Image
              src={imagePreview}
              alt="Profile preview"
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center text-center text-xs justify-center bg-muted text-muted-foreground rounded-full">
              No image
            </div>
          )}
        </div>
        <Input
          id="profile-image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
    </>
  )
}
