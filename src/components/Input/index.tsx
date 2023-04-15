import { Icon as IconType } from "@phosphor-icons/react";
import React from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  icon?: IconType;
}

export const Input = ({ icon: Icon, className, ...rest }: InputProps) => {
  return (
    <div className="px-4 border rounded-md flex flex-1 gap-2 items-center">
      {Icon && <Icon size={24} />}
      <input
        className={`placeholder:text-sm placeholder:font-medium text-sm font-semibold border-transparent py-3 focus:border-transparent focus:ring-0 focus:outline-none w-full
        ${className}`}
        {...rest}
      />
    </div>
  );
}