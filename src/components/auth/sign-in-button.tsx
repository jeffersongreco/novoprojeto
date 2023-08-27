'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'

export default function SignInButton() {
  const [loading, setLoading] = useState(false)

  // Get error message added by next/auth in URL.
  const searchParams = useSearchParams()
  const error = searchParams?.get('error')

  useEffect(() => {
    const errorMessage = Array.isArray(error) ? error.pop() : error
    errorMessage && toast.error(errorMessage)
  }, [error])

  return (
    <button
      disabled={loading}
      onClick={() => {
        setLoading(true)
        signIn('github', { callbackUrl: '/app' })
      }}
    >
      <p className="text-cyan-500">Continuar com GitHub</p>
    </button>
  )
}
