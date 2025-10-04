"use client";

// import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// import { authAxios } from "@/lib/axios";
// import { isAxiosError } from "axios";
import Link from "next/link";
// import { Worker, Viewer } from '@react-pdf-viewer/core';

import { Github, Linkedin } from "lucide-react";

export default function Home() {
    const router = useRouter();
    return (
        <main className="pt-16">
            <div className="flex items-center justify-center h-[300px]">
                <h1 className="text-5xl font-bold invert-text">Contact Me</h1>
            </div>

            <div className="flex flex-row items-center justify-center h-[300px] gap-4">
                <Link href="https://github.com/goIsaiah">
                    <Button className="px-6 py-3 text-lg flex items-center gap-2">
                        <Github className="w-6 h-6" /> Github Account
                    </Button>
                </Link>

                <Link href="https://www.linkedin.com/in/isaiah-gocool-7a0a08258/">
                    <Button className="px-6 py-3 text-lg flex items-center gap-2 bg-[#0077b5] hover:bg-[#005a8c] text-white">
                        <Linkedin className="w-6 h-6" /> Linkedin Profile
                    </Button>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center">
                    <iframe
                        src="https://drive.google.com/file/d/1idLM0-Fp_B0g31oCrgDtYVk_8m0C4tms/view"
                        className="w-[600px] h-[400px] border rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </main>
    );
}
