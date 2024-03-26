import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="maxContainer flexBetween">
      <Link href="/">
        <Image src="/logo.png" alt="MatMomo Logo" width={170} height={200} />
      </Link>
      <Button type="button" title="Meld deg på" variant="btn_green" />
    </nav>
  );
};

export default Navbar;
