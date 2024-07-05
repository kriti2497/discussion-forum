import React from "react";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

const Search = async ({ searchParams }: SearchPageProps) => {
  const { term } = searchParams;
  return <div>{term}</div>;
};

export default Search;
