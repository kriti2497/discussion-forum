import PostList from "@/components/posts/post-list";
import React from "react";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

const Search = async ({ searchParams }: SearchPageProps) => {
  const { term } = searchParams;
  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
};

export default Search;
