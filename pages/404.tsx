import Hero from "@/components/Hero";
import Images from "@/data/Images";
import Head from "next/head";

const NotFound = () => {
  return (
    <div>
      <Head>
        <title>Page Not Found - Sawla Tours</title>
        <meta
          name="description"
          content="The page you are looking for does not exist."
        />
        <link
          rel="canonical"
          href="https://www.sawlatours.com/404"
          key="canonical"
        />
      </Head>
      <Hero
        title="We're sorry, but we can't find the page you're looking for."
        description="Either the page is under construction, or it doesn't exist."
        background={Images.bahirdar1}
        index={false}
        link="/"
        linkname="Go Home"
      />
    </div>
  );
};

export default NotFound;
