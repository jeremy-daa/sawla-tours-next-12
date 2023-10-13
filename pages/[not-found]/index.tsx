import Head from "next/head";
import NotFound from "../404";

const page = () => {
  return (
    <div>
      <Head>
        <title>Not Found - Sawla Tours</title>
        <meta name="description" content="Not Found" />
        <link
          rel="canonical"
          href={`https://www.sawlatours.com/404`}
          key="canonical"
        />
      </Head>
      <NotFound />
    </div>
  );
};

export default page;
