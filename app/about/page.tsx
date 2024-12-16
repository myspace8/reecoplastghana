import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">About Reecoplast</h1>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="/1683120208603.jpeg"
                  alt="Reecoplast team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">{"At Reecoplast, we're passionate about creating a sustainable future through innovative building solutions. Our team of experts works tirelessly to transform waste materials into high-quality, eco-friendly building products"}.</p>
                <p className="text-lg mb-4">{"Founded in 2010, Reecoplast has been at the forefront of sustainable construction practices. We believe that the construction industry has a crucial role to play in combating climate change and preserving our planet's resources for future generations."}</p>
                <p className="text-lg mb-4">Our mission is to revolutionize the construction industry by providing sustainable, high-performance building materials that reduce waste, lower carbon emissions, and create healthier living environments.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
                <p>We prioritize environmental stewardship in every aspect of our business, from sourcing materials to manufacturing processes.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p>We continuously seek new ways to improve our products and processes, pushing the boundaries of sustainable construction.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Quality</h3>
                <p>We are committed to delivering high-quality, durable products that meet or exceed industry standards.</p>
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

