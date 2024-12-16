import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Carousel } from "@/components/carousel"
import { NewsItem } from "@/components/news-item"
import { AnimatedHeroText } from "@/components/animated-hero-text"
import { AnimatedCounter } from "@/components/animated-counter"
import { BackToTop } from "@/components/back-to-top"
import { Recycle, Factory, HardHat, Leaf, Truck, Users, Facebook, Twitter, Instagram, MapPin, Clock, Mail, Phone, Linkedin } from 'lucide-react'
import TestimonialCarousel from "@/components/testimonial-carousel"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  const faqs = [
    {
      question: "What types of waste do you recycle?",
      answer: "We recycle a wide range of materials including plastic, metal, glass, and construction waste. Our advanced recycling processes allow us to transform these materials into sustainable building products."
    },
    {
      question: "How do your products compare to traditional building materials?",
      answer: "Our eco-friendly products meet or exceed industry standards for durability and performance. They often have better insulation properties and a lower carbon footprint compared to traditional materials."
    },
    {
      question: "Do you offer consultations for sustainable building projects?",
      answer: "Yes, we provide consultations for both residential and commercial sustainable building projects. Our team of experts can guide you in selecting the most appropriate eco-friendly materials for your specific needs."
    },
    {
      question: "How can I get involved in your community recycling programs?",
      answer: "We regularly organize community recycling events and educational workshops. You can sign up for our newsletter or check our website for upcoming events in your area."
    }
  ];

  const testimonials = [
    {
      name: "",
      role: "",
      comment: "We believe in Reecoplast' products, quality and their approach are on the highest level. We're happy to work together with a company like Reecoplast inside the construction industry for 3 years already."
    },
    {
      name: "",
      role: "",
      comment: "Reecoplast has revolutionized how we think about sustainable construction materials. Their innovative solutions have helped us achieve our environmental goals while maintaining high quality standards."
    },
    {
      name: "",
      role: "",
      comment: "The dedication to sustainability and quality shown by Reecoplast is unmatched. Their products have become an integral part of our green building initiatives."
    }
  ];

  const newsItems = [
    {
      id: '1',
      title: "Reecoplast Wins Sustainability Award",
      date: "June 15, 2023",
      description: "Reecoplast has been recognized for its innovative approach to sustainable construction materials at the annual Green Building Conference.",
      imageUrl: "/images.png",
    },
    {
      id: '2',
      title: "New Recycling Facility Opens",
      date: "July 2, 2023",
      description: "Reecoplast expands its waste processing capabilities with a state-of-the-art recycling facility, increasing production capacity by 50%.",
      imageUrl: "/images.png",
    },
    // {
    //   id: '3',
    //   title: "Partnership with City for Green Infrastructure",
    //   date: "July 20, 2023",
    //   description: "Reecoplast announces a new partnership with the city to provide sustainable materials for upcoming green infrastructure projects.",
    //   imageUrl: "/images.png",
    // },
    // {
    //   id: '4',
    //   title: "Launch of Carbon-Neutral Construction Line",
    //   date: "August 5, 2023",
    //   description: "Reecoplast introduces its first carbon-neutral product line, aiming to set new standards in eco-friendly construction practices.",
    //   imageUrl: "/images.png",
    // }
  ];


  const services = [
    {
      title: "Waste Recycling",
      description: "We collect and process various waste materials, transforming them into valuable resources for construction.",
      icon: Recycle,
      color: "bg-blue-500",
      features: ["Plastic recycling", "Metal reclamation", "Construction waste processing"]
    },
    {
      title: "Sustainable Materials Production",
      description: "Using recycled waste, we create eco-friendly building materials that meet or exceed industry standards.",
      icon: Factory,
      color: "bg-green-500",
      features: ["Recycled pavement bricks", "Eco-friendly pallets", "Sustainable insulation materials"]
    },
    {
      title: "Community Engagement",
      description: "We involve local communities in our sustainability efforts, creating awareness and fostering environmental responsibility.",
      icon: Users,
      color: "bg-purple-500",
      features: ["Educational workshops", "Community recycling programs", "Green job training"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero section */}
        <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center">
          <Image
            src="/plastics_feat.jpg"
            alt="Sustainable building materials"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <div className="relative z-10 text-center text-white p-4">
            <AnimatedHeroText />
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white mt-8">
              Learn More
            </Button>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="/1683120208603.jpeg"
                  alt="Our team at work"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                 {" At Reecoplast, we're passionate about creating a sustainable future through innovative building solutions. Our team of experts works tirelessly to transform waste materials into high-quality, eco-friendly building products."}
                </p>
                <p className="text-lg mb-4">
                  {"With years of experience and a commitment to environmental stewardship, we're leading the charge in sustainable construction practices. Our goal is to reduce the construction industry's carbon footprint while delivering superior building materials."}
                </p>
                <Button variant="outline" className="mt-4" asChild>
                  <a href="/about">Learn More About Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products section */}
        <section id="products" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[80vh] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/pavement-bricks.jpeg"
                  alt="Pavement Bricks"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-white">Pavement Bricks</h3>
                  <p className="text-white mb-4">
                    Our eco-friendly pavement bricks are made from recycled materials, offering durability and sustainability. Perfect for walkways, driveways, and outdoor spaces, these bricks reduce waste while providing an attractive and long-lasting surface.
                  </p>
                  <Button variant="outline" className="self-start bg-white/10 text-white hover:bg-white/20 border-white/20">Learn More</Button>
                </div>
              </div>
              <div className="relative h-[80vh] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/plastic-palletes.jpeg"
                  alt="Pallets"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-white">Pallets</h3>
                  <p className="text-white mb-4">
                    Our sustainable pallets are crafted from recycled materials, offering a robust and eco-conscious alternative to traditional wooden pallets. Designed for durability and easy handling, these pallets help reduce deforestation while meeting industry standards for logistics and transportation.
                  </p>
                  <Button variant="outline" className="self-start bg-white/10 text-white hover:bg-white/20 border-white/20">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats section */}
        <section id="stats" className="py-16 bg-emerald-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={1000000} /> kg
                </div>
                <p>Waste Recycled</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={500} />+
                </div>
                <p>Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={50000} /> m²
                </div>
                <p>Sustainable Surfaces Created</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services section */}
        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
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
                    <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                    <ul className="list-disc list-inside space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section id="testimonials" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-orange-500 font-semibold mb-4 uppercase tracking-wider">
                What People Say
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Testimonials
              </h2>
              <p className="text-gray-600">
                from our customers and partners
              </p>
            </div>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* News section */}
        <section id="news" className="py-16 bg-gray-100">
          <div className="container mx-auto px-0 sm:px-4 max-w-7xl">
            <div className="text-center mb-16">
              <p className="text-orange-500 font-semibold mb-4 uppercase tracking-wider">
                Blog
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Latest News
              </h2>
            </div>
            <Carousel
              className="mb-8"
              items={newsItems.map((item) => (
                <div key={item.id} className="h-full">
                  <NewsItem {...item} link={`/news/${item.id}`} />
                </div>
              ))}
            />
          </div>
        </section>
      </main>

      {/* FAQ section */}
      <FAQSection faqs={faqs} />

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Reecoplast</h3>
              <p className="mb-4">Building a sustainable future, one brick at a time.</p>
              <div className="flex space-x-4">
                <a href="!#" aria-label="Facebook" className="hover:text-green-400">
                  <Facebook size={24} />
                </a>
                <a href="!#" aria-label="Twitter" className="hover:text-green-400">
                  <Twitter size={24} />
                </a>
                <a href="!#" aria-label="Instagram" className="hover:text-green-400">
                  <Instagram size={24} />
                </a>
                <a href="https://www.linkedin.com/in/project-reecoplast/" target='_blank' aria-label="Instagram" className="hover:text-green-400">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="flex items-center mb-2">
                <MapPin className="mr-2" size={18} />
                Ghana - Kumasi, Nerebehin
              </p>
              <p className="flex items-center mb-2">
                <Mail className="mr-2" size={18} />
                info@Reecoplast.com
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={18} />
                +223 24 (089) 4565
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
              <p className="flex items-center mb-2">
                <Clock className="mr-2" size={18} />
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="ml-6">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="ml-6">Sunday: Closed</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Reecoplast. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  )
}

