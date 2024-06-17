import * as actions from "@/actions";

import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";

import React from "react";

const TopicCreateForm = () => {
  return (
    <div>
      <Popover placement="left">
        <PopoverTrigger>
          <Button color="primary">Create Topic</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form
            action={actions.createTopic}
            className="flex flex-col gap-4 py-2"
          >
            <h1 className="text-xl">Create a Topic</h1>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Description"
            />
            <Button type="submit">Create</Button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TopicCreateForm;
