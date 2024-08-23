"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon, NewspaperIcon } from "../icons";
import { SearchModal } from ".";
import { FilterModal } from "@/app/components/home/FilterModal";

type navItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: navItem[] = [
  { label: "Home", href: "/" },
  { label: "World", href: "/section/world" },
  { label: "Business", href: "/section/business" },
  { label: "Politics", href: "/section/politics" },
  { label: "U.S.", href: "/section/us" },
  { label: "Sports", href: "/section/sports" },
  { label: "Health", href: "/section/health" },
  { label: "N.Y.", href: "/section/nyregion" },
  { label: "Opinion", href: "/section/opinion" },
  { label: "Tech", href: "/section/technology" },
  { label: "Science", href: "/section/science" },
  { label: "Arts", href: "/section/arts" },
  { label: "Style", href: "/section/style" },
  { label: "Food", href: "/section/food" },
  { label: "Travel", href: "/section/travel" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b border-border ">
      <div className=" flex h-16 items-center justify-between px-8 ">
        <nav className=" lg:flex items-center gap-4 justify-between w-full">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 flex-1"
              prefetch={false}
            >
              <NewspaperIcon />
              <span className="text-xs sm:text-lg  sm:font-bold ">
                News Fusion
              </span>
            </Link>
          </div>
          <div className="hidden lg:flex gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <div>
              <SearchModal />
            </div>
            <div>
              <FilterModal />
            </div>
          </div>
        </nav>

        <div className=" flex items-center  gap-3 xl:hidden">
          <div>
            <SearchModal />
          </div>
          <div>
            <FilterModal />
          </div>

          {/* Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded"
                onClick={() => setIsOpen(!isOpen)}
              >
                <MenuIcon />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background p-6">
              {/* Mobile Navigation */}
              <nav className="grid gap-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                    prefetch={false}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
