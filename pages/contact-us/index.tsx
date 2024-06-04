import Contact from "@/components/Contact";
import ContactMap from "@/components/ContactMap";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Images from "@/data/Images";
import Head from "next/head";

import React from "react";
const metadata = {
  title: "Contact Sawla Tours | Plan Your Ethiopian Adventure Today",
  description: `Reach out to Sawla Tours to plan your Ethiopian adventure. Our team is here to assist with all your travel inquiries, ensuring a seamless and memorable experience in Ethiopia.`,
};
const page = () => {
  return (
    <div className="contact">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="canonical"
          href={`https://www.sawlatours.com/contact-us`}
          key="canonical"
        />
      </Head>
      <Hero
        title="Contact Us"
        description="What would you like to know? We are here to help."
        background={Images.omo1}
        index={false}
      />
      <Intro
        title="Get in Touch"
        description={[
          "We aim to provide you with an exceptional travel experience, and we are always available to assist you with any inquiries you may have. Your journey, your way, is our priority.",
          "To contact us, kindly complete the contact form below and provide us with as much information as possible. We cherish feedback from our customers and would highly appreciate any reviews or insights you may have.",
          "We endeavor to respond to your queries within 24 hours during our office hours, which are from 09:00 to 17:30 on Mondays to Fridays, and from 10:00 to 13:00 on Saturdays.",
        ]}
        img1={Images.karo1}
        img2={Images.suri1}
      />
      <Contact />
      <ContactMap />
    </div>
  );
};

export default page;
