import AppleLogo from "../../public/assets/logos/app_store.svg";
import GooglePlay from "../../public/assets/logos/google_play.svg";
import GooglePlayBright from "../../public/assets/logos/google_play_bright.svg";
import StoreLink from "../custom/store-link";

interface StoreLinksProps {
  type: BtnTypes;
}

export enum BtnTypes {
  Standard,
  Variant,
}

function StoreLinks({ type }: StoreLinksProps) {
  if (type === BtnTypes.Standard) {
    return (
      <div className="mt-10 hidden justify-center gap-2 sm:flex md:justify-normal">
        <StoreLink
          href="https://apps.apple.com/us/app/architect/id6581491473"
          upperText="Download on the"
          lowerText="App Store"
          logo={AppleLogo}
          target="_blank"
          className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
        />
        <StoreLink
          href="https://play.google.com"
          //href="https://play.google.com/store/apps/details?id=com.aqaratexpoo.app"
          upperText="Get it on"
          lowerText="Google Play"
          logo={GooglePlay}
          target="_blank"
          className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
        />
      </div>
    );
  }
  if (type === BtnTypes.Variant) {
    return (
      <>
        <StoreLink
          href="https://apps.apple.com/us/app/architect/id6581491473"
          upperText="Download on the"
          lowerText="App Store"
          logo={AppleLogo}
          target="_blank"
          className="my-4 flex gap-3 rounded-lg border bg-transparent px-2 py-1 text-white hover:bg-zinc-950 active:bg-zinc-800"
        />
        <StoreLink
          href="https://play.google.com"
          upperText="Get it on"
          lowerText="Google Play"
          logo={GooglePlayBright}
          target="_blank"
          className="my-4 flex gap-3 rounded-lg border bg-transparent px-2 py-1 text-white hover:bg-zinc-950 active:bg-zinc-800"
        />
      </>
    );
  }
}

export default StoreLinks;
