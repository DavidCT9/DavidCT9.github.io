"use client"

import { useState, useRef, type MouseEvent, type TouchEvent } from "react"
import { cn } from "@/lib/utils"

interface ImageMagnifierProps {
  src: string
  alt: string
  width?: number
  height?: number
  magnifierSize?: number
  zoomLevel?: number
  className?: string
}

const ImageMagnifier = ({
  src,
  alt,
  width,
  height,
  magnifierSize = 100,
  zoomLevel = 2.5,
  className,
}: ImageMagnifierProps) => {
  const [showMagnifier, setShowMagnifier] = useState(false)
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 })
  const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 })
  const imgRef = useRef<HTMLImageElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return

    const { left, top, width, height } = imgRef.current.getBoundingClientRect()

    // Calculate cursor position relative to the image
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    // Ensure the magnifier stays within bounds
    const boundedX = Math.min(Math.max(x, 0), 100)
    const boundedY = Math.min(Math.max(y, 0), 100)

    setMagnifierPosition({ x: boundedX, y: boundedY })
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!imgRef.current || e.touches.length === 0) return

    const touch = e.touches[0]
    const { left, top, width, height } = imgRef.current.getBoundingClientRect()

    // Calculate touch position relative to the image
    const x = ((touch.clientX - left) / width) * 100
    const y = ((touch.clientY - top) / height) * 100

    // Ensure the magnifier stays within bounds
    const boundedX = Math.min(Math.max(x, 0), 100)
    const boundedY = Math.min(Math.max(y, 0), 100)

    setTouchPosition({ x: boundedX, y: boundedY })
  }

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!imgRef.current || e.touches.length === 0) return

    const touch = e.touches[0]
    const { left, top, width, height } = imgRef.current.getBoundingClientRect()

    const x = ((touch.clientX - left) / width) * 100
    const y = ((touch.clientY - top) / height) * 100

    setTouchPosition({ x, y })
    setShowMagnifier(true)
  }

  return (
    <div
      className="relative cursor-crosshair overflow-hidden"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setShowMagnifier(false)}
    >
      <img
        ref={imgRef}
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={cn("block w-full", className)}
        loading="lazy"
      />

      {showMagnifier && (
        <div
          className="pointer-events-none absolute z-10 hidden overflow-hidden rounded-full border border-gray-200 bg-white shadow-lg md:block"
          style={{
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            // Position the magnifier
            left: `calc(${magnifierPosition.x}% - ${magnifierSize / 2}px)`,
            top: `calc(${magnifierPosition.y}% - ${magnifierSize / 2}px)`,
          }}
        >
          <div
            style={{
              width: `${magnifierSize * zoomLevel}px`,
              height: `${magnifierSize * zoomLevel}px`,
              backgroundImage: `url(${src})`,
              backgroundPosition: `${magnifierPosition.x * zoomLevel}% ${magnifierPosition.y * zoomLevel}%`,
              backgroundSize: `${zoomLevel * 100}%`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      )}

      {/* Mobile touch magnifier */}
      {showMagnifier && (
        <div
          className="pointer-events-none absolute z-10 block overflow-hidden rounded-full border border-gray-200 bg-white shadow-lg md:hidden"
          style={{
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            // Position above the touch point
            left: `calc(${touchPosition.x}% - ${magnifierSize / 2}px)`,
            top: `calc(${touchPosition.y}% - ${magnifierSize * 1.5}px)`,
          }}
        >
          <div
            style={{
              width: `${magnifierSize * zoomLevel}px`,
              height: `${magnifierSize * zoomLevel}px`,
              backgroundImage: `url(${src})`,
              backgroundPosition: `${touchPosition.x * zoomLevel}% ${touchPosition.y * zoomLevel}%`,
              backgroundSize: `${zoomLevel * 100}%`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      )}
    </div>
  )
}

export default ImageMagnifier
