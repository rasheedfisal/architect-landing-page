import React from "react";
import FeatureCard from "../cards/FeatureCard";
import CustomStyledHeader from "../common/CustomStyledHeader";
import { useTranslations } from "next-intl";

function MoreFeaturesSection() {
  const t = useTranslations();
  const features = [
    {
      iconUrl: "/images/f_1.png",
      title: "why_choose1_title",
      description: "why_choose1_desc",
    },
    {
      iconUrl: "/images/f_2.png",
      title: "why_choose2_title",
      description: "why_choose2_desc",
    },
    {
      iconUrl: "/images/f_3.png",
      title: "why_choose3_title",
      description: "why_choose3_desc",
    },
    {
      iconUrl: "/images/f_4.png",
      title: "why_choose4_title",
      description: "why_choose4_desc",
    },
    {
      iconUrl: "/images/f_5.png",
      title: "why_choose5_title",
      description: "why_choose5_desc",
    },
    {
      iconUrl: "/images/f_6.png",
      title: "why_choose6_title",
      description: "why_choose6_desc",
    },
  ];
  return (
    <section className="bg-[#232529] px-4 md:px-[94px] py-[116px]">
      <div>
        <CustomStyledHeader
          titleColored={t("why_choose_header1")}
          titleUnColored={t("why_choose_header2")}
          description={t("why_choose_desc")}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[64px]">
        {features.map((item, index) => (
          <FeatureCard {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default MoreFeaturesSection;
