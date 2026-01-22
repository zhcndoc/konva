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
      <div
        className="wwads-cn wwads-horizontal"
        data-id="354"
        style={{
          width: "100%",
          marginBottom: "16px",
          marginTop: "16px",
        }}
      ></div>
      <DocItem {...props} />
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
