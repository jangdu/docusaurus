import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import Giscus from "@giscus/react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import GiscusComponent from "@site/src/components/GiscusComponent";

export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost();
  const isBrowser = useIsBrowser();

  const { frontMatter, slug, title } = metadata;
  const { enableComments } = frontMatter;

  return (
    <>
      <BlogPostItem {...props} />
      {enableComments && isBlogPostPage && <GiscusComponent />}
      {/* // />
      // src="https://giscus.app/client.js"

      // data-mapping="pathname"
      // data-strict="0"
      // data-reactions-enabled="1"
      // data-emit-metadata="0"
      // data-input-position="bottom"
      // data-theme="dark"
      // data-lang="ko"
      // crossorigin="anonymous"
      // async /> */}
    </>
  );
}
