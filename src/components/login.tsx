import { useNavigate } from "react-router";
import Button from "./button";

export default function Login({
  handleOpenModal,
}: {
  handleOpenModal: () => void;
}) {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/home");
  }

  return (
    <>
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
          <button
            onClick={handleOpenModal}
            className="text-sm font-semibold text-amethyst-600 underline hover:text-amethyst-900 duration-300 text-end mt-0.5 cursor-pointer"
          >
            Forgot your password?
          </button>
        </div>
        <Button text="login" action={handleLogin} />
      </div>

      <span className="text-sm font-semibold text-amethyst-600">
        Don't have an account?{" "}
        <a
          href="create-account"
          className="underline hover:text-amethyst-900 duration-300"
        >
          SIGN UP
        </a>
      </span>
    </>
  );
}
