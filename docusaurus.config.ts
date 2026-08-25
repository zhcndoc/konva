import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { existsSync } from 'node:fs';

const hasChineseTranslation = existsSync(
  new URL('./i18n/zh-Hans/', import.meta.url)
);

const config: Config = {
  title: 'Konva 中文文档 - JavaScript 2D 画布库',
  titleDelimiter: ' - ',
  tagline:
    '您的 Vanilla/React/Vue/Svelte/Angular 应用与画布图形之间的终极桥梁',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://konva.zhcndoc.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'konvajs', // Usually your GitHub org/user name.
  projectName: 'konva', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: hasChineseTranslation ? ['en', 'zh-Hans'] : ['en'],
    localeConfigs: {
      en: {label: 'English'},
      ...(hasChineseTranslation
        ? {'zh-Hans': {label: '简体中文'}}
        : {}),
    },
  },

  scripts: [
    {
      src: 'https://www.zhcndoc.com/js/common.js',
      async: true,
    },
    {
      src: '/js/plausible-events.js',
      defer: true,
    },
    {
      src: '/js/convertbox-loader.js',
      id: 'convertbox-loader',
      defer: true,
      'data-src': 'https://cdn.convertbox.com/convertbox/js/embed.js',
      'data-uuid': 'db9e320b-6d6c-49c4-ba5c-b29e6d5fc91c',
    },
    {
      src: 'https://crawlchat.app/embed.js',
      id: 'crawlchat-script',
      async: true,
      'data-id': '67d221efb4b9de65095a2579',
      'data-ask-ai': 'true',
      'data-ask-ai-background-color': 'rgba(5, 132, 206, 1)',
      'data-ask-ai-color': '#ffffff',
      'data-ask-ai-text': '询问 AI',
      'data-ask-ai-position': 'br',
      'data-ask-ai-radius': '20px',
    },
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
          editLocalizedFiles: true,
        },
        blog: false,
        sitemap: {
          ignorePatterns: [
            '/search',
            ...(hasChineseTranslation
              ? ['/zh-Hans/search', '/zh-Hans/api/**']
              : []),
          ],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Konva.js',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web Browser, Node.js',
        url: 'https://konvajs.org',
        downloadUrl: 'https://www.npmjs.com/package/konva',
        license: 'https://opensource.org/license/MIT',
        programmingLanguage: ['JavaScript', 'TypeScript'],
        author: {
          '@type': 'Person',
          name: 'Anton Lavrenov',
          url: 'https://lavrton.com',
        },
        description:
          'Konva.js 是一个 HTML5 Canvas JavaScript 框架，通过面向对象的 API 实现高性能 2D 图形。支持图形、动画、事件、拖放、滤镜，以及 React、Vue、Svelte 和 Angular 集成。',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Konva.js',
        url: 'https://konvajs.org',
        logo: 'https://konvajs.org/img/icon.png',
        sameAs: [
          'https://github.com/konvajs/konva',
          'https://www.npmjs.com/package/konva',
          'https://discord.gg/8FqZwVT',
          'https://twitter.com/lavrton',
          'https://stackoverflow.com/questions/tagged/konvajs',
        ],
      }),
    },
  ],

  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content:
          'konva, konvajs, html5 canvas, JavaScript Canvas 库, React Canvas, Vue Canvas, Svelte Canvas, Angular Canvas, 2D 图形, Canvas 框架, Canvas 拖放, Canvas 动画, Canvas 绘图',
      },
      { name: 'author', content: 'Anton Lavrenov' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Konva.js' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@lavrton' },
    ],
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
            {
              label: 'FAQ',
              to: '/docs/faq.html',
            },
            {
              label: '关于 Konva',
              to: '/docs/about.html',
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
            {
              label: '更新日志',
              href: 'https://github.com/konvajs/konva/blob/master/CHANGELOG.md',
            },
            {
              label: '在 GitHub 上为 Konva 点星',
              href: 'https://github.com/konvajs/konva',
            },
          ],
        },
        {
          title: '集成',
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
          title: '产品',
          items: [
            {
              label: '设计编辑器 SDK',
              href:
                'https://polotno.com/?utm_source=konvajs&utm_medium=footer&utm_content=footer-link',
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
