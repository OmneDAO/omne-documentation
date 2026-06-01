import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: '1.15rem',
      letterSpacing: '-0.01em',
    }}>
      Omne — Documentation
    </span>
  ),
  project: {
    link: 'https://github.com/OmneDAO/omne-documentation',
  },
  docsRepositoryBase: 'https://github.com/OmneDAO/omne-documentation/tree/master',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Omne — Developer Documentation" />
      <meta name="og:title" content="Omne Docs" />
      <meta name="og:description" content="Developer documentation for the Omne L1 blockchain" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  color: {
    hue: 222,
    saturation: 60,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  footer: {
    content: (
      <span>
        © {new Date().getFullYear()}{' '}
        <a href="https://omne.foundation" target="_blank" rel="noopener noreferrer">
          Omne Foundation
        </a>
        . All rights reserved.
      </span>
    ),
  },
  editLink: {
    content: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'docs-feedback',
  },
  navigation: {
    prev: true,
    next: true,
  },
  gitTimestamp: true,
}

export default config
