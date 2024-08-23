import { Input } from "@/components/ui/input";
import { SearchIcon } from "../icons";

export default function Component() {
  return (
    <div className="flex items-center w-full max-w-md mx-auto md:mx-0 md:max-w-none">
      <div className="relative flex-1">
        <SearchIcon />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-md bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary md:w-auto md:min-w-[200px]"
        />
      </div>
    </div>
  );
}
