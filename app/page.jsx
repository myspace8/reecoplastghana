'use client'

import Hero from './components/hero'
import Card from './components/cards-2'
import Testimonials from './components/testimonials'
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
              We produce waterproof and eco-friendly bricks using a combination of plastic waste and other materials, such as sand.
              </p>
            </div>
          </div>
        </div>
        <Card />
      {/* ----- */}
        <div className="overflow-hidden bg-gradient-to-r from-green-50 to-purple-500/8 py-18 sm:py-22">
        <div className="mx-auto max-w-7xl py-6 lg:py-8 px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <img
              src="https://www.afrik21.africa/wp-content/uploads/2021/12/shutterstock_696643630-1.jpg"
              alt="Product screenshot"
              className="w-[48rem] h-[28rem] object-cover sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
              <div className="lg:pr-8">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-gray-400">Why choose us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </main>
  )
}
