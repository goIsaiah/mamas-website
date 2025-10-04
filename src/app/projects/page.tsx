"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "./projects";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-16">
      <h2 className="text-4x1 font-bold text-center">Projects</h2>
    </section>
  )
}