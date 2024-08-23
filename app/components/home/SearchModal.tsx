"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchArticles } from "@/hooks/useSearchArticles";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SearchItem } from "./SearchItem";
import { SearchIcon } from "@/components/icons";
import { usePreferences } from "@/app/context/NewsPreferencesContext";

const truncateTitle = (title: string, wordLimit: number = 10) => {
  return title;
};

export const SearchModal = () => {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);
  const { debouncedValue } = useDebounce(searchValue, 500);

  const { sources } = usePreferences();

  const articles = useSearchArticles(debouncedValue, sources);

  const handleModal = (isOpen: boolean) => {
    setSearchValue("");
    setOpen(isOpen);
  };
  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        handleModal(isOpen);
      }}
    >
      <DialogTrigger className="flex items-center justify-center ">
        <div
          onClick={() => setOpen(true)}
          className="rounded border border-slate-700/20 p-2.5 box-border"
        >
          <div className="relative ">
            <SearchIcon />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[350px] sm:w-[625px]">
        <div className="bg-background rounded-md shadow-lg">
          <div className="p-4 border-b">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon />
              </div>
              <Input
                type="search"
                placeholder="Search..."
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full rounded-md bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <>
            {articles?.length ? (
              <div className="p-4 h-[500px] overflow-auto">
                <div className="space-y-2">
                  <SearchItem
                    article={articles}
                    handleCloseModal={() => handleModal(false)}
                  />
                </div>
              </div>
            ) : debouncedValue ? (
              <div className="py-8">
                <p className="text-center text-muted-foreground text-lg">
                  No results found for "{truncateTitle(debouncedValue, 1)}"
                </p>
              </div>
            ) : null}
          </>
        </div>
      </DialogContent>
    </Dialog>
  );
};
