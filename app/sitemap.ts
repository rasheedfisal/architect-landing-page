import { env } from "@/lib/env.server";

export default async function sitemap() {
  const baseUrl = env.METADATA_BASE_ROUTE;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
