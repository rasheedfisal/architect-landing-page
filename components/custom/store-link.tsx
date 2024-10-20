import Image, { StaticImageData } from "next/image";

interface ButtonLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  target?: string;
  logo: string | StaticImageData;
  upperText?: string;
  lowerText?: string;
}

function StoreLink({
  href,
  className,
  target,
  logo,
  upperText,
  lowerText,
}: ButtonLinkProps) {
  return (
    <a href={href} className={className} target={target}>
      <Image src={logo} alt={`${lowerText} logo`} className="w-5" />
      <div>
        <p className="text-xs">{upperText}</p>
        <p>{lowerText}</p>
      </div>
    </a>
  );
}

export default StoreLink;
