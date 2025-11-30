import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Konva 中文文档 - JavaScript 2D 画布库',
  titleDelimiter: ' - ',
  tagline:
    '您的 Vanilla/React/Vue/Svelte/Angular 应用与画布图形之间的终极桥梁',
  favicon: 'img/favicon.ico',
  themes: ['./src/theme-live-codeblock'],

  // Set the production url of your site here
  url: 'https://konva.zhcndoc.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'konvajs', // Usually your GitHub org/user name.
  projectName: 'konva', // Usually your repo name.

  // TODO: change to 'throw'
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {
      src: 'https://www.zhcndoc.com/js/common.js',
      async: true,
    },
    // {
    //   src: 'https://cdn.convertbox.com/convertbox/js/embed.js',
    //   id: 'app-convertbox-script',
    //   async: true,
    //   'data-uuid': 'db9e320b-6d6c-49c4-ba5c-b29e6d5fc91c',
    // },
    // {
    //   src: 'https://crawlchat.app/embed.js',
    //   id: 'crawlchat-script',
    //   'data-id': '67d221efb4b9de65095a2579',
    //   'data-ask-ai': 'true',
    //   'data-ask-ai-background-color': 'rgba(5, 132, 206, 1)',
    //   'data-ask-ai-color': '#ffffff',
    //   'data-ask-ai-text': 'Ask AI',
    //   'data-ask-ai-position': 'br',
    //   'data-ask-ai-radius': '20px',
    // },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'content',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/zhcndoc/konva/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/zhcndoc/konva/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/social.jpeg',
    navbar: {
      title: 'Konva 中文文档',
      logo: {
        alt: 'Konva 中文文档',
        src: 'img/icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialsSidebar',
          position: 'left',
          label: '教程',
        },
        {
          to: 'docs/sandbox.html',
          position: 'left',
          label: '演示',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API 参考',
        },
        {
          type: 'dropdown',
          label: '框架',
          position: 'left',
          items: [
            {
              label: 'React',
              to: '/docs/react/index.html',
            },
            {
              label: 'Vue',
              to: '/docs/vue/index.html',
            },
            {
              label: 'Svelte',
              to: '/docs/svelte/index.html',
            },
            {
              label: 'Angular',
              to: '/docs/angular/index.html',
            },
          ],
        },
        {
          href: 'https://github.com/konvajs/konva',
          className: 'header-github-link',
          position: 'right',
        },
        {
          href: 'https://discord.gg/8FqZwVT',
          className: 'header-discord-link',
          // label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://twitter.com/lavrton',
          className: 'header-x-link',
          // label: 'Twitter',
          position: 'right',
        },
        // {
        //   href: '#',
        //   className: 'ai-chat',
        //   label: 'Ask AI',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '教程',
              to: '/docs/index.html',
            },
            {
              label: '演示',
              to: '/docs/sandbox.html',
            },
            {
              label: 'API 参考',
              to: '/api/Konva.html',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/konva',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/8FqZwVT',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/lavrton',
            },
          ],
        },
        {
          title: '集成',
          items: [
            {
              label: 'React',
              href: '/docs/react/index.html',
            },
            {
              label: 'Vue',
              href: '/docs/vue/index.html',
            },
            {
              label: 'Svelte',
              href: '/docs/svelte/index.html',
            },
            {
              label: 'Angular',
              href: '/docs/angular/index.html',
            },
          ],
        },
        {
          title: 'Products',
          items: [
            {
              label: 'Design Editor SDK',
              href: 'https://polotno.com',
            },
          ],
        },
      ],
      copyright: `<a target="_blank" href="https://www.zhcndoc.com">简中文档</a>｜<a rel="nofollow" target="_blank" href="https://beian.miit.gov.cn">沪ICP备2024070610号-3</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: '8J5ZKQ6RXR',

      // Public API key: it is safe to commit it
      apiKey: '39701ff696d6af9cd08aac8cc98926d2',

      indexName: 'konvajs',
      // Optional: see doc section bellow
      contextualSearch: false,

      askAi: 'MpZOQRawnahp',

      // Optional: Algolia search parameters
      searchParameters: {},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
