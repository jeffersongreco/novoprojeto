'use client'

import { signOut } from 'next-auth/react'

export default function SignOutButton() {
  return (
    <button onClick={() => signOut()} className="pt-8 text-red-500">
      Sair
    </button>
  )
}
