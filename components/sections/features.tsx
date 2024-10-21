import AppFrame from "../../public/assets/1.png";
import ShieldCheck from "../../public/assets/icons/check.png";
import Coins from "../../public/assets/icons/coins.png";
import Frames from "../../public/assets/frames.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Features() {
  const t = useTranslations();
  return (
    <section
      id="features"
      className="flex max-w-7xl flex-col gap-10 px-8 pt-5 lg:px-12 xl:m-auto xl:pt-10"
    >
      <article className="m-auto w-[30ch] text-center text-gray-500 md:m-0 md:w-full">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          {t("feature_h2")}
        </h2>
        <p>
          {t("feature_p1")}
          <br />
          {t("feature_p2")}
        </p>
      </article>

      <article className="flex w-full flex-col gap-8 overflow-hidden xl:h-96 xl:flex-row">
        <div className="flex flex-col rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:text-start p-10">
            <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-start">
              {t("feature4_h2")}
            </h2>
            <p className="m-auto text-center text-gray-700 sm:w-[34ch] md:m-0 md:text-start">
              {t("feature4_p")}
            </p>
          </div>

          <div className="m-auto mt-10 max-w-72 md:mx-10 md:w-1/2 lg:mx-0">
            <Image src={AppFrame} alt="Kobodrop app frame" />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-indigo-100 p-10 xl:w-1/3">
          <div className="w-fit rounded-full bg-indigo-200 p-4">
            <Image src={ShieldCheck} alt="" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">
            {t("feature3_h2")}
          </h2>
          <p className="text-gray-700">{t("feature3_p")}</p>
        </div>
      </article>

      <article className="flex w-full flex-col gap-8 xl:h-96 xl:flex-row">
        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-orange-100 p-10 xl:w-1/3">
          <div className="w-fit rounded-full bg-orange-200 p-4">
            <Image src={Coins} alt="" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">
            {t("feature2_h2")}
          </h2>
          <p className="text-gray-700">{t("feature2_p")}</p>
        </div>

        <div className="flex flex-col gap-8 overflow-hidden rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:mt-0 md:w-1/2 md:text-start p-10">
            <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-start">
              {t("feature1_h2")}
            </h2>
            <p className="m-auto text-center text-gray-700 sm:w-[34ch] md:m-0 md:text-start">
              {t("feature1_p")}
            </p>
          </div>

          <div className="m-auto max-w-96 md:mt-36 md:w-1/2">
            <Image
              src={Frames}
              alt="Frame displaying logos of various payment solutions"
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Features;
