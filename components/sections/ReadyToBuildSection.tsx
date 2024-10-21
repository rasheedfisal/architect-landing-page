import React from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

function ReadyToBuildSection() {
  const t = useTranslations();
  return (
    <section className="flex flex-col md:flex-row justify-between gap-16 items-center !bg-[#266DF0]  px-4 md:px-[94px]">
      <div>
        <p
          className={
            "text-[40px] leading-tight md:leading-normal text-[#A0BFF8]"
          }
        >
          {t("ready_to_title1")}{" "}
          <span className="text-white whitespace-nowrap">
            {t("ready_to_title2")}
          </span>
        </p>
        <div className="flex gap-[12px] justify-start mt-[32px]">
          <Button className="border-none rounded-[12px] bg-[#538BF3]/40 hover:bg-[#538BF3]/40">
            {t("start_free")}
          </Button>

          <Button className="rounded-[12px] border-[1px] border-[#EDEEF0] bg-white hover:bg-white text-[#31373D]">
            {t("install_app")}
          </Button>
        </div>
      </div>
      <div>
        <img src="/images/ready_to_build.png" alt="security" />
      </div>
    </section>
  );
}

export default ReadyToBuildSection;
