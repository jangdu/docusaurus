import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "jangdu",
  tagline: "dev blog",
  favicon:
    "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1706710430/07FE9B2A-F875-4E4D-8E5E-C56DB3613C3A_1_105_c_ft7bhh.jpg",
  url: "https://blog.jangdu.me",
  baseUrl: "/",
  organizationName: "jangdu", // Usually your GitHub org/user name.
  projectName: "jangdu blog", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  clientModules: [require.resolve("./src/gtm.js")],

  headTags: [
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
        src: "https://www.googletagmanager.com/gtag/js?id=G-3ZK2V0X0EH",
      },
    },
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3ZK2V0X0EH');
            `,
    },
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-T9SX9HQG');
      `,
    },
  ],

  scripts: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-3ZK2V0X0EH",
      async: true,
    },
  ],

  presets: [
    [
      "@docusaurus/preset-classic",

      {
        docs: false,
        gtag: {
          trackingID: "G-3ZK2V0X0EH",
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: "GTM-T9SX9HQG",
        },
        blog: {
          blogTitle: "Jangdu blog!",
          blogDescription: "dev blog!",
          postsPerPage: "ALL",
          blogSidebarTitle: "Blog",
          blogSidebarCount: "ALL",

          showReadingTime: false,
          routeBasePath: "/",
          sortPosts: "descending", // "ascending" | "descending"
          id: "blog",
          tagsBasePath: "/tags",
          path: "./blog",
          include: ["**/*.{md,mdx}"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],

          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Jangdu's Blog`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },

          editUrl: "https://github.com/jangdu/docusaurus/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    bodyTags: [
      {
        tagName: "noScript",
        attributes: {
          type: "application/ld+json",
        },
        innerHTML: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T9SX9HQG');
        `,
      },
    ],

    image:
      "https://res.cloudinary.com/dyhnnmhcf/image/upload/v1706710430/07FE9B2A-F875-4E4D-8E5E-C56DB3613C3A_1_105_c_ft7bhh.jpg",
    navbar: {
      title: "Jangdu Blog",
      // logo: {
      //   alt: "My Site Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        // { to: "/blog", label: "Blog", position: "left" },
        // { to: "/", label: "All Posts", position: "left" },
        { to: "/tags", label: "All Tags", position: "left" },

        {
          href: "https://github.com/jangdu",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Tutorial",
        //       to: "/docs/intro",
        //     },
        //   ],
        // },
        {
          title: "Community",
          items: [
            {
              label: "jjd0324@gmail.com",
              href: "https://github.com/jangdu",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/",
            },
            {
              label: "GitHub",
              href: "https://github.com/jangdu",
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
