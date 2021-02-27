const menu = [
  {
    name: 'Services',
    sublinks: [
      {
        name: 'Security Analytics',
        link: '/docs/v2/methodology/security-analytics',
        description: 'yield, spread, duration, sensitivity'
      },
      {
        name: 'Security Cash Flows',
        link: '/docs/v2/methodology/security-cash-flows',
        description: 'high-fidelity cash flows for ALM'
      },
      {
        name: 'Portfolio Analytics',
        link: '/docs/v2/methodology/portfolio-analytics',
        description: 'multi-asset portfolio composition and risk analysis'
      },
      {
        name: 'Performance Attribution',
        link: '/docs/v2/methodology/performance-attribution',
        description: 'shift, twist, allocation and selection'
      }
    ]
  },
  {
    name: 'Documents',
    sublinks: [
      {
        name: 'Security Coverage',
        link: '/docs/v2/security-coverage',
        description: 'model documentation'
      },
      {
        name: 'Methodology',
        link: '/docs/v2/methodology',
        description: 'model documentation'
      },
      {
        name: 'Technology', link: '/docs/v2/technology',
        description: 'APIs and Batch Submit'
      }]
  },
  {
    name: 'Developers',
    sublinks: [
      { name: 'GitHub', link: 'https://github.com/FiteAnalytics' },
      { name: 'Developer Guide', link: '/docs/v2/technology/developer-guide'}
    ]
  },
  {
    name: 'Community',
    sublinks: [
      { name: 'Fite Analytics Discord', link: 'https://discord.gg/FCfyBSbCU5' },
      { name: 'Fite Analytics Twitter', link: 'https://twitter.com/FinX_io' },
      { name: 'Fite Analytics Reddit', link: 'https://www.reddit.com/r/FINX' }
    ]
  },
  {
    name: 'About',
    sublinks: [
      {
        name: 'Blog',
        link: '/blog'
      },
      {
        name: 'Info',
        link: '/about'
      },
      {
        name: 'FAQ',
        link: '/faq'
      },
      {
        name: 'Jobs',
        link: '/about#jobs'
      }
    ]
  }
]

module.exports = menu
