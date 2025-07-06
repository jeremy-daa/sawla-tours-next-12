import NotFound from "@/pages/404";
import GenericGrid from "@/components/GenericGrid";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import PlannerPolaroid from "@/components/PlannerPolaroid";
import TrekkingDescription from "@/components/TrekkingDescription";
import Map from "@/components/Map";
import React from "react";
import { getTour } from "@/data/EthiopiaToursArray";
import Head from "next/head";
import Images from "@/data/Images";

type Params = {
  params: {
    id: string;
  };
};

export default function page({ id }: any) {
  const tour = getTour(Number(id));
  const isFourth = tour?.id === 4 || tour?.id === 8 ? true : false;
  const isEighth = tour?.id === 8 ? true : false;

  return (
    <div>
      <Head>
        <title>{tour ? tour.title + " - Sawla Tours" : "Not Found"}</title>
        <meta
          name="description"
          content={tour ? tour.description : "Not Found"}
        />
        <link
          rel="canonical"
          href={`https://www.sawlatours.com/ethiopian-tour-themes/${id}`}
          key="canonical"
        />
      </Head>
      {tour ? (
        !isFourth ? (
          <>
            <Hero
              title={tour?.title}
              background={tour?.image}
              description={tour?.description}
              link={tour?.link}
              linkname={tour?.linkname}
              index={tour?.index}
            />
            {tour?.intro[0] && (
              <Intro
                title={tour?.intro[0].title}
                description={tour?.intro[0].description}
                lr
                img1={tour?.intro[0].img1}
                img2={tour?.intro[0].img2}
                button={tour?.intro[0].button}
                link={tour?.intro[0].link}
                subtitle={tour?.intro[0].subtitle}
              />
            )}
            {tour?.map && (
              <Map
                title={tour?.map.title}
                description={tour?.map.description}
                image={tour?.map.image}
              />
            )}
            {tour?.intro[1] && (
              <Intro
                title={tour?.intro[1].title}
                description={tour?.intro[1].description}
                lr={tour?.intro[1].lr}
                img1={tour?.intro[1].img1}
                img2={tour?.intro[1].img2}
                button={tour?.intro[1].button}
                link={tour?.intro[1].link}
                subtitle={tour?.intro[1].subtitle}
              />
            )}
            {tour?.tourdescription && (
              <>
                {/* <TourDescription
                  title={tour?.tourdescription.title}
                  image={tour?.tourdescription.image}
                  description={tour?.tourdescription.description}
                  link={tour?.experience}
                /> */}
                <Intro
                  title={tour?.tourdescription.title}
                  description={tour?.tourdescription.description}
                  lr={true}
                  img1={tour?.tourdescription.image}
                  img2={tour?.tourdescription.image2 || Images.hamer2}
                  button={"More on the Itinerary"}
                  link={`/tours-by-experience/${tour?.experience}`}
                />
              </>
            )}
            {tour.intro[2] && (
              <Intro
                title={tour?.intro[2].title}
                description={tour?.intro[2].description}
                lr={tour?.intro[2].lr}
                img1={tour?.intro[2].img1}
                img2={tour?.intro[2].img2}
                button={tour?.intro[2].button}
                link={tour?.intro[2].link}
                subtitle={tour?.intro[2].subtitle}
              />
            )}
            {tour?.intro.slice(3).map((intro, index) => (
              <Intro
                key={index}
                title={intro.title}
                description={intro.description}
                lr={intro.lr}
                img1={intro.img1}
                img2={intro.img2}
                button={intro.button}
                link={intro.link}
                subtitle={intro.subtitle}
              />
            ))}

            <PlannerPolaroid />
            <GenericGrid />
          </>
        ) : (
          <>
            <Hero
              title={tour?.title}
              background={tour?.image}
              description={tour?.description}
              link={tour?.link}
              linkname={tour?.linkname}
              index={tour?.index}
            />
            {tour.intro[0] && (
              <Intro
                title={tour?.intro[0].title}
                description={tour?.intro[0].description}
                lr
                img1={tour?.intro[0].img1}
                img2={tour?.intro[0].img2}
                button={tour?.intro[0].button}
                link={tour?.intro[0].link}
              />
            )}
            {isEighth && (
              <Intro
                title={tour?.intro[1].title}
                description={tour?.intro[1].description}
                lr
                img1={tour?.intro[1].img1}
                img2={tour?.intro[1].img2}
                button={tour?.intro[1].button}
                link={tour?.intro[1].link}
              />
            )}
            {tour?.itinerarydescription &&
              tour.itinerarydescription.map((itinerary, index) => (
                <TrekkingDescription
                  key={index}
                  title={itinerary.title}
                  description={itinerary.description}
                  itineraries={itinerary.itineraries}
                />
              ))}

            {!isEighth && tour.intro[1] && (
              <Intro
                title={tour?.intro[1].title}
                description={tour?.intro[1].description}
                lr={tour?.intro[1].lr}
                img1={tour?.intro[1].img1}
                img2={tour?.intro[1].img2}
                button={tour?.intro[1].button}
                link={tour?.intro[1].link}
              />
            )}

            <PlannerPolaroid />
            <GenericGrid />
          </>
        )
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params.id;

  return {
    props: {
      id,
    },
  };
}
