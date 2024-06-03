"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  const router = useRouter();

  const unshorten = () => {
    router.push(`/${url}`);
  };

  return (
    <main className="p-2 flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">Unshorten</h1>
        <p className="text-lg text-center">Unshorten URLs with ease.</p>
        <div className="flex gap-2 mt-2">
          <Input
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="https://t.co/Bhukx0fKUF"
          />
          <Button onClick={unshorten}>Unshorten</Button>
        </div>
      </div>
    </main>
  );
}
