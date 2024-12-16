'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-4 uppercase tracking-wider">
            Get Answers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader 
                className="cursor-pointer flex flex-row items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <CardTitle className="text-lg">{faq.question}</CardTitle>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </CardHeader>
              {openIndex === index && (
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

