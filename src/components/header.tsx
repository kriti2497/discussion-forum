import * as actions from "@/actions";

import {
  Avatar,
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

import Link from "next/link";
import React from "react";
import { auth } from "@/auth";

const Header = async () => {
  const session = await auth();
  let authContent: React.ReactNode;

  if (session?.user)
    authContent = (
      <>
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <Avatar src={session.user.image || ""} />
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <form action={actions.signOut}>
                <Button type="submit" color="secondary" variant="bordered">
                  Sign Out
                </Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      </>
    );
  else
    authContent = (
      <div className="flex gap-2">
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>

        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </div>
    );

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
        <>{authContent}</>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
