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
import { crafts } from "./crafts";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="crafts" className="py-16">
      <h2 className="text-4x1 font-bold text-center">Crafts</h2>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } }, }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4 mt-8"
      >
        {crafts.map((crafts,idx) => (
          <motion.div
            key={idx}
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 }, }} transition={{ duration: 0.6 }} whileHover={{ y: -10, scale: 1.03 }}
          >
            <Card className="w-full flex flex-col items-center text-center">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {crafts.title}
                </CardTitle>
                <div className="mt-4">
                  <img src={crafts.image} alt={`${crafts.title} Screenshot`} className="w-full h-auto rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedImage(crafts.image)} />
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-gray-700">{crafts.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Expanded" className="w-full h-auto rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}