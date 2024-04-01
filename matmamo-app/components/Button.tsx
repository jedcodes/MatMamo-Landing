import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  variant: string;
  icon?: string;
  fullWidth?: boolean;
};

const Button = ({ type, title, variant, icon, fullWidth }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        fullWidth && "w-full"
      }`}
    >
      {icon && <Image src={icon} alt="icon" width={24} height={24} />}
      <label htmlFor="" className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
