"use client";

import { ParallaxProvider } from "react-scroll-parallax";

export default function RightContent({ children }) {
  return (
    <ParallaxProvider>
      <div className="px-8 py-16">{children}</div>
    </ParallaxProvider>
  );
}
