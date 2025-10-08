"use client";

import "./wave.css";
import "./invert.css"
import "./bounce.css"

// import Head from "next/head";

import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ChevronDown, User, MonitorCheck, BookOpenText } from "lucide-react";

export default function Home() {
  const router = useRouter();
  return (
    <div className="relative flex flex-col items-center min-h-screen overflow-hidden pt-24">
      <h1 className="text-5xl font-bold mb-40 z-10 text-white text-center">Welcome!</h1>

      <div className="z-10 flex flex-wrap justify-center gap-24 mb-32">
        <div className="flex flex-col items-center">
          <Link href="/bakery" className="hover:scale-105 transition-transform duration-300">
            <Card className="w-96 h-96 overflow-hidden bg-transparent border-0 shadow-[0_0_40px_rgba(255,192,203,0.5)]">
              <img src="/images/penguin-baker.png" alt="Sample 1" className="w-full h-full object-cover" />
            </Card>
          </Link>
          <p className="text-5xl font-bold text-white text-center mt-8">Mama's Bakery</p>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/crafts" className="hover:scale-105 transition-transform duration-300">
            <Card className="w-96 h-96 overflow-hidden bg-transparent border-0 shadow-[0_0_40px_rgba(255,192,203,0.5)]">
              <img src="/images/penguin-crafts.png" alt="Sample 2" className="w-full h-full object-cover" />
            </Card>
          </Link>
          <p className="text-5xl font-bold text-white text-center mt-8">Mama's Crafts</p>
        </div>

      </div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
}
