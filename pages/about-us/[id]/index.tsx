import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// --- Component Imports ---
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import SimpleDescription from "@/components/SimpleDescription";
import ItineraryDescription from "@/components/ItineraryDescription";
import DestinationDescription from "@/components/DestinationDescription";
import { AboutPageDataType, getAboutPageData } from "@/data/About";
import Head from "next/head";

type params = {
  id: string;
  pageData: AboutPageDataType
};
export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params.id;
  const pageData = getAboutPageData(id);
  if (!pageData) {
    return {
      notFound: true,
    };
  }


  return {
    props: {
      id,
      pageData
    },
  };
}
const page = ({ id, pageData }: params) => {
  

  return (
    <div className="page-container">
      <Head>
        <title>
          {pageData ? pageData.metaTitle : `About Sawla tours - Sawla Tours`}
        </title>
        <meta
          name="description"
          content={pageData ? pageData.metaDescription : "Not Found"}
        />
        <link
          rel="canonical"
          href={`https://www.sawlatours.com/about-us/${pageData ? pageData.slug : "not-found"}`}
          key="canonical"
        />
      </Head>
      <Hero
        background={pageData.image}
        title={pageData.title}
        description={pageData.description}
        link={pageData.link}
        linkname={pageData.linkname}
        index={false}
      />

      <main id="content" className="content-blocks">
        {/* Render Intro sections first */}
        {pageData.intro?.map((introProps, index) => (
          <Intro key={`intro-${index}`} {...introProps} />
        ))}

        {/* Render the main content blocks */}
        {pageData.content?.map((block, index) => {
          // Based on your requested format, we check which property exists in the block
          if (block.simpledescription) {
            return (
              <SimpleDescription
                key={`content-${index}`}
                {...block.simpledescription}
              />
            );
          }
          if (block.itinerarydescription) {
            return (
              <ItineraryDescription
                key={`content-${index}`}
                {...block.itinerarydescription}
              />
            );
          }
          if (block.destinationdescription) {
            return (
              <DestinationDescription
                key={`content-${index}`}
                {...block.destinationdescription}
              />
            );
          }
          return null; // Return null if the block is empty or unrecognized
        })}
      </main>
    </div>
  );
};

export default page;