"use client";

import * as actions from "@/actions";

import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";

import FormButton from "../common/form-button";
import React from "react";
import { useFormState } from "react-dom";

const PostCreateForm = ({ slug }: { slug: string }) => {
  const [formState, action] = useFormState(
    actions.createPost.bind(null, slug),
    { errors: {} }
  );
  return (
    <div className="flex justify-center">
      <Popover placement="left">
        <PopoverTrigger>
          <Button color="primary">Create Post</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={action} className="flex flex-col gap-4 py-2">
            <h1 className="text-xl">Create a Post</h1>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join("")}
            />
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join("")}
            />
            {formState.errors._form ? (
              <div className="rounded border border-red-200 bg-red-200">
                {formState.errors._form.join(", ")}
              </div>
            ) : null}
            <FormButton>Create Post</FormButton>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PostCreateForm;
