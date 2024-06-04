import NotFound from "@/pages/404";
import Accordion from "@/components/Accordion";
import DestinationDescription from "@/components/DestinationDescription";
import GenericGrid from "@/components/GenericGrid";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import PlannerPolaroid from "@/components/PlannerPolaroid";
import { getGuide } from "@/data/EthiopiaGuideArray";
import { restructureDescription } from "@/functions/restruct";
import Head from "next/head";

type Params = {
  params: {
    id: string;
  };
};
type params = {
  id: string;
};

const page = ({ id }: params) => {
  const guide = getGuide(Number(id));

  return (
    <div>
      <Head>
        <title>{guide ? guide.title + " - Sawla Tours" : "Not Found"}</title>
        <meta
          name="description"
          content={guide ? guide.description : "Not Found"}
        />
        <link
          rel="canonical"
          href={`https://www.sawlatours.com/ethiopia-guide/${id}`}
          key="canonical"
        />
      </Head>
      {guide ? (
        <>
          {guide.title && (
            <Hero
              title={guide.title}
              background={guide.image}
              index={guide.index}
              description={guide.description}
              link={guide.link}
              linkname={guide.linkname}
            />
          )}
          {guide.intro[0] && (
            <div id="description">
              <Intro
                title={guide.intro[0].title}
                subtitle={guide.intro[0].subtitle}
                description={guide.intro[0].description}
                lr={guide.intro[0].lr}
                img1={guide.intro[0].img1}
                img2={guide.intro[0].img2}
                button={guide.intro[0].button}
                link={guide.intro[0].link}
              />
            </div>
          )}
          {guide.content && (
            <>
              {guide.content.map((content, index) => (
                <div key={index}>
                  {content.destinationdescription && (
                    <DestinationDescription
                      key={index}
                      destination={content.destinationdescription.destination}
                      reasons={content.destinationdescription.reasons}
                    />
                  )}

                  {content.simpledescription && (
                    <Accordion
                      key={index}
                      title={content.simpledescription.title}
                      destinations={restructureDescription(
                        content.simpledescription.description
                      )}
                    />
                  )}
                </div>
              ))}
            </>
          )}

          {guide.intro &&
            guide.intro.map((intro, index) => {
              if (index !== 0) {
                return (
                  <Intro
                    key={index}
                    title={intro.title}
                    subtitle={intro.subtitle}
                    description={intro.description}
                    lr={intro.lr}
                    img1={intro.img1}
                    img2={intro.img2}
                    button={intro.button}
                    link={intro.link}
                  />
                );
              }
            })}
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
