import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// This would typically come from a database or API
const newsItems = [
  {
    id: '1',
    title: "Reecoplast Wins Sustainability Award",
    date: "June 15, 2023",
    content: "Reecoplast has been recognized for its innovative approach to sustainable construction materials at the annual Green Building Conference. This prestigious award acknowledges our commitment to reducing the environmental impact of the construction industry through our recycled and eco-friendly building materials.\n\nThe judges were particularly impressed with our new line of carbon-negative bricks, which not only use recycled materials but also actively absorb CO2 from the atmosphere during their lifecycle. This breakthrough technology represents a significant step forward in our mission to create truly sustainable building solutions.\n\nOur CEO, Jane Smith, accepted the award, stating, 'This recognition is a testament to the hard work and dedication of our entire team. We're proud to be at the forefront of sustainable construction, and we'll continue to innovate and push the boundaries of what's possible in eco-friendly building materials.'\n\nThe award has already generated increased interest in our products, with several major construction firms reaching out to discuss potential partnerships. We're excited about the opportunities this presents and look forward to expanding our impact on sustainable construction practices worldwide.",
    imageUrl: "/images.png",
  },
  {
    id: '2',
    title: "New Recycling Facility Opens",
    date: "July 2, 2023",
    content: "Reecoplast is proud to announce the opening of our state-of-the-art recycling facility, marking a significant expansion of our waste processing capabilities. This new facility will increase our production capacity by 50%, allowing us to recycle more waste materials and create even more sustainable building products.\n\nThe facility, located on the outskirts of Eco City, spans over 100,000 square feet and employs cutting-edge recycling technologies. It's designed to process a wide range of materials, including plastics, metals, and construction waste, transforming them into high-quality, eco-friendly building materials.\n\nOne of the key features of the new facility is its advanced sorting system, which uses artificial intelligence and machine learning to identify and separate different types of materials with unprecedented accuracy. This not only increases the efficiency of our recycling process but also improves the quality of our end products.\n\nThe facility also incorporates numerous sustainable features in its own design and operation. Solar panels cover the roof, providing a significant portion of the facility's energy needs. A sophisticated water recycling system minimizes water usage, and electric vehicles are used for on-site transportation.\n\n'This new facility represents a major step forward in our mission to revolutionize the construction industry,' said our Operations Director, Mike Johnson. 'By significantly increasing our capacity to recycle waste materials, we're not only reducing landfill waste but also providing the construction industry with a larger supply of sustainable building materials.'\n\nThe opening of this facility is expected to create over 100 new jobs in the local community, further cementing Reecoplast' commitment to both environmental and social sustainability.\n\nWe're excited about the possibilities this new facility opens up and look forward to seeing its positive impact on both our production capabilities and the broader goal of creating a more sustainable construction industry.",
    imageUrl: "/images.png",
  },
  // ... other news items
];

export default function NewsArticle({ params }: { params: { id: string } }) {
  const article = newsItems.find(item => item.id === params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link href="/news" className="inline-flex items-center text-green-600 hover:text-green-800 mb-6">
          <ArrowLeft className="mr-2" size={20} />
          Back to News
        </Link>
        <article>
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
          <p className="text-gray-600 mb-4">{article.date}</p>
          <div className="prose max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Reecoplast. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

