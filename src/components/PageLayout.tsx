import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout(props: PageLayoutProps) {
  const { children } = props;

  return (
    <div>
      <Head>
        <title>{"Isaac Chin"}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="Data Scientist, Creative Videographer"
          name="description"
        />
      </Head>
      <Navbar />
      <main className="text-black">{children}</main>
      <Footer />
    </div>
  );
}
