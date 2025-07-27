import Images from "./Images";

export interface AboutPageDataType {
  id: number;
  slug?: string;
  title: string; // For the Hero component's main title
  metaTitle?: string;
  metaDescription?: string;
  description: string; // Can be used for a Hero subtitle or description
  image: string; // For Hero background image path
  link: string; // For Hero button link
  linkname: string; // For Hero button text
  index: boolean;

  // Represents one or more <Intro> component sections
  intro: {
    title: string;
    description: string[];
    subtitle?: string;
    lr: boolean;
    img1: string;
    img2: string;
    button?: string;
    link?: string;
  }[];

  map?: {
    title: string;
    description?: string;
    image: string;
  };

  // An array of different content blocks that build the rest of the page
  content: {
    simpledescription?: {
      title: string;
      description: {
        title: string;
        description: string[];
      }[];
    };
    itinerarydescription?: {
      title: string;
      description: string[];
      itineraries: {
        title: string;
        image: string;
        description: string[];
      }[];
    };
    destinationdescription?: {
      destination: string;
      description: string[]; // Added based on your component's structure
      reasons: {
        title: string;
        description: string[];
        image: string;
      }[];
    };
  }[];
}

const AboutPageData: AboutPageDataType[] = [
  {
    id: 1,
    slug: "why-travel-with-sawla-tours",
    title: "Why Travel With Sawla Tours?",
    metaTitle: "Why Choose Sawla Tours | Best Ethiopia Travel Company",
    metaDescription:
      "Discover the top reasons why Sawla Tours is the trusted choice for bespoke Ethiopia tours, from personalized expertise and exceptional local guides to responsible travel.",
    description: "10 Reasons We're Ethiopia's Top-Rated Tour Operator",
    image: Images.hamer2, // Placeholder for your actual hero image path
    link: "#content",
    linkname: "See Why",
    index: true,

    // This page doesn't have an Intro section, so the array is empty.
    intro: [],

    // The main content of this page is a single 'simpledescription' block.
    content: [
      {
        simpledescription: {
          title: "Why Travel with Sawla Tours?",
          description: [
            {
              title: "A Leading and Trusted Ethiopia Tour Operator",
              description: [
                "Looking for an Ethiopia tour operator that goes beyond the ordinary? Choose Sawla Tours—recognized by many as the Best Ethiopia Tour Operator—for truly customized Ethiopia tours that reflect your travel vision. Here’s what makes us the trusted choice for travelers from around the world:",
              ],
            },
            {
              title: "1. Personalized Expertise",
              description: [
                "Our seasoned expedition leaders and specialist travel consultants bring deep insight and firsthand knowledge to every trip. Expect thoughtful guidance, flexible planning, and a journey tailored just for you.",
              ],
            },
            {
              title: "2. Genuine Passion",
              description: [
                "Travel isn’t just business—it’s our way of life. Our team’s enthusiasm infuses every experience with warmth and authenticity.",
              ],
            },
            {
              title: "3. Customized Ethiopia Tours",
              description: [
                "No two Sawla journeys are alike. We take pride in designing bespoke itineraries that reflect your interests, pace, and travel dreams. Your story deserves more than a template—it deserves a one-of-a-kind adventure.",
              ],
            },
            {
              title: "4. Flexibility & Freedom",
              description: [
                "As a small, family-owned business, we offer levels of flexibility the big names can’t match. Need to tweak your plan? We’re here to make it work.",
              ],
            },
            {
              title: "5. Lightning-Fast Communication",
              description: [
                "We know how important timely communication is. Expect prompt, clear responses from our Ethiopia travel experts—every time.",
              ],
            },
            {
              title: "6. Exceptional Local Guides",
              description: [
                "Our handpicked guides are storytellers, historians, and passionate locals eager to share Ethiopia’s wonders. Their depth of knowledge transforms good trips into great ones.",
              ],
            },
            {
              title: "7. Trusted by Travelers",
              description: [
                "Over 70% of our travelers come from repeat bookings or personal referrals. Our service speaks for itself—and keeps our clients coming back.",
              ],
            },
            {
              title: "8. Responsible Travel",
              description: [
                "We champion ethical tourism by working with local communities, NGOs, and conservation initiatives. Every trip contributes to protecting the places we love.",
              ],
            },
            {
              title: "9. Visually Engaging Itineraries",
              description: [
                "We don’t just send you a PDF—we deliver stunning, information-rich itineraries with maps, highlights, and transparent pricing so you can feel excited and informed.",
              ],
            },
            {
              title: "10. Always Getting Better",
              description: [
                "Years of experience and client feedback drive us to continuously improve, refine, and elevate every journey we create.",
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    slug: "how-we-work",
    title: "How We Work",
    metaTitle: "How We Work | Tailor-Made Travel Planning – Sawla Tours",
    metaDescription:
      "Discover how Sawla Tours crafts custom Ethiopia tours through a seamless process—from first conversation to final itinerary. Start your journey today.",
    description: "Your Journey, Expertly Crafted from Start to Finish",
    image: Images.abay1, // Image suggesting planning/consultation
    link: "#content",
    linkname: "Our Process",
    index: true,

    intro: [], // No separate intro section for this page

    content: [
      {
        itinerarydescription: {
          title: "How We Work: Tailor-Made Travel Planning with Sawla Tours",
          description: [
            "Embarking on the journey of a lifetime takes more than logistics—it requires passion, precision, and a deep understanding of what makes travel meaningful. At Sawla Tours, we specialize in tailor-made travel planning across Ethiopia. From your first enquiry to your return flight home, we turn your dreams into curated experiences rich with cultural depth and natural beauty.",
          ],
          itineraries: [
            {
              title: "1. Our First Conversation",
              image: Images.addis11,
              description: [
                "The first step in planning your adventure begins with an open and genuine conversation. We want to get to know you more. Tell us about your past travels, your unique preferences, your specific interests, and even your budget. By understanding who you are, we can determine if we're the perfect match for each other. This personal discussion ensures your customized Ethiopia tours match your unique style.",
              ],
            },
            {
              title: "2. Getting Down to Business",
              image: Images.addis12,
              description: [
                "Once we're ready to dive into the nitty-gritty, we'll establish your desired trip and set specific travel dates. We'll guide you through the optimal destinations based on the time of year and narrow down your options to precise regions and dates. Our meticulous approach ensures that every detail is taken into account.",
              ],
            },
            {
              title: "3. Creating Your Perfect Journey",
              image: Images.bale2, // Suggests luxury lodges/accommodation
              description: [
                "Crafting your perfect journey is our utmost priority. We carefully curate the safari lodges and hotels, determining the number of nights you should spend in each location and the activities that will make your heart soar. We'll also assist with flight arrangements, ensuring you have more time to immerse yourself in the breathtaking landscapes. Within one to two days, we'll provide you with a comprehensive itinerary and the proposed tour cost. Remember, this is just the beginning, and we can always refine the plan.",
              ],
            },
            {
              title: "4. Adding in the Little Details",
              image: Images.addis13, // Suggests dining/culinary experiences
              description: [
                "But it's the little details that truly make a difference. We'll help you select the best tours, dining options, and additional activities that will create indelible memories. Our personalized ideas and recommendations are tailored to your desires, ensuring an extraordinary journey. Once everything is in place, we'll confirm your accommodations, flights and others and request a deposit of 25% of the total trip cost. The final payment is due 60 days before your departure.",
              ],
            },
            {
              title: "5. Fleshing Things Out",
              image: Images.simien3, // Suggests satisfaction and looking over the plan
              description: [
                "If you feel the need to fine-tune your itinerary even further, we're here for you. We won't rest until you're completely satisfied with every aspect of your journey. Your contentment is our top priority.",
              ],
            },
            {
              title: "6. Your Trip Preparation",
              image: Images.addis14, // Suggests packing/travel gear
              description: [
                "As your departure date approaches, we'll send you a Preparation Package containing your itinerary, packing list, and other essential details. Four weeks before your trip, you'll receive the final itinerary, along with contact information for our dedicated personnel who will be there to assist you. We want you to feel secure and fully informed, so we'll provide e-tickets and copies of this information for your loved ones.",
              ],
            },
            {
              title: "7. Bon Voyage",
              image: Images.danakil4, // Suggests the start of an adventure drive
              description: [
                "When your adventure begins, rest assured that we'll be in constant communication with our contacts at each location, ensuring everything runs smoothly. We're only a phone call away if you need any assistance or have concerns during your journey. Bon voyage!",
              ],
            },
            {
              title: "8. When You Return",
              image: Images.hamer2, // Suggests sharing stories/moments
              description: [
                "Upon your return, we eagerly await your stories and feedback. Your candid input is invaluable to us, as it helps us enhance our service. We're honored that many of our travelers become repeat customers, and we hope you'll catch the travel bug and plan your next journey with us.",
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 3,
    slug: "meet-ethiopia-travel-specialists",
    title: "Meet Our Travel Specialists",
    metaTitle:
      "Sawla Tours – Meet Our Ethiopia Travel Specialists & Expert Guides",
    metaDescription:
      "Connect with Sawla Tours’ Ethiopia travel specialists. Personalized itineraries, insider insights, and 24/7 support for your dream Ethiopian adventure.",
    description: "The Passionate Experts Behind Your Perfect Journey",
    image: Images.addis6, // Image suggesting professional specialists
    link: "#content",
    linkname: "Meet the Team",
    index: true,

    // The content for this page is composed of two 'intro' blocks.
    intro: [
      {
        title: "Meet Our Travel Specialists",
        subtitle: "Travel Maestros",
        description: [
          "Unveiling the wonders of Ethiopia, our team of travel specialists brings first-hand knowledge and an infectious love for exploration. Each member of our crew has dived deep into the heart of our destinations, ready to craft your dream holiday with precision, passion, and practical advice.",
          "We, at Sawla, share a common bond: an insatiable thirst for travel, a spirit of discovery, and an unwavering dedication to offering you an unmatched journey. Each of our experts carries a treasure chest of personal experiences, eagerly waiting to share their insights and make your journey truly unique.",
        ],
        img1: Images.simien1,
        img2: Images.addis11,
        lr: true, // As requested
      },
      {
        title: "Our Commitment to You",
        subtitle: "Your Dream Itinerary Awaits",
        description: [
          "Our commitment is simple: your satisfaction. We take pride in designing memorable itineraries, handcrafted to align with your dreams. Each trip we curate not only offers expert guidance but also fosters a personal connection to the magical places we explore.",
          "The Sawla squad is always a phone call, an email, or a live chat away, ready to turn your dream holiday into reality and answer your every query. Eagerly awaiting your call, we invite you to take the leap into the mesmerizing world of Ethiopian adventures. So, what's keeping you? Let's start the journey together!",
        ],
        img1: Images.axum3,
        img2: Images.harar2,
        lr: false, // Alternating the layout
      },
    ],

    // No other content blocks are needed for this page.
    content: [],
  },
  {
    id: 4,
    slug: "meet-ethiopia-tour-guides",
    title: "Meet Our Ethiopia Guides",
    metaTitle:
      "Sawla Tours – Meet Our Ethiopia Guides: Private & Local Experts",
    metaDescription:
      "Discover Ethiopia tour guides at Sawla Tours. Our private Ethiopia guides and local experts bring history, nature, and culture to life on your bespoke journey.",
    description: "The Storytellers Who Bring Your Journey to Life",
    image: Images.axum4, // Image of a guide explaining historical sites
    link: "#content",
    linkname: "Meet the Guides",
    index: true,

    // The content for this page is composed of two 'intro' blocks.
    intro: [
      {
        title: "Meet Our Guides",
        subtitle: "Unlock Ethiopia with Sawla Tours",
        description: [
          "At Sawla Tours, our guides are not just escorts - they are your personal storytellers, naturalists, and historians. These multilingual maestros accompany you, breathing life into every detail and sparking your spirit of discovery. With their depth of knowledge and the power of their narratives, your Ethiopian escapade becomes an enriching, memorable, and fun-filled adventure.",
          "They extend more than just individual attention – our guides' expertise helps to bridge the gap between you and your destinations, immersing you in a world of fascinating stories and intriguing facts. As your journey unfolds, you'll find these guiding lights becoming part of your travel family.",
        ],
        img1: Images.simien2,
        img2: Images.gonder7,
        lr: true,
      },
      {
        title: "Your Gateway to the Extraordinary",
        subtitle: "Private Guides & Local Experts",
        description: [
          "In our quest to provide exceptional travel experiences, we collaborate with top-of-the-line private safari guides and reliable local experts. Their insider perspective enables us to open doors to extraordinary opportunities, taking you beyond the confines of typical travel.",
          "Get ready to explore Ethiopia like never before with Sawla Tours. Our guides are waiting to make your journey an unforgettable one.",
        ],
        img1: Images.chebera1,
        img2: Images.yemata1,
        lr: false,
      },
    ],

    content: [],
  },
  {
  id: 5,
  slug: "meet-our-drivers",
  title: "Meet Our Expert Drivers",
  metaTitle: "Sawla Tours – Meet Our Expert Drivers for Safe Ethiopia Travel",
  metaDescription: "Get to know the expert drivers at Sawla Tours—licensed, experienced, courteous and friendly professionals who ensure your Ethiopian journey is safe, smooth, and enjoyable.",
  description: "Safe, Smooth, and Enjoyable Journeys Across Ethiopia",
  image: Images.danakil2, // Image showing vehicles navigating a challenging landscape
  link: "#content",
  linkname: "Meet the Drivers",
  index: true,

  // The content for this page is composed of two 'intro' blocks.
  intro: [
    {
      title: "Meet Our Drivers",
      subtitle: "The Steady Hands of Your Journey",
      description: [
        "At Sawla Tours, our drivers aren't just wheelmen; they are the steady hands navigating your journey across Ethiopia's diverse terrains. Each with a driving experience ranging from seven to twenty years, they are seasoned navigators, adept at traversing every nook and corner of our country, in all weather conditions.",
        "Our drivers not only hold valid licenses but also undergo annual scrutiny of their driving records. To keep their skills sharp, we provide rigorous training each year, ensuring their expertise remains at the forefront of safe and efficient driving practices.",
      ],
      img1: Images.chebera1,
      img2: Images.bale4,
      lr: false,
    },
    {
      title: "More Than Just Drivers",
      subtitle: "Your Courteous & Knowledgeable Hosts on the Road",
      description: [
        "But they are more than skilled drivers. Handpicked for their excellent communication abilities, our drivers are courteous, responsible, and honest. They are armed with local knowledge and a genuine passion for hospitality, making your ride not just comfortable, but also enlightening and enjoyable.",
        "So, buckle up and relax! With Sawla Tours, you're in good hands, steering your Ethiopian adventure toward unforgettable experiences.",
      ],
      img1: Images.hamer1,
      img2: Images.addis8,
      lr: true,
    },
  ],

  // No other content blocks are needed for this page.
  content: [],
},{
  id: 6,
  slug: "ethiopia-mobile-safari",
  title: "Sawla Mobile Safari",
  metaTitle: "Ethiopia Mobile Safari & Camping Crew | Sawla Tours",
  metaDescription: "Experience an Ethiopia mobile safari with Sawla Tours. Our expert camping crew, luxury tented camps, and fly camps bring you closer to nature.",
  description: "Luxury Camping in the Heart of Ethiopia's Wild Beauty",
  image: Images.chebera2, // A stunning camping/safari hero image
  link: "#content",
  linkname: "Explore Our Camps",
  index: true,

  intro: [
    {
      title: "Embrace the Soul of Ethiopia with Sawla Mobile Safari",
      subtitle: "Join the Sawla Tours Outdoor Family",
      description: [
        "Journey into the very heart of Ethiopia, a land where history weaves with wild beauty, where each horizon offers a tale as old as time. With Sawla Tours, every 2-3 days brings a new enchanting landscape waiting to embrace you, paired with the serene luxury of solitude and our unmatched camping experience.",
      ],
      img1: Images.chebera1,
      img2: Images.tigray1,
      lr: true,
    },
    {
      title: "Meet the Spirits Behind Your Adventure: Our Mobile Camping Crew",
      subtitle: "Your Guides, Chefs, and Storytellers in the Wild",
      description: [
        "At Sawla Tours, it's not just about the journey; it's about the people who make it unforgettable. Our camping crew, with their undying love for Ethiopia's splendors, ensures that your sojourn is more than just a trip.",
        "They are your storytellers, your chefs, your guides – making sure you relish not just the sight, but the very spirit of Ethiopia.",
      ],
      img1: Images.awash2,
      img2: Images.adey1,
      lr: false,
    },
  ],

  content: [
    {
      destinationdescription: {
        destination: "Dwell Amidst the Whispers of Nature with Our Tailored Accommodations",
        description: [
          "No two travelers are the same, and neither are their dreams. Whether it's the allure of Ethiopia’s grand legacy like Lalibela, Gondar, and Axum, or the call of the unknown, our camping accommodations promise to be your haven.",
        ],
        reasons: [
          {
            title: "Expeditions Mobile Tented Camps",
            image: Images.hamer2,
            description: [
              "Step into a realm where traditional Ethiopian camping melds with luxury. Our walk-in tents, equipped with twin beds and ensuite facilities, are your cocoon amidst nature.",
              "Indulge in culinary delights, three courses of authentic Ethiopian gastronomy, prepared with love and the freshest ingredients.",
              "Let our seasoned camp staff cater to your every whim, crafting moments you’ll treasure forever.",
            ],
          },
          {
            title: "Fly Camp Expeditions",
            image: Images.benna1,
            description: [
              "If your spirit seeks the thrill of discovery, our mobile camps are designed to be your moving sanctuaries.",
              "After a day of exploration, let the bow-down tents cradle you, and a designated dining area awaits for those heartfelt conversations.",
              "Each camping spot is handpicked not just for its beauty, but also with a promise to leave nature untouched.",
            ],
          },
        ],
      },
    },
  ],
}
];

const getAboutPageData = (slug: string) => {
  const results = AboutPageData.filter((page) => page.slug === slug);
  return results.length > 0 ? results[0] : null;
  return;
};
export { AboutPageData, getAboutPageData };
