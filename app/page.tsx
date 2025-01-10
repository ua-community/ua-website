import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User & Agents',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon-96x96.png',
        type: 'image/png',
        sizes: '96x96',
      }
    ],
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function Home() {
  return (
    <main>
      <Link href="/" className="logo">
        <div className="logo-box">
          <span className="logo-text">u&a</span>
        </div>
      </Link>

      <h2 className="site-title">User & Agents</h2>

      <p>
        We are a community space focused on shaping the future of user-agent systems. Our goal is to empower individuals with software that enables them to create their own agency.
      </p>

      <p>
        The software economy is shifting from a model driven by attention capture to one focused on user intent and purposeful engagement. To enable such an intent driven system, we need user agents to serve as a unified perimeter of devices, platforms, and services maximizing user agency. Browsers, as the only open user-agent platform, face a key challenge due to their limited origin policy and integration with broader systems—a gap we aim to bridge.
      </p>

      <p>
        To that end, our community explores and prototypes projects at the intersection of:
      </p>
      <ul>
        <li>Web platform transition</li>
        <li>End-user programming</li>
        <li>On-device AI & cognitive architectures</li>
      </ul>
      
      <p>
        We envision a new browser-like operating environment built on three foundational elements: intent router, machine network, and artifacts. For more resources, check out our <a href="https://uaresearch.notion.site" target="_blank">research</a>, or browse our <a href="https://github.com/ua-community" target="_blank">Github</a>.  
        
        Chat with us on <a href="https://discord.gg/mtEwuEZQ5x" target="_blank">Discord</a> or subscribe to our community mailing list below.
      </p>
    </main>
  )
}
