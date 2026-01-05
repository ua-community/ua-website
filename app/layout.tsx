import { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import ThemeHandler from './components/ThemeHandler'
import ScrollToTop from './components/ScrollToTop'
import NewsletterForm from './components/NewsletterForm'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const viewport: Viewport = {
  themeColor: '#faf9f7',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://userandagents.com'),
  title: 'User & Agents',
  description: 'A community space focused on shaping the future of user-agent systems.',
  openGraph: {
    images: 'https://userandagents.com/api/og',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  other: {
    'apple-mobile-web-app-title': 'User & Agents'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
        <meta
          property="og:image" 
          content="https://userandagents.com/api/og"
        />
        <meta name="apple-mobile-web-app-title" content="User & Agents" />
      </head>
      <body>
        <ScrollToTop />
        <ThemeHandler />

        <main className="page-container">
          {children}
          
          <section className="newsletter-section">
            <p className="newsletter-label">Subscribe to our mailing list</p>
            <NewsletterForm />
          </section>
        </main>
        
        <footer className="site-footer">
            <p className="footer-copyright">
              © {new Date().getFullYear()} User &amp; Agents
            </p>
        </footer>
        
        <Analytics />
        <Script src="/_vercel/insights/script.js" />
        <SpeedInsights />
      </body>
    </html>
  )
}
