import Image from "next/image";
import { UserCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { Icon as IconType } from "@phosphor-icons/react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  icon?: IconType;
}

export function Input({ icon: Icon, className, ...rest }: InputProps) {
  return (
    <div className="px-4  border-2 rounded-md flex flex-1 gap-2 items-center">
      {Icon && <Icon size={24} />}
      <input
        className={`
        placeholder:text-sm placeholder:font-medium 
        text-sm font-semibold border-transparent py-4
        focus:border-transparent focus:ring-0 focus:outline-none 
        ${className}`}
        {...rest}
      />
    </div>
  );
}
