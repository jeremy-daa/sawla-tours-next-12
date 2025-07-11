import Images from "./Images";

export interface Tour {
  id: number;
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
  experience?: number | string;
  title: string;
  description: string;
  image: string;
  link: string;
  linkname: string;
  index: boolean;
  intro: {
    title: string;
    description: string[];
    lr: boolean;
    img1: string;
    img2: string;
    subtitle?: string;
    button: string;
    link: string;
  }[];
  map?: {
    title: string;
    description: string;
    image: string;
  };
  tourdescription?: {
    title: string;
    description: string[];
    image: string;
    image2?: string;
  };
  tourdescription2?: {
    title: string;
    destinations: {
      title: string;
      description: string;
    }[];
    description: string;
  };
  itinerarydescription?: {
    title: string;
    description?: string[];
    itineraries?: {
      title: string;
      description: string[];
      image: string;
    }[];
  }[];
}

export const EthiopiaToursArray: Tour[] = [
  {
    id: 1,
    experience: "historic-and-cultural-tours",
    slug: "ethiopias-historic-tours",
    metaTitle: "Explore Ethiopia’s Historic Tours | Heritage & Culture",
    metaDescription:
      "Discover Ethiopia’s Historic & Heritage Tours with Sawla Tours. Book your Ethiopia historical sites tour to Axum, Lalibela, Gondar & hidden heritage gems.",
    title: "Historic Ethiopia Tours",
    description:
      "Embark on an extraordinary journey through Ethiopia's Historic tours, where ancient wonders and vibrant cultures intertwine harmoniously. These offer an unforgettable odyssey, celebrating a rich history and diverse cultures.",
    image: Images.gonder4,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "The Extraordinary journey through Ethiopia's Historic Sites",
        description: [
          "Ethiopia's Historic and Cultural Tours offer a unique opportunity to discover the country's rich history and diverse cultures. Unlike other African nations, Ethiopia's identity is deeply rooted in its independence, with a history that stretches back thousands of years.",
          "From the ancient secret of Axum to the awe-inspiring city of Bahir Dar and from the rock churches of Tigray and Lalibela to the stelae fields at Tiya, Ethiopia's Historic Route through the North is a must-see destination for any history enthusiast.",
          "The Historic Route is easily accessible by road or a combination of road and air travel. The best-known historic sites include Axum, Lalibela, Gondar, and Bahir Dar, and to make the most out of your trip, it is recommended to spend at least two days in each destination. The Historic Route is a living testimony to Ethiopia's rich cultural heritage, showcasing the country's architectural wonders and the breathtaking beauty of its natural landscapes.",
        ],
        lr: true,
        img1: Images.axum1,
        img2: Images.tigray2,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "What more can you visit?",
        description: [
          "Aside from the headline attractions, hidden gems await discovery. Visitors can explore the sacred rock-hewn churches in Tigray; the Neolithic site at Melka Kunture near Addis Ababa; and the serene monasteries en route to Bahir Dar, such as Mertulle Mariam.",
          "For archaeology buffs, the Hadar site in Afar Regional State—where “Lucy” and other hominids were unearthed—anchors any Ethiopia’s Historic Tours itinerary. For a distinctive cultural immersion, wander Harar’s walled Old Town with its 99 mosques and unique architectural style.",
        ],
        lr: false,
        img1: Images.axum5,
        img2: Images.tiya1,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
    map: {
      title: "Historic Tour Destinations",
      description:
        "The Historic Tour is a journey through Ethiopia's rich and fascinating history. The tour includes visits to the ancient capital of Axum, the Blue Nile Falls, the castles of Gondar, the rock-hewn churches of Lalibela, and the walled city of Harar. And many more...",
      image: "/assets/maps/HistoricTours.jpg",
    },
    tourdescription: {
      title: "A Rough Summary of the Itinerary",
      description: [
        'Aside from the well-known destinations, there are also other hidden gems that are worth exploring. Visitors can discover the sacred Church of Gishen Mariam in Wollo, the neolithic site at Melka Kunture near Addis Ababa, and the beautiful churches and monasteries on the road from Addis Ababa to Bahir Dar, such as Mertulle Mariam. For those interested in archaeology, the Hadar site is where "Lucy" and other hominid species were discovered in the Afar Regional State.',
        "For a unique cultural experience, visitors can also explore the Muslim city of Harar with its 99 mosques, old walled city, and particular architectural style. Ethiopia's Historic and Cultural Tours offer an unforgettable journey through the country's rich history and diverse cultures, showcasing its unique identity that has remained largely untouched by colonialism.",
      ],
      image: Images.axum2,
    },
    tourdescription2: {
      title: "Places included in the Itinerary",
      destinations: [
        {
          title: "Abune Yemata Guh",
          description:
            "Abune Yemata Guh is a church located in the Gheralta cluster in Tigray, Ethiopia. The church is located on a cliff, at an altitude of 2,580 metres (8,460 ft). It is notable for its dome and wall paintings dating back to the 5th century AD. The church is dedicated to Abuna Yemata, a priest who is said to have led the nine saints who spread Christianity in Tigray.",
        },
        {
          title: "Axum",
          description:
            "Axum is a city in northern Ethiopia. It's known for its tall, carved obelisks, relics of the ancient Kingdom of Aksum. Most are in the northern Stelae Park, including a huge fallen pillar, now in pieces. Centuries-old St. Mary of Zion is a Christian church and pilgrimage site believed to have housed the biblical Ark of the Covenant. The neighboring Chapel of the Tablet is said to contain the Ark today.",
        },
        {
          title: "Lalibela",
          description:
            "Lalibela is a town in the Amhara region of northern Ethiopia. It's known for its distinctive rock-cut churches dating from the 12th and 13th centuries, which are pilgrimage sites for Coptic Christians. Carved out of rock, the subterranean monoliths include huge Bete Medhane Alem, and cross-shaped Bete Giyorgis. Many are joined by tunnels and trenches, and some have carved bas-reliefs and colored frescoes inside.",
        },
        {
          title: "Tiya",
          description:
            "Tiya is a town in central Ethiopia. It's known for the Tiya archaeological site, a UNESCO World Heritage Site. The site contains 36 monuments, including 32 carved stelae covered with symbols, most of which are difficult to decipher. The stelae are believed to have been erected between the 12th and 14th centuries. The site also includes excavated megaliths and stone circles.",
        },
        {
          title: "Gondar",
          description:
            "Gondar is a city in northern Ethiopia. It's known for the walled Fasil Ghebbi fortress and palace compound, once the seat of Ethiopian emperors. Dominating it is the immense 17th-century castle of Emperor Fasilides, which combines Portuguese, Indian and local architectural styles. Outside the complex is Debre Berhan Selassie church, with an interior of elaborate murals, including a ceiling decorated with winged angels.",
        },
        {
          title: "Bahir Dar",
          description:
            "Bahir Dar is a city in northwest Ethiopia. It sits on the southern shore of Lake Tana, Ethiopia's largest lake. Islands in the lake are home to medieval monasteries, including Azwa Maryam, which has colorful murals. Nearby on the Zege Peninsula, the Ura Kidane Mihret monastery is known for its elaborate, colorful murals. The Blue Nile River snakes southeast of the city toward the towering cliffs at the Blue Nile Falls.",
        },
        {
          title: "Dessie",
          description:
            "Dessie is a city and a Zone in north-central Ethiopia. Located in the Debub Wollo Zone of the Amhara Region, it sits at a latitude and longitude of 11°8′N 39°38′E, with an elevation between 2,470 and 2,550 metres above sea level.",
        },
        {
          title: "Melka Kunture",
          description:
            "Melka Kunture is a Paleolithic site in the upper Awash Valley in Ethiopia. It is located about 50 kilometers south of Addis Ababa on the west bank of the Awash River, a tributary of the Blue Nile. The site is located within the boundaries of the Awash National Park.",
        },
        {
          title: "Harar",
          description:
            "Harar is a city in eastern Ethiopia. It's surrounded by a centuries-old defensive wall, which has several large gates, including Duke's Gate. The city is known for its mazelike alleys and traditional houses decorated inside with flat hanging baskets. The city's landmarks include 18th-century Jami Mosque and the walled Feres Magala, or French, Village, with its colorful buildings and such attractions as the house of famed poet Arthur Rimbaud.",
        },
        {
          title: "Hadar",
          description:
            "Hadar is a village in Ethiopia, on the southern edge of the Afar Triangle. It is notable for the nearby archaeological digs which have yielded some of the most famous hominin fossils ever discovered, including Lucy, the partial skeleton of a specimen of Australopithecus afarensis. The hominin fossils of Hadar are estimated to date to 3.4 million years ago, and include the remains of 13 individuals, making it one of the richest and most varied early hominin sites in Africa.",
        },
      ],
      description:
        "The Historic Tour itinerary includes the following destinations: ",
    },
  },
  {
    id: 2,
    experience: "tribal-cultural-ethiopia-tours",
    title: "Tribal Ethiopia Tours",
    slug: "tribal-cultural-tours-of-ethiopia",
    metaTitle: "Tribal & Cultural Tours of Ethiopia | Sawla Tours",
    metaDescription:
      "Join our Tribal & Cultural Tours—authentic Ethiopia Cultural Expeditions with Omo Valley Tribal Experiences. Explore diverse tribes, scenery, and wildlife.",
    description:
      "Dive into the unique cultural kaleidoscope of Ethiopia's Tribal Tours. Explore vibrant traditions, breathtaking vistas, and fascinating wildlife in Africa's heartland. Immerse in the dynamic spirit of Ethiopia, an unforgettable journey awaits! Make this radiant journey your next adventure - it's a celebration of diversity at every step",
    image: Images.omo1,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "Tribal & Cultural Tours of Ethiopia",
        description: [
          "Discover our Tribal & Cultural Tours, a key offering in Sawla Tours’ Ethiopia Cultural Expeditions, where you’ll discover the living traditions of the Omo River communities. Meet the Arbore, Nyangatom, Dasenech, Karo, Hamer,Benna and Mursi—tribes whose centuries-old lifestyles blend harmony with nature.",
          "Alongside authentic Omo Valley Tribal Experiences, enjoy stunning landscapes, rich wildlife, and vibrant birdlife.",
        ],
        lr: true,
        img1: Images.karo1,
        img2: Images.danakil4,
        button: "Start Planning",
        link: "/enquire",
      },

      {
        title: "Meeting the tribes & explore their territories.",
        description: [
          "Before reaching the Omo River, visitors can explore the home of the Dorze people in Chencha, renowned for their bamboo bee-hive-shaped houses and colorful weaving skills. Further south are the Konso people, known for their intricately terraced hillsides and wooden totems that adorn their cemeteries.",
          "Along the Omo River, visitors can discover the Kara, who are famous for body painting and Mursi’s women wearing lip plates, and experience the extraordinary rite of passage of the Hamer people called the Bull Jumping ceremony (Ukuli Bula), representing a life-changing event for young men who pass from boyhood into adulthood.",
        ],
        img1: Images.karo1,
        img2: Images.hamer1,
        button: "MORE ON THE ITINERARY",
        link: "/tours-by-experience/tribal-cultural-ethiopia-tours",
        lr: false,
      },
    ],
    map: {
      title: "Tribal Tour Destinations",
      description:
        "The Tribal Tour is a journey through Ethiopia's tribal areas. Some of the destinations include visits to the Arbore, Nyangatom, Dasenech, Karo, Hamer, and Mursi tribes.",
      image: "/assets/maps/TribalTours.jpg",
    },
    tourdescription: {
      title: "The Wonders of Ethiopia's Tribal Areas",
      description: [
        "To fully experience the wonders of the Omo Valley, at least eight days should be allowed, with the east bank offering lodges for accommodation while the west bank requires camping. We can provide all the necessary gear for a comfortable camping experience. ",
        "In the far west in Gambella, along the Baro River, visitors can discover the Anuak, Nuer, and Mizingir people, accessible by air or a two-day road trip. Ethiopia's Tribal Tours offer a unique and unforgettable journey through the customs and traditions of these remarkable ethnic groups, providing a rare insight into their pre-materialist cultures and anthropology.",
      ],
      image: Images.intro3,
    },
    tourdescription2: {
      title: "Places included in the Itinerary",
      destinations: [
        {
          title: "Arbore",
          description:
            "The Arbore people reside in Ethiopia's Omo Valley, known for their pastoral lifestyle and intricate beadwork. They maintain a unique system of social organization based on age sets and have a distinct language. Their colorful clothing and beadwork showcase their artistic flair and cultural identity.",
        },
        {
          title: "Nyangatom",
          description:
            "This semi-nomadic tribe primarily inhabits the Lower Omo Valley. The Nyangatom are skilled farmers and herders, relying on cattle for their livelihood. They are known for their complex initiation ceremonies and ornate body decorations, using materials like beads and copper to adorn themselves.",
        },
        {
          title: "Dasenech",
          description:
            "The Dasenech, also known as the Geleb or Marille, are agro-pastoralists dwelling in the Omo River region. Their livelihood depends on cattle, goats, and sorghum cultivation. With a distinctive culture, they practice scarification and engage in bull jumping ceremonies as part of their rites of passage.",
        },
        {
          title: "Karo",
          description:
            "Living along the Omo River, the Karo people are renowned for their vibrant body painting using natural pigments and elaborate body scarification. They are skilled in pottery and produce intricate clay vessels. The Karo cherish their traditions, which include rituals celebrating harvests and life events.",
        },
        {
          title: "Hamer",
          description:
            "The Hamer tribe is famous for their Bull Jumping ceremony, marking the transition of boys to manhood. They are skilled pastoralists and farmers, cherishing their cattle and cultivating crops. Women wear unique hairstyles adorned with beads, while men display their achievements through various hairstyles and accessories.",
        },
        {
          title: "Mursi",
          description:
            "The Mursi are pastoralists who inhabit the lower Omo Valley. They are recognized for the lip plates worn by Mursi women, symbolizing beauty and wealth. Renowned for their body painting, the Mursi have managed to preserve their ancient cultural practices despite outside influences.",
        },
        {
          title: "Dorze",
          description:
            "The Dorze people are known for their impressive bamboo bee-hive-shaped houses found in the Chencha region. Skilled weavers, they create colorful fabrics and intricate designs, reflecting their rich artistic heritage. They are also talented farmers, cultivating crops such as enset (false banana) and coffee.",
        },
        {
          title: "Konso",
          description:
            "The Konso people are agriculturalists residing in the highland terraced areas of southern Ethiopia. Known for their exceptional terraced agriculture, they have a unique way of honoring their dead through wooden totems and stone markers.",
        },
        {
          title: "Surma",
          description:
            "The Surma, also called Suri, are pastoralists living in the southwestern part of Ethiopia. They are famous for their body painting using natural pigments and elaborate scarification patterns. Surma women are distinguished by wearing lip plates, a symbol of beauty and cultural identity.",
        },
        {
          title: "Anuak",
          description:
            "The Anuak people reside in the western region along the Baro River. They are skilled fishermen and farmers, cultivating crops like sorghum and maize. Known for their intricate wood and ivory carvings, the Anuak maintain their cultural traditions through storytelling and rituals.",
        },
        {
          title: "Nuer",
          description:
            "The Nuer are pastoralists living in Gambella, near the Baro River. Cattle play a central role in their society, serving as a measure of wealth and status. They have a complex social structure based on age sets, and their cultural identity is deeply tied to their cattle herding practices.",
        },
        {
          title: "Mizingir",
          description:
            "The Mizingir people inhabit the remote regions of western Ethiopia, near the Baro River. They are primarily agriculturalists, relying on subsistence farming to sustain their communities. With distinct customs and beliefs, the Mizingir have managed to preserve their cultural heritage amidst modern influences.",
        },
      ],
      description:
        "The Tribal Tour itinerary includes the following destinations: ",
    },
  },
  {
    id: 3,
    experience: "ethiopia-festival-tours",
    slug: "ethiopian-festival-tours",
    metaTitle: "Ethiopian Festival Tours & Cultural Events | Sawla Tours",
    metaDescription:
      "Join Sawla Tours’ Ethiopian Festival Tours & Cultural Events. Experience Genna, Timket, Meskel, Ashenda, and modern urban celebrations on an immersive cultural tour.",
    title: "Ethiopian Festival Tours",
    description:
      "Experience the vibrant world of Ethiopian Festival Tours & Cultural Events with Sawla Tours, where ancient traditions come alive through colorful celebrations and powerful spiritual energy. Immerse yourself in the heart and soul of Ethiopia on an Ethiopian religious festival tour, creating unforgettable moments that will stay with you forever.",
    image: Images.gonder2,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "The Vibrant World of Ethiopian Festivals",
        description: [
          "Delve into the thrilling realm of traditional celebrations on our Ethiopian religious tour! From the awe-inspiring Genna (Ethiopian Christmas) and Timket (Ethiopian Epiphany) in January, to Fasika (Ethiopian Easter) in April and Meskel (Finding of the True Cross) in September, each festivity bursts with color, music, and time-honored customs. ",
          "Special church feast days enrich our Ethiopian Festival Tours, ensuring every moment resonates with heritage.",
        ],
        lr: true,
        img1: Images.axum5,
        img2: Images.lalibela3,
        button: "Start Planning",
        link: "/enquire",
      },

      {
        title: "Experiencing Spiritual Energy on a Religious Pilgrimage",
        description: [
          "Join over 100,000 pilgrims at renowned holy sites—Hidar Tsion in Axum and Kulubi Gabriel near Dire Dawa—on an authentic Ethiopian religious and cultural tour, and feel the profound spiritual energy permeate the air. ",
          "In northern Ethiopia, the joyous Ashenda (Shadey) celebration blankets Tigray and northern Amhara in song and dance. This journey promises deep cultural immersion and truly memorable Ethiopian Festival Tours & Cultural Events.",
        ],
        img1: Images.lalibela2,
        img2: Images.axum5,
        lr: false,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
    map: {
      title: "Festivals and Special Events Destinations",
      description:
        "Some of the destinations included in the Festivals and Special Events Tour are: Axum, Lalibela, Gondar, Bahir Dar, and many more...",
      image: "/assets/maps/FestivalTours.jpg",
    },
    tourdescription: {
      title: "For the Contemporary Urban Festivals Enthusiasts",
      description: [
        "City-slickers can also indulge in modern festivities: lace up for the Great Ethiopia Run, groove at the Acacia Jazz Festival, or join vibrant street carnivals at Addis Foto Fest and the Addis Art Fair. These urban highlights round out our Ethiopian Festival Tours, blending ancient heritage with today’s cultural pulse.",
      ],
      image: Images.addis1,
      image2: Images.addis2,
    },
    tourdescription2: {
      title: "Festivals included in the Itinerary",
      destinations: [
        {
          title: "Genna (Ethiopian Christmas)",
          description:
            "Celebrated in January, Genna is a joyous religious festival marking the birth of Jesus Christ. Ethiopian Orthodox Christians partake in colorful processions, traditional hymns, and captivating rituals. The event features a unique midnight mass where participants light candles and chant prayers. Enthusiasm fills the air as communities come together to share festive meals and exchange gifts, signifying the spirit of unity and compassion. Genna showcases Ethiopia's deep-rooted religious heritage and brings a sense of togetherness among its people.",
        },
        {
          title: "Timket (Ethiopian Epiphany)",
          description:
            "Held in January, Timket commemorates the baptism of Jesus in the Jordan River. It is one of the most exuberant festivals in Ethiopia, attracting throngs of believers and spectators. Priests, adorned in ornate robes, carry sacred replicas of the Ark of the Covenant in a grand procession to bless the waters. Faithful believers then plunge into the blessed water, seeking purification and renewal. The event is accompanied by mesmerizing chants, dance performances, and colorful pageantry, uniting the nation in a shared expression of devotion and spirituality.",
        },
        {
          title: "Fasika (Ethiopian Easter)",
          description:
            "Celebrated in April, Fasika is a deeply revered Christian festival signifying the resurrection of Jesus Christ. Ethiopian Orthodox Christians observe a 55-day fasting period leading up to Easter, breaking their fast with a joyous feast. Candlelit processions and spirited hymns fill churches, symbolizing the triumph of light over darkness. Families gather for elaborate meals, featuring the traditional dish, doro wat (spicy chicken stew). Fasika embodies spiritual renewal, cultural heritage, and the essence of forgiveness and redemption.",
        },
        {
          title: "Meskel (the finding of the true cross)",
          description:
            "Celebrated in September, Meskel is a significant religious festival commemorating the discovery of the True Cross on which Jesus was crucified. The highlight of the event is the mesmerizing Demera ceremony, where a massive bonfire is lit in the heart of towns and villages. The fire represents the flames Empress Helena used to find the True Cross. Colorfully dressed processions sing and dance around the bonfire, creating an enchanting spectacle that brings communities together in celebration and reverence.",
        },
        {
          title: "Ashenda or Shadey",
          description:
            'Celebrated from August onward in the Northern part of Ethiopia, Ashenda (also known as Shadey) is a joyful cultural festival dedicated to women. Young girls and women dress in vibrant traditional clothing and jewelry, singing and dancing to lively tunes. They perform a unique shoulder dance called "Amhara," showcasing their cultural pride and identity. During the festivities, young women receive gifts and blessings from elders. Ashenda epitomizes the spirit of femininity, unity, and cultural richness in the Tigray and Northern Amhara regions.',
        },
        {
          title: "Great Ethiopia Run",
          description:
            "A contemporary urban festival in Addis Ababa, the Great Ethiopia Run is a thrilling athletic event that unites runners of all ages and backgrounds. The 10-kilometer road race takes participants through the vibrant streets of the capital city, with live music and jubilant crowds lining the route. The event promotes health, fitness, and a sense of community while also providing a platform to showcase Ethiopia's rich sports culture.",
        },
        {
          title: "Acacia Jazz Festival",
          description:
            "A contemporary urban festival in Addis Ababa, the Acacia Jazz Festival is a celebration of Ethiopia's growing jazz scene. Musicians from across the country and beyond come together to perform soulful jazz tunes, creating a captivating ambiance in the city. The festival's energetic atmosphere attracts music enthusiasts and showcases the diversity and creativity of Ethiopian musicians, highlighting jazz as a vibrant part of the nation's cultural fabric.",
        },
      ],
      description:
        "The Festivals and Special Events itinerary includes the following festivals: ",
    },
  },
  {
    id: 4,
    experience: "ethiopia-adventure-tours",
    slug: "adventure-tours-ethiopia",
    metaTitle: "Adventure Tours in Ethiopia | Trekking, Climbing & Rafting",
    metaDescription:
      "Discover adventure tours in Ethiopia with Sawla Tours. From Simien Mountains trekking and community trekking to rock climbing, paragliding & whitewater rafting.",
    title: "Adventure Tours in Ethiopia",
    description:
      "A unique opportunity to explore the country's diverse landscapes and rich cultural heritage. From the Simien Mountains to the Danakil Depression, Ethiopia's natural wonders are waiting to be discovered. ",
    image: Images.abay1,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "A Journey through Ethiopia's Natural Wonders",
        description: [
          "These adventure tours in Ethiopia offer an adrenaline-packed vacation. Trek through the Simien and Bale Mountains—home to Gelada baboons and the Ethiopian wolf. Rock climbers tackle rugged cliffs with expert guides. Paragliding tours soar above stunning plateaus, and whitewater rafting rides the rapids.",
          "Hot air ballooning floats you over volcanic craters at dawn. Our experienced guides ensure your safety and comfort. Come explore the wild side of Ethiopia and discover the adventure of a lifetime!",
        ],
        lr: true,
        img1: Images.abay2,
        img2: Images.paragliding1,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
    itinerarydescription: [
      {
        title: "Trekkings in Ethiopia",
        itineraries: [
          {
            title: "Simien Mountains Trekking (North)",
            description: [
              "The Simien Mountains trekking is called the “Roof of Africa.” Towering peaks—like Ras Dashen at 4,543 m—rise above gorges and plains. Trek eight days to summit without technical gear; mules carry luggage for you. Volcano-shaped crags and Erica forests host Walia Ibex, Gelada baboons, and the Ethiopian wolf. Fly from Addis Ababa to Gondar, then drive to Debark. Comfortable lodges near Sankaber serve as base camps.",
            ],
            image: Images.simien1,
          },
          {
            title: "Bale Mountains Trekking	",
            description: [
              "Spend four days in Bale Mountains National Park. Hike volcanic plateaus, alpine moorlands, and forests. Spot Mountain Nyala, Ethiopian wolf, and Menelik’s Bushbuck. In Harenna Forest, look for lions and leopards. A one-day trip from Goba leads to Sof Omar’s underwater river caves—the world’s longest.",
            ],
            image: Images.bale2,
          },
          {
            title: "Community Trekking in Ethiopia",
            description: [
              "Experience Ethiopia community trekking for a sustainable journey. Trek along the Wello or Tigray routes. Stay in guesthouses run by local families. Most revenue supports community projects. Choose Abuna Yoseph (4,260 m summit) or the new Janamora route near the Simien range. Connect with rural cultures and create unforgettable memories.",
            ],
            image: Images.tigray4,
          },
        ],
      },
      {
        title: "Rock Climbing in Ethiopia",
        itineraries: [
          {
            title: "",
            description: [
              "Tigray’s cliffs offer world-class rock climbing. Scale jagged formations with our guides. Climb in remote locations with epic views of valleys below. Bring your own gear; we handle logistics and accommodation.",
            ],
            image: Images.tigray2,
          },
        ],
      },
      {
        title: "Paragliding in Ethiopia",
        itineraries: [
          {
            title: "",
            description: [
              "Soar over highland plateaus and gorges on a paragliding adventure. Best flown November–March, with December and January prime. Our guides find ideal launch sites and support your flight—but you must bring your own glider. Enjoy front-row views of Ethiopia’s natural wonders.",
            ],
            image: Images.paragliding1,
          },
        ],
      },
      {
        title: "Whitewater Rafting in Ethiopia",
        itineraries: [
          {
            title: "",
            description: [
              "Raft the Blue Nile near Bahir Dar for multi-day rapids and canyon scenery. Tackle the Omo River on a month-long expedition, or choose the Awash for a one-to-two-day trip through Awash National Park. Advanced expeditions on the Tekezze and Baro rivers offer extreme thrills. Bring or rent your equipment in advance—rafters should plan for the September–October season after the rains.",
            ],
            image: Images.abay1,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    experience: "ethiopia-photography-tours",
    title: "Photography Tours in Ethiopia",
    slug: "photography-tours-ethiopia",
    metaTitle: "Ethiopia Photo Tour | Tribal, wildlife & Festival Photography",
    metaDescription:
      "Join Photography Tours in Ethiopia with Sawla Tours. Capture beautiful churches, highland landscapes, vibrant festivals, tribal life & birdlife. Book your photo tour!.",
    description:
      "Simply put, Ethiopia will be, without a doubt, a nirvana for photography buffs.",
    image: Images.lalibela5,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "Photography Tours in Ethiopia",
        description: [
          "Ethiopia is a nirvana for photographers. Our photography tours Ethiopia invite you to capture the fine church architecture of Lalibela, sweeping views of the Highlands, vibrant festivals, colorful markets, Omo Valley tribe lifestyles, and rare birdlife.",
          "We plan each Ethiopia photo tour package with precision. You’ll enjoy:",
          "<strong class='leftTab'>•	 Custom Itineraries: </strong>Culture, wildlife, architecture, or landscape focus—designed around light and timing.",
          "<strong class='leftTab'>•	 Expert Guidance: </strong>Local photo-savvy guides ensure you find the best angles, safe vantage points, and insider locales.",
          "<strong class='leftTab'>•	 Seamless Logistics: </strong>Transport, lodging, and meals handled so you can concentrate on your art.",
        ],
        lr: true,
        img1: Images.photo2,
        img2: Images.photo3,
        button: "Explore Itineraries",
        link: "/tours-by-experience/ethiopia-photography-tours",
      },
      // {
      //   title: "A Nirvana for Photography Buffs",
      //   subtitle: "",
      //   description: [
      //     "Photography tour in Ethiopia, a paradise for photographers. Capture stunning images of the fine church architecture of Lalibela, the breathtaking landscapes of the Ethiopian Highlands, vibrant festivals, bustling local markets, the unique lifestyles of the Omo Valley tribes, and the colorful birdlife of Ethiopia.",
      //     "The opportunities for capturing stunning photographs in Ethiopia are endless, and we at Sawla Tours are dedicated to providing exceptional tour itineraries that cater specifically to the needs of photographers.",
      //   ],
      //   lr: false,
      //   img1: Images.bale2,
      //   img2: Images.karo1,
      //   button: "Start Planning",
      //   link: "/enquire",
      // },
      {
        title: "Capture Ethiopia’s Beauty",
        subtitle: "",
        description: [
          "Join us on a photography tour in Ethiopia and transform your portfolio. Whether you’re shooting architecture at Bet Giyorgis, portraits in tribal villages, or wildlife on a photo-safari, our team crafts the perfect pacing and support.",
        ],
        lr: false,
        img1: Images.bale2,
        img2: Images.karo1,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "Book Your Photo Tour Today",
        subtitle: "",
        description: [
          "Ready to elevate your photography? Contact Sawla Tours to reserve one of our bespoke Ethiopia photo tour packages. Let us help you capture the soul of Ethiopia—one frame at a time.",
        ],
        lr: true,
        img1: Images.photo1,
        img2: Images.photo4,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
  },
  {
    id: 6,
    experience: "ethiopia-birdwatching-tours",
    title: "Birdwatching Tours in Ethiopia",
    slug: "bird-watching-tours-ethiopia",
    metaTitle: "Bird-Watching Tours in Ethiopia | Ethiopia Birding Safari",
    metaDescription:
      "Join Sawla Tours’ Ethiopia birding tour & birdwatching tour—chase endemics from Simien to Rift Valley, enjoy expert guides, and custom Ethiopia birding safari itineraries.",
    description:
      "Ethiopia is a dream destination for birders: a mosaic of soaring highlands, Rift-Valley lakes, mist-cloaked forests, and sun-baked savannas that collectively host more than 860 recorded species. Up to 16 – 21 are true endemics—taxonomy varies—while a further 14 are shared only with neighbouring Eritrea. ",
    image: Images.bird2,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "Why Ethiopia for birding?",
        description: [
          "Ethiopia’s appeal begins with sheer habitat variety: alpine moorlands tumble into lowland bush, Rift-Valley lakes, misty forests, and lush wetlands that together host both resident species and vast numbers of wintering or passage migrants, so there is rewarding birding in every season. ",
          "Endemic hotspots abound—Simien Mountains National Park regularly delivers Thick-billed Raven, Spot-breasted Plover, and Wattled Ibis, while Bale Mountains National Park adds high-altitude treasures such as Rouget’s Rail, Abyssinian Catbird, and the dazzling Abyssinian Woodpecker.",
          "Combine this biological richness with clear mountain light, dramatic escarpments, and typically approachable birds, and Ethiopia becomes an unrivalled photographer’s paradise for everyone from first-time birders to seasoned listers chasing once-in-a-lifetime sightings.",
        ],
        lr: true,
        img1: Images.gambella1,
        img2: Images.bird1,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "Sample itineraries & trip length",
        description: [
          "For travellers determined to record every possible endemic, our Comprehensive Endemic Quest runs about 18–21 days. You begin north of Addis Ababa at Debre Libanos and the Jemma River Valley, sweep east to Awash National Park, then arc south through the Rift-Valley lakes, Bale Mountains, Harenna Forest, Negele, and the arid plains around Yabello.",
          "By the time you loop back to the capital, sightings often include Blue-winged Goose, Prince Ruspoli’s Turaco, Stresemann’s Bush-crow, and dozens of Rift endemics most birders only dream about.",
          "If time is short, our Classic South-Bound Circuit condenses Ethiopia’s greatest birding hits into 10–12 days. You’ll explore the raptor-rich cliffs of Awash, scan flamingo-lined Rift-Valley lakes, and finish in the Afro-alpine moorlands of Bale Highlands—ideal terrain for Rouget’s Rail, Abyssinian Ground-Hornbill, and wave after wave of Palearctic migrants.",
        ],
        lr: false,
        img1: Images.bird3,
        img2: Images.bird6,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "Tailor-made with expert guides",
        description: [
          "Every Ethiopia birdwatching tour with Sawla Tours is fully customisable. Blend birding with the historic churches of Lalibela, a trek in the Simiens, or a cultural detour through the Omo Valley. Give us advance notice and a trained ornithologist joins your party, turning each walk into a rolling masterclass.",
        ],
        lr: true,
        img1: Images.bird6,
        img2: Images.bird2,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
  },
  {
    id: 7,
    experience: "ethiopia-wildlife-tours",
    slug: "wildlife-tours-ethiopia",
    metaTitle: "Sawla Tours – Wildlife Tours in Ethiopia & Safari Adventures",
    metaDescription:
      "Book wildlife tours in Ethiopia with Sawla Tours. Experience Ethiopia wildlife safari adventures in Bale, Omo, Gambella, Simien, and spot endemics and big game.",
    title: "Wildlife Tours in Ethiopia",
    description:
      "Explore Ethiopia, a tapestry of diverse landscapes teeming with vibrant wildlife.",

    image: Images.simien5,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "A Tapestry of Diverse Landscapes",
        description: [
          "Explore Ethiopia, a tapestry of diverse landscapes teeming with vibrant wildlife on our Ethiopia wildlife safari. This Ethiopia wildlife tour takes you into stunning national parks, game reserves, and sanctuaries—each offering unforgettable encounters with animals in their natural habitat.",
          "For an exhilarating big-game expedition, journey to Bale Mountains and Omo National Parks in the southeast and south, or to Gambella in the west. While sightings cannot be guaranteed, the thrill of tracking wildlife by following trails and droppings makes every Ethiopia wildlife safari memorable. In Awash National Park, spot Greater and Lesser Kudu, Beisa Oryx, Gerenuk, and Dik-dik—and, if fortune smiles, elusive lions and leopards. Nearby, the Halledeghi Reserve hosts plains herds and the rare Abyssinian Wild Ass.",
        ],
        lr: true,
        img1: Images.simien1,
        img2: Images.simien2,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "Home to various endemic animals",
        description: [
          "The Bale Mountains National Park is celebrated for its endemic species. On a dedicated Bale Mountains wildlife tour, you’ll encounter Mountain Nyala, Ethiopian Wolf, and Menelik’s Bushbuck.",
          "Venture into the adjacent Harenna Forest for glimpses of African wild dogs, lions, and the striking Bale Monkey. In Simien Mountains National Park, the Walia Ibex population thrives—one of the highlights of any Ethiopia wildlife tour.",
        ],
        lr: false,
        img1: Images.simien3,
        img2: Images.bale2,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "Unique and Unforgettable Wildlife",
        description: [
          "Senkele Sanctuary near Awassa offers easy views of Swayne’s Hartebeest and plains antelopes. At Nechisar National Park, straddling two lakes, you’ll enjoy diverse birdlife and mammal sightings.",
          "For elephant enthusiasts, the Babile Elephant Sanctuary east of Harar and the rehabilitated herds in Kafta-Sheraro National Park (Tigray Region) promise remarkable close-ups. Chebera-Churchura and Maze National Parks in the southwest are emerging favorites, boasting buffalo, elephants, and more.",
          "With its dramatic scenery and unparalleled biodiversity, this Ethiopia wildlife tour delivers a one-of-a-kind nature adventure you’ll treasure forever.",
        ],
        lr: false,
        img1: Images.simien5,
        img2: Images.kafta3,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
    tourdescription: {
      title: "Unique & Unforgettable Wildlife",
      description: [
        "This wildlife tour takes you to stunning national parks, game reserves, and sanctuaries across Ethiopia, where you can witness a wide range of animals in their natural habitats. ",
        "Explore the Bale Mountain, Omo, Gambella, and Awash parks for thrilling big game drives and opportunities to spot unique animals like the Ethiopian Wolf, Mountain Nyala, and Walia Ibex. Visit the Halledeghi Reserve for plains animals and the Senkele Sanctuary for Swaynes Hartebeest.",
        "Discover the Babile Elephant Sanctuary and Kafta Sheraro Park for remarkable elephant sightings. Experience Ethiopia's rich wildlife and create unforgettable memories on this exceptional journey.",
      ],
      image: Images.bale1,
    },
    tourdescription2: {
      title: "Places included in the Itinerary",
      description:
        "The Wildlife Tour itinerary includes the following destinations: ",
      destinations: [
        {
          title: "Bale Mountain National Park",
          description:
            "Nestled in the Southeast, Bale Mountain National Park boasts diverse landscapes and is a sanctuary for endemic wildlife. Here, you can spot the majestic Mountain Nyala, the elusive Ethiopian Wolf, and Menelik's Bushbuck. The nearby Harenna Forest is home to wild dogs, lions, and the rare Bale Monkey, creating an exceptional wildlife experience.",
        },
        {
          title: "Omo National Park",
          description:
            "Located in the South, Omo National Park offers thrilling big game drives, leading you on the trail of wildlife. While big game sightings are not guaranteed, the adventure of tracking animals in their natural habitat is unforgettable. The park showcases the incredible biodiversity of Ethiopia, providing opportunities to encounter diverse species in their pristine environment.",
        },
        {
          title: "Gambella",
          description:
            "Situated in the West, Gambella is a wildlife-rich region where you can embark on exciting big game drives. The area is known for its varied landscapes and abundant wildlife, making it a prime destination for wildlife enthusiasts seeking a unique safari experience.",
        },
        {
          title: "Awash Park",
          description:
            "In the eastern part of Ethiopia, Awash Park is a haven for wildlife enthusiasts. Encounter various animals like the Greater and Lesser Kudu, Beisa Oryx, Gerenuk, and Dikdik, along with potential sightings of leopards and lions. The park's proximity to the Halledeghi Reserve allows you to witness herds of plains animals and rare Abyssinian Wild Ass.",
        },
        {
          title: "Halledeghi Reserve",
          description:
            "Adjacent to Awash Park, the Halledeghi Reserve offers a chance to see an array of plains animals and the elusive Abyssinian Wild Ass. This sanctuary complements the wildlife experience in the Awash region, providing a glimpse into Ethiopia's diverse fauna.",
        },
        {
          title: "Simien Mountains National Park",
          description:
            " Famous for its dramatic mountain scenery, Simien Mountains National Park hosts the iconic Walia Ibex, offering almost guaranteed sightings. The park's striking beauty and thriving wildlife make it a captivating destination for nature enthusiasts.",
        },
        {
          title: "Senkele Sanctuary (near Awassa)",
          description:
            " Close to Awassa, the Senkele Sanctuary is a haven for Swaynes Hartebeest and other plains animals. Witness the thriving wildlife in this scenic reserve and immerse yourself in the natural beauty of Ethiopia.",
        },
        {
          title: "Nech Sar Park",
          description:
            "Located in the southwest, Nech Sar Park spans across two lakes and offers a variety of birdlife and wildlife encounters. The park's picturesque landscapes and diverse fauna create a serene wildlife tour experience.",
        },
        {
          title: "Babile Elephant Sanctuary (located 40 km east of Harar)",
          description:
            "Head to Babile Elephant Sanctuary to spot magnificent elephants. This sanctuary provides a glimpse into Ethiopia's efforts to protect these gentle giants, offering an enriching wildlife encounter.",
        },
        {
          title: "Kafta Sheraro Park (Tigray Region)",
          description:
            "A newly protected area in Tigray, Kafta Sheraro Park is witnessing the triumphant comeback of elephants and other wildlife. Experience the park's emerging popularity as a wildlife-rich destination.",
        },
        {
          title: "Chebera Churchura National Park",
          description:
            "Found in the southwest, Chebera Churchura is a treasure trove of diverse wildlife, including buffalo and elephants. Explore the untamed beauty of this park, brimming with captivating wildlife encounters.",
        },
        {
          title: "Maze National Park (located in the southwest)",
          description:
            "Maze National Park is gaining popularity for its abundant wildlife, featuring buffalo and elephants. Immerse yourself in the wilderness of Ethiopia's southwest and relish the raw beauty of nature.",
        },
      ],
    },
  },
  {
    id: 8,
    experience: "ethiopia-special-interest-tours",
    slug: "special-interest-tours-ethiopia",
    metaTitle:
      "Sawla Tours – Special Interest Tours in Ethiopia: Coffee & Geology",
    metaDescription:
      "Discover Sawla Tours’ Ethiopia special interest tours: coffee origin, geology, butterfly & flora adventures, plus immersive school trips to Ethiopia.",
    title: "Special Interest Tours in Ethiopia",
    description:
      "Uncover hidden gems, curating experiences that bring the country's treasures to life.",
    image: Images.central1,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "Uncover Hidden Gems",
        description: [
          "Uncover hidden gems with our Ethiopia special interest tours, curating experiences that bring the country’s treasures to life. These tailored journeys let you delve into unique culture, history, and natural wonders based on your passions.",
          "For coffee aficionados, our Ethiopia coffee origin tour visits the birthplace of your favorite brew. Learn bean-to-cup secrets in Addis Ababa, then travel to Harar, Yirgacheffe, Jimma, and Bonga—meeting cooperative farmers, sampling fresh cups, and even picking your own beans.",
        ],
        lr: true,
        img1: Images.konso2,
        img2: Images.kaffa1,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "Additional Special Interest Tours",
        description: [
          "In addition to these special interest tours, Ethiopia also offers school trips that can provide students with a unique and educational experience. Schools can organize trips to visit historical and cultural sites such as the ancient city of Axum, the rock-hewn churches of Lalibela, and the castles of Gondar. Students can also participate in cultural activities such as traditional dance and music performances, and learn about the country's diverse communities and languages.",
          "Overall, special interest tours and school trips in Ethiopia offer travelers and students the chance to engage with the country's rich history, culture, and natural beauty in a way that is tailored to their specific interests and preferences.",
        ],
        lr: false,
        img1: Images.bird4,
        img2: Images.axum3,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
    itinerarydescription: [
      {
        title: "Coffee Tour in Ethiopia",
        itineraries: [
          {
            title: "",
            description: [
              "Embark on a journey to the birthplace of coffee and explore Ethiopia's rich coffee industry with Sawla and the Coffee Farmers Cooperative Union. This is your chance to witness firsthand the passion and dedication that goes into producing some of the world's finest coffee. From the bustling streets of Addis Ababa to the stunning coffee-growing regions of Harar, Yirga Chefe, Jimma, and Bonga, this once-in-a-lifetime tour promises an unforgettable experience.",
              "Your adventure begins in Addis Ababa, where you'll meet local coffee industry experts and learn about the history of Africa's first commodity exchange at the Ethiopia Commodity Exchange. Participate in a cupping session and savor some of the world's most exquisite coffee. But the real highlight of the tour is the opportunity to visit the cooperatives in the coffee-growing regions. Here, you'll meet with local farmers, learn about their traditions and techniques, and even have the chance to pick your own coffee beans. This is a chance to deepen your appreciation for coffee production, connect with the people who make it all possible, and experience the unique flavors and aromas of Ethiopian coffee.",
              "Don't miss out on this incredible opportunity to explore Ethiopia's coffee industry. Book your coffee tour today and discover the history, passion, and dedication that make Ethiopian coffee a beloved beverage worldwide. With Sawla and the Coffee Farmers Cooperative Union, you're sure to have an unforgettable journey that will awaken your senses and leave you with a deeper appreciation for this treasured drink.",
            ],
            image: Images.kaffa1,
          },
        ],
      },
      {
        title: "Geology Tours in Ethiopia",
        itineraries: [
          {
            title: "",
            description: [
              "Explore Ethiopia's fascinating geology with a journey to the Awash area and Mount Ert'ale. Geologists will be thrilled by the unique geological features of the Awash area, where the African rift system splits into two arms, creating a diverse landscape of volcanoes, hot springs, and salt flats. The region is also home to an array of wildlife, including baboons, hyenas, and ostriches, making it an excellent destination for nature enthusiasts.",
              "No geology tour of Ethiopia is complete without a visit to Mount Ert'ale, the only volcano in the world with a permanent lava lake. The ascent to the summit is an adventure in itself, with the option of a trek on foot while camels carry the supplies or a thrilling helicopter ride from Mekele. Additionally, a comprehensive two-week tour can include a visit to the Simien Mountains, a UNESCO World Heritage Site renowned for its unique wildlife, dramatic landscapes, and cultural heritage. Join expert geologists and discover the wonders of Ethiopia's geology on a journey of a lifetime.",
            ],
            image: Images.danakil1,
          },
        ],
      },
      {
        title: "Flora and Butterflies Tour in Ethiopia",
        itineraries: [
          {
            title: "",
            description: [
              "Welcome to the breathtaking world of Ethiopia – a nature lover's paradise! Nestled among the twelve biodiversity centers of the world, Ethiopia boasts an incredible array of flora and fauna that will leave visitors awe-inspired.",
              "For those with a special interest in butterflies, Ethiopia is home to a stunning 324 species, spread across eight families and 93 genera. Imagine exploring the lush Menagesha Forest near Addis Ababa, gazing out over the tranquil Rift Valley Lakes, and marveling at the beauty of the Bale Mountains and the Awash Valley. This once-in-a-lifetime butterfly tour spans eleven unforgettable days.",
              "If flora is your passion, then Ethiopia has got you covered as well. The stunning Bale Mountains and the Awash Valley await your arrival, and your journey will take you across the breathtaking Abyssinian Highlands. With a total of ten amazing days to soak up the stunning floral scenery, this tour promises to be an unforgettable adventure.",
            ],
            image: Images.adey1,
          },
        ],
      },
      {
        title: "School Trips in Ethiopia",
        itineraries: [
          {
            title: "",
            description: [
              "Ethiopia is one of the ideal destinations for school trips. We tailor-made the best school trips in Ethiopia, with a focus on safety, education, and inspiration. Our team works closely with teachers to create customized itineraries that cater to their specific subjects and interests, whether it's art, music, history, geography, culture, conservation, or volunteer work.",
              "Our established itineraries can be tailored to suit the particular needs of your group, ensuring that your students are engaged in a range of diverse and exciting activities.",
              "We prioritize safety above all else and take all necessary precautions to ensure that our trips are safe for students. Our experienced guides will be with you every step of the way to provide guidance and support.",
              "We believe that travel is an integral part of education and that school trips to Ethiopia can be a transformative experience for students. Let us help you create a memorable trip that will leave a lasting impression on your students. Contact us today to learn more about our school trip options and how we can customize an itinerary for your group.",
            ],
            image: Images.wollo1,
          },
        ],
      },
    ],
  },
  {
    id: 9,
    experience: "addis-ababa-day-tours",
    slug: "addis-ababa-day-business-tours",
    metaTitle: "Addis Ababa Day Tours & Ethiopia Business Travel Tours",
    metaDescription:
      "Maximize your visit with Sawla Tours’ Addis Ababa day tours, Ethiopia short tours, and Ethiopia business travel tours—culture, history, and nature in one trip.",
    title: "Business Trips and Short Day Tours in Ethiopia",
    description:
      "Unveil the wonders of Ethiopia even with limited time, as we curate unforgettable short-duration trips tailored to your schedule",
    image: Images.addis3,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "Unveil the Wonders of Ethiopia",
        description: [
          "Are you pressed for time in Ethiopia? Our Addis Ababa day tours and Ethiopia short tours make every moment count, whether you’re here for work or leisure. For corporate clients, our Ethiopia business travel tours seamlessly blend efficient meeting schedules with curated cultural excursions.",
          "Choose from itineraries just hours from the city: marvel at Lalibela’s rock-hewn churches, stand beneath the thundering Blue Nile Falls, or sample local honey wine at a countryside vineyard. Back in Addis Ababa, dive into the city’s vibrant heartbeat—learn to cook injera in a traditional kitchen, visit schools and orphanages, or get up close with rescued lions at the Born Free Wildlife Center. Music aficionados can cap the day with Addis’s best jazz and folklore performances.",
          "Whether it’s a one-day cultural sprint or a multi-day discovery tour, our team tailors each experience to your schedule and budget. Don’t let a short stay hold you back—book your Addis Ababa day tours, Ethiopia short tours, or Ethiopia business travel tours today and uncover the best of this extraordinary destination.",
        ],
        lr: true,
        img1: Images.addis1,
        img2: Images.addis2,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "Business Trips in Ethiopia",
        description: [
          "But that's not all. If you're looking to soak up the vibrant culture of Addis Ababa, we've got plenty of options for you too. Learn how to cook traditional Ethiopian cuisine, visit local schools and orphanages, or take a trip to the Born Free Wildlife Center to see rescued lions up close. And if you're a music lover, we'll make sure you know all the best spots for jazz and traditional folklore performances. Plus, we'll introduce you to the delicious Tej - a local honey wine you won't want to miss.",
          "Don't miss out on the chance to explore this fascinating country, even if you only have a short time to spare. Let us help you make the most of your visit to Ethiopia!",
        ],
        lr: false,
        img1: Images.addis3,
        img2: Images.addis1,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
  },
  {
    id: 10,
    title: "Filming in Ethiopia",
    slug: "filming-ethiopia-fixer-production-logistics",
    metaTitle: "Filming in Ethiopia | Fixer Services & Production Logistics",
    metaDescription:
      "Sawla Tours provides Ethiopia fixer services, filming permits Ethiopia, location scouting, production logistics & documentary filming in Ethiopia support 24/7.",
    description:
      "Ethiopia is a land of vibrant culture and diverse landscapes that have recently caught the attention of international filmmakers.",
    image: Images.photo1,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "Capturing the Beauty of Ethiopia",
        description: [
          "If you need a fixer in Ethiopia, Sawla Tours is your one-stop shop for Ethiopia fixer services and in-country media production support. We handle every detail—from Ethiopia production logistics to Ethiopia location scouting—so you can focus on storytelling. Whether you’re planning documentary filming in Ethiopia, a feature film, music video, natural history program, or commercial shoot, our team has the expertise to make it happen.",
          "We provide comprehensive pre-production support, including brainstorming sessions with experts versed in local culture and terrain. Our researchers can deliver detailed recce reports and filming permits Ethiopia estimates—no advance travel required—so you can budget accurately. We also offer location management, schedule planning, and proposal photography to help you visualize your shoot.",
        ],
        lr: true,
        img1: Images.kafta1,
        img2: Images.hawassa1,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "Around-the-clock support",
        description: [
          "Our full production services cover everything from securing filming permits in Ethiopia to arranging international equipment importation. We’ll coordinate Ethiopia location scouting, security and field support, remote camp outfitting, and even aerial filming solutions. ",
          "Confidential and flexible, Sawla Tours works closely with you to tailor Ethiopia production logistics to your project’s unique needs. When you require a dedicated partner for documentary filming in Ethiopia or any media production, Sawla Tours delivers professional, 24/7 assistance.",
        ],
        lr: false,
        img1: Images.photo2,
        img2: Images.photo3,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
  },
];

export const getTour = (slug: string) => {
  const result = EthiopiaToursArray.filter(
    (tour) => tour.slug === slug || tour.id === Number(slug)
  );
  if (result.length === 0) {
    return null;
  }
  return result[0];
};
