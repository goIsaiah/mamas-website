"use client";

// import { useState } from "react";
import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
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
// import Link from "next/link";
// import { Worker, Viewer } from '@react-pdf-viewer/core';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import '@react-pdf-viewer/core/lib/styles/index.css';
import Image from "next/image";

export default function Home() {
    const router = useRouter();
    return (
        <main className="pt-16">
            <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center">
                    <h1 className="text-5xl font-bold invert-text">My Hobbies</h1>
                </div>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        src="/images/Movie-reel-clip-art.png"
                        alt="Open sheet"
                        width={128}
                        height={128}
                        className="cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-shadow"
                    />
                </SheetTrigger>
                <SheetContent side = "bottom" className="h-1/2">
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </main>

    );
}
