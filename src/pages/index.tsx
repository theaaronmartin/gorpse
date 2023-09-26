import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import logo from "../images/gorpse-logo.png";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col justify-center bg-black min-h-screen ">
      <a
        className="flex justify-center"
        href="https://gorpse.bandcamp.com"
        target="_self"
      >
        <img src={logo} className="bg-cover h-3/6 w-4/6" />
      </a>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Gorpse</title>;
