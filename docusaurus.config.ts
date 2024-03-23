import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import sidebars from "./sidebars";

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

  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: "/",

          blogTitle: "Jangdu blog!",
          blogDescription: "dev blog!",
          postsPerPage: "ALL",
          blogSidebarTitle: "Blog",
          blogSidebarCount: "ALL",

          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
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
      copyright: `Copyright © ${new Date().getFullYear()} Jangdu's Blog, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
