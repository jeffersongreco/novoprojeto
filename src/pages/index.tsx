import Head from "next/head";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function BemVindo() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Novo projeto</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute inset-0 flex flex-col justify-start gap-8 bg-slate-950 p-8 font-mono font-medium">
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
          {!session && (
            <Link href="/entrar" className="text-cyan-500">
              <p>Entrar</p>
            </Link>
          )}
          {session && (
            <div>
              <p>
                <span className="text-gray-400">Usuário logado como </span>
                <span className="text-rose-400">🧠{session.user.name}</span>
              </p>
              <button
                onClick={() => void signOut()}
                className="pt-8 text-red-500"
              >
                Sair
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
