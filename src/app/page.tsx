"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  return (
    <main className="flex flex-col h-screen items-center justify-center space-y-6">
      <h1 
      className="flex flex-col text-center items-center justify-center text-[200px] font-bold " 
      style={{ fontFamily: "var(--font-gendy)" }}>
        <span className="leading-50">Keyboard</span>
        <span className="leading-50">Shortcuts</span>
      </h1>

      {/* Button */}
      <div
        className={`mt-8 transition-opacity duration-700 delay-200 "opacity-100" : "opacity-0"
        }`}
      >
        <Link href="/hero">
          <button className="btn-group">
            <span className="circle">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Let's Go</span>
          </button>
        </Link>
      </div>
    </main>
  );
}
