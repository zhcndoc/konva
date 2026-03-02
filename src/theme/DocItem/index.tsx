import React from 'react';
import DocItem from '@theme-original/DocItem';
import type DocItemType from '@theme/DocItem';
import type { WrapperProps } from '@docusaurus/types';
import { DiscussionEmbed } from 'disqus-react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';

type Props = WrapperProps<typeof DocItemType>;

function buildBreadcrumbList(siteUrl: string, permalink: string, title: string) {
  // permalink like "/docs/shapes/Rect.html" or "/docs/react/index.html"
  const parts = permalink.replace(/\.html$/, '').split('/').filter(Boolean);
  // parts: ["docs", "shapes", "Rect"] or ["docs", "react", "index"]

  const items: Array<{ name: string; item?: string }> = [
    { name: 'Home', item: siteUrl + '/' },
  ];

  let path = '';
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    path += '/' + part;

    if (i === parts.length - 1) {
      // Last part — use actual page title, link to permalink
      items.push({ name: title, item: siteUrl + permalink });
    } else if (part === 'docs') {
      items.push({ name: 'Docs', item: siteUrl + '/docs/index.html' });
    } else {
      // Middle segments — capitalize as section name
      const name = part.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      items.push({ name });
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.item ? { item: item.item } : {}),
    })),
  };
}

export default function DocItemWrapper(props: Props): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { permalink, title } = props.content.metadata;

  const breadcrumbSchema = buildBreadcrumbList(siteConfig.url, permalink, title);

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Head>
      <DocItem {...props} />
      <DiscussionEmbed
        shortname="konvajs"
        config={{
          url: siteConfig.url + permalink,
          identifier: permalink,
          title: title,
        }}
      />
    </>
  );
}
