'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const goAdmin = () => {
    router.push("/admin")
  }

  return (
    <div>
      <header className="flex p-2">
        <h1 className="flex-1 text-green-600 uppercase tracking-widest">Bytes</h1>
        <h2 className="">{new Date().toLocaleDateString()}</h2>
      </header>
      <main>
        <div className="p-2">
          <Button onClick={goAdmin} variant="outline">Go Admin</Button>
        </div>
      </main>
    </div>
  );
}
