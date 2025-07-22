"use client";
import { useEffect } from "react";

export default function Wrapper({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW({ live: false }).init();
      console.log("✅ WOW.js initialized");
    }
  }, []);

  return <>{children}</>;
}