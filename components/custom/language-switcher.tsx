"use client";
import { useLocale } from "next-intl";
import { availableLocales } from "@/next.locales.mjs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      const localeItem = availableLocales.find((x) => x.code === nextLocale);
      if (!!localeItem) {
        document.body.dir = localeItem.langDir;
      }
      const pagePath = pathname.split("/").slice(2).join("/");
      router.replace(`/${nextLocale}/${pagePath}`);
    });
  }

  return (
    <Select
      defaultValue={locale}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger className="w-[70px] bg-white h-10 rounded-[12px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent
        className={
          isPending ? "transition-opacity [&:disabled]:opacity-30" : ""
        }
      >
        <SelectGroup>
          {availableLocales.map((x) => (
            <SelectItem key={x.code} value={x.code}>
              {x.code.toUpperCase()}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
