'use client'

import React, { useState, useCallback, useEffect, ReactNode } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface CarouselProps {
  items: ReactNode[]
  className?: string
}

export function Carousel({ items, className = '' }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps'
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={`${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {items.map((item, index) => (
            <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0 px-2">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className="rounded-full"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className="rounded-full"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

