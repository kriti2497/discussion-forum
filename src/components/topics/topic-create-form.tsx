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

const TopicCreateForm = () => {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });
  return (
    <div className="flex justify-center">
      <Popover placement="left">
        <PopoverTrigger>
          <Button color="primary">Create Topic</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={action} className="flex flex-col gap-4 py-2">
            <h1 className="text-xl">Create a Topic</h1>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name} // !! used to convert value to boolean
              errorMessage={formState.errors.name?.join(", ")} // join array of errors
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Description"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
            />
            {formState.errors._form ? (
              <div className="rounded border border-red-200 bg-red-200">
                {formState.errors._form.join(", ")}
              </div>
            ) : null}
            {/* <Button type="submit">Create</Button>
             */}
            <FormButton>Save</FormButton>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TopicCreateForm;
