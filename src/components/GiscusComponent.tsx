import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      id="comments"
      repo="jangdu/docusaurus"
      repoId="R_kgDOLjUFqg"
      category="Announcements"
      categoryId="DIC_kwDOLjUFqs4CeLkI"
      mapping="pathname"
      term="pathname"
      theme="dark"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      lang="ko"
    />
  );
}
