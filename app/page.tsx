"use client"

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <>
      <div className="max-w-[1000px] h-screen mx-auto jlex justify-center items-center flex-col gap-2">
        <h1 className="text-8px uppercase font-black tex-center mb-4">
          NEXT_AUTH
        </h1>
        <button onClick={() => signIn("google")} className="bg-gray-300 hover:bg-gray-400 rounded-md p-3">
          Se connecter avec Google
        </button>
        <button onClick={() => signIn("github")} className="bg-gray-300 hover:bg-gray-400 rounded-md p-3">
          Se connecter avec GitHub
        </button>
      </div>
    </>
  );
}
