import React from "react";
import Button from "./Button";
import Image from "next/image";
import InputField from "./InputField";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col flexCenter gap-12">
          <h2 className="bold-18 lg:bold-40 xl:max-w-[420px]">
            Sign up to get beta access invitation
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap">
            <InputField />
            <Button
              type="button"
              title="Sign up"
              icon="/android.svg"
              variant="btn_green"
              fullWidth
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
