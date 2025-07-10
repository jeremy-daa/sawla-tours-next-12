import NotFound from "@/pages/404";
import GenericGrid from "@/components/GenericGrid";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import PackagesList from "@/components/PackagesList";
import PlannerPolaroid from "@/components/PlannerPolaroid";
import { getExperience } from "@/data/ExperiencesPackagesArray";
import Head from "next/head";

type params = {
  id: string;
};

const page = ({ id }: params) => {
  const experience = getExperience(id);

  return (
    <>
      <Head>
        <title>{experience ? experience.metaTitle : "Not Found"}</title>
        <meta
          name="description"
          content={experience ? experience.metaDescription : "Not Found"}
        />
        <link
          rel="canonical"
          href={`https://www.sawlatours.com/tours-by-experience/${id}`}
          key="canonical"
        />
      </Head>
      <div className="historic-wrapper">
        {experience ? (
          <>
            {experience.title && (
              <Hero
                title={experience.title}
                description={experience.description}
                index={experience.index}
                background={experience.image}
                link={experience.link}
              />
            )}
            {experience.intro[0] && (
              <Intro
                title={experience.intro[0].title}
                description={experience.intro[0].description}
                lr={experience.intro[0].lr}
                img1={experience.intro[0].img1}
                img2={experience.intro[0].img2}
                subtitle={experience.intro[0].subtitle}
                button={experience.intro[0].button}
                link={experience.intro[0].link}
              />
            )}
            {experience.packageslist && (
              <PackagesList
                title={experience.packageslist.title}
                description={experience.packageslist.description}
                packages={experience.packageslist.packages}
              />
            )}
            {experience.intro[1] && (
              <Intro
                title={experience.intro[1].title}
                description={experience.intro[1].description}
                lr={experience.intro[1].lr}
                img1={experience.intro[1].img1}
                img2={experience.intro[1].img2}
                subtitle={experience.intro[1].subtitle}
                button={experience.intro[1].button}
                link={experience.intro[1].link}
              />
            )}
            <PlannerPolaroid />
            <GenericGrid />
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </>
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
