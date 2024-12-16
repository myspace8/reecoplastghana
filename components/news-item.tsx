import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

interface NewsItemProps {
  title: string
  date: string
  description: string
  imageUrl: string
  link: string
}

export function NewsItem({ title, date, description, imageUrl, link }: NewsItemProps) {
  return (
    <Card className="h-full flex flex-col p-4 sm:p-2">
      <div className="relative h-48 sm:h-32">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="p-2 sm:p-4">
        <CardTitle className="text-lg line-clamp-1">{title}</CardTitle>
        <CardDescription className="text-sm">{date}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow p-2 sm:p-4 pt-0">
        <p className="text-sm mb-4 line-clamp-2">{description}</p>
      </CardContent>
      <CardContent className="p-2 sm:p-4 pt-0">
        <Button variant="outline" asChild className="w-full text-sm">
          <a href={link}>Read More</a>
        </Button>
      </CardContent>
    </Card>
  )
}

