import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

export default function NewsPage() {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Latest News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{item.description}</p>
                    <Button variant="outline" asChild>
                      <Link href={`/news/${item.id}`}>Read More</Link>
                    </Button>
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

