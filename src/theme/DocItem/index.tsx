import React from "react";
import DocItem from "@theme-original/DocItem";
import type DocItemType from "@theme/DocItem";
import type { WrapperProps } from "@docusaurus/types";
// import { DiscussionEmbed } from "disqus-react";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type Props = WrapperProps<typeof DocItemType>;

export default function DocItemWrapper(props: Props): JSX.Element {
  // const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <DocItem {...props} />
      <div
        style={{
          position: "relative",
          marginTop: 16,
          width: "100%",
          borderRadius: 8,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "rgba(3,7,18,0.05)",
          padding: 8,
        }}
      >
        <a
          href="https://www.rainyun.com/mm_?s=zhcndoc"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 10,
          }}
          data-umami-event="ads-konva-bottom"
        />
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <img
            src="/img/ads/rainyun_2.png"
            style={{ width: "100%", borderRadius: 4 }}
          />
        </div>
      </div>
      {/* <DiscussionEmbed
        shortname="konvajs"
        config={{
          url: siteConfig.url + props.content.metadata.permalink,
          identifier: props.content.metadata.permalink,
          title: props.content.metadata.title,
        }}
      /> */}
    </>
  );
}
