import { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import ThemeHandler from './components/ThemeHandler'

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
        <ThemeHandler />
        <main>{children}</main>
        
        <footer className="w-full py-8 mt-auto">
          <div className="max-w-4xl mx-auto px-4">
            <div style={{minHeight: '58px', maxWidth: '240px', margin: '0 auto', width: '100%'}}>
              <Script
                src="https://cdn.jsdelivr.net/ghost/signup-form@~0.2/umd/signup-form.min.js"
                data-button-color="#4B031D"
                data-button-text-color="#FFFFFF"
                data-site="https://blog.userandagents.com/"
                data-locale="en"
                strategy="afterInteractive"
              />
            </div>
            
            <div className="text-center text-sm text-neutral-600 dark:text-neutral-400">
              {/* ... */}
            </div>
          </div>
        </footer>
        <Analytics />
        <Script src="/_vercel/insights/script.js" />
      </body>
    </html>
  )
}
