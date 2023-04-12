import Image from "next/image";
import { UserCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { Icon as IconType } from "@phosphor-icons/react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  icon?: IconType;
}

export function Button({
  icon: Icon,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-4 border-0 rounded-md flex flex-1 gap-2 items-center justify-center bg-red-600	 ${className}`}
      {...rest}
    >
      {Icon && <Icon size={24} />}
      <p className="text-md text-white font-medium">{children}</p>
    </button>
  );
}
