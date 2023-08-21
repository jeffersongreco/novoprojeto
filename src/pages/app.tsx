import { SignOutButton, useUser } from '@clerk/nextjs'

export default function App() {
  const { user } = useUser()

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
        {user && (
          <div>
            <p>
              <span className="text-gray-400">Usuário logado como </span>
              <span className="text-rose-400">🧠{user.firstName}</span>
            </p>
            <SignOutButton>
              <button className="pt-8 text-red-500">Sair</button>
            </SignOutButton>
          </div>
        )}
      </main>
    </div>
  )
}
