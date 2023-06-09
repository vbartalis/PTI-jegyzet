// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PTI Záróvizsga Jegyzetek",
  tagline: "Üdvözöllek az oldalamon!",
  url: "https://vbartalis.github.io",
  baseUrl: "/PTI-jegyzet",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "vbartalis", // Usually your GitHub org/user name.
  projectName: "PTI-jegyzet", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "hu",
    locales: ["hu"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/vbartalis/vbartalis.github.io/tree/master/",
          remarkPlugins: [math],
          rehypePlugins: [[katex, { strict: false }]],
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl: "https://github.com/vbartalis/vbartalis.github.io/tree/master/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        gtag: {
          trackingID: "G-LLC1QQZDQ9",
          anonymizeIP: true,
        },
      }),
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "tetelek",
            position: "left",
            label: "Jegyzetek",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${
          2022 === new Date().getFullYear()
            ? new Date().getFullYear()
            : 2022 + "-" + new Date().getFullYear()
        } vbartalis. Built with Docusaurus.`,
      },
      docs: {
        sidebar: {
          // autoCollapseCategories:true,
          hideable: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: "google-site-verification",
          content: "HSk3gg9V-q_SBGq7DWfIldGf3ZnIkc14LNwpoqxRLRU",
        },
      ],
    }),

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

module.exports = config;
