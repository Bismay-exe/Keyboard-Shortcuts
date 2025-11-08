"use client";
import { useEffect } from "react";

export default function CmdSound() {
  useEffect(() => {
    function play() {
      const a = new Audio("/ui/click.mp3");
      a.volume = 0.15;
      a.play();
    }
    window.addEventListener("cmd-select", play);
    return () => window.removeEventListener("cmd-select", play);
  }, []);

  return null;
}
