"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import About from "@/components/About";

// Dynamically import non-critical components
const DynamicServices = dynamic(() => import("@/components/Services"), {
  loading: () => (
    <div className="h-96 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  ),
  ssr: false,
});

const DynamicProjects = dynamic(() => import("@/components/Projects"), {
  loading: () => (
    <div className="h-96 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  ),
  ssr: false,
});

const DynamicContact = dynamic(() => import("@/components/Contact"), {
  loading: () => (
    <div className="h-96 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  ),
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text">
      <Hero />
      <About />
      <DynamicServices />
      <DynamicProjects />
      <DynamicContact />
    </main>
  );
}
