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
        
        <nav className="top-nav" aria-label="Community links">
          <a
            href="https://bsky.app/profile/userandagents.org"
            className="top-nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="top-nav-icon"
              aria-hidden
            >
              <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
            </svg>
            <span className="top-nav-text">Bluesky</span>
          </a>
          <a
            href="https://go.userandagents.org/discord"
            className="top-nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="20"
              height="15"
              viewBox="0 0 24 18"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="top-nav-icon"
              aria-hidden
            >
              <path d="M20.317 1.492a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 1.492a.07.07 0 0 0-.032.027C.533 5.862-.32 10.104.099 14.293a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 11.746c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span className="top-nav-text">Discord</span>
          </a>
          <a
            href="https://github.com/ua-community/.github/blob/main/profile/README.md"
            className="top-nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="top-nav-icon"
              aria-hidden
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span className="top-nav-text">GitHub</span>
          </a>
          <a
            href="https://opencollective.com/user-and-agents"
            className="top-nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 14 14"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="top-nav-icon"
              aria-hidden
            >
              <path d="M 7,1 C 3.6862915,1 1,3.686292 1,7 c 0,3.313708 2.6862915,6 6,6 1.2698255,0 2.4472377,-0.394558 3.416941,-1.06764 L 8.8632814,10.378084 C 8.3110136,10.683293 7.6756458,10.857319 7,10.857319 4.8697587,10.857319 3.1426809,9.130241 3.1426809,7 3.1426809,4.869759 4.8697587,3.142681 7,3.142681 c 0.6756458,0 1.3110136,0.174026 1.8632814,0.479235 L 10.416941,2.06764 C 9.4472377,1.394558 8.2698255,1 7,1 Z m 4.93236,2.583059 -1.554276,1.55366 c 0.267058,0.483234 0.433793,1.029899 0.471217,1.611636 0.0053,0.08311 0.008,0.167189 0.008,0.251645 0,0.675646 -0.174026,1.311014 -0.479235,1.863281 l 1.554276,1.55366 C 12.605442,9.447238 13,8.269825 13,7 13,5.730175 12.605442,4.552762 11.93236,3.583059 Z" />
            </svg>
            <span className="top-nav-text">Open Collective</span>
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
          follow us on <a href="https://bsky.app/profile/userandagents.org">Bluesky</a>.
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
