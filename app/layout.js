import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Consultorio</title>
      </head>
      <body className={`${inter.className} min-h-screen`} style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://cloudfront-us-east-1.images.arcpublishing.com/infobae/FTF5OLVZDJGXTF7HUSG6KQZQQM.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>{children}</body>
    </html>
  )
}
