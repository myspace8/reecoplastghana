import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function ProductsPage() {
  const products = [
    {
      name: "Eco-Friendly Pavement Bricks",
      description: "Durable and sustainable pavement bricks made from recycled materials.",
      image: "/pavement-bricks.jpeg"
    },
    {
      name: "Recycled Pallets",
      description: "Sturdy pallets crafted from recycled plastics, perfect for logistics and transportation.",
      image: "/plastic-palletes.jpeg"
    },
    // {
    //   name: "Sustainable Insulation",
    //   description: "High-performance insulation made from recycled textiles and plastics.",
    //   image: "/placeholder.svg?height=300&width=400"
    // }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
            <p className="text-lg text-center mb-12">
              Discover our range of sustainable building materials, designed to reduce waste and improve energy efficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{product.description}</CardDescription>
                    <Button className="mt-4">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
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

