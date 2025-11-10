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
      <main>
        <div className="flex p-2">
          <div className="flex-1">
            <h1>Latest Post</h1>
          </div>
          <div>
            <Button onClick={goAdmin} variant="outline">Go Admin</Button>
          </div>
        </div>
          <div className="p-2">
            <img src="/images/Snap-Dragon-Processor.jpg" alt="Snap Dragon Processor" width="600" />
            <h1>What is Snap Dragon? - My first post.</h1>
            <p>I've always been a fan of technology and in my persuit of a career 
              in Software Engineering, here I go, building this blog to explore technologies, 
              both old a new. The first technology I want to explore is the Snap Dragon 
              processor, what is the Snap Dragon processor. Snap Dragon is known as a 
              System on a Chip (SoC) processor. The reason it is called an SoC is because 
              it integrates the CPU, GPU and modem onto a single chip which yields better 
              performance and power efficiency. This powerful processor was designed by 
              Qualcomm and is found in devices such as smartphones, tablets, laptops and 
              even vehicles. This chip is able to deliver premium performance, from everyday 
              tasks to immersive gaming. With integrated GPUs, they are able to provide 
              high-quality graphics for gaming and media. The chip also features a dedicated 
              AI engine and Neural Processing Unit (NPU) for on-device AI features. An 
              example of a smartphone which uses this powerful processor is the 
              Samsung Galaxy S25 Ultra which features Galaxy AI.
            </p>
            <p className="italics text-sm">Posted on Nov. 10, 2025</p>
          </div>
      </main>
    </div>
  );
}
