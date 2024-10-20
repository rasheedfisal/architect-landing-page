import { chain } from "@/middlewares/chain";
import { withIntl } from "@/middlewares/withIntl";

const middlewares = [withIntl];

export default chain(middlewares);

// We only want the middleware to run on the `/` route
// to redirect users to their preferred locale
export const config = { matcher: ["/((?!api|_next|.*\\..*).*)"] };
