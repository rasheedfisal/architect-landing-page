import { Tajawal } from "next/font/google";

// define your variable fonts
// define 2 weights of a non-variable font
const tajwal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-primary",
});
export { tajwal };
