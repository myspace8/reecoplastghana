'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-green- text- p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Reecoplastghana</span>
              <Image
                width={1500}
                height={1500}
                className="h-10 w-auto"
                src="/reecoplastlogo.jpg"
                alt="Reecoplast Logo"
              />
            </Link>
          </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/news" className="hover:underline">News</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li><a href="/about" className="block hover:underline" onClick={toggleMenu}>About</a></li>
            <li><a href="/products" className="block hover:underline" onClick={toggleMenu}>Products</a></li>
            <li><a href="/services" className="block hover:underline" onClick={toggleMenu}>Services</a></li>
            <li><a href="/news" className="block hover:underline" onClick={toggleMenu}>News</a></li>
            <li><a href="/contact" className="block hover:underline" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

