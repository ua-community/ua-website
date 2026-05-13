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
    <>
      <header className="site-header">
        <div className="site-header-left">
          <Link href="/" className="logo">
            <div className="logo-box">
              <span className="logo-text">u&amp;a</span>
            </div>
          </Link>
          <h1 className="site-title">User &amp; Agents</h1>
        </div>
        
        <nav className="top-nav">
          <a 
            href="https://github.com/ua-community/.github/blob/main/profile/README.md" 
            className="nav-button projects-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Our Projects</span>
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="external-icon"
            >
              <path 
                d="M3.5 1.5H1.5V10.5H10.5V8.5M7 1.5H10.5M10.5 1.5V5M10.5 1.5L5 7" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
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
            />
            <span>Sponsor</span>
          </a>
          <a 
            href="https://go.userandagents.org/discord" 
            className="nav-button discord-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg 
              width="16" 
              height="12" 
              viewBox="0 0 24 18" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.317 1.492a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 1.492a.07.07 0 0 0-.032.027C.533 5.862-.32 10.104.099 14.293a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 11.746c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span>Discord</span>
          </a>
        </nav>
      </header>

      <section className="content-section">
        <p className="intro-text">
          We are a community focused on shaping the future of user-agent systems.
          Our goal is to empower people by designing and building software that 
          provides agency, control, and choice in our digital lives.
        </p>
      </section>

      <section className="content-section">
        <p>We are exploring three areas we believe to be foundational to the future of user-agent systems:</p>
        <ul>
          <li><strong>Web Platform Change</strong> — Rethinking browsers, capabilities, and protocols</li>
          <li><strong>End-User Programming</strong> — Meta-applications for adaptive, emergent, and ephemeral software</li>
          <li><strong>User-Centered AI</strong> — Private and local cognitive augmentation and architectures</li>
        </ul>
      </section>

      <section className="content-section">
        <p>
          Check out our <a href="https://github.com/ua-community">GitHub</a>, 
          chat with us on <a href="https://go.userandagents.org/discord">Discord</a>, or 
          follow our members with this <a href="https://bsky.app/starter-pack/did:plc:zcanytzlaumjwgaopolw6wes/3m3ofi4xxzq2o">Bluesky starter pack list</a>.
        </p>

        <p>
          We are a non-profit community and accept donations 
          via <a href="https://opencollective.com/user-and-agents">Open Collective</a>. 
          All funds go towards community Discord hosting, in-person events, and research fellowships.
        </p>
      </section>
    </>
  )
}
