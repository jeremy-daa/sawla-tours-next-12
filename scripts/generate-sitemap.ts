
import { EthiopiaGuideArray } from "../data/EthiopiaGuideArray";
import { EthiopiaToursArray } from "../data/EthiopiaToursArray";
import { PopularDestinationsArray } from "../data/PopularDestinationsArray";
import { ExperiencesPackageItineraryArray } from "../data/ExperiencesPackagesItineraryArray";
import { HistoricAndCulturalToursArray, EthiopiaTourPackagesArray, DestinationPackagesArray } from "../data/PackagesArray";
import * as fs from "fs";
import * as path from "path";

const BASE_URL = "https://www.sawlatours.com";

const staticPages = [
  "",
  "/about-us",
  "/contact-us",
  "/enquire",
  "/ethiopia-travel-guide",
  "/ethiopian-tour-themes",
  "/ethiopias-popular-destinations",
  "/tours-by-experience",
];

const generateSitemap = () => {
  const urls: string[] = [];

  // Add static pages
  staticPages.forEach((page) => {
    urls.push(`${BASE_URL}${page}`);
  });

  // Ethiopia Travel Guide
  EthiopiaGuideArray.forEach((guide) => {
    if (guide.slug) {
      urls.push(`${BASE_URL}/ethiopia-travel-guide/${guide.slug}`);
    }
  });

  // Ethiopian Tour Themes
  EthiopiaToursArray.forEach((tour) => {
    if (tour.slug) {
      urls.push(`${BASE_URL}/ethiopian-tour-themes/${tour.slug}`);
    }
  });

  // Popular Destinations
  PopularDestinationsArray.forEach((dest) => {
    if (dest.slug) {
      urls.push(`${BASE_URL}/ethiopias-popular-destinations/${dest.slug}`);
    }
  });

  // Tours by Experience (Itineraries)
  ExperiencesPackageItineraryArray.forEach((itinerary) => {
    const slug = itinerary.slug || itinerary.id;
    const experience = itinerary.experience;
    urls.push(`${BASE_URL}/tours-by-experience/${experience}/${slug}`);
  });

  // Create XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map((url) => {
      return `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join("")}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap);
  console.log("Sitemap generated successfully at public/sitemap.xml");
};

generateSitemap();
