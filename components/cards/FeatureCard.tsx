import { useTranslations } from "next-intl";
import React from "react";

interface IProps {
  iconUrl: string;
  title: string;
  description: string;
}

function FeatureCard({ iconUrl, title, description }: IProps) {
  const t = useTranslations();
  return (
    <div className="border border-[#4B4F58] relative m-2 px-6 flex flex-col items-center py-[44px] rounded-[24px]">
      <div>
        <img src={iconUrl} alt="feature image" />
      </div>
      <div className="mt-[18px]">
        <p className="font-medium text-[22px] text-white mb-1.5">{t(title)}</p>
        <p className="text-[#9098A0]">{t(description)}</p>
      </div>
      <div className="bg-transparent absolute top-0 left-0 right-0 bottom-0 border border-[#4B4F58] rounded-[24px] m-2"></div>
    </div>
  );
}

export default FeatureCard;
