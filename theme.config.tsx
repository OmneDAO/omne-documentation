import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

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
  head: function Head() {
    const { frontMatter } = useConfig()
    const pageTitle = frontMatter?.title
      ? `${frontMatter.title} — Omne Documentation`
      : 'Omne Documentation'
    const pageDescription =
      frontMatter?.description ?? 'Developer documentation for the Omne L1 blockchain'
    return (
      <>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </>
    )
  },
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
