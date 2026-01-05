/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Fix A: Redirect broken About Us links
      {
        source: "/tours-by-experience/:path*/about-us",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/ethiopia-guide/about-us",
        destination: "/about-us",
        permanent: true,
      },

      // Fix B: Map Old Experience Categories (ID) to New Slugs
      {
        source: "/tours-by-experience/1/:id",
        destination: "/tours-by-experience/historic-and-cultural-tours/:id",
        permanent: true,
      },
      {
        source: "/tours-by-experience/2/:id",
        destination: "/tours-by-experience/tribal-cultural-ethiopia-tours/:id",
        permanent: true,
      },
      {
        source: "/tours-by-experience/3/:id",
        destination: "/tours-by-experience/ethiopia-festival-tours/:id",
        permanent: true,
      },
      {
        source: "/tours-by-experience/4/:id",
        destination: "/tours-by-experience/ethiopia-adventure-tours/:id",
        permanent: true,
      },
      {
        source: "/tours-by-experience/5/:id",
        destination: "/tours-by-experience/ethiopia-photography-tours/:id",
        permanent: true,
      },
      {
        source: "/tours-by-experience/6/:id",
        destination: "/tours-by-experience/ethiopia-birdwatching-tours/:id",
        permanent: true,
      },
      {
        source: "/tours-by-experience/7/:id",
        destination: "/tours-by-experience/ethiopia-wildlife-tours/:id",
        permanent: true,
      },
      {
        source: "/tours-by-experience/8/:id",
        destination: "/tours-by-experience/addis-ababa-day-tours/:id",
        permanent: true,
      },
      {
        source: "/tours-by-experience/9/:id",
        destination: "/tours-by-experience/ethiopia-special-interest-tours/:id",
        permanent: true,
      },

      // Fix C: Ethiopia Guide (ID -> Slug)
      {
        source: "/ethiopia-guide/1",
        destination: "/ethiopia-travel-guide/ethiopia-travel-circuits",
        permanent: true,
      },
      {
        source: "/ethiopia-guide/2",
        destination: "/ethiopia-travel-guide/when-to-visit-ethiopia",
        permanent: true,
      },
      {
        source: "/ethiopia-guide/3",
        destination: "/ethiopia-travel-guide/how-to-get-to-ethiopia",
        permanent: true,
      },
      {
        source: "/ethiopia-guide/4",
        destination: "/ethiopia-travel-guide/hotels-lodges-ethiopia",
        permanent: true,
      },
      {
        source: "/ethiopia-guide/5",
        destination: "/ethiopia-travel-guide/ethiopia-safaris",
        permanent: true,
      },
      {
        source: "/ethiopia-guide/6",
        destination: "/ethiopia-travel-guide/ethiopia-wildlife-tours",
        permanent: true,
      },
      {
        source: "/ethiopia-guide/7",
        destination: "/ethiopia-travel-guide/ethiopia-travel-safety",
        permanent: true,
      },
      {
        source: "/ethiopia-guide/8",
        destination: "/ethiopia-travel-guide/how-to-plan-ethiopia-trip",
        permanent: true,
      },
      {
        source: "/ethiopia-guide/9",
        destination: "/ethiopia-travel-guide/ethiopia-travel-tips",
        permanent: true,
      },

      // Fix D: Top Destinations (ID -> Slug)
      {
        source: "/top-destinations/1",
        destination: "/ethiopias-popular-destinations/lalibela",
        permanent: true,
      },
      {
        source: "/top-destinations/2",
        destination:
          "/ethiopias-popular-destinations/simien-mountain-national-park",
        permanent: true,
      },
      {
        source: "/top-destinations/3",
        destination:
          "/ethiopias-popular-destinations/danakil-depression-tour-packages",
        permanent: true,
      },
      {
        source: "/top-destinations/4",
        destination: "/ethiopias-popular-destinations/omo-valley-tribes",
        permanent: true,
      },
      {
        source: "/top-destinations/5",
        destination:
          "/ethiopias-popular-destinations/tigray-rock-hewn-churches-historical-sites",
        permanent: true,
      },
      {
        source: "/top-destinations/6",
        destination: "/ethiopias-popular-destinations/bahir-dar",
        permanent: true,
      },
      {
        source: "/top-destinations/7",
        destination: "/ethiopias-popular-destinations/gonder",
        permanent: true,
      },
      {
        source: "/top-destinations/8",
        destination:
          "/ethiopias-popular-destinations/bale-mountains-national-park",
        permanent: true,
      },
      {
        source: "/top-destinations/9",
        destination:
          "/ethiopias-popular-destinations/chebera-churchura-national-park",
        permanent: true,
      },
      {
        source: "/top-destinations/10",
        destination: "/ethiopias-popular-destinations/axum",
        permanent: true,
      },
      {
        source: "/top-destinations/11",
        destination: "/ethiopias-popular-destinations/harar",
        permanent: true,
      },
      {
        source: "/top-destinations/12",
        destination: "/ethiopias-popular-destinations/gambella-national-park",
        permanent: true,
      },
      {
        source: "/top-destinations/13",
        destination:
          "/ethiopias-popular-destinations/kafta-shiraro-national-park-safari-ethiopia",
        permanent: true,
      },
      {
        source: "/top-destinations/14",
        destination:
          "/ethiopias-popular-destinations/awash-national-park-alledeghi-plains-safari",
        permanent: true,
      },
      {
        source: "/top-destinations/15",
        destination: "/ethiopias-popular-destinations/addis-ababa-city-tour",
        permanent: true,
      },

      // Fix E: Ethiopia Tours / Themes (ID -> Slug)
      // Note: Some 404s like /ethiopia-tours/8 appeared in the list.
      {
        source: "/ethiopia-tours/1",
        destination: "/ethiopian-tour-themes/ethiopias-historic-tours",
        permanent: true,
      },
      {
        source: "/ethiopia-tours/2",
        destination: "/ethiopian-tour-themes/tribal-cultural-tours-of-ethiopia",
        permanent: true,
      },
      {
        source: "/ethiopia-tours/3",
        destination: "/ethiopian-tour-themes/ethiopian-festival-tours",
        permanent: true,
      },
      {
        source: "/ethiopia-tours/4",
        destination: "/ethiopian-tour-themes/adventure-tours-ethiopia",
        permanent: true,
      },
      {
        source: "/ethiopia-tours/5",
        destination: "/ethiopian-tour-themes/photography-tours-ethiopia",
        permanent: true,
      },
      {
        source: "/ethiopia-tours/6",
        destination: "/ethiopian-tour-themes/bird-watching-tours-ethiopia",
        permanent: true,
      },
      {
        source: "/ethiopia-tours/7",
        destination: "/ethiopian-tour-themes/wildlife-tours-ethiopia",
        permanent: true,
      },
      {
        source: "/ethiopia-tours/8",
        destination: "/ethiopian-tour-themes/special-interest-tours-ethiopia",
        permanent: true,
      },
      {
        source: "/ethiopia-tours/9",
        destination: "/ethiopian-tour-themes/addis-ababa-day-business-tours",
        permanent: true,
      },
      {
        source: "/ethiopia-tours/10",
        destination:
          "/ethiopian-tour-themes/filming-ethiopia-fixer-production-logistics",
        permanent: true,
      },

      // Fix F: Base Category Pages (ID -> Slug)
      {
        source: "/tours-by-experience/1",
        destination: "/tours-by-experience/historic-and-cultural-tours",
        permanent: true,
      },
      {
        source: "/tours-by-experience/2",
        destination: "/tours-by-experience/tribal-cultural-ethiopia-tours",
        permanent: true,
      },
      {
        source: "/tours-by-experience/3",
        destination: "/tours-by-experience/ethiopia-festival-tours",
        permanent: true,
      },
      {
        source: "/tours-by-experience/4",
        destination: "/tours-by-experience/ethiopia-adventure-tours",
        permanent: true,
      },
      {
        source: "/tours-by-experience/5",
        destination: "/tours-by-experience/ethiopia-photography-tours",
        permanent: true,
      },
      {
        source: "/tours-by-experience/6",
        destination: "/tours-by-experience/ethiopia-birdwatching-tours",
        permanent: true,
      },
      {
        source: "/tours-by-experience/7",
        destination: "/tours-by-experience/ethiopia-wildlife-tours",
        permanent: true,
      },
      {
        source: "/tours-by-experience/8",
        destination: "/tours-by-experience/addis-ababa-day-tours",
        permanent: true,
      },
      {
        source: "/tours-by-experience/9",
        destination: "/tours-by-experience/ethiopia-special-interest-tours",
        permanent: true,
      },

      // Fix G: Old Main Landing Pages
      {
        source: "/ethiopia-guide",
        destination: "/ethiopia-travel-guide",
        permanent: true,
      },
      {
        source: "/top-destinations",
        destination: "/ethiopias-popular-destinations",
        permanent: true,
      },
      {
        source: "/ethiopia-tours",
        destination: "/ethiopian-tour-themes",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
