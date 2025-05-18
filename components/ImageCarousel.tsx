"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import ImageMagnifier from "./ImageMagnifier"

interface ImageCarouselProps {
  images: string[]
  autoPlay?: boolean
  interval?: number
  showThumbnails?: boolean
}

const ImageCarousel = ({ images, autoPlay = true, interval = 5000, showThumbnails = true }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const timerRef = useRef<number | null>(null)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToIndex = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(goToNext, interval)
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPlaying, interval])

  // Pause on hover
  const handleMouseEnter = () => {
    if (isPlaying && timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const handleMouseLeave = () => {
    if (isPlaying && !timerRef.current) {
      timerRef.current = window.setInterval(goToNext, interval)
    }
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            <ImageMagnifier
              src={image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 text-black hover:bg-white"
        onClick={(e) => {
          e.stopPropagation()
          goToPrevious()
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 text-black hover:bg-white"
        onClick={(e) => {
          e.stopPropagation()
          goToNext()
        }}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              index === currentIndex ? "bg-white w-4" : "bg-white/50",
            )}
            onClick={(e) => {
              e.stopPropagation()
              goToIndex(index)
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnails */}
      {showThumbnails && (
        <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              className={cn(
                "flex-shrink-0 cursor-pointer overflow-hidden rounded border-2 transition-all",
                index === currentIndex ? "border-black" : "border-transparent opacity-70 hover:opacity-100",
              )}
              onClick={() => goToIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                className="h-16 w-24 object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageCarousel
