import EnquireForm from "@/components/EnquireForm";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Images from "@/data/Images";
import Head from "next/head";

const metadata = {
  title: "Book Your Ethiopia Tour | Sawla Tours Enquiry",
  description: `Plan your next trip to Ethiopia with Sawla Tours. Fill out our enquiry form, and our team will respond promptly to help you craft the perfect Ethiopian tour.`,
};
const page = () => {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="canonical"
          href={`https://www.sawlatours.com/enquire`}
          key="canonical"
        />
      </Head>
      <Hero
        title="Enquire"
        description="We are here to help you plan your next trip to Ethiopia. Please fill out the form below and we will get back to you as soon as possible."
        index={false}
        background={Images.simien5}
      />
      <Intro
        title="Get in Touch"
        description={[
          "We aim to provide you with an exceptional travel experience, and we are always available to assist you with any inquiries you may have. Your journey, your way, is our priority.",
          "To contact us, kindly complete the contact form below and provide us with as much information as possible. We cherish feedback from our customers and would highly appreciate any reviews or insights you may have.",
          "We endeavor to respond to your queries within 48 hours during our office hours, which are from 09:00 to 17:30 on Mondays to Fridays, and from 10:00 to 13:00 on Saturdays.",
        ]}
        img1={Images.karo1}
        img2={Images.suri1}
      />
      <EnquireForm />
    </div>
  );
};

export default page;
