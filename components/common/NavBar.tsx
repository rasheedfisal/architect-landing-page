import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../custom/language-switcher";
import { Button } from "../ui/button";

function NavBar() {
  const t = useTranslations();

  return (
    <div className="sticky top-0 md:shadow-none z-20">
      <div className="lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between mx-4 items-center">
          <div>
            <Image
              src="/assets/logo.png"
              className="size-16"
              width={706}
              height={632}
              alt="logo"
            />
          </div>
          {/* <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none"></div> */}
          <div className="flex items-center gap-[20px] select-none">
            <LanguageSwitcher />
            <Button className="rounded-[12px]">{t("install_app")}</Button>
            <Button variant={"outline"} className="rounded-[12px]">
              {t("start_free")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
