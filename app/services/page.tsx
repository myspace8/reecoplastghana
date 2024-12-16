import { Header } from "../../components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Recycle, Factory, Users, HardHat, Leaf, Truck } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: "Waste Recycling",
      description: "We collect and process various waste materials, transforming them into valuable resources for construction.",
      icon: Recycle,
      color: "bg-blue-500",
    },
    {
      title: "Sustainable Materials Production",
      description: "Using recycled waste, we create eco-friendly building materials that meet or exceed industry standards.",
      icon: Factory,
      color: "bg-green-500",
    },
    {
      title: "Community Engagement",
      description: "We involve local communities in our sustainability efforts, creating awareness and fostering environmental responsibility.",
      icon: Users,
      color: "bg-purple-500",
    },
    {
      title: "Sustainable Construction Consulting",
      description: "Our experts provide guidance on incorporating sustainable practices and materials in construction projects.",
      icon: HardHat,
      color: "bg-yellow-500",
    },
    {
      title: "Green Building Certification Support",
      description: "We assist in obtaining green building certifications such as LEED, BREEAM, and others.",
      icon: Leaf,
      color: "bg-green-600",
    },
    {
      title: "Eco-Friendly Material Distribution",
      description: "We ensure efficient and environmentally responsible distribution of our sustainable building materials.",
      icon: Truck,
      color: "bg-blue-600",
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
            <p className="text-lg text-center mb-12">
              We offer a comprehensive range of services to support sustainable construction practices and environmental stewardship.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className={`${service.color} text-white`}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                      <service.icon size={24} />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardDescription className="text-base">{service.description}</CardDescription>
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

