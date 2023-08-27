import Link from 'next/link'
import { getSession } from '@/lib/auth'
import SignOutButton from '@/components/auth/sign-out-button'

export default async function BemVindo() {
  const session = await getSession()

  return (
    <>
      <div
        className="
        absolute inset-0 flex flex-col justify-start gap-8 bg-slate-950 p-8
        font-mono font-medium
        "
      >
        <div className="flex gap-8">
          <p className="text-gray-200">🐇 Novo projeto</p>
          <p>
            <span className="text-gray-400">Usuário em </span>
            <span className="text-lime-400">Homepage </span>
            <span className="text-gray-400">via </span>
            <span className="text-blue-500">🌎público</span>
          </p>
        </div>
        <main className="pt-8">
          {!session?.user && (
            <Link href="/entrar" className="text-cyan-500">
              <p>Entrar</p>
            </Link>
          )}
          {session?.user && (
            <div>
              <p>
                <span className="text-gray-400">Usuário logado como </span>
                <span className="text-rose-400">🧠{session.user.name}</span>
              </p>
              <SignOutButton />
            </div>
          )}
        </main>
      </div>
    </>
  )
}
