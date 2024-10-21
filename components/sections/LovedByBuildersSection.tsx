import React from "react";
import CustomStyledHeader from "../common/CustomStyledHeader";
import TweetCard from "../cards/TweetCard";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

function LovedByBuildersSection() {
  const t = useTranslations();
  const tweets = [
    {
      imageUrl: "/images/a_1.png",
      reviewerName: "Lubna Ali",
      reviewerTag: "@lubnaali",
      review:
        "لقد جربت العديد من المنصات لتوظيف المهندسين، لكن لا شيء يقارن بـ Hundsly. التصفية المتقدمة تجعل من السهل العثور على المهارات المناسبة لمشاريعي.",
      timestamp: "10:01 PM - Apr 7, 2022",
    },

    {
      imageUrl: "/images/a_2.png",
      reviewerName: "mohammed rabi3",
      reviewerTag: "@mohammedrabi3",
      review:
        "Hundsly offers everything I need for efficient project management. The escrow payment system ensures my payments are secure, giving me peace of mind.",
      timestamp: "6:57 PM - Dec 1, 2022",
    },

    {
      imageUrl: "/images/a_3.png",
      reviewerName: "somia khaled",
      reviewerTag: "@somiakhaled",
      review:
        "ما يميز Hundsly هو التزامهم بدعم العملاء. من اللحظة التي نشرت فيها مشروعي، تلقيت عروضًا من خبراء موثوقين.",
      timestamp: "1:32 PM - Jan 4, 2023",
    },

    {
      imageUrl: "/images/a_4.png",
      reviewerName: "Khrisna",
      reviewerTag: "@ntkris",
      review:
        "With Hundsly, I have full visibility into my project’s status. The real-time tracking feature allows me to monitor tasks and milestones effortlessly.",
      timestamp: "10:22 PM - Mar 3, 2023",
    },

    {
      imageUrl: "/images/a_5.png",
      reviewerName: "Liyla moamen",
      reviewerTag: "@liylamoamen",
      review:
        "Hundsly هو التطبيق المثالي الذي كنت أبحث عنه! يربطني بأفضل المهندسين ويوفر أدوات آمنة لإدارة المشاريع بكفاءة.",
      timestamp: "10:22 PM - Mar 3, 2023",
    },
    {
      imageUrl: "/images/a_6.png",
      reviewerName: "Walaa Faisal",
      reviewerTag: "@walaafaisal",
      review:
        "لقد أحدث Hundsly ثورة في كيفية توظيف المهندسين. النظام يضمن أن كل شخص نعمل معه يتمتع بأعلى مستوى من الاحترافية.",
      timestamp: "10:22 PM - Mar 3, 2023",
    },
  ];
  return (
    <section className="relative bg-[#232529] px-4 md:px-[94px] py-[116px]">
      <div>
        <CustomStyledHeader
          titleColored={t("loved_by_title1")}
          titleUnColored={t("loved_by_title2")}
          description={t("loved_by_desc")}
        />

        <Button className="border border-[#31373D] text-[#EDEEF0] rounded-[12px] bg-transparent mt-[32px]">
          {t("more_stories")}
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[64px]">
        {tweets.map((item, index) => (
          <TweetCard {...item} key={index} />
        ))}
      </div>

      <div className=" hidden lg:block absolute bottom-2 left-0 w-full">
        <img
          src="/images/fade_gradient.png"
          alt="gradient"
          className="w-full"
        />
      </div>
    </section>
  );
}

export default LovedByBuildersSection;
