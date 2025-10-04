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
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center h-lvh">
        <h1 className="text-5xl font-bold invert-text">My name is Isaiah Gocool</h1>
        <p className="text-xl invert-text">Welcome to my website!</p>
        <Link href="#about-me">
          <Button className="text-xl font-bold invert-text" variant="link">Scroll down to learn more about me!</Button>
        </Link>
        <div>
          <div className="arrow-div">
            <Link href="#about-me" className="arrow">
              <ChevronDown className="invert-text" size={128} />
            </Link>
          </div>
        </div>
      </div>
      <Card style={{ marginTop: "250px" }} className="w-1/2 mt-8">
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <div id="about-me" className="grid grid-cols-2 gap-4">
            {/* Left side: Text */}
            <div>
              <div className="grid grid-cols-5 gap-3">
                <div className="col-span-6">
                  <p>
                    My name is Isaiah, and I am a 4th year Software Engineering student at the Lassonde School of Engineering, York University.
                    I have been coding since 2018, initially starting out with the Turing programming language, before I moved onto Python and finally Java the
                    following year.
                  </p>
                  <p>
                    <br />
                    Most of my projects have been coded in Java, but I have since expanded my knowledge to working with frontend frameworks like TypeScript,
                    React.js, and Tailwind.css.  Feel free to look around my website to learn more about myself!
                  </p>
                  <br />
                </div>
              </div>
            </div>

            {/* Right side: Image */}
            <div className="flex items-center justify-center">
              <img
                src="/images/self.jpg"
                alt="myself"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <div id="features-preview" className="w-1/2" style={{ marginTop: "200px", marginBottom: "200px" }}>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <div className="flex items-center justify-center p-6">
                  <MonitorCheck size={64} className="pr-4" />
                  <div>
                    <span className="text-3xl font-semibold">My Projects</span>
                    <p>As a coder since 2018, view some of the projects I have made or contributed to as part of my career.</p>
                    <div className="flex justify-center mt-4">
                      <Link href="/projects">
                        <Button className="text-3xl font-bold invert-text p-8">View Projects</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <div className="flex items-center justify-center p-6">
                  <BookOpenText size={64} className="pr-4" />
                  <div>
                    <span className="text-3xl font-semibold">Personal Hobbies</span>
                    <p>Learn more about myself through my personal hobbies, such as watching movies, or reading books.</p>
                    <div className="flex justify-center mt-4">
                      <Link href="/hobbies">
                        <Button className="text-3xl font-bold invert-text p-8">View Hobbies</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <div className="flex items-center justify-center p-6">
                  <User size={64} className="pr-4" />
                  <div>
                    <span className="text-3xl font-semibold">Contact Me</span>
                    <p>Find my email, Github page, and resume.</p>
                    <div className="flex justify-center mt-4">
                      <Link href="/contact">
                        <Button className="text-3xl font-bold invert-text p-8">Contact Me</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
}
