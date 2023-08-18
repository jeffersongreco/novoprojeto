import { SignIn } from "@clerk/nextjs";

export default function Entrar() {
  return (
    <div className="absolute inset-0 flex flex-col justify-start gap-8 bg-slate-950 p-8 font-mono font-medium">
      <div className="flex gap-8">
        <p className="text-gray-200">🐇 Novo projeto</p>
        <p>
          <span className="text-gray-400">Usuário em </span>
          <span className="text-lime-400">Sign-in </span>
          <span className="text-gray-400">via </span>
          <span className="text-blue-500">🌎público</span>
        </p>
      </div>
      <main className="pt-8">
        <SignIn />
      </main>
    </div>
  );
}
