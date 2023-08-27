import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import SignOutButton from '@/components/auth/sign-out-button'

export default async function App() {
  const session = await getSession()
  if (!session?.user) {
    redirect('/entrar')
  }

  return (
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
          <span className="text-lime-400">App </span>
          <span className="text-gray-400">via </span>
          <span className="text-amber-300">🔑privado</span>
        </p>
      </div>
      <main className="pt-8">
        <div>
          <p>
            <span className="text-gray-400">Usuário logado como </span>
            <span className="text-rose-400">🧠{session.user.name}</span>
          </p>
          <SignOutButton />
        </div>
      </main>
    </div>
  )
}
