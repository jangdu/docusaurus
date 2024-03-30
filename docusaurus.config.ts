import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'jangdu',
  tagline: 'dev develop',
  favicon:
    'https://res.cloudinary.com/dyhnnmhcf/image/upload/v1706710430/07FE9B2A-F875-4E4D-8E5E-C56DB3613C3A_1_105_c_ft7bhh.jpg',
  url: 'https://blog.jangdu.me',
  baseUrl: '/',
  organizationName: 'jangdu', // Usually your GitHub org/user name.
  projectName: 'jangdu develop', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      '@docusaurus/preset-classic',

      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: './develop',
          routeBasePath: '/',
          editUrl: 'https://github.com/jangdu/docusaurus/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        gtag: {
          trackingID: 'G-3ZK2V0X0EH',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-T9SX9HQG',
        },
        // develop: {
        //   blogTitle: 'Jangdu develop!',
        //   blogDescription: 'dev develop!',
        //   postsPerPage: 10,
        //
        //   blogSidebarTitle: 'Blog',
        //   blogSidebarCount: 'ALL',
        //
        //   showReadingTime: false,
        //   routeBasePath: '/develop',
        //   sortPosts: 'descending', // "ascending" | "descending"
        //   id: 'develop',
        //   tagsBasePath: '/tags',
        //   path: './develop',
        //   include: ['**/*.{md,mdx}'],
        //   exclude: [
        //     '**/_*.{js,jsx,ts,tsx,md,mdx}',
        //     '**/_*/**',
        //     '**/*.test.{js,jsx,ts,tsx}',
        //     '**/__tests__/**',
        //   ],
        //
        //   feedOptions: {
        //     type: 'all',
        //     copyright: `Copyright © ${new Date().getFullYear()} Jangdu's Blog`,
        //     createFeedItems: async (params) => {
        //       const { blogPosts, defaultCreateFeedItems, ...rest } = params;
        //       return defaultCreateFeedItems({
        //         // keep only the 10 most recent develop posts in the feed
        //         blogPosts: blogPosts.filter((item, index) => index < 10),
        //         ...rest,
        //       });
        //     },
        //   },
        //
        //   editUrl: 'https://github.com/jangdu/docusaurus/tree/main/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image:
      'https://res.cloudinary.com/dyhnnmhcf/image/upload/v1706710430/07FE9B2A-F875-4E4D-8E5E-C56DB3613C3A_1_105_c_ft7bhh.jpg',
    navbar: {
      title: 'Jangdu Blog',
      // logo: {
      //   alt: "My Site Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'nodeSidebar',
          to: '/',
          position: 'left',
          label: 'Blog',
        },
        // {
        //   to: '/react/react-intro',
        //   docId: 'react-intro',
        //   position: 'left',
        //   label: 'React',
        // },

        // { to: '/develop', label: 'Blog', position: 'left' },
        // { to: "/", label: "All Posts", position: "left" },
        { to: '/tags', label: 'All Tags', position: 'left' },

        // {
        //   to: '/node',
        //   label: 'Node',
        //   position: 'left',
        //   sidebarId: 'nodeSidebar',
        // },

        {
          href: 'https://github.com/jangdu',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'jjd0324@gmail.com',
              href: 'https://github.com/jangdu',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jangdu',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Jangdu's Blog`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
