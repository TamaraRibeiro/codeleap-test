import { Moon, Sun } from "@phosphor-icons/react";
import Button from "./components/button";

export default function App() {
  return (
    <>
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
            <div className="flex flex-col gap-1.5 itemc">
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
              <a
                href="#"
                className="text-sm font-semibold text-amethyst-600 underline hover:text-amethyst-900 duration-300 text-end mt-0.5"
              >
                Forgot your password?
              </a>
            </div>
            <Button text="login" />
          </div>

          <span className="text-sm font-semibold text-amethyst-600">
            Don't have an account?{" "}
            <a href="#" className="underline hover:text-amethyst-900 duration-300">
              SIGN UP
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
