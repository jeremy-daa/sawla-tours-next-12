import Link from "next/link";
import Image from "next/image";
import Images from "../data/Images";
import Intro from "./Intro";

const PlannerPolaroid = () => {
  return (
    <>
      <Intro
        title="Begin Your Adventure with Sawla Tours"
        description={[
          "At Sawla Tours, we believe that every journey should be as unique as the traveler. Our expert team is dedicated to crafting personalized itineraries that reflect your interests and passions, ensuring an unforgettable Ethiopian experience.",
          "Whether you're seeking cultural immersion, wildlife adventures, or breathtaking landscapes, we tailor each tour to your preferences. From the moment you reach out, our travel designers work closely with you to create a bespoke itinerary that captures the essence of Ethiopia.",
        ]}
        img1={Images.danakil3}
        img2={Images.wollo1}
        button="Contact Us Now"
        link="/contact-us"
        lr={false}
        color={true}
      />
    </>
  );
};

export default PlannerPolaroid;
