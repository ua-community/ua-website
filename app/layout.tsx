import { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import ThemeHandler from './components/ThemeHandler'
import ScrollToTop from './components/ScrollToTop'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://userandagents.com'),
  title: 'User & Agents',
  description: 'A community space focused on shaping the future of user-agent systems.',
  openGraph: {
    images: 'https://userandagents.com/api/og',
  },
  themeColor: '#ffffff',
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
        />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400&display=swap"
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
        
        {/* Top Navigation Buttons */}
        <nav className="top-nav">
          <a 
            href="https://opencollective.com/user-and-agents" 
            className="nav-button sponsor-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/oc.svg" 
              alt="Open Collective" 
              width="14" 
              height="14"
              className="oc-icon"
              style={{ marginBottom: '2px' }}
            />
            <span>Sponsor</span>
          </a>
          <a 
            href="https://go.userandagents.com/discord" 
            className="nav-button discord-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg 
              width="18" 
              height="14" 
              viewBox="0 0 24 18" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.317 1.492a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 1.492a.07.07 0 0 0-.032.027C.533 5.862-.32 10.104.099 14.293a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 11.746c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span>Discord</span>
          </a>
        </nav>

        <main>{children}</main>
        
        <footer className="w-full py-2 mt-auto">
          <div className="max-w-4xl mx-auto px-4">
            <div className="newsletter-container">
              <Script
                src="https://cdn.jsdelivr.net/ghost/signup-form@~0.2/umd/signup-form.min.js"
                data-button-color="#161314"
                data-button-text-color="#FFFFFF"
                data-site="https://blog.userandagents.com/"
                data-locale="en"
                strategy="afterInteractive"
                async
              />
            </div>
          </div>

          <div className="footer-copyright">
            © {new Date().getFullYear()} User and Agents
          </div>
        </footer>
        <Analytics />
        <Script src="/_vercel/insights/script.js" />
        <SpeedInsights />
      </body>
    </html>
  )
}
