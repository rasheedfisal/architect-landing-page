import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../custom/language-switcher";
import { ButtonLink } from "../custom/button-link";

function NavBar() {
  const t = useTranslations();

  return (
    <div className="sticky top-0 md:shadow-none z-20">
      <div className="animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between gap-3 items-center">
          <div className="size-16 flex-shrink-0">
            <Image
              src="/assets/logo.png"
              className="h-auto min-w-full"
              sizes="100vw"
              width={706}
              height={632}
              alt="logo"
            />
          </div>
          <div className="flex items-center gap-2 select-none">
            <LanguageSwitcher />
            <ButtonLink href="/#install" className="rounded-[12px]">
              {t("install_app")}
            </ButtonLink>
            {/* <Button
              variant={"outline"}
              className="hidden sm:block rounded-[12px]"
            >
              {t("start_free")}
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
