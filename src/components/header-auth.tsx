"use client";

import * as actions from "@/actions";

import {
  Avatar,
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

import React from "react";
import { useSession } from "next-auth/react";

const HeaderAuth = () => {
  const session = useSession();
  let authContent: React.ReactNode;

  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user)
    authContent = (
      <>
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <Avatar src={session.data?.user.image || ""} />
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

  return authContent;
};

export default HeaderAuth;
