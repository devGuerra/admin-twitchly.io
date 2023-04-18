import Image from "next/image";
import { UserCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { Icon as IconType } from "@phosphor-icons/react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  icon?: IconType;
  type: "button" | "submit" | "reset";
}

export function Button({
  icon: Icon,
  className,
  children,
  type,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`px-3 py-3 border-0 rounded-md flex w-auto gap-2 items-center justify-center bg-red-600 hover:bg-red-700 transition-colors text-white text-xs  ${className}`}
      {...rest}
      type={type}
    >
      {Icon && <Icon size={24} />}
      {children}
    </button>
  );
}
