"use client";

import Image from "next/image";

export default function HeroImage() {
  return (
    <Image
      src="/Me.png"
      alt="My picture"
      width={387}
      height={408}
      priority
      className="hero-image"
    />
  );
}
