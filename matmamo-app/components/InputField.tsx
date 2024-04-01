import Image from "next/image";
import React from "react";

const InputField = () => {
  return (
    <div className="w-full flex flex-row rounded-xl border-green-50 border-2 py-3 px-2">
      <Image src="/search.svg" alt="Search Icon" width={30} height={30} />
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full ml-2 border-gray-300 bg-transparent"
      />
    </div>
  );
};

export default InputField;
