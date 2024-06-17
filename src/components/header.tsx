import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import HeaderAuth from "./header-auth";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Navbar className=" shadow mb-6">
      <NavbarBrand>
        <Link href={"/"} className="font-bold">
          Discuss Forum
        </Link>
      </NavbarBrand>
      <NavbarContent style={{ justifyContent: "flex-end" }}>
        <NavbarItem>
          <Input />
        </NavbarItem>
        <>
          <HeaderAuth />
        </>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
