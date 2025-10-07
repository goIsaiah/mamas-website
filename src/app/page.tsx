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
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <h1 className="text-5xl font-bold invert-text">Welcome!</h1>

      <div className="z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
        <Link href="/bakery" className="hover:scale-105 transition-transform duration-300">
          <Card className="w-80 h-80 overflow-hidden shadow-lg">
            <img src="/images/penguin-baker.png" alt="Sample 1" className="w-full h-full object-cover" />
          </Card>
        </Link>

        <Link href="/crafts" className="hover:scale-105 transition-transform duration-300">
          <Card className="w-80 h-80 overflow-hidden shadow-lg">
            <img src="/images/penguin-crafts.png" alt="Sample 2" className="w-full h-full object-cover" />
          </Card>
        </Link>
      </div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
}
