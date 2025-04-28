import NextLink, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, CSSProperties, ReactNode } from "react";

type CustomLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    className?: string;
    target?: string;
    children?: ReactNode;
    style?: CSSProperties;
    id?: string;
  };

export const Link = (props: CustomLinkProps) => {
  return <NextLink {...props} prefetch={props.prefetch ?? false} />;
};
