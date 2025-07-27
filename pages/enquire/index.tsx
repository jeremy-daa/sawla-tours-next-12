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
        subtitle="Your Personal Ethiopia Adventure Architects"
        description={[
          "Sawla Tours is a boutique, deluxe tour company specializing in custom Ethiopia tours crafted by passionate local experts. Whether you're drawn to majestic highlands, ancient history, or vibrant traditions, we’ll tailor your experience to match your unique interests.",
          "Over 80% of our travelers return or are referred—a testament to the care, attention, and authenticity we bring to every itinerary. For us, adventure is personal. That’s why we take the time to understand your dreams and co-create an unforgettable journey that reflects you.",
        ]}
        img1={Images.mursi1}
        img2={Images.hamer2}
        lr={true}
      />
      <EnquireForm />
      <Intro
        title="Beyond Sightseeing"
        subtitle="Immersive Journeys, Expertly Guided"
        description={[
          "Our bespoke Ethiopia tours offer more than sightseeing. They immerse you in living culture, dramatic landscapes, and once-in-a-lifetime encounters—guided by professionals who know Ethiopia inside out.",
          "Simply fill out the form below and one of our travel designers will get in touch to start shaping your extraordinary Ethiopian adventure.",
        ]}
        img1={Images.danakil1}
        img2={Images.yemata2}
        lr={false}
      />
    </div>
  );
};

export default page;
