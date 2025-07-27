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
          "At Sawla Tours, your journey is our priority. Reach our team instantly through the Ethiopia travel agency contact form or by phone and WhatsApp. Whether you’re ready to book an Ethiopia tour or just starting to plan an Ethiopia trip, our specialists respond within 24 hours (09 : 00 – 17 : 30 Mon–Fri, 10 : 00 – 13 : 00 Sat).",
        ]}
        img1={Images.karo1}
        img2={Images.suri1}
      />
      <Contact />
      <Intro
        title="Plan Your Custom Ethiopia Tour"
        subtitle="Your Adventure, Your Way"
        description={[
          "Tell us more so we can craft your perfect Ethiopia tour. The more details you share, the better we can tailor the experience to your vision:",
          "<strong class='leftTab'>• &nbsp; Your Group:</strong> Possible Travel Dates, Duration & Number of People",
          "<strong class='leftTab'>• &nbsp; Your Style:</strong> Destination Preferences, Transport & Accommodation Wishes",
          "<strong class='leftTab'>• &nbsp; Your Interests:</strong> Desired Activities, Experiences & Budget Range",
          "<strong class='leftTab'>• &nbsp; Your Needs:</strong> Any Special Requests or Mobility Needs",
          "<strong class='leftTab'>• &nbsp; How You Found Us:</strong> Internet, Social Media, Referral, etc.",
        ]}
        lr={true}
        img1={Images.addis12}
        img2={Images.addis11}
      />
      <ContactMap />
    </div>
  );
};

export default page;
