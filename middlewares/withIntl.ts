import { NextFetchEvent, NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { availableLocaleCodes, defaultLocale } from "@/next.locales.mjs";
import { MiddlewareFactory } from "./chain";
export const withIntl: MiddlewareFactory = (next) => {
  const intlMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales: availableLocaleCodes,

    // Used when no locale matches
    defaultLocale: defaultLocale.code,

    // Always use a Locale as a prefix for routing
    localePrefix: "always",
  });

  return async (request: NextRequest, _next: NextFetchEvent) => {
    return intlMiddleware(request);
  };
};
