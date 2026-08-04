/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CattyMod Docs',
  url: 'https://cattymod.app',
  baseUrl: '/docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'CattyMod',
  projectName: 'docs',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'CattyMod Docs',
      items: [
        {
          href: '/development/',
          label: 'Development',
          position: 'left'
        },
        {
          href: 'https://studio.cattymod.app/',
          label: 'CattyMod',
          position: 'right'
        },
        {
          href: 'https://github.com/cattymod',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require('./code-themes/light'),
      darkTheme: require('./code-themes/dark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
