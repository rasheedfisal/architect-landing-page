import { z } from "zod";

export const env = z
  .object({
    METADATA_BASE_ROUTE: z.string().min(1),
  })
  .parse(process.env);
