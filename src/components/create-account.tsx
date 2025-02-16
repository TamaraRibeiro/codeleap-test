import { Sun } from "@phosphor-icons/react";
import Button from "./button";

export default function CreateAccount() {
  return (
    <div className="bg-amethyst-50 rounded-lg w-full h-screen flex justify-center items-center relative">
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
      <div className="space-y-8 flex flex-col items-center">
        <img src="public/codeleap-logo.svg" alt="logo" width={100} />
        <div className="space-y-5 px-2 flex flex-col">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-950 font-semibold leading-5">
              Name:
            </label>
            <input
              type="text"
              name="username"
              className="bg-amethyst-100 rounded-sm shadow-md"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="username"
              className="text-950 font-semibold leading-5"
            >
              Username:
            </label>
            <input
              type="text"
              name="username"
              className="bg-amethyst-100 rounded-sm shadow-md"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="text-950 font-semibold leading-5"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              className="bg-amethyst-100 rounded-sm shadow-md"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="confirm-password"
              className="text-950 font-semibold leading-5"
            >
              Confirm password:
            </label>
            <input
              type="password"
              name="confirm-password"
              className="bg-amethyst-100 rounded-sm shadow-md"
            />
          </div>
          <Button text="sign up" />
        </div>

        <span className="text-sm font-semibold text-amethyst-600">
          Already have an account?{" "}
          <a
            href="/"
            className="underline hover:text-amethyst-900 duration-300"
          >
            LOG IN
          </a>
        </span>
      </div>
    </div>
  );
}
