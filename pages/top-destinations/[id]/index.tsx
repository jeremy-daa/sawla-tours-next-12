import NotFound from "@/pages/404";
import DestinationDescription from "@/components/DestinationDescription";
import GenericGrid from "@/components/GenericGrid";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import PlannerPolaroid from "@/components/PlannerPolaroid";
import { getDestination } from "@/data/PopularDestinationsArray";

import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
type Params = {
  params: {
    id: string;
  };
};

const page = ({ id }: any) => {
  const destination = getDestination(Number(id));
  return (
    <div>
      <Head>
        <title>
          {destination ? destination.title + " - Sawla Tours" : "Not Found"}
        </title>
        <meta
          name="description"
          content={destination ? destination.description : "Not Found"}
        />
        <link
          rel="canonical"
          href={`https://www.sawlatours.com/top-destinations/${id}`}
          key="canonical"
        />
      </Head>
      {destination ? (
        <>
          {destination.title && (
            <Hero
              background={destination.image}
              index={false}
              title={destination.title}
              description={destination.description}
              link={destination.link}
              linkname={destination.linkname}
            />
          )}
          {destination.intro && (
            <div id="description">
              <Intro
                img1={destination.intro[0].img1}
                img2={destination.intro[0].img2}
                title={destination.intro[0].title}
                subtitle={destination.intro[0].subtitle}
                description={destination.intro[0].description}
                button={destination.intro[0].button}
                lr={destination.intro[0].lr}
                link={destination.intro[0].link}
              />
            </div>
          )}
          {destination.destinationdescription.destination && (
            <div id="why">
              <DestinationDescription
                destination={destination.destinationdescription.destination}
                reasons={destination.destinationdescription.reasons}
              />
            </div>
          )}
          {destination.intro[1] && (
            <Intro
              img1={destination.intro[1].img1}
              img2={destination.intro[1].img2}
              title={destination.intro[1].title}
              subtitle={destination.intro[1].subtitle}
              description={destination.intro[1].description}
              button={destination.intro[1].button}
              lr={destination.intro[1].lr}
              link={destination.intro[1].link}
            />
          )}
          <PlannerPolaroid />
          <GenericGrid />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};
export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params.id;

  return {
    props: {
      id,
    },
  };
}

export default page;
