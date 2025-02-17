import { Sun } from "@phosphor-icons/react";
import Button from "./button";
import CardPost from "./card-post";

export default function Home() {
  return (
    <div className="bg-amethyst-50 rounded-lg w-full h-screen relative px-2.5 pt-16 pb-5">
      {/* switch button */}
      <div className="absolute right-4 top-4">
        <div className="relative border border-amethyst-900 w-16 bg-amethyst-100 h-6 rounded-full flex items-center justify-end">
          {/* SWITCH SUN */}
          <div className="absolute -right-1.5 rounded-full p-2 bg-white size-8 shadow-md">
            <Sun className="text-amethyst-950" />
          </div>
          {/* SWITCH MOON */}
          {/* <div className="absolute -left-1.5 rounded-full p-2 bg-white size-8 shadow-md">
              <Moon className="text-amethyst-950" />
            </div> */}
        </div>
      </div>
      {/* switch button */}

      <div className="space-y-8">
        <Button text="create a post" />
        {/* map content here */}
        <CardPost />
      </div>
    </div>
  );
}
