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
          <span className="logo-text">u&amp;a</span>
        </div>
      </Link>

      <h2 className="site-title">User &amp; Agents</h2>

      <p>
        We are a community focused on shaping the future of user-agent systems.
        Our goal is to empower people by designing and building software that provides agency, control, and choice in our digital lives.
      </p>

      <p>
        We are exploring three areas we believe to be foundational to the future of user-agent systems:
      </p>
      <ul>
        <li>Web platform change - rethinking browsers, capabilities, protocols</li>
        <li>End-user programming - meta-applications for adaptive/emergent/ephemeral software</li>
        <li>User-centered AI - private and local cognitive augmentation and architectures</li>
      </ul>
      
      <p>
        Check out our <a href="https://github.com/ua-community">Github</a> or chat with us on <a href="https://go.userandagents.com/discord">Discord</a> or subscribe to our community mailing list below.
      </p>

      <p>
        We are a non-profit community, and accept donations via <a href="https://opencollective.com/user-and-agents">Open Collective</a>.
        All funds go to expenses such as the community Discord and bot hosting, in-person events, and potentially future initiatives such as community stewardship stipends or research fellowships.
        Join the Discord and reach out to us with ideas!
      </p>
    </main>
  )
}
