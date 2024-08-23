"use client";

import { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DatePikcer } from "./DatePikcer";
import { SelectCatagory } from "./SelectCatagory";
import { SelectAuthor } from "./SelectAuthors";
import { SelectMultiSource } from "./SelectMultiSource";
import { FilterIcon } from "@/components/icons";

export const FilterModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
      }}
    >
      <DialogTrigger className="flex items-center justify-center  ">
        <div className="flex items-center gap-2 px-2 py-1 rounded  border border-slate-700/20 w-full max-w-md mx-auto md:mx-0 md:max-w-none ">
          <FilterIcon />
          <p> View</p>
        </div>
      </DialogTrigger>
      <DialogContent className="w-auto sm:w-[625px] ">
        <div className="bg-background rounded-md shadow-lg">
          <div className="p-4 flex flex-col">
            <SelectMultiSource />
            <DatePikcer />
            <SelectCatagory />
            <SelectAuthor />
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Apply
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
