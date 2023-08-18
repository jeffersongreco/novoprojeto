import Head from "next/head";
import { api } from "~/utils/api";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Onboarding() {
  const router = useRouter();

  const [alert, setAlert] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const { mutate, isLoading: isSaving } = api.user.createUsername.useMutation({
    onSuccess: () => {
      router.push(`/app`);
    },
    onError: (e) => {
      setInput("");
      const errorData = e.message;
      const error = JSON.parse(errorData);

      if (errorData) {
        setAlert(error[0].message);
      }
    },
  });

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
            <span className="text-lime-400">App </span>
            <span className="text-gray-400">via </span>
            <span className="text-amber-300">🔑privado</span>
          </p>
        </div>
        <main className="pt-8">
          <div>
            {alert !== "" && (
              <p className="pb-4 ">
                <span className="text-orange-400">🎃Erro </span>
                <span className="text-gray-400">{alert}</span>
              </p>
            )}
            <div className="flex gap-2">
              <p className="text-gray-200">Username</p>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="＿"
                disabled={isSaving}
                className="bg-transparent text-gray-200 placeholder-gray-500 outline-none"
              />
            </div>
            <button
              onClick={() => mutate({ username: input })}
              disabled={isSaving}
              className="pt-8 text-cyan-500"
            >
              Salvar
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
