import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">Name</label>
                    <Input type="text" id="name" placeholder="Your Name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <Input type="email" id="email" placeholder="your@email.com" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <Textarea id="message" placeholder="Your message" rows={4} required />
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="mr-2" size={18} />
                    <p>Ghana - Kumasi, Nerebehin</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2" size={18} />
                    <p>+223 24 (089) 4565</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2" size={18} />
                    <p>info@Reecoplast.com</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Reecoplast. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

