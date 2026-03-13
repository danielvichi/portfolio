import type { MetadataRoute } from "next";

const BASE_URL = "https://danielvichi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
          pt: `${BASE_URL}/pt`,
        },
      },
    },
  ];
}
