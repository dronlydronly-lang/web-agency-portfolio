"use client";

import Image from "next/image";
import { useState } from "react";

const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

export function ImageWithFallback({
  basePath,
  alt,
  fallback,
  className,
  sizes = "(max-width: 640px) 100vw, 400px",
}: {
  basePath: string;
  alt: string;
  fallback: React.ReactNode;
  className?: string;
  sizes?: string;
}) {
  const [extIndex, setExtIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;

  return (
    <Image
      src={`${basePath}.${IMAGE_EXTENSIONS[extIndex]}`}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      onError={() => {
        if (extIndex < IMAGE_EXTENSIONS.length - 1) setExtIndex((i) => i + 1);
        else setFailed(true);
      }}
    />
  );
}
