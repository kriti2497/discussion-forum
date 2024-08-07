"use client";

import * as actions from "@/actions";

import { Input } from "@nextui-org/react";
import React from "react";
import { useSearchParams } from "next/navigation";

const SearchInput = () => {
  const searchParams = useSearchParams();

  return (
    <form action={actions.search}>
      <Input name="term" defaultValue={searchParams.get("term") || ""} />
    </form>
  );
};

export default SearchInput;
