import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";
type props = {
  text: string;
  href: string;
};

const sstyle: CSSProperties = {
    color: "#0070f3",
    textDecoration: "underline",
  };

interface Props {
  text: string;
  href:string;
}


export const ActiveLink: FC<Props> = ({text, href}) => {

    const {asPath} = useRouter();
  
  return (
    <Link style={ asPath === href ? sstyle : undefined} href={href}>
      {text}
    </Link>
  );
};
