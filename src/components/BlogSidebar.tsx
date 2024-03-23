import React from "react";
import Link from "@docusaurus/Link";

const BlogSidebar = ({ tags }) => (
  <div className="sidebar">
    <h3>블로그 카테고리</h3>
    <ul>
      {tags.map((tag) => (
        <li key={tag}>
          <Link to={`/blog/tags/${tag}`}>{tag}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default BlogSidebar;
