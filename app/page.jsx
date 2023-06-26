'use client'

import Hero from './components/hero'
import Card from './components/cards-2'
import CardA from './components/cards-2a'
import Testimonials from './components/testimonials'
import ReachOut from '@/app/components/reachout'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

export default function Home() {

  return (
    <main>
      <Hero />
        <div className="bg-white py-14 sm:py-22">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-gray-400">From Trash to Treasure</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Making waste plastics useful
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              We source plastic waste from local recycling centres and work with construction companies to encourage the use of eco-friendly building materials.
              </p>
            </div>
          </div>
        </div>
      {/* ----- */}
        <Card />
      {/* ----- */}
      <div className='bg-gray-300/25'>
        <div className="py-8 sm:py-22 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-gray-400">What We Do</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Products and services
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                We manufacture and produce innovative building materials from recycled plastic waste. A great alternative to traditional construction material.</p>
              </div>
            </div>
          </div>
        <CardA />
        {/* ----- */}
      </div>
      <Testimonials />
      <ReachOut />
    </main>
  )
}
