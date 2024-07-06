import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import React, { Suspense } from "react";

import HeaderAuth from "./header-auth";
import Link from "next/link";
import SearchInput from "./search-input";

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
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
        <>
          <HeaderAuth />
        </>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
