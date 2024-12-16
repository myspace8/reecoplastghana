import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: 'Reecoplastghana',
  description: 'Transforming waste into Sustainable Building Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
