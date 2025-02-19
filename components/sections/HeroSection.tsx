import React from "react";
import StoreLinks, { BtnTypes } from "../common/store-links";
import Phone from "../../public/assets/7.png";
import HeroImage from "../../public/assets/hero2.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

function HeroSection() {
  const t = useTranslations();
  return (
    <section className="relative mt-4 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 sm:gap-16 md:my-0 md:h-[84.9vh] md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
      <div className="sm:w-full md:w-1/2" id="install">
        <h1 className="mx-auto mb-8 w-[12ch] text-center text-4xl font-semibold text-gray-800 sm:text-5xl md:mx-0 md:text-start">
          {t("hero_h1")}
        </h1>
        <p className="m-auto w-[34ch] text-center text-gray-500 md:m-0 md:text-start">
          {t("hero_p")}
        </p>
        <StoreLinks type={BtnTypes.Standard} />
      </div>
      <div className="md:w-1/2 xl:mb-12 xl:overflow-hidden">
        <Image
          className="right-0 m-auto w-72 xl:absolute xl:left-6 xl:right-0 xl:mt-32 xl:w-80"
          src={Phone}
          alt="Architect app frame"
        />
        <Image
          className="hidden rounded-2xl xl:flex bg-green-200"
          src={HeroImage}
          alt="Avatar happily using architect"
        />
      </div>
    </section>
  );
}

export default HeroSection;
