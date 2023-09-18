import Head from "next/head";
import NotFound from "../404";

const page = () => {
  return (
    <div>
      <Head>
        <title>Not Found - Sawla Tours</title>
      </Head>
      <NotFound />
    </div>
  );
};

export default page;
