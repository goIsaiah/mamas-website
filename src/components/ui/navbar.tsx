"use client"

import { Landmark } from "lucide-react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Navbar() {

  return (
    <nav className="grid grid-cols-3 bg-white p-1">
      <div className="flex justify-begin align-center">
        <Landmark size={32} />
      </div>
      <div className="flex justify-center align-center gap-4">
            <h1 className="flex justify-center align-center text-xl font-bold text-center m-auto">
              Isaiah Gocool
            </h1>
      </div>
      <div className="flex justify-end align-center">
            <>
              <Link href="/">
                <Button>Home</Button>
              </Link>
              <Link className="ml-4" href="projects">
                <Button>Projects</Button>
              </Link>
              <Link className="ml-4" href="hobbies">
                <Button>Hobbies</Button>
              </Link>
              <Link className="ml-4" href="contact">
                <Button>Contact</Button>
              </Link>
            </>
      </div>
    </nav>
  );
}
