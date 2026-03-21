// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '100 Days of PowerShell',
  tagline: 'A beginner-to-security-ready challenge. 5–10 minutes a day. Real skills. Real proof.',
  favicon: 'img/favicon.ico',

  url: 'https://jfergitlife.github.io',
  baseUrl: '/100-days-of-powershell/',

  organizationName: 'jfergitlife',
  projectName: '100-days-of-powershell',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/jfergitlife/100-days-of-powershell/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '100 Days of PowerShell',
        logo: {
          alt: '100 Days of PowerShell',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'challengeSidebar',
            position: 'left',
            label: 'Start the Challenge',
          },
          {
            to: '/showcase',
            label: 'Showcase',
            position: 'left',
          },
          {
            href: 'https://github.com/jfergitlife/100-days-of-powershell',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Challenge',
            items: [
              { label: 'Start Here', to: '/docs/intro' },
              { label: 'Phase 1 — Foundations', to: '/docs/phase-1/day-001' },
              { label: 'Showcase', to: '/showcase' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'GitHub Discussions', href: 'https://github.com/jfergitlife/100-days-of-powershell/discussions' },
              { label: 'Submit Your Work', href: 'https://github.com/jfergitlife/100-days-of-powershell/discussions/categories/submissions' },
            ],
          },
          {
            title: 'JfergITLife',
            items: [
              { label: 'LinkedIn', href: 'https://linkedin.com/in/itlife' },
              { label: 'GitHub', href: 'https://github.com/jfergITLife' },
              { label: 'Medium', href: 'https://jfergitlife.medium.com' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} JfergITLife · 100 Days of PowerShell · Built with Docusaurus`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ['powershell'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
